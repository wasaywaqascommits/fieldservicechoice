import type {
  FeatureKey,
  Integration,
  Product,
  ProductFeatureMatrix,
  Source,
  VerificationDates,
} from '@/types';

/**
 * SEED / DEVELOPMENT product data for the initial 15 platforms (spec §4).
 *
 * DATA INTEGRITY (spec §5, §82, §108):
 *   - No pricing numbers are fabricated. `pricing.plans` is intentionally empty
 *     and `startingStatus` is a status flag; the UI shows "contact vendor" /
 *     "not publicly verified" until an admin enters verified plans.
 *   - Feature availability is INDICATIVE development data. Every product's
 *     `featuresVerifiedAt` is null, and the UI labels it as pending verification.
 *   - Editorial fields (bestFor, tradeoffs, verdict, pros) are independent
 *     positioning, not vendor claims, and carry `editorialReviewedAt`.
 *   - Company size / industry / business-model fit are editorial starting
 *     points (spec §71), fully editable from the admin later.
 */

const EDITORIAL_REVIEWED = '2026-09-10';

/** Facts pending verification; editorial positioning reviewed today. */
function pending(editorialReviewed: string = EDITORIAL_REVIEWED): VerificationDates {
  return {
    pricingVerifiedAt: null,
    featuresVerifiedAt: null,
    integrationsVerifiedAt: null,
    contractTermsVerifiedAt: null,
    editorialReviewedAt: editorialReviewed,
  };
}

function matrix(opts: {
  available?: FeatureKey[];
  partial?: FeatureKey[];
  addOn?: FeatureKey[];
  planDependent?: FeatureKey[];
  notAvailable?: FeatureKey[];
}): ProductFeatureMatrix {
  const m: ProductFeatureMatrix = {};
  opts.available?.forEach((k) => (m[k] = 'available'));
  opts.partial?.forEach((k) => (m[k] = 'partial'));
  opts.addOn?.forEach((k) => (m[k] = 'add_on'));
  opts.planDependent?.forEach((k) => (m[k] = 'plan_dependent'));
  opts.notAvailable?.forEach((k) => (m[k] = 'not_available'));
  return m;
}

function officialSources(name: string, domain: string): Source[] {
  return [
    {
      title: `${name} official website`,
      url: `https://${domain}/`,
      type: 'official_documentation',
      accessedAt: null,
      verificationStatus: 'needs_verification',
    },
    {
      title: `${name} pricing page`,
      url: `https://${domain}/pricing/`,
      type: 'official_pricing',
      accessedAt: null,
      verificationStatus: 'needs_verification',
    },
    {
      title: `${name} integrations directory`,
      url: `https://${domain}/integrations/`,
      type: 'official_integrations',
      accessedAt: null,
      verificationStatus: 'needs_verification',
    },
  ];
}

const DISCLOSURE =
  'FieldServiceChoice may earn a referral fee if you visit or purchase from this provider. Commercial relationships do not affect Fit Scores or editorial recommendations.';

function accounting(qbo = false, qbd = false, xero = false): Integration[] {
  const list: Integration[] = [];
  list.push({ name: 'QuickBooks Online', category: 'accounting', support: qbo ? 'available' : 'unknown' });
  if (qbd) list.push({ name: 'QuickBooks Desktop', category: 'accounting', support: 'available' });
  list.push({ name: 'Xero', category: 'accounting', support: xero ? 'available' : 'unknown' });
  return list;
}

export const PRODUCTS: Product[] = [
  {
    slug: 'jobber',
    name: 'Jobber',
    vendorName: 'Jobber Software',
    tagline: 'Popular all-in-one field service software for small home-service teams.',
    description:
      'Jobber is a widely adopted operations platform aimed at small and growing home-service businesses. It combines scheduling, quoting, invoicing, client communication and online payments in a package designed to be quick to adopt without a formal implementation project.',
    website: 'https://getjobber.com',
    logoMark: 'Jb',
    brandColor: '#1f7a4d',
    bestFor: ['Small residential home-service teams', 'Owner-operators scaling to a handful of crews', 'Businesses wanting simple scheduling, quoting and invoicing'],
    notIdealFor: ['Enterprise HVAC/plumbing with complex commercial job costing', 'Multi-branch operations needing granular role controls', 'Teams needing an advanced flat-rate pricebook'],
    verdict:
      'A strong default for small residential service businesses that value fast setup and a clean mobile experience over deep enterprise configurability.',
    industries: ['hvac', 'plumbing', 'electrical', 'landscaping', 'cleaning', 'pool-service'],
    companySizes: ['solo', '2-5', '6-10', '11-25'],
    businessModels: ['residential', 'both', 'route'],
    pricing: { model: 'tiered', startingStatus: 'needs_verification', freeTrial: null, plans: [] },
    implementation: 'low',
    implementationNotes: 'Self-serve onboarding designed for owner-operators; most teams can go live quickly without a paid implementation.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'crm', 'estimates', 'invoicing', 'payments', 'customer_notifications', 'online_booking', 'recurring_jobs', 'reporting', 'mobile_app', 'quickbooks_online'],
      partial: ['service_agreements', 'job_costing', 'customer_portal'],
      addOn: ['marketing_automation'],
      notAvailable: ['quickbooks_desktop', 'route_optimization'],
    }),
    integrations: accounting(true, false, false),
    pros: ['Fast, low-friction onboarding', 'Clean, well-reviewed mobile app', 'Solid client communication and online booking'],
    tradeoffs: ['Limited depth for complex commercial job costing', 'Fewer enterprise administrative controls', 'Advanced marketing features sit in higher tiers'],
    alternatives: ['housecall-pro', 'workiz', 'fieldpulse', 'servicem8'],
    sources: officialSources('Jobber', 'getjobber.com'),
    verification: pending(),
    commercial: { type: 'affiliate', affiliateLinkSlug: 'jobber', disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'housecall-pro',
    name: 'Housecall Pro',
    vendorName: 'Housecall Pro',
    tagline: 'Home-service platform with strong consumer-facing booking and marketing.',
    description:
      'Housecall Pro targets residential home-service businesses with an emphasis on customer communication, online booking, payments and marketing tools. It aims to be an all-in-one system for growing service companies.',
    website: 'https://housecallpro.com',
    logoMark: 'Hc',
    brandColor: '#0a7cff',
    bestFor: ['Residential home-service businesses', 'Companies prioritizing marketing and customer experience', 'Teams that want booking, payments and reviews in one place'],
    notIdealFor: ['Complex commercial contractors', 'Businesses needing deep inventory or project management', 'Enterprise multi-entity operations'],
    verdict:
      'A capable all-in-one for residential service brands that lean on marketing, reviews and a polished customer booking experience.',
    industries: ['hvac', 'plumbing', 'electrical', 'cleaning', 'pool-service'],
    companySizes: ['solo', '2-5', '6-10', '11-25', '26-50'],
    businessModels: ['residential', 'both'],
    pricing: { model: 'tiered', startingStatus: 'needs_verification', freeTrial: null, plans: [] },
    implementation: 'low',
    implementationNotes: 'Primarily self-serve; higher tiers add onboarding assistance for larger teams.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'crm', 'estimates', 'invoicing', 'payments', 'customer_notifications', 'online_booking', 'marketing_automation', 'reporting', 'mobile_app', 'quickbooks_online'],
      partial: ['service_agreements', 'recurring_jobs', 'pricebook', 'financing'],
      notAvailable: ['quickbooks_desktop'],
    }),
    integrations: accounting(true, false, false),
    pros: ['Strong marketing and reputation tools', 'Consumer-friendly booking experience', 'Broad feature coverage for residential work'],
    tradeoffs: ['Less suited to complex commercial workflows', 'Some capabilities gated to higher tiers', 'Reporting depth trails enterprise platforms'],
    alternatives: ['jobber', 'workiz', 'fieldpulse', 'service-fusion'],
    sources: officialSources('Housecall Pro', 'housecallpro.com'),
    verification: pending(),
    commercial: { type: 'affiliate', affiliateLinkSlug: 'housecall-pro', disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'servicetitan',
    name: 'ServiceTitan',
    vendorName: 'ServiceTitan',
    tagline: 'Enterprise-grade platform for established HVAC, plumbing and electrical.',
    description:
      'ServiceTitan is an enterprise field service management platform built for established residential and commercial trades. It offers deep capabilities across dispatch, pricebook, call booking, financing and reporting, with a correspondingly larger implementation commitment.',
    website: 'https://servicetitan.com',
    logoMark: 'St',
    brandColor: '#e8442a',
    bestFor: ['Established HVAC, plumbing and electrical companies', 'Businesses with dedicated office/dispatch staff', 'Teams wanting deep pricebook, financing and reporting'],
    notIdealFor: ['Solo operators and very small teams', 'Businesses wanting the lowest possible cost', 'Companies needing to be live in days, not weeks'],
    verdict:
      'The most capable option for larger, growth-focused trades willing to invest in implementation to get enterprise depth.',
    industries: ['hvac', 'plumbing', 'electrical', 'commercial'],
    companySizes: ['11-25', '26-50', '51-100', '100+'],
    businessModels: ['residential', 'commercial', 'both'],
    pricing: { model: 'quote', startingStatus: 'not_disclosed', freeTrial: false, plans: [] },
    implementation: 'high',
    implementationNotes: 'Structured, guided implementation with data migration and training; plan for a multi-week rollout.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'crm', 'estimates', 'invoicing', 'payments', 'customer_notifications', 'online_booking', 'service_agreements', 'recurring_jobs', 'pricebook', 'inventory', 'gps_tracking', 'job_costing', 'financing', 'call_tracking', 'marketing_automation', 'reporting', 'multi_location', 'mobile_app', 'api', 'quickbooks_online'],
      partial: ['offline_mode', 'customer_portal'],
    }),
    integrations: [...accounting(true, false, false), { name: 'Open API', category: 'automation', support: 'available' }],
    pros: ['Deep pricebook, financing and reporting', 'Strong dispatch and call-booking workflows', 'Scales to large, multi-department operations'],
    tradeoffs: ['Higher cost and longer implementation', 'Overkill for very small teams', 'Requires office staff to use to its full potential'],
    alternatives: ['fieldedge', 'buildops', 'simpro', 'workiz'],
    sources: officialSources('ServiceTitan', 'servicetitan.com'),
    verification: pending(),
    commercial: { type: 'referral', affiliateLinkSlug: 'servicetitan', disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'workiz',
    name: 'Workiz',
    vendorName: 'Workiz',
    tagline: 'Field service software with strong built-in phone and lead tracking.',
    description:
      'Workiz targets small-to-mid service businesses with a focus on communication — built-in phone system, call tracking and messaging — alongside scheduling, dispatch, estimates and invoicing.',
    website: 'https://workiz.com',
    logoMark: 'Wk',
    brandColor: '#00b3a4',
    bestFor: ['Service businesses that live on the phone (locksmith, garage door, appliance)', 'Small-to-mid teams wanting call tracking built in', 'Companies focused on lead-to-job conversion'],
    notIdealFor: ['Enterprise commercial contractors', 'Businesses needing deep project management', 'Very large multi-branch operations'],
    verdict:
      'A pragmatic choice for phone-driven service trades that want communication and lead tracking tightly coupled to scheduling.',
    industries: ['hvac', 'plumbing', 'electrical', 'other'],
    companySizes: ['solo', '2-5', '6-10', '11-25'],
    businessModels: ['residential', 'both'],
    pricing: { model: 'tiered', startingStatus: 'needs_verification', freeTrial: null, plans: [] },
    implementation: 'low',
    implementationNotes: 'Self-serve setup; communication features are a key part of onboarding.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'crm', 'estimates', 'invoicing', 'payments', 'customer_notifications', 'call_tracking', 'reporting', 'mobile_app', 'quickbooks_online'],
      partial: ['online_booking', 'recurring_jobs', 'service_agreements', 'gps_tracking'],
      addOn: ['marketing_automation'],
    }),
    integrations: accounting(true, false, false),
    pros: ['Built-in phone system and call tracking', 'Good fit for lead-heavy trades', 'Straightforward to adopt'],
    tradeoffs: ['Less depth for commercial job costing', 'Fewer enterprise controls', 'Reporting is lighter than enterprise tools'],
    alternatives: ['jobber', 'housecall-pro', 'fieldpulse', 'kickserv'],
    sources: officialSources('Workiz', 'workiz.com'),
    verification: pending(),
    commercial: { type: 'affiliate', affiliateLinkSlug: 'workiz', disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'fieldpulse',
    name: 'FieldPulse',
    vendorName: 'FieldPulse',
    tagline: 'Growing all-in-one platform positioned between SMB and mid-market.',
    description:
      'FieldPulse is an all-in-one field service platform aimed at small and mid-sized trades that are outgrowing entry-level tools but do not need enterprise complexity. It covers scheduling, estimates, invoicing, customer management and team features.',
    website: 'https://fieldpulse.com',
    logoMark: 'Fp',
    brandColor: '#2b6cb0',
    bestFor: ['Growing teams outgrowing entry-level tools', 'Multi-trade contractors wanting broad coverage', 'Businesses wanting more depth without enterprise cost'],
    notIdealFor: ['Very large enterprise operations', 'Teams needing the deepest pricebook/financing ecosystem', 'Buyers wanting the most established brand'],
    verdict:
      'A solid mid-ground option for growing trades that want broad functionality at a step up from starter tools.',
    industries: ['hvac', 'plumbing', 'electrical', 'landscaping', 'commercial'],
    companySizes: ['2-5', '6-10', '11-25', '26-50'],
    businessModels: ['residential', 'commercial', 'both'],
    pricing: { model: 'tiered', startingStatus: 'needs_verification', freeTrial: null, plans: [] },
    implementation: 'moderate',
    implementationNotes: 'Onboarding support available; broader feature set means a slightly larger setup than starter tools.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'crm', 'estimates', 'invoicing', 'payments', 'customer_notifications', 'recurring_jobs', 'job_costing', 'reporting', 'mobile_app', 'quickbooks_online'],
      partial: ['service_agreements', 'inventory', 'gps_tracking', 'online_booking', 'pricebook'],
      planDependent: ['api'],
    }),
    integrations: accounting(true, false, true),
    pros: ['Broad feature coverage for the price band', 'Good for multi-trade contractors', 'Actively developed with a growing feature set'],
    tradeoffs: ['Smaller brand footprint than incumbents', 'Some features still maturing', 'Not aimed at true enterprise'],
    alternatives: ['jobber', 'housecall-pro', 'service-fusion', 'kickserv'],
    sources: officialSources('FieldPulse', 'fieldpulse.com'),
    verification: pending(),
    commercial: { type: 'affiliate', affiliateLinkSlug: 'fieldpulse', disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'service-fusion',
    name: 'Service Fusion',
    vendorName: 'Service Fusion',
    tagline: 'Established FSM for small-to-mid service companies, QuickBooks-friendly.',
    description:
      'Service Fusion is a long-standing field service management system for small and mid-sized service companies, with scheduling, dispatch, estimates, invoicing and strong QuickBooks integration.',
    website: 'https://servicefusion.com',
    logoMark: 'Sf',
    brandColor: '#f26522',
    bestFor: ['Small-to-mid service companies', 'QuickBooks Desktop and Online users', 'Teams wanting flat per-company pricing style'],
    notIdealFor: ['Businesses wanting the most modern UI', 'Enterprise commercial project management', 'Teams needing advanced marketing automation'],
    verdict:
      'A practical, established option for small-to-mid trades that prioritize QuickBooks compatibility and predictable operations.',
    industries: ['hvac', 'plumbing', 'electrical'],
    companySizes: ['2-5', '6-10', '11-25', '26-50'],
    businessModels: ['residential', 'commercial', 'both'],
    pricing: { model: 'tiered', startingStatus: 'needs_verification', freeTrial: null, plans: [] },
    implementation: 'moderate',
    implementationNotes: 'Guided onboarding available; QuickBooks setup is a common part of implementation.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'crm', 'estimates', 'invoicing', 'payments', 'customer_notifications', 'recurring_jobs', 'reporting', 'mobile_app', 'quickbooks_online', 'quickbooks_desktop'],
      partial: ['service_agreements', 'inventory', 'gps_tracking', 'job_costing'],
    }),
    integrations: accounting(true, true, false),
    pros: ['Strong QuickBooks Online and Desktop support', 'Established, dependable feature set', 'Suited to office-driven dispatch'],
    tradeoffs: ['Interface feels less modern than newer rivals', 'Lighter marketing tools', 'Not built for enterprise scale'],
    alternatives: ['fieldpulse', 'kickserv', 'housecall-pro', 'fieldedge'],
    sources: officialSources('Service Fusion', 'servicefusion.com'),
    verification: pending(),
    commercial: { type: 'affiliate', affiliateLinkSlug: 'service-fusion', disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'fieldedge',
    name: 'FieldEdge',
    vendorName: 'FieldEdge',
    tagline: 'HVAC/plumbing/electrical FSM with deep QuickBooks Desktop ties.',
    description:
      'FieldEdge is a field service management platform focused on HVAC, plumbing and electrical contractors, known particularly for tight QuickBooks Desktop integration, service agreements and a flat-rate pricebook.',
    website: 'https://fieldedge.com',
    logoMark: 'Fe',
    brandColor: '#004b8d',
    bestFor: ['Established HVAC/plumbing/electrical contractors', 'QuickBooks Desktop-centric back offices', 'Teams that rely on service agreements'],
    notIdealFor: ['Solo operators wanting the cheapest tool', 'Cloud-only, QuickBooks-Online-only shops', 'Very small startups'],
    verdict:
      'A strong fit for mechanical trades whose accounting runs on QuickBooks Desktop and who depend on maintenance agreements.',
    industries: ['hvac', 'plumbing', 'electrical'],
    companySizes: ['6-10', '11-25', '26-50', '51-100'],
    businessModels: ['residential', 'commercial', 'both'],
    pricing: { model: 'quote', startingStatus: 'not_disclosed', freeTrial: null, plans: [] },
    implementation: 'moderate',
    implementationNotes: 'Guided onboarding with QuickBooks integration setup; moderate rollout effort.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'crm', 'estimates', 'invoicing', 'payments', 'service_agreements', 'recurring_jobs', 'pricebook', 'reporting', 'mobile_app', 'quickbooks_desktop'],
      partial: ['customer_notifications', 'inventory', 'gps_tracking', 'quickbooks_online', 'job_costing'],
    }),
    integrations: accounting(true, true, false),
    pros: ['Deep QuickBooks Desktop integration', 'Strong service-agreement management', 'Flat-rate pricebook for the trades'],
    tradeoffs: ['Quote-based pricing (less transparent)', 'Less oriented to QuickBooks-Online-only shops', 'UI less modern than newest entrants'],
    alternatives: ['servicetitan', 'service-fusion', 'housecall-pro', 'simpro'],
    sources: officialSources('FieldEdge', 'fieldedge.com'),
    verification: pending(),
    commercial: { type: 'referral', affiliateLinkSlug: 'fieldedge', disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'kickserv',
    name: 'Kickserv',
    vendorName: 'Kickserv',
    tagline: 'Straightforward, budget-friendly FSM for small service businesses.',
    description:
      'Kickserv is a straightforward field service management tool for small service businesses, covering CRM, estimates, scheduling and invoicing with QuickBooks integration at an accessible price point.',
    website: 'https://kickserv.com',
    logoMark: 'Ks',
    brandColor: '#3aa757',
    bestFor: ['Small service businesses on a budget', 'Owner-operators wanting the essentials', 'QuickBooks users needing simple sync'],
    notIdealFor: ['Businesses needing advanced dispatch or pricebook', 'Commercial project management', 'Larger multi-crew operations'],
    verdict:
      'A cost-conscious pick for small teams that need the core essentials without paying for enterprise depth.',
    industries: ['hvac', 'plumbing', 'electrical', 'landscaping', 'cleaning'],
    companySizes: ['solo', '2-5', '6-10'],
    businessModels: ['residential', 'both'],
    pricing: { model: 'tiered', startingStatus: 'needs_verification', freeTrial: null, plans: [] },
    implementation: 'low',
    implementationNotes: 'Light, self-serve setup suited to very small teams.',
    features: matrix({
      available: ['scheduling', 'crm', 'estimates', 'invoicing', 'payments', 'reporting', 'mobile_app', 'quickbooks_online'],
      partial: ['dispatching', 'customer_notifications', 'recurring_jobs', 'quickbooks_desktop'],
      notAvailable: ['financing', 'call_tracking'],
    }),
    integrations: accounting(true, true, false),
    pros: ['Accessible pricing for small teams', 'Simple, quick to learn', 'QuickBooks integration'],
    tradeoffs: ['Lighter dispatch and pricebook', 'Not built for larger operations', 'Fewer advanced features'],
    alternatives: ['jobber', 'workiz', 'service-fusion', 'servicem8'],
    sources: officialSources('Kickserv', 'kickserv.com'),
    verification: pending(),
    commercial: { type: 'affiliate', affiliateLinkSlug: 'kickserv', disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'servicem8',
    name: 'ServiceM8',
    vendorName: 'ServiceM8',
    tagline: 'Apple-first job management for micro and small trades.',
    description:
      'ServiceM8 is a job management app built primarily around Apple devices, aimed at micro and small trade businesses that want lightweight scheduling, quoting and invoicing with a pay-as-you-grow model.',
    website: 'https://servicem8.com',
    logoMark: 'M8',
    brandColor: '#f5a623',
    bestFor: ['Micro and small trade businesses', 'Apple/iOS-centric teams', 'Owner-operators wanting a light footprint'],
    notIdealFor: ['Android-first teams', 'Larger operations needing deep reporting', 'Complex commercial contractors'],
    verdict:
      'An efficient choice for very small, Apple-based trade businesses that want essentials without overhead.',
    industries: ['plumbing', 'electrical', 'hvac', 'cleaning'],
    companySizes: ['solo', '2-5', '6-10'],
    businessModels: ['residential', 'both'],
    pricing: { model: 'tiered', startingStatus: 'needs_verification', freeTrial: null, plans: [] },
    implementation: 'low',
    implementationNotes: 'Very light, self-serve setup; strongest on Apple devices.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'estimates', 'invoicing', 'payments', 'customer_notifications', 'mobile_app', 'online_booking'],
      partial: ['crm', 'recurring_jobs', 'reporting', 'quickbooks_online', 'xero'],
      notAvailable: ['pricebook', 'financing'],
    }),
    integrations: accounting(true, false, true),
    pros: ['Lightweight and inexpensive to start', 'Good mobile-first job flow', 'Pay-as-you-grow pricing style'],
    tradeoffs: ['Apple-centric experience', 'Lighter reporting', 'Not for larger operations'],
    alternatives: ['jobber', 'tradify', 'kickserv', 'workiz'],
    sources: officialSources('ServiceM8', 'servicem8.com'),
    verification: pending(),
    commercial: { type: 'none', affiliateLinkSlug: null, disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'simpro',
    name: 'Simpro',
    vendorName: 'Simpro',
    tagline: 'Job and project management for commercial trade and project work.',
    description:
      'Simpro is a job and project management platform for commercial and larger trade businesses, with strengths in estimating, project management, inventory and job costing for complex work.',
    website: 'https://simprogroup.com',
    logoMark: 'Sp',
    brandColor: '#0091da',
    bestFor: ['Commercial trade contractors', 'Project-based and larger service work', 'Businesses needing strong job costing and inventory'],
    notIdealFor: ['Solo operators', 'Simple residential-only shops', 'Teams wanting the fastest possible setup'],
    verdict:
      'A capable platform for commercial and project-driven trades that need estimating, inventory and job costing depth.',
    industries: ['commercial', 'electrical', 'plumbing', 'hvac'],
    companySizes: ['11-25', '26-50', '51-100', '100+'],
    businessModels: ['commercial', 'project', 'both'],
    pricing: { model: 'quote', startingStatus: 'not_disclosed', freeTrial: null, plans: [] },
    implementation: 'high',
    implementationNotes: 'Structured implementation for complex operations; plan for a guided rollout.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'estimates', 'invoicing', 'inventory', 'job_costing', 'reporting', 'mobile_app', 'multi_location', 'quickbooks_online', 'xero', 'api'],
      partial: ['crm', 'service_agreements', 'recurring_jobs', 'gps_tracking', 'payments'],
    }),
    integrations: accounting(true, false, true),
    pros: ['Strong project and job costing', 'Good inventory management', 'Built for commercial complexity'],
    tradeoffs: ['Higher implementation effort', 'Overkill for simple residential', 'Quote-based pricing'],
    alternatives: ['servicetitan', 'buildops', 'commusoft', 'fieldpulse'],
    sources: officialSources('Simpro', 'simprogroup.com'),
    verification: pending(),
    commercial: { type: 'referral', affiliateLinkSlug: 'simpro', disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'buildops',
    name: 'BuildOps',
    vendorName: 'BuildOps',
    tagline: 'Modern platform for commercial specialty and mechanical contractors.',
    description:
      'BuildOps is a modern platform for commercial specialty contractors, combining service and project workflows, with a focus on commercial mechanical, HVAC and electrical operations.',
    website: 'https://buildops.com',
    logoMark: 'Bo',
    brandColor: '#f5623c',
    bestFor: ['Commercial specialty contractors', 'Mechanical, HVAC and electrical at scale', 'Teams blending service and project work'],
    notIdealFor: ['Residential-only small businesses', 'Solo operators', 'Buyers wanting a low-cost starter tool'],
    verdict:
      'A strong modern option for commercial contractors that need both service and project management in one platform.',
    industries: ['commercial', 'hvac', 'electrical'],
    companySizes: ['26-50', '51-100', '100+'],
    businessModels: ['commercial', 'project', 'both'],
    pricing: { model: 'quote', startingStatus: 'not_disclosed', freeTrial: false, plans: [] },
    implementation: 'high',
    implementationNotes: 'Enterprise onboarding for commercial operations; expect a structured implementation.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'estimates', 'invoicing', 'service_agreements', 'inventory', 'job_costing', 'reporting', 'mobile_app', 'multi_location', 'api', 'quickbooks_online'],
      partial: ['crm', 'payments', 'gps_tracking', 'customer_notifications'],
    }),
    integrations: accounting(true, false, false),
    pros: ['Built for commercial complexity', 'Combines service and project management', 'Modern, mobile-forward tooling'],
    tradeoffs: ['Not aimed at residential SMBs', 'Quote-based pricing', 'Enterprise implementation commitment'],
    alternatives: ['servicetitan', 'simpro', 'servicetrade', 'commusoft'],
    sources: officialSources('BuildOps', 'buildops.com'),
    verification: pending(),
    commercial: { type: 'referral', affiliateLinkSlug: 'buildops', disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'commusoft',
    name: 'Commusoft',
    vendorName: 'Commusoft',
    tagline: 'FSM with strong service-contract and maintenance management.',
    description:
      'Commusoft is a field service management platform with particular strength in service contracts, planned maintenance and multi-property job management, serving trades that run recurring maintenance programs.',
    website: 'https://commusoft.com',
    logoMark: 'Cs',
    brandColor: '#1b9bd7',
    bestFor: ['Businesses running planned/recurring maintenance', 'Service-contract heavy operations', 'Teams managing many properties per client'],
    notIdealFor: ['Very small startups', 'Simple one-off residential jobs only', 'Teams wanting the cheapest tool'],
    verdict:
      'A good fit for maintenance-driven trades that need robust service-contract and planned-maintenance management.',
    industries: ['hvac', 'plumbing', 'commercial'],
    companySizes: ['6-10', '11-25', '26-50', '51-100'],
    businessModels: ['commercial', 'both', 'route'],
    pricing: { model: 'quote', startingStatus: 'not_disclosed', freeTrial: null, plans: [] },
    implementation: 'moderate',
    implementationNotes: 'Guided onboarding; maintenance and contract configuration is central to setup.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'crm', 'estimates', 'invoicing', 'service_agreements', 'recurring_jobs', 'inventory', 'reporting', 'mobile_app', 'quickbooks_online', 'xero'],
      partial: ['payments', 'customer_notifications', 'job_costing', 'multi_location'],
    }),
    integrations: accounting(true, false, true),
    pros: ['Strong planned-maintenance and contracts', 'Good multi-property handling', 'Solid accounting integrations'],
    tradeoffs: ['Quote-based pricing', 'More than very small teams need', 'Setup requires planning maintenance workflows'],
    alternatives: ['simpro', 'servicetrade', 'fieldedge', 'servicetitan'],
    sources: officialSources('Commusoft', 'commusoft.com'),
    verification: pending(),
    commercial: { type: 'none', affiliateLinkSlug: null, disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'zuper',
    name: 'Zuper',
    vendorName: 'Zuper',
    tagline: 'Flexible, modern FSM with configurable workflows and integrations.',
    description:
      'Zuper is a flexible, modern field service management platform emphasizing configurable workflows, integrations and automation for mid-market and enterprise service teams.',
    website: 'https://zuper.co',
    logoMark: 'Zu',
    brandColor: '#5b34da',
    bestFor: ['Mid-market teams wanting configurable workflows', 'Businesses with integration-heavy needs', 'Operations wanting automation and API depth'],
    notIdealFor: ['Very small teams wanting a turnkey tool', 'Buyers wanting the simplest setup', 'Solo operators'],
    verdict:
      'A flexible option for mid-market service teams that value configurability, automation and integrations over turnkey simplicity.',
    industries: ['commercial', 'hvac', 'electrical', 'other'],
    companySizes: ['11-25', '26-50', '51-100', '100+'],
    businessModels: ['commercial', 'both', 'project'],
    pricing: { model: 'quote', startingStatus: 'not_disclosed', freeTrial: null, plans: [] },
    implementation: 'moderate',
    implementationNotes: 'Configurable platform; implementation effort scales with how much you customize.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'crm', 'estimates', 'invoicing', 'payments', 'customer_notifications', 'inventory', 'gps_tracking', 'reporting', 'mobile_app', 'multi_location', 'api', 'quickbooks_online', 'xero'],
      partial: ['service_agreements', 'recurring_jobs', 'route_optimization', 'job_costing'],
    }),
    integrations: [...accounting(true, false, true), { name: 'Open API', category: 'automation', support: 'available' }],
    pros: ['Highly configurable workflows', 'Broad integration and API support', 'Automation-friendly'],
    tradeoffs: ['Configurability adds setup complexity', 'Quote-based pricing', 'Not a turnkey micro-business tool'],
    alternatives: ['servicetitan', 'simpro', 'buildops', 'fieldpulse'],
    sources: officialSources('Zuper', 'zuper.co'),
    verification: pending(),
    commercial: { type: 'none', affiliateLinkSlug: null, disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'servicetrade',
    name: 'ServiceTrade',
    vendorName: 'ServiceTrade',
    tagline: 'Commercial service platform for mechanical and fire/life-safety.',
    description:
      'ServiceTrade is a commercial service management platform focused on mechanical, and fire & life-safety contractors, with strengths in inspections, service history and customer-facing reporting.',
    website: 'https://servicetrade.com',
    logoMark: 'Se',
    brandColor: '#00728f',
    bestFor: ['Commercial mechanical contractors', 'Fire & life-safety inspection businesses', 'Teams needing strong service history and reporting'],
    notIdealFor: ['Residential-only small shops', 'Solo operators', 'Simple one-off job businesses'],
    verdict:
      'A focused platform for commercial mechanical and life-safety contractors that depend on inspections and service history.',
    industries: ['commercial', 'hvac'],
    companySizes: ['11-25', '26-50', '51-100', '100+'],
    businessModels: ['commercial', 'both', 'route'],
    pricing: { model: 'quote', startingStatus: 'not_disclosed', freeTrial: null, plans: [] },
    implementation: 'moderate',
    implementationNotes: 'Guided onboarding oriented around inspections and commercial service workflows.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'estimates', 'invoicing', 'service_agreements', 'recurring_jobs', 'reporting', 'mobile_app', 'customer_portal', 'quickbooks_online', 'api'],
      partial: ['crm', 'inventory', 'payments', 'multi_location'],
    }),
    integrations: [...accounting(true, false, false), { name: 'Open API', category: 'automation', support: 'available' }],
    pros: ['Strong for commercial inspections', 'Good customer-facing reporting', 'Service-history depth'],
    tradeoffs: ['Not for residential SMBs', 'Quote-based pricing', 'Narrower focus by design'],
    alternatives: ['servicetitan', 'buildops', 'simpro', 'commusoft'],
    sources: officialSources('ServiceTrade', 'servicetrade.com'),
    verification: pending(),
    commercial: { type: 'none', affiliateLinkSlug: null, disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'tradify',
    name: 'Tradify',
    vendorName: 'Tradify',
    tagline: 'Simple job management for small trade businesses and solo operators.',
    description:
      'Tradify is a job management app for small trade businesses and solo operators, covering quotes, scheduling, timesheets and invoicing with a focus on simplicity.',
    website: 'https://tradifyhq.com',
    logoMark: 'Td',
    brandColor: '#ff6b35',
    bestFor: ['Solo operators and small trade teams', 'Businesses wanting simple quote-to-invoice flow', 'Teams that value ease of use'],
    notIdealFor: ['Larger operations needing deep dispatch', 'Commercial project management', 'Enterprise reporting needs'],
    verdict:
      'A simple, approachable choice for solo and small trade businesses focused on quoting, scheduling and getting paid.',
    industries: ['electrical', 'plumbing', 'hvac', 'other'],
    companySizes: ['solo', '2-5', '6-10'],
    businessModels: ['residential', 'both'],
    pricing: { model: 'tiered', startingStatus: 'needs_verification', freeTrial: null, plans: [] },
    implementation: 'low',
    implementationNotes: 'Light, self-serve setup suited to small teams and solo operators.',
    features: matrix({
      available: ['scheduling', 'estimates', 'invoicing', 'payments', 'reporting', 'mobile_app', 'quickbooks_online', 'xero'],
      partial: ['crm', 'dispatching', 'recurring_jobs', 'job_costing'],
      notAvailable: ['financing', 'call_tracking'],
    }),
    integrations: accounting(true, false, true),
    pros: ['Simple and easy to adopt', 'Good quote-to-invoice workflow', 'QuickBooks and Xero support'],
    tradeoffs: ['Lighter dispatch and reporting', 'Not built for larger operations', 'Fewer advanced features'],
    alternatives: ['servicem8', 'jobber', 'kickserv', 'workiz'],
    sources: officialSources('Tradify', 'tradifyhq.com'),
    verification: pending(),
    commercial: { type: 'affiliate', affiliateLinkSlug: 'tradify', disclosure: DISCLOSURE },
    published: true,
  },
];

export const PRODUCT_MAP: Record<string, Product> = Object.fromEntries(
  PRODUCTS.map((p) => [p.slug, p]),
);

export function getProduct(slug: string): Product | undefined {
  return PRODUCT_MAP[slug];
}

export function publishedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.published);
}
