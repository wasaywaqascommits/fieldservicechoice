import { z } from 'zod';

/**
 * Server-side validation schemas (spec §65). Every API route validates its
 * payload with Zod before doing anything else.
 */

const INDUSTRY = z.enum([
  'hvac',
  'plumbing',
  'electrical',
  'roofing',
  'landscaping',
  'pest-control',
  'cleaning',
  'pool-service',
  'commercial',
  'other',
]);

const SIZE = z.enum(['solo', '2-5', '6-10', '11-25', '26-50', '51-100', '100+']);
const BUSINESS_MODEL = z.enum(['residential', 'commercial', 'both', 'route', 'project', 'combination']);
const FEATURE = z.enum([
  'scheduling', 'dispatching', 'crm', 'estimates', 'invoicing', 'payments',
  'online_booking', 'customer_notifications', 'service_agreements', 'recurring_jobs',
  'pricebook', 'inventory', 'gps_tracking', 'route_optimization', 'job_costing',
  'financing', 'call_tracking', 'marketing_automation', 'reporting', 'multi_location',
  'mobile_app', 'offline_mode', 'customer_portal', 'api',
  'quickbooks_online', 'quickbooks_desktop', 'xero',
]);
const ACCOUNTING = z.enum(['quickbooks_online', 'quickbooks_desktop', 'xero', 'sage', 'other', 'none', 'not_important']);
const BUDGET = z.enum(['under_100', '100_250', '250_500', '500_1000', '1000_2500', '2500_plus', 'not_sure']);
const TIMELINE = z.enum(['immediately', 'this_quarter', 'this_year', 'exploring']);

export const finderAnswersSchema = z.object({
  industry: INDUSTRY,
  technicians: SIZE,
  businessModel: BUSINESS_MODEL,
  requiredFeatures: z.array(FEATURE).max(30),
  accounting: ACCOUNTING,
  budget: BUDGET,
  currentSoftware: z.string().max(120).optional(),
  officeEmployees: z.number().int().min(0).max(100000).optional(),
  timeline: TIMELINE.optional(),
  needsMultiLocation: z.boolean().optional(),
  needsInventory: z.boolean().optional(),
  needsOfflineMobile: z.boolean().optional(),
  needsApi: z.boolean().optional(),
});

const attributionSchema = z
  .object({
    landingPage: z.string().max(500).optional(),
    referrer: z.string().max(500).optional(),
    utmSource: z.string().max(200).optional(),
    utmMedium: z.string().max(200).optional(),
    utmCampaign: z.string().max(200).optional(),
    utmContent: z.string().max(200).optional(),
    utmTerm: z.string().max(200).optional(),
    sessionId: z.string().max(100).optional(),
  })
  .optional();

const consentSchema = z.object({
  productSlug: z.string().max(80),
  consented: z.boolean(),
  wordingShown: z.string().max(500),
  timestamp: z.string().max(40),
});

export const leadSchema = z.object({
  name: z.string().min(1, 'Please enter your name').max(120),
  email: z.string().email('Enter a valid email').max(200),
  phone: z.string().max(40).optional().or(z.literal('')),
  businessName: z.string().max(200).optional().or(z.literal('')),
  website: z.string().max(200).optional().or(z.literal('')),
  state: z.string().max(60).optional().or(z.literal('')),
  country: z.string().max(60).optional().or(z.literal('')),
  answers: finderAnswersSchema,
  matchedProducts: z.array(z.object({ slug: z.string().max(80), score: z.number().min(0).max(100) })).max(20),
  selectedVendors: z.array(z.string().max(80)).max(20),
  consents: z.array(consentSchema).max(20),
  attribution: attributionSchema,
  sourcePage: z.string().max(500).optional(),
  // Honeypot: must be empty. Bots tend to fill every field.
  company_website_hp: z.string().max(0).optional(),
});

export const partnerSchema = z.object({
  company: z.string().min(1).max(200),
  name: z.string().min(1).max(120),
  title: z.string().max(120).optional().or(z.literal('')),
  email: z.string().email().max(200),
  website: z.string().max(200).optional().or(z.literal('')),
  partnershipType: z.enum(['affiliate', 'referral', 'cpl', 'cpa', 'co_marketing', 'data_verification', 'other']),
  message: z.string().max(4000).optional().or(z.literal('')),
  company_website_hp: z.string().max(0).optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email().max(200),
  company_website_hp: z.string().max(0).optional(),
});

export const analyticsEventSchema = z.object({
  event: z.string().max(80),
  properties: z.record(z.string(), z.unknown()).optional(),
  sessionId: z.string().max(100).optional(),
  path: z.string().max(500).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
export type PartnerInput = z.infer<typeof partnerSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
export type AnalyticsEventInput = z.infer<typeof analyticsEventSchema>;
