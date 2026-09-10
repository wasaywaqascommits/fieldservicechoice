/**
 * FieldServiceChoice domain model.
 *
 * These types are the single source of truth shared by the local seed data
 * (/data), the data-access layer (/lib/database), the scoring engine
 * (/lib/scoring) and every page. They intentionally mirror the Supabase schema
 * in /supabase/migrations so the two never drift.
 */

/* -------------------------------------------------------------------------- */
/* Verification & data integrity (spec §5)                                    */
/* -------------------------------------------------------------------------- */

/**
 * How much we trust a given fact. We NEVER present unverified values as
 * verified. `not_disclosed` means the vendor does not publish it.
 */
export type VerificationStatus =
  | 'verified'
  | 'vendor_confirmed'
  | 'needs_verification'
  | 'not_disclosed';

/** ISO date string (YYYY-MM-DD) or null when never verified. */
export type IsoDate = string | null;

export interface VerificationDates {
  pricingVerifiedAt: IsoDate;
  featuresVerifiedAt: IsoDate;
  integrationsVerifiedAt: IsoDate;
  contractTermsVerifiedAt: IsoDate;
  editorialReviewedAt: IsoDate;
}

export type SourceType =
  | 'official_pricing'
  | 'official_documentation'
  | 'official_integrations'
  | 'vendor_confirmation'
  | 'hands_on_testing'
  | 'independent_research';

export interface Source {
  title: string;
  url: string;
  type: SourceType;
  accessedAt: IsoDate;
  verificationStatus: VerificationStatus;
  notes?: string;
}

/* -------------------------------------------------------------------------- */
/* Segmentation                                                               */
/* -------------------------------------------------------------------------- */

export type IndustrySlug =
  | 'hvac'
  | 'plumbing'
  | 'electrical'
  | 'roofing'
  | 'landscaping'
  | 'pest-control'
  | 'cleaning'
  | 'pool-service'
  | 'commercial'
  | 'other';

export type CompanySizeBand =
  | 'solo'
  | '2-5'
  | '6-10'
  | '11-25'
  | '26-50'
  | '51-100'
  | '100+';

export type BusinessModel =
  | 'residential'
  | 'commercial'
  | 'both'
  | 'route'
  | 'project'
  | 'combination';

/* -------------------------------------------------------------------------- */
/* Feature taxonomy (spec §37)                                                */
/* -------------------------------------------------------------------------- */

export type FeatureKey =
  | 'scheduling'
  | 'dispatching'
  | 'crm'
  | 'estimates'
  | 'invoicing'
  | 'payments'
  | 'online_booking'
  | 'customer_notifications'
  | 'service_agreements'
  | 'recurring_jobs'
  | 'pricebook'
  | 'inventory'
  | 'gps_tracking'
  | 'route_optimization'
  | 'job_costing'
  | 'financing'
  | 'call_tracking'
  | 'marketing_automation'
  | 'reporting'
  | 'multi_location'
  | 'mobile_app'
  | 'offline_mode'
  | 'customer_portal'
  | 'api'
  | 'quickbooks_online'
  | 'quickbooks_desktop'
  | 'xero';

export type FeatureCategory =
  | 'Scheduling & Dispatch'
  | 'CRM & Sales'
  | 'Estimates & Invoicing'
  | 'Payments & Financing'
  | 'Customer Experience'
  | 'Operations'
  | 'Reporting'
  | 'Mobile'
  | 'Integrations';

export interface FeatureDefinition {
  key: FeatureKey;
  label: string;
  category: FeatureCategory;
  description: string;
}

/** Support level for a feature on a specific product. */
export type FeatureSupport =
  | 'available'
  | 'partial'
  | 'add_on'
  | 'plan_dependent'
  | 'not_available'
  | 'unknown';

export type ProductFeatureMatrix = Partial<Record<FeatureKey, FeatureSupport>>;

/* -------------------------------------------------------------------------- */
/* Pricing (spec §5, §27 — never fabricate)                                   */
/* -------------------------------------------------------------------------- */

export type PricingModel =
  | 'tiered'
  | 'per_user'
  | 'flat'
  | 'quote'
  | 'custom'
  | 'unknown';

/**
 * We deliberately avoid storing fabricated dollar amounts. A plan may carry a
 * verified published price, but if `verificationStatus` is not `verified` the
 * UI shows a status label ("Contact vendor" / "Not publicly disclosed")
 * instead of a number.
 */
export interface ProductPlan {
  name: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  currency: string;
  billingModel: PricingModel;
  includedUsers: number | null;
  additionalUserPrice: number | null;
  setupFee: number | null;
  trialDays: number | null;
  contract: string | null;
  isQuoteBased: boolean;
  notes?: string;
  sourceUrl?: string;
  verificationStatus: VerificationStatus;
  verifiedAt: IsoDate;
}

export interface ProductPricing {
  model: PricingModel;
  /** Overall starting-price verification status for quick display. */
  startingStatus: VerificationStatus;
  /** Free trial availability, if verified. null = unknown. */
  freeTrial: boolean | null;
  plans: ProductPlan[];
}

/* -------------------------------------------------------------------------- */
/* Implementation                                                             */
/* -------------------------------------------------------------------------- */

export type ImplementationComplexity = 'low' | 'moderate' | 'high';

/* -------------------------------------------------------------------------- */
/* Integrations                                                               */
/* -------------------------------------------------------------------------- */

export type IntegrationCategory =
  | 'accounting'
  | 'payments'
  | 'marketing'
  | 'communication'
  | 'automation'
  | 'other';

export interface Integration {
  name: string;
  category: IntegrationCategory;
  support: FeatureSupport;
}

/* -------------------------------------------------------------------------- */
/* Commercial relationship (spec §32, §60 — never affects Fit Score)          */
/* -------------------------------------------------------------------------- */

export type CommercialRelationshipType =
  | 'none'
  | 'affiliate'
  | 'referral'
  | 'cpl'
  | 'cpa'
  | 'direct_partner';

export interface CommercialRelationship {
  type: CommercialRelationshipType;
  /** Slug of the affiliate link record used for outbound tracking, if any. */
  affiliateLinkSlug: string | null;
  disclosure: string;
}

/* -------------------------------------------------------------------------- */
/* SEO                                                                        */
/* -------------------------------------------------------------------------- */

export interface SeoMeta {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  noindex?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Product                                                                    */
/* -------------------------------------------------------------------------- */

export interface Product {
  slug: string;
  name: string;
  vendorName: string;
  tagline: string;
  /** Independent editorial description. */
  description: string;
  website: string;
  /** Short text mark used for the placeholder logo (no fabricated art). */
  logoMark: string;
  /** Brand color used for the placeholder logo tile. */
  brandColor: string;

  bestFor: string[];
  notIdealFor: string[];
  verdict: string;

  industries: IndustrySlug[];
  companySizes: CompanySizeBand[];
  businessModels: BusinessModel[];

  pricing: ProductPricing;
  implementation: ImplementationComplexity;
  implementationNotes: string;

  features: ProductFeatureMatrix;
  integrations: Integration[];

  pros: string[];
  tradeoffs: string[];

  /** Slugs of recommended alternatives. */
  alternatives: string[];

  sources: Source[];
  verification: VerificationDates;
  commercial: CommercialRelationship;
  seo?: SeoMeta;
  published: boolean;
}

/* -------------------------------------------------------------------------- */
/* Editorial page content                                                     */
/* -------------------------------------------------------------------------- */

export interface IndustryPage {
  slug: IndustrySlug;
  name: string;
  shortName: string;
  intro: string;
  /** What makes software selection different for this trade. */
  keyRequirements: string[];
  /** Editorial narrative sections (heading + body paragraphs). */
  sections: { heading: string; body: string[] }[];
  /** Recommended product slugs, editorially ordered. */
  recommendedProducts: string[];
  relatedComparisons: string[];
  published: boolean;
  seo?: SeoMeta;
}

export interface ComparisonPage {
  slug: string; // e.g. jobber-vs-housecall-pro
  productA: string; // slug
  productB: string; // slug
  intro: string;
  chooseA: string[];
  chooseB: string[];
  chooseNeither: string[];
  /** Deep-dive sections. */
  sections: { heading: string; body: string[] }[];
  published: boolean;
  seo?: SeoMeta;
}

export interface AlternativePage {
  slug: string; // product slug the page is "alternatives to"
  reasons: string[]; // why someone seeks an alternative
  intro: string;
  alternatives: {
    slug: string;
    bestFor: string;
    whyConsider: string;
    majorDifference: string;
  }[];
  published: boolean;
  seo?: SeoMeta;
}

export interface BestPage {
  slug: string;
  h1: string;
  intro: string;
  /** Optional expanded opening (2–3 short paragraphs) for deep-listicle pages. */
  lead?: string[];
  /** How this shortlist was assembled. */
  methodologyNote: string;
  entries: {
    slug: string;
    position: number;
    bestForLabel: string;
    rationale: string;
  }[];
  /** Optional buyer's-guide narrative sections (heading + body paragraphs). */
  sections?: { heading: string; body: string[] }[];
  /** Optional FAQ block; also emitted as FAQPage structured data. */
  faqs?: { question: string; answer: string }[];
  published: boolean;
  seo?: SeoMeta;
}

export interface GuidePage {
  slug: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  publishedAt: IsoDate;
  updatedAt: IsoDate;
  published: boolean;
  seo?: SeoMeta;
}
