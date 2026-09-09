/**
 * Fit Score weights (spec §9).
 *
 * These live in a standalone, serializable record so they can be stored in and
 * edited from the admin (`fit_weights` table) without code changes. The engine
 * reads whatever weights it is given; these are the launch defaults.
 *
 * Weights MUST sum to 1. `assertValidWeights` enforces that.
 */
export interface FitWeights {
  trade_workflow: number;
  feature_coverage: number;
  company_size: number;
  budget: number;
  integration: number;
  implementation: number;
  business_model: number;
  contract_support: number;
  mobile_offline: number;
}

export const DEFAULT_WEIGHTS: FitWeights = {
  trade_workflow: 0.2,
  feature_coverage: 0.2,
  company_size: 0.15,
  budget: 0.15,
  integration: 0.1,
  implementation: 0.08,
  business_model: 0.05,
  contract_support: 0.04,
  mobile_offline: 0.03,
};

export const DIMENSION_LABELS: Record<keyof FitWeights, string> = {
  trade_workflow: 'Trade & workflow suitability',
  feature_coverage: 'Must-have feature coverage',
  company_size: 'Company / team-size fit',
  budget: 'Budget & estimated cost fit',
  integration: 'Integration & accounting fit',
  implementation: 'Implementation & admin complexity',
  business_model: 'Residential / commercial fit',
  contract_support: 'Contract & support flexibility',
  mobile_offline: 'Mobile / offline requirements',
};

export function assertValidWeights(w: FitWeights): void {
  const sum = Object.values(w).reduce((a, b) => a + b, 0);
  if (Math.abs(sum - 1) > 1e-6) {
    throw new Error(`Fit weights must sum to 1 (got ${sum.toFixed(4)})`);
  }
}
