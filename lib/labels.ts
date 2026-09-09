import type {
  BusinessModel,
  CompanySizeBand,
  FeatureSupport,
  ImplementationComplexity,
  PricingModel,
  VerificationStatus,
} from '@/types';
import type { AccountingSystem, BudgetBand, LeadStatus } from '@/types/finder';

export const COMPANY_SIZE_LABELS: Record<CompanySizeBand, string> = {
  solo: 'Just me',
  '2-5': '2–5 technicians',
  '6-10': '6–10 technicians',
  '11-25': '11–25 technicians',
  '26-50': '26–50 technicians',
  '51-100': '51–100 technicians',
  '100+': '100+ technicians',
};

export const COMPANY_SIZE_SHORT: Record<CompanySizeBand, string> = {
  solo: 'Solo',
  '2-5': '2–5',
  '6-10': '6–10',
  '11-25': '11–25',
  '26-50': '26–50',
  '51-100': '51–100',
  '100+': '100+',
};

export const BUSINESS_MODEL_LABELS: Record<BusinessModel, string> = {
  residential: 'Residential',
  commercial: 'Commercial',
  both: 'Residential & commercial',
  route: 'Recurring route service',
  project: 'Project-based',
  combination: 'Combination',
};

export const BUDGET_LABELS: Record<BudgetBand, string> = {
  under_100: 'Under $100 / month',
  '100_250': '$100–$250 / month',
  '250_500': '$250–$500 / month',
  '500_1000': '$500–$1,000 / month',
  '1000_2500': '$1,000–$2,500 / month',
  '2500_plus': '$2,500+ / month',
  not_sure: 'Not sure yet',
};

export const ACCOUNTING_LABELS: Record<AccountingSystem, string> = {
  quickbooks_online: 'QuickBooks Online',
  quickbooks_desktop: 'QuickBooks Desktop',
  xero: 'Xero',
  sage: 'Sage',
  other: 'Other',
  none: 'None',
  not_important: 'Not important',
};

export const IMPLEMENTATION_LABELS: Record<ImplementationComplexity, string> = {
  low: 'Low',
  moderate: 'Moderate',
  high: 'High',
};

export const FEATURE_SUPPORT_LABELS: Record<FeatureSupport, string> = {
  available: 'Available',
  partial: 'Partial',
  add_on: 'Add-on',
  plan_dependent: 'Plan-dependent',
  not_available: 'Not available',
  unknown: 'Unknown',
};

export const VERIFICATION_LABELS: Record<VerificationStatus, string> = {
  verified: 'Verified',
  vendor_confirmed: 'Vendor confirmed',
  needs_verification: 'Needs verification',
  not_disclosed: 'Not publicly disclosed',
};

export const PRICING_MODEL_LABELS: Record<PricingModel, string> = {
  tiered: 'Tiered / per-user',
  per_user: 'Per user',
  flat: 'Flat rate',
  quote: 'Quote-based',
  custom: 'Custom',
  unknown: 'Not disclosed',
};

export const LEAD_STATUS_LABELS: Record<LeadStatus, string> = {
  new: 'New',
  validated: 'Validated',
  sent: 'Sent',
  accepted: 'Accepted',
  rejected: 'Rejected',
  contacted: 'Contacted',
  demo_scheduled: 'Demo scheduled',
  demo_attended: 'Demo attended',
  opportunity: 'Opportunity',
  closed_won: 'Closed won',
  closed_lost: 'Closed lost',
};

/** A human summary of a product's starting-price status for cards. */
export function pricingStatusLabel(model: PricingModel, status: VerificationStatus): string {
  if (model === 'quote') return 'Quote-based — contact vendor';
  if (status === 'verified' || status === 'vendor_confirmed') return 'Published pricing';
  if (status === 'not_disclosed') return 'Not publicly disclosed';
  return 'Pricing not yet verified';
}
