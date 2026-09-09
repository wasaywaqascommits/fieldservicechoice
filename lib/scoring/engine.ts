import type {
  CompanySizeBand,
  FeatureKey,
  FeatureSupport,
  Product,
} from '@/types';
import type {
  BudgetBand,
  ExclusionFlag,
  FinderAnswers,
  FitScoreResult,
  MatchReason,
  ScoreDimension,
} from '@/types/finder';
import { featureLabel } from '@/data/features';
import { INDUSTRY_LABELS } from '@/data/industries';
import { COMPANY_SIZE_SHORT } from '@/lib/labels';
import {
  DEFAULT_WEIGHTS,
  DIMENSION_LABELS,
  FitWeights,
  assertValidWeights,
} from './weights';

/**
 * FieldServiceChoice Fit Score engine (spec §9, §10).
 *
 * ────────────────────────────────────────────────────────────────────────────
 * DATA INTEGRITY INVARIANT (spec §6, §9, §79):
 *   This engine reads ONLY the buyer's answers and a product's editorial/feature
 *   data. It intentionally never touches `product.commercial` (affiliate type,
 *   payout, partnership). Commercial relationships MUST NOT influence Fit Score.
 *   `tests/scoring.test.ts` proves this by mutating `commercial` and asserting
 *   the score is unchanged.
 * ────────────────────────────────────────────────────────────────────────────
 *
 * Scoring is transparent and rules-based (no AI needed for V1). Each dimension
 * returns a 0..100 raw score; the weighted sum is the Fit Score.
 */

const SIZE_ORDER: CompanySizeBand[] = ['solo', '2-5', '6-10', '11-25', '26-50', '51-100', '100+'];

type CostTier = 'low' | 'mid' | 'high' | 'enterprise';
const TIER_VALUE: Record<CostTier, number> = { low: 1, mid: 2, high: 3, enterprise: 4 };
const BUDGET_CAPACITY: Record<BudgetBand, number> = {
  under_100: 1,
  '100_250': 1.6,
  '250_500': 2.4,
  '500_1000': 3,
  '1000_2500': 3.7,
  '2500_plus': 4,
  not_sure: 2.5,
};

/**
 * Derive a qualitative cost tier from product attributes. We deliberately do
 * NOT store fabricated prices; this is an editorial affordability band inferred
 * from pricing model, implementation depth and target size (spec §5).
 */
export function estimateCostTier(product: Product): CostTier {
  const targetsEnterprise = product.companySizes.includes('100+');
  if (product.pricing.model === 'quote') {
    return targetsEnterprise ? 'enterprise' : 'high';
  }
  if (product.implementation === 'moderate') return 'mid';
  if (product.implementation === 'high') return 'high';
  return 'low';
}

function supportScore(support: FeatureSupport | undefined): number {
  switch (support) {
    case 'available':
      return 1;
    case 'partial':
    case 'plan_dependent':
    case 'add_on':
      return 0.6;
    case 'not_available':
      return 0;
    case 'unknown':
    case undefined:
    default:
      // Missing data: partial credit so unknowns don't unfairly sink a product,
      // but they can't score as well as a confirmed capability (spec §79).
      return 0.35;
  }
}

function clamp(n: number): number {
  return Math.max(0, Math.min(100, n));
}

/* -------------------------------------------------------------------------- */
/* Dimension scorers                                                          */
/* -------------------------------------------------------------------------- */

function scoreTradeWorkflow(a: FinderAnswers, p: Product): number {
  if (a.industry === 'other') return 70;
  if (p.industries.includes(a.industry)) return 100;
  // Commercial buyers are reasonably served by commercial-capable products.
  if (a.industry === 'commercial' && p.businessModels.includes('commercial')) return 75;
  return 45;
}

function scoreFeatureCoverage(a: FinderAnswers, p: Product): number {
  if (a.requiredFeatures.length === 0) return 75; // nothing to differentiate on
  const total = a.requiredFeatures.reduce((sum, f) => sum + supportScore(p.features[f]), 0);
  return clamp((total / a.requiredFeatures.length) * 100);
}

function scoreCompanySize(a: FinderAnswers, p: Product): number {
  if (p.companySizes.includes(a.technicians)) return 100;
  const target = SIZE_ORDER.indexOf(a.technicians);
  // Distance to the nearest band the product supports.
  const distances = p.companySizes.map((s) => Math.abs(SIZE_ORDER.indexOf(s) - target));
  const nearest = Math.min(...distances);
  if (nearest === 1) return 70;
  if (nearest === 2) return 45;
  return 20;
}

function scoreBudget(a: FinderAnswers, p: Product): number {
  if (a.budget === 'not_sure') return 70;
  const tier = TIER_VALUE[estimateCostTier(p)];
  const capacity = BUDGET_CAPACITY[a.budget];
  if (tier <= capacity) return 100;
  return clamp(100 - (tier - capacity) * 45);
}

function accountingFeatureKey(a: FinderAnswers): FeatureKey | null {
  switch (a.accounting) {
    case 'quickbooks_online':
      return 'quickbooks_online';
    case 'quickbooks_desktop':
      return 'quickbooks_desktop';
    case 'xero':
      return 'xero';
    default:
      return null;
  }
}

function scoreIntegration(a: FinderAnswers, p: Product): number {
  if (a.accounting === 'none' || a.accounting === 'not_important') return 80;
  const key = accountingFeatureKey(a);
  if (!key) return 70; // sage/other — limited data, stay neutral
  const support = p.features[key];
  switch (support) {
    case 'available':
      return 100;
    case 'partial':
    case 'plan_dependent':
      return 65;
    case 'add_on':
      return 60;
    case 'not_available':
      return 0;
    default:
      return 40; // unknown
  }
}

function scoreImplementation(a: FinderAnswers, p: Product): number {
  const small: CompanySizeBand[] = ['solo', '2-5', '6-10'];
  const mid: CompanySizeBand[] = ['11-25', '26-50'];
  const band = small.includes(a.technicians) ? 'small' : mid.includes(a.technicians) ? 'mid' : 'large';
  const table: Record<'small' | 'mid' | 'large', Record<Product['implementation'], number>> = {
    small: { low: 100, moderate: 70, high: 35 },
    mid: { low: 85, moderate: 100, high: 75 },
    large: { low: 70, moderate: 90, high: 100 },
  };
  return table[band][p.implementation];
}

function scoreBusinessModel(a: FinderAnswers, p: Product): number {
  if (p.businessModels.includes(a.businessModel)) return 100;
  if (p.businessModels.includes('both') || p.businessModels.includes('combination')) return 75;
  return 45;
}

function scoreContractSupport(p: Product): number {
  let base = p.pricing.model === 'quote' || p.pricing.model === 'custom' ? 60 : 85;
  if (p.pricing.freeTrial === true) base += 10;
  return clamp(base);
}

function scoreMobileOffline(a: FinderAnswers, p: Product): number {
  if (a.needsOfflineMobile) {
    return clamp(supportScore(p.features.offline_mode) * 100);
  }
  return clamp(supportScore(p.features.mobile_app) * 100);
}

/* -------------------------------------------------------------------------- */
/* Hard exclusions & warnings (spec §10)                                      */
/* -------------------------------------------------------------------------- */

function computeFlags(a: FinderAnswers, p: Product): ExclusionFlag[] {
  const flags: ExclusionFlag[] = [];

  // Explicit "required capability not available" => hard exclude.
  for (const f of a.requiredFeatures) {
    if (p.features[f] === 'not_available') {
      flags.push({ kind: 'exclude', reason: `Required capability "${featureLabel(f)}" is not available.` });
    }
  }
  if (a.needsMultiLocation && p.features.multi_location === 'not_available') {
    flags.push({ kind: 'exclude', reason: 'You need multi-location support, which this product does not offer.' });
  }
  if (a.needsApi && p.features.api === 'not_available') {
    flags.push({ kind: 'exclude', reason: 'You need API access, which this product does not offer.' });
  }
  if (a.needsInventory && p.features.inventory === 'not_available') {
    flags.push({ kind: 'exclude', reason: 'You need inventory management, which this product does not offer.' });
  }

  // Warnings (keep the product, but flag it).
  const acctKey = accountingFeatureKey(a);
  if (acctKey && p.features[acctKey] === 'not_available') {
    flags.push({ kind: 'warn', reason: `May not integrate with your accounting system.` });
  }
  if (a.needsOfflineMobile && p.features.offline_mode === 'not_available') {
    flags.push({ kind: 'warn', reason: 'Offline mobile use may be limited.' });
  }
  if (a.budget !== 'not_sure') {
    const tier = TIER_VALUE[estimateCostTier(p)];
    const capacity = BUDGET_CAPACITY[a.budget];
    if (tier >= capacity + 1.5) {
      flags.push({ kind: 'warn', reason: 'Likely outside your stated budget.' });
    }
  }
  return flags;
}

/* -------------------------------------------------------------------------- */
/* Reasons (spec §10, §11)                                                    */
/* -------------------------------------------------------------------------- */

function buildReasons(a: FinderAnswers, p: Product, dims: ScoreDimension[]): MatchReason[] {
  const byKey = Object.fromEntries(dims.map((d) => [d.key, d.rawScore])) as Record<string, number>;
  const reasons: MatchReason[] = [];

  if (byKey.trade_workflow >= 90) {
    reasons.push({ sentiment: 'positive', text: `Strong fit for ${INDUSTRY_LABELS[a.industry]} businesses.` });
  }
  if (byKey.company_size >= 90) {
    reasons.push({ sentiment: 'positive', text: `Well suited to ${COMPANY_SIZE_SHORT[a.technicians]}-technician operations.` });
  } else if (byKey.company_size <= 45) {
    reasons.push({ sentiment: 'concern', text: `Typically aimed at a different team size than yours.` });
  }

  const matched = a.requiredFeatures.filter((f) => {
    const s = p.features[f];
    return s === 'available' || s === 'partial' || s === 'plan_dependent' || s === 'add_on';
  });
  const missing = a.requiredFeatures.filter((f) => p.features[f] === 'not_available' || p.features[f] === undefined || p.features[f] === 'unknown');
  if (matched.length > 0) {
    reasons.push({ sentiment: 'positive', text: `Covers ${matched.slice(0, 4).map(featureLabel).join(', ')}${matched.length > 4 ? ' and more' : ''}.` });
  }
  if (missing.length > 0) {
    reasons.push({ sentiment: 'concern', text: `Not confirmed for ${missing.slice(0, 3).map(featureLabel).join(', ')}.` });
  }

  if (a.accounting !== 'none' && a.accounting !== 'not_important') {
    if (byKey.integration >= 90) reasons.push({ sentiment: 'positive', text: `Integrates with your accounting system.` });
    else if (byKey.integration <= 40) reasons.push({ sentiment: 'concern', text: `Accounting integration needs verification.` });
  }

  if (a.budget !== 'not_sure') {
    if (byKey.budget >= 90) reasons.push({ sentiment: 'positive', text: `Fits your stated budget.` });
    else if (byKey.budget <= 55) reasons.push({ sentiment: 'concern', text: `May cost more than your stated budget.` });
  }

  if (byKey.implementation <= 40) {
    reasons.push({ sentiment: 'concern', text: `Implementation is more involved than a small team may want.` });
  } else if (byKey.implementation >= 95) {
    reasons.push({ sentiment: 'positive', text: `Implementation complexity matches your size.` });
  }

  return reasons;
}

/* -------------------------------------------------------------------------- */
/* Public API                                                                 */
/* -------------------------------------------------------------------------- */

export function scoreProduct(
  answers: FinderAnswers,
  product: Product,
  weights: FitWeights = DEFAULT_WEIGHTS,
): FitScoreResult {
  assertValidWeights(weights);

  const raw: Record<keyof FitWeights, number> = {
    trade_workflow: scoreTradeWorkflow(answers, product),
    feature_coverage: scoreFeatureCoverage(answers, product),
    company_size: scoreCompanySize(answers, product),
    budget: scoreBudget(answers, product),
    integration: scoreIntegration(answers, product),
    implementation: scoreImplementation(answers, product),
    business_model: scoreBusinessModel(answers, product),
    contract_support: scoreContractSupport(product),
    mobile_offline: scoreMobileOffline(answers, product),
  };

  const dimensions: ScoreDimension[] = (Object.keys(weights) as (keyof FitWeights)[]).map((key) => {
    const weight = weights[key];
    const rawScore = clamp(raw[key]);
    return {
      key,
      label: DIMENSION_LABELS[key],
      weight,
      rawScore,
      weightedScore: rawScore * weight,
    };
  });

  const flags = computeFlags(answers, product);
  const excluded = flags.some((f) => f.kind === 'exclude');
  const total = dimensions.reduce((sum, d) => sum + d.weightedScore, 0);
  const reasons = buildReasons(answers, product, dimensions);

  return {
    productSlug: product.slug,
    score: excluded ? 0 : Math.round(total),
    excluded,
    dimensions,
    reasons,
    flags,
  };
}

export interface RankOptions {
  weights?: FitWeights;
  /** Max non-excluded results to return (spec §11: ~3–5). */
  limit?: number;
  /** Include excluded products in the returned list (flagged). Default false. */
  includeExcluded?: boolean;
}

/**
 * Score and rank a set of products for a buyer.
 * Ties are broken deterministically by slug so results are stable (spec §79).
 */
export function rankProducts(
  answers: FinderAnswers,
  products: Product[],
  options: RankOptions = {},
): FitScoreResult[] {
  const { weights = DEFAULT_WEIGHTS, limit = 5, includeExcluded = false } = options;
  const scored = products.map((p) => scoreProduct(answers, p, weights));

  const eligible = scored
    .filter((r) => !r.excluded)
    .sort((a, b) => (b.score - a.score) || a.productSlug.localeCompare(b.productSlug))
    .slice(0, limit);

  if (!includeExcluded) return eligible;

  const excluded = scored
    .filter((r) => r.excluded)
    .sort((a, b) => a.productSlug.localeCompare(b.productSlug));
  return [...eligible, ...excluded];
}
