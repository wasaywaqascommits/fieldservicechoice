/**
 * Types for the Software Finder, the Fit Score engine and the lead flow.
 */
import type {
  BusinessModel,
  CompanySizeBand,
  FeatureKey,
  IndustrySlug,
} from './index';

export type AccountingSystem =
  | 'quickbooks_online'
  | 'quickbooks_desktop'
  | 'xero'
  | 'sage'
  | 'other'
  | 'none'
  | 'not_important';

export type BudgetBand =
  | 'under_100'
  | '100_250'
  | '250_500'
  | '500_1000'
  | '1000_2500'
  | '2500_plus'
  | 'not_sure';

export type PurchaseTimeline =
  | 'immediately'
  | 'this_quarter'
  | 'this_year'
  | 'exploring';

/**
 * The answers a buyer provides in the Finder. Later/optional questions are
 * marked optional (progressive disclosure, spec §8).
 */
export interface FinderAnswers {
  industry: IndustrySlug;
  technicians: CompanySizeBand;
  businessModel: BusinessModel;
  requiredFeatures: FeatureKey[];
  accounting: AccountingSystem;
  budget: BudgetBand;

  // Optional refinements
  currentSoftware?: string;
  officeEmployees?: number;
  timeline?: PurchaseTimeline;
  needsMultiLocation?: boolean;
  needsInventory?: boolean;
  needsOfflineMobile?: boolean;
  needsApi?: boolean;
}

/** A single weighted dimension of the Fit Score (spec §9). */
export interface ScoreDimension {
  key: string;
  label: string;
  weight: number; // 0..1, sums to 1 across dimensions
  rawScore: number; // 0..100 for this dimension
  weightedScore: number; // rawScore * weight
}

export type MatchSentiment = 'positive' | 'neutral' | 'concern';

export interface MatchReason {
  sentiment: MatchSentiment;
  text: string;
}

export interface ExclusionFlag {
  /** Hard exclusion removes the product; warning keeps it but flags it. */
  kind: 'exclude' | 'warn';
  reason: string;
}

export interface FitScoreResult {
  productSlug: string;
  /** 0..100, rounded. */
  score: number;
  excluded: boolean;
  dimensions: ScoreDimension[];
  reasons: MatchReason[];
  flags: ExclusionFlag[];
}

/* -------------------------------------------------------------------------- */
/* Leads (spec §14)                                                           */
/* -------------------------------------------------------------------------- */

export type LeadStatus =
  | 'new'
  | 'validated'
  | 'sent'
  | 'accepted'
  | 'rejected'
  | 'contacted'
  | 'demo_scheduled'
  | 'demo_attended'
  | 'opportunity'
  | 'closed_won'
  | 'closed_lost';

export interface AttributionContext {
  landingPage?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  sessionId?: string;
}

export interface VendorConsent {
  productSlug: string;
  consented: boolean;
  wordingShown: string;
  timestamp: string;
}

export interface LeadSubmission {
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  website?: string;
  state?: string;
  country?: string;

  answers: FinderAnswers;
  matchedProducts: { slug: string; score: number }[];
  selectedVendors: string[];
  consents: VendorConsent[];

  attribution?: AttributionContext;
  sourcePage?: string;
}
