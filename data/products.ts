import type {
  FeatureKey,
  Integration,
  PricingModel,
  Product,
  ProductFeatureMatrix,
  ProductPlan,
  ProductPricing,
  Source,
  VerificationDates,
} from '@/types';

/**
 * SEED / DEVELOPMENT product data for the field service platforms (spec §4).
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

/** Dates facts were verified from official vendor sources. */
const PRICING_VERIFIED = '2026-09-11';
const INTEGRATIONS_VERIFIED = '2026-09-12';

interface VerifiedSources {
  website?: boolean;
  pricing?: boolean;
  integrations?: boolean;
}

function officialSources(name: string, domain: string, v: VerifiedSources = {}): Source[] {
  return [
    {
      title: `${name} official website`,
      url: `https://${domain}/`,
      type: 'official_documentation',
      accessedAt: v.website ? INTEGRATIONS_VERIFIED : null,
      verificationStatus: v.website ? 'verified' : 'needs_verification',
    },
    {
      title: `${name} pricing page`,
      url: `https://${domain}/pricing/`,
      type: 'official_pricing',
      accessedAt: v.pricing ? PRICING_VERIFIED : null,
      verificationStatus: v.pricing ? 'verified' : 'needs_verification',
    },
    {
      title: `${name} integrations directory`,
      url: `https://${domain}/integrations/`,
      type: 'official_integrations',
      accessedAt: v.integrations ? INTEGRATIONS_VERIFIED : null,
      verificationStatus: v.integrations ? 'verified' : 'needs_verification',
    },
  ];
}

/** Verification dates, with the given facts marked verified on their dates. */
function verifiedDates(
  v: {
    pricing?: boolean;
    integrations?: boolean;
    /** Per-product overrides when a single product was re-verified on a later date. */
    pricingOn?: string;
    editorialOn?: string;
  } = {},
): VerificationDates {
  return {
    ...pending(v.editorialOn),
    ...(v.pricing ? { pricingVerifiedAt: v.pricingOn ?? PRICING_VERIFIED } : {}),
    ...(v.integrations ? { integrationsVerifiedAt: INTEGRATIONS_VERIFIED } : {}),
  };
}

interface PlanOpts {
  includedUsers?: number;
  additionalUserPrice?: number;
  trialDays?: number;
  contract?: string;
  notes?: string;
  billingModel?: PricingModel;
  sourceUrl: string;
}

/** A verified, dated pricing plan sourced from the vendor's official pricing page. */
function plan(name: string, monthlyPrice: number | null, opts: PlanOpts): ProductPlan {
  return {
    name,
    monthlyPrice,
    annualPrice: null,
    currency: 'USD',
    billingModel: opts.billingModel ?? 'tiered',
    includedUsers: opts.includedUsers ?? null,
    additionalUserPrice: opts.additionalUserPrice ?? null,
    setupFee: null,
    trialDays: opts.trialDays ?? null,
    contract: opts.contract ?? null,
    isQuoteBased: false,
    notes: opts.notes,
    sourceUrl: opts.sourceUrl,
    verificationStatus: 'verified',
    verifiedAt: PRICING_VERIFIED,
  };
}

function verifiedPricing(model: PricingModel, freeTrial: boolean | null, plans: ProductPlan[]): ProductPricing {
  return { model, startingStatus: 'verified', freeTrial, plans };
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
      'Jobber is an all-in-one platform for small and growing home-service businesses. It puts scheduling, quoting, invoicing, client messaging and online payments in one place, and it is built to go live in days rather than through a formal implementation project.',
    website: 'https://getjobber.com',
    logoMark: 'Jb',
    brandColor: '#1f7a4d',
    bestFor: ['Small residential home-service teams', 'Owner-operators scaling to a handful of crews', 'Teams that want scheduling, quoting and invoicing without a rollout project'],
    notIdealFor: ['Enterprise HVAC/plumbing with complex commercial job costing', 'Multi-branch operations needing granular role controls', 'Teams needing an advanced flat-rate pricebook'],
    verdict:
      'The strong default for small residential service teams that want fast setup and a clean mobile app over deep enterprise configurability.',
    industries: ['hvac', 'plumbing', 'electrical', 'landscaping', 'cleaning', 'pool-service', 'appliance-repair', 'garage-door', 'locksmith'],
    companySizes: ['solo', '2-5', '6-10', '11-25'],
    businessModels: ['residential', 'both', 'route'],
    pricing: verifiedPricing('tiered', true, [
      plan('Core', 29, { includedUsers: 1, additionalUserPrice: 29, trialDays: 14, contract: 'Billed annually', sourceUrl: 'https://www.getjobber.com/pricing/' }),
      plan('Connect', 99, { includedUsers: 5, additionalUserPrice: 29, trialDays: 14, contract: 'Billed annually', sourceUrl: 'https://www.getjobber.com/pricing/' }),
      plan('Grow', 149, { includedUsers: 10, additionalUserPrice: 29, trialDays: 14, contract: 'Billed annually', sourceUrl: 'https://www.getjobber.com/pricing/' }),
      plan('Plus', 399, { includedUsers: 15, additionalUserPrice: 29, trialDays: 14, contract: 'Billed annually', sourceUrl: 'https://www.getjobber.com/pricing/' }),
    ]),
    implementation: 'low',
    implementationNotes: 'Self-serve onboarding designed for owner-operators; most teams can go live quickly without a paid implementation.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'crm', 'estimates', 'invoicing', 'payments', 'customer_notifications', 'online_booking', 'recurring_jobs', 'reporting', 'mobile_app', 'quickbooks_online'],
      partial: ['service_agreements', 'job_costing', 'customer_portal'],
      addOn: ['marketing_automation'],
      notAvailable: ['quickbooks_desktop', 'route_optimization'],
    }),
    integrations: accounting(true, false, false),
    pros: ['Live in days with self-serve setup', 'Clean mobile app field teams actually use', 'Strong client messaging, online booking and payments'],
    tradeoffs: ['No advanced flat-rate pricebook', 'Thin commercial job costing and multi-branch controls', 'Syncs QuickBooks Online only, no Desktop'],
    editorial: [
      {
        heading: 'Where Jobber fits, in plain terms',
        body: [
          'Jobber is built for small residential home-service teams that want to be running this week, not after a rollout project. Core starts at $29 a month billed annually with a single user, but the tier most teams actually land on is Connect at $99, which includes five users and the automation that earns its keep: appointment reminders, automated follow-ups and online booking. Grow ($149) adds quoting tools and ten users, and Plus ($399) covers fifteen. Extra seats are $29 each on every tier.',
          'The free trial runs 14 days, needs no credit card, and gives you the Grow feature set, so you can test the tools from the upper tiers before you decide which one you actually need.',
        ],
      },
      {
        heading: 'The costs that are not on the pricing page',
        body: [
          'The subscription is only part of the bill. If you collect payment through Jobber, card transactions run 2.9% plus 30 cents and ACH is 1%. That is normal for the category, but it adds up: a business invoicing $50,000 a month is paying roughly $1,500 a month in processing on top of the plan, so weigh that against any platform whose headline price looks higher.',
          'The other thing to sort out before you sign up is accounting. Jobber syncs with QuickBooks Online but not QuickBooks Desktop. If your bookkeeper still runs Desktop, that is the single biggest compatibility question to answer first, because there is no native workaround inside Jobber.',
        ],
      },
      {
        heading: 'What it is genuinely good at, and where it stops',
        body: [
          'The mobile app is the part field teams tend to actually like, and the client communication around it (on-my-way texts, online booking, automated follow-ups) is a real strength for residential work where the customer experience wins the repeat job.',
          'Where it stops is depth. There is no advanced flat-rate pricebook, commercial job costing is thin, and the administrative controls are not built for multi-branch operations. If you are a growing residential team, that is a fair trade and Jobber is a strong default. If you are moving toward commercial or enterprise work, you will outgrow it, and that is by design rather than a flaw.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'Across the major review platforms Jobber sits around 4.5 out of 5, and the praise is remarkably consistent: an easy all-in-one that small teams adopt fast, a quoting-to-invoicing flow people genuinely like, and a support team that gets singled out again and again as responsive and helpful.',
          'The recurring complaints are just as consistent. Reporting is basic, so if you want metrics like first-time-fix rate or customer lifetime value you will feel the ceiling quickly. The map and routing view frustrates people. And because it is built for service calls rather than multi-phase projects, you cannot run several invoices under one job. The jump past five users also comes up a lot as the point where the price starts to sting.',
        ],
      },
    ],
    alternatives: ['housecall-pro', 'workiz', 'fieldpulse', 'servicem8'],
    sources: officialSources('Jobber', 'getjobber.com', { website: true, pricing: true, integrations: true }),
    verification: verifiedDates({ pricing: true, integrations: true, pricingOn: '2026-09-13', editorialOn: '2026-09-13' }),
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
    industries: ['hvac', 'plumbing', 'electrical', 'cleaning', 'pool-service', 'appliance-repair', 'garage-door'],
    companySizes: ['solo', '2-5', '6-10', '11-25', '26-50'],
    businessModels: ['residential', 'both'],
    pricing: verifiedPricing('tiered', true, [
      plan('Basic', 59, { includedUsers: 1, trialDays: 14, contract: 'Billed annually', sourceUrl: 'https://www.housecallpro.com/pricing/' }),
      plan('Essentials', 149, { includedUsers: 5, trialDays: 14, contract: 'Billed annually', sourceUrl: 'https://www.housecallpro.com/pricing/' }),
      plan('Max', 299, { includedUsers: 8, additionalUserPrice: 35, trialDays: 14, contract: 'Billed annually', sourceUrl: 'https://www.housecallpro.com/pricing/' }),
    ]),
    implementation: 'low',
    implementationNotes: 'Primarily self-serve; higher tiers add onboarding assistance for larger teams.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'crm', 'estimates', 'invoicing', 'payments', 'customer_notifications', 'online_booking', 'marketing_automation', 'reporting', 'mobile_app', 'quickbooks_online', 'quickbooks_desktop'],
      partial: ['service_agreements', 'recurring_jobs', 'pricebook', 'financing'],
    }),
    integrations: accounting(true, true, false),
    pros: ['Strong marketing, reviews and reputation tools', 'Consumer-friendly online booking and Tap to Pay', 'Syncs both QuickBooks Online and Desktop'],
    tradeoffs: ['Much of the power sits in paid add-ons', 'Less suited to complex commercial workflows', 'Reporting depth trails enterprise platforms'],
    editorial: [
      {
        heading: 'Where Housecall Pro fits, in plain terms',
        body: [
          'Housecall Pro is built for residential home-service brands that compete on customer experience and marketing as much as on the work itself. Basic at $59 a month billed annually covers a single user and is really a starter tier; most teams land on Essentials at $149 for five users, and Max at $299 covers eight users with extra seats at $35 each. The 14-day trial needs no credit card.',
          'If your accounting is the deciding factor, this is a point in its favor over some rivals: Housecall Pro syncs with both QuickBooks Online and QuickBooks Desktop, so a Desktop bookkeeper is not a blocker.',
        ],
      },
      {
        heading: 'The add-ons are where the bill grows',
        body: [
          'The plan price is the floor, not the ceiling. A lot of what makes Housecall Pro powerful lives in paid add-ons on top of the subscription: the built-in phone system, marketing campaigns, sales proposal and pipeline tools, payroll, and vehicle GPS or dashcams. None of that is wrong, but it means the honest cost is your plan plus the add-ons you will actually use, so price it that way rather than off the headline number.',
          'As with any platform that collects card payments in-app, processing fees apply on top as well, so factor those in if you invoice heavily.',
        ],
      },
      {
        heading: 'What it is genuinely good at, and where it stops',
        body: [
          'The marketing, reviews and consumer booking experience are the strongest part of the package, and for a residential brand trying to win and keep customers, that is exactly the right emphasis. Postcard and email campaigns, automated review requests and a polished booking flow are all first-class here.',
          'Where it stops is heavier operations: complex commercial workflows, deep inventory or project management, and enterprise multi-entity setups are not its home turf. If you are a growing residential company, that trade is fine. If you are moving into large commercial work, look higher up the range.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'On Capterra Housecall Pro rates highly, around 4.7, and owners of five-to-fifteen-technician residential shops report real gains in scheduling, payments and customer engagement. The customer-facing polish is what fans point to.',
          'The complaints are worth taking seriously, and its Trustpilot score has slipped over the past couple of years. The single most common one is cost creep: people sign up near $149 and find themselves closer to $300 or $400 a few months later after switching on add-ons they assumed were included. Support wait times, aggressive sales outreach and occasional billing problems also recur, and it is a weak fit for project-based and solo operators.',
        ],
      },
    ],
    alternatives: ['jobber', 'workiz', 'fieldpulse', 'service-fusion'],
    sources: officialSources('Housecall Pro', 'housecallpro.com', { website: true, pricing: true, integrations: true }),
    verification: verifiedDates({ pricing: true, integrations: true, pricingOn: '2026-09-13', editorialOn: '2026-09-13' }),
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
      available: ['scheduling', 'dispatching', 'crm', 'estimates', 'invoicing', 'payments', 'customer_notifications', 'online_booking', 'service_agreements', 'recurring_jobs', 'pricebook', 'inventory', 'gps_tracking', 'job_costing', 'financing', 'call_tracking', 'marketing_automation', 'reporting', 'multi_location', 'mobile_app', 'api', 'quickbooks_online', 'quickbooks_desktop'],
      partial: ['offline_mode', 'customer_portal'],
    }),
    integrations: [...accounting(true, true, false), { name: 'Open API', category: 'automation', support: 'available' }],
    pros: ['Deep pricebook, financing and reporting', 'Strong dispatch and call-booking workflows', 'Scales to large, multi-department operations'],
    tradeoffs: ['Quote-based, and among the priciest in the category', 'Multi-week implementation with real setup fees', 'Overkill for very small teams'],
    editorial: [
      {
        heading: 'What you are actually buying',
        body: [
          'ServiceTitan is the enterprise end of this market. The depth is real: a best-in-class flat-rate pricebook, mature dispatch and call-booking, built-in consumer financing, and reporting that larger trades genuinely run the business on. It is built for established residential and commercial companies that have dedicated office and dispatch staff to drive it.',
          'That same depth is why it is the wrong tool for a two-person shop. The value only shows up when you have the volume and the team structure to use the dispatch board, the pricebook and the reporting the way they are meant to be used.',
        ],
      },
      {
        heading: 'What it really costs',
        body: [
          'ServiceTitan does not publish pricing, so anyone quoting you an exact number online is guessing. What is consistent across contractor reports is the shape of the cost, not a fixed figure. It is quoted per technician, and widely reported figures land somewhere around $245 to $400 per technician per month depending on size, modules and negotiation.',
          'Two things push the real number higher than the per-tech rate suggests. First, implementation is a paid, structured project, commonly reported in the $5,000 to $15,000 range for smaller companies and higher for larger rollouts. Second, the platform is modular: Marketing Pro, Phones Pro, FleetPro and payment processing are added on, and office staff who need logins are seats too. Contractors running a ten-truck shop often describe an all-in monthly cost well into four or five figures once everything is switched on. Treat every number here as reported by third parties, then get a real quote for your own situation.',
        ],
      },
      {
        heading: 'Who should look, and who should not',
        body: [
          'If you are a larger, growth-focused trade that will actually use enterprise depth, and you can absorb a multi-week rollout and a serious budget, ServiceTitan is the most capable option in the category and often worth it.',
          'If you are solo or a small team, want the lowest cost, or need to be live in days rather than weeks, this is not your tool, and forcing it will cost you money and momentum. Look at the mid-market and small-business platforms instead.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'Users credit ServiceTitan as a genuinely all-in-one system that centralizes scheduling, dispatch, inventory and finance in one place, and larger shops that use it fully tend to defend it strongly.',
          'The complaints are almost all about commitment and cost rather than capability. Contracts are typically multi-year with steep early-exit fees (users report being quoted thousands of dollars to leave), there is no free trial, onboarding is long, and support can be slow. Technicians also report the mobile app crashing and losing data offline. The clear takeaway from reviews: negotiate hard and get every contract term in writing before you sign.',
        ],
      },
    ],
    alternatives: ['fieldedge', 'buildops', 'simpro', 'workiz'],
    sources: officialSources('ServiceTitan', 'servicetitan.com', { website: true, integrations: true }),
    verification: verifiedDates({ integrations: true, editorialOn: '2026-09-13' }),
    commercial: { type: 'referral', affiliateLinkSlug: 'servicetitan', disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'workiz',
    name: 'Workiz',
    vendorName: 'Workiz',
    tagline: 'Field service software with strong built-in phone and lead tracking.',
    description:
      'Workiz targets small-to-mid service businesses with a focus on communication, built-in phone system, call tracking and messaging, alongside scheduling, dispatch, estimates and invoicing.',
    website: 'https://workiz.com',
    logoMark: 'Wk',
    brandColor: '#00b3a4',
    bestFor: ['Service businesses that live on the phone (locksmith, garage door, appliance)', 'Small-to-mid teams wanting call tracking built in', 'Companies focused on lead-to-job conversion'],
    notIdealFor: ['Enterprise commercial contractors', 'Businesses needing deep project management', 'Very large multi-branch operations'],
    verdict:
      'A pragmatic choice for phone-driven service trades that want communication and lead tracking tightly coupled to scheduling.',
    industries: ['hvac', 'plumbing', 'electrical', 'appliance-repair', 'garage-door', 'locksmith', 'other'],
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
    tradeoffs: ['Pricing now sits behind a quote request', 'Less depth for commercial job costing', 'Reporting is lighter than enterprise tools'],
    editorial: [
      {
        heading: 'Where Workiz fits, in plain terms',
        body: [
          'Workiz is built for trades where the job starts with a phone call. Locksmiths, garage-door companies, appliance repair, junk removal and similar service businesses live and die on lead handling, and Workiz puts a built-in phone system, call tracking and messaging right next to the schedule. That tight loop from inbound call to booked job is the real reason to pick it over a more general tool.',
          'If your business is not phone-driven, that headline strength matters less, and a broader all-in-one may serve you better.',
        ],
      },
      {
        heading: 'Pricing moved behind a quote',
        body: [
          'Worth knowing before you shortlist it: during 2026 Workiz shifted away from openly published tiers toward a request-pricing model, so the site now points you to a demo rather than a price. Last-published rates reported by third parties put the main plans roughly in the $225 to $325 a month range for a handful of users, with extra seats around $46 to $54, but those are not official and the model has changed, so treat them as a ballpark and confirm your own number directly.',
        ],
      },
      {
        heading: 'What it is good at, and where it stops',
        body: [
          'For lead-to-job conversion in a phone-heavy shop, Workiz is genuinely strong: you can see which marketing brings the calls, route them fast, and keep the whole conversation attached to the job. Adoption is straightforward and does not need a formal rollout.',
          'Where it thins out is the heavier end: commercial job costing, granular enterprise controls and deep reporting are not its focus. Growing residential and light-commercial teams fit well; large commercial contractors will want more.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'On the review sites Workiz rates well, around 4.4 to 4.6, and the phone-driven features are what fans single out: call masking and recording, automated client reminders, online booking and AI call answering.',
          'The louder warnings show up on Trustpilot, where the recurring themes are billing that continues after a cancellation request, long delays porting a business phone number back out, and shifting account managers. The practical advice from users is sound and worth following: start month-to-month, get the cancellation process confirmed in writing, and do not port your main business number over until you are sure you are staying.',
        ],
      },
    ],
    alternatives: ['jobber', 'housecall-pro', 'fieldpulse', 'kickserv'],
    sources: officialSources('Workiz', 'workiz.com', { website: true, integrations: true }),
    verification: verifiedDates({ integrations: true, editorialOn: '2026-09-13' }),
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
    pricing: { model: 'quote', startingStatus: 'not_disclosed', freeTrial: null, plans: [] },
    implementation: 'moderate',
    implementationNotes: 'Onboarding support available; broader feature set means a slightly larger setup than starter tools.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'crm', 'estimates', 'invoicing', 'payments', 'customer_notifications', 'recurring_jobs', 'job_costing', 'reporting', 'mobile_app', 'quickbooks_online', 'quickbooks_desktop', 'xero'],
      partial: ['service_agreements', 'inventory', 'gps_tracking', 'online_booking', 'pricebook'],
      planDependent: ['api'],
    }),
    integrations: accounting(true, true, true),
    pros: ['Broad feature coverage for the price band', 'Syncs QuickBooks Online, Desktop and Xero', 'Actively developed with a growing feature set'],
    tradeoffs: ['Quote-based, with no public pricing', 'Add-ons (VoIP, fleet, AI dispatch) cost extra', 'Some features still maturing'],
    editorial: [
      {
        heading: 'Where FieldPulse fits, in plain terms',
        body: [
          'FieldPulse aims squarely at the gap between starter tools and enterprise platforms: growing, often multi-trade contractors who have outgrown a basic app but do not want the cost and rollout of the big systems. The breadth is the draw. It covers scheduling, estimating, invoicing, job costing and team management, and on the accounting side it syncs with QuickBooks Online, QuickBooks Desktop and Xero, which is unusually wide for this price band and a genuine advantage if your books do not live in QuickBooks Online.',
        ],
      },
      {
        heading: 'Pricing is quote-based, so read the add-ons',
        body: [
          'FieldPulse does not publish prices. It uses a per-seat quote with a base subscription plus paid add-ons, so you book a demo to get a real number. Contractor-reported figures give a rough sense of scale, somewhere around $99 a month for a small team up to $399 or more for larger crews before extras, but those are third-party estimates, not official rates.',
          'The part to watch is the add-ons. Features like the VoIP phone system, AI dispatching and fleet tracking (commonly reported around $30 per vehicle per month) sit on top of the base, so when you get your quote, price it with the pieces you will actually switch on rather than the base alone.',
        ],
      },
      {
        heading: 'What it is good at, and where it stops',
        body: [
          'For a growing multi-trade shop, FieldPulse gives you a lot of functionality for the money and it is being actively developed, so the feature set keeps widening. That momentum is a real part of the pitch.',
          'The trade-offs are a smaller brand footprint than the incumbents and a few areas that still feel like they are maturing. It is not built to be a true enterprise platform, so if you are heading into large, complex commercial operations, weigh it against the heavier tools before committing.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'FieldPulse rates very highly on the review sites, around 4.8, with consistent praise for an intuitive all-in-one, the guided job-stage checklists that keep technicians consistent, US-based support and hands-on onboarding, and a genuinely usable offline mode.',
          'Two complaints recur. The hidden pricing frustrates people who want to compare on paper before a sales call. And, importantly if accounting drives your choice, several reviewers single out the QuickBooks Desktop sync as unreliable, creating duplicate entries and needing manual fixes. So while FieldPulse does support Desktop, treat that sync as something to test hard during the trial rather than assume, especially if your books live in Desktop.',
        ],
      },
    ],
    alternatives: ['jobber', 'housecall-pro', 'service-fusion', 'kickserv'],
    sources: officialSources('FieldPulse', 'fieldpulse.com', { website: true, integrations: true }),
    verification: verifiedDates({ integrations: true, editorialOn: '2026-09-13' }),
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
    pricing: verifiedPricing('tiered', null, [
      plan('Starter', 208, { notes: 'Unlimited users', contract: 'Billed annually', sourceUrl: 'https://www.servicefusion.com/pricing/' }),
      plan('Plus', 325, { notes: 'Unlimited users', contract: 'Billed annually', sourceUrl: 'https://www.servicefusion.com/pricing/' }),
      plan('Pro', 533, { notes: 'Unlimited users', contract: 'Billed annually', sourceUrl: 'https://www.servicefusion.com/pricing/' }),
    ]),
    implementation: 'moderate',
    implementationNotes: 'Guided onboarding available; QuickBooks setup is a common part of implementation.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'crm', 'estimates', 'invoicing', 'payments', 'customer_notifications', 'recurring_jobs', 'reporting', 'mobile_app', 'quickbooks_online', 'quickbooks_desktop'],
      partial: ['service_agreements', 'inventory', 'gps_tracking', 'job_costing'],
    }),
    integrations: accounting(true, true, false),
    pros: ['Flat pricing with unlimited users', 'Strong QuickBooks Online and Desktop support', 'Suited to office-driven dispatch'],
    tradeoffs: ['Interface feels dated next to newer rivals', 'Lighter marketing tools', 'No free trial, demo only'],
    editorial: [
      {
        heading: 'The pricing model is the real story',
        body: [
          'Most field service tools charge per user, so a bigger team means a bigger bill every month. Service Fusion does the opposite: its plans are flat and include unlimited users. Starter is $208 a month billed annually, Plus is $325, and Pro is $533, and you can add the whole office and every technician without the seat count moving the price.',
          'That one design choice is why an established shop with a dozen or more people often lands here. Run the math against a per-seat competitor at your headcount and the flat model can come out dramatically cheaper. There is no free trial, so you evaluate it through a demo rather than a self-serve signup.',
        ],
      },
      {
        heading: 'Where it earns its keep',
        body: [
          'Service Fusion has been around a long time and it shows in the right ways: dependable scheduling and dispatch built for an office that runs the board, and genuinely strong QuickBooks support for both Online and Desktop, which matters because a lot of established trades still run Desktop. Inventory, job costing and integrated voice and text arrive on the Plus tier and up.',
        ],
      },
      {
        heading: 'Where it shows its age',
        body: [
          'The trade for that stability is polish. The interface feels dated next to the newest entrants, and the marketing and customer-experience tooling is lighter than the residential-focused brands. If a modern look and built-in marketing are high on your list, weigh that. If predictable operations and flat pricing for a full team matter more, it is a practical, proven choice.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'Users like Service Fusion for easy setup, responsive support, customizable invoicing and, above all, the flat unlimited-user pricing, which several reviewers call the best-value part of the platform for a growing team.',
          'The recurring complaints center on performance and the app. Search and saves slow down as your job volume climbs, the Android app rates far below the iOS one, inventory management is widely called weak, and there is no offline mode at all. If your crews are Android-heavy or regularly work without signal, weigh those two points carefully before committing.',
        ],
      },
    ],
    alternatives: ['fieldpulse', 'kickserv', 'housecall-pro', 'fieldedge'],
    sources: officialSources('Service Fusion', 'servicefusion.com', { website: true, pricing: true, integrations: true }),
    verification: verifiedDates({ pricing: true, integrations: true, pricingOn: '2026-09-13', editorialOn: '2026-09-13' }),
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
      available: ['scheduling', 'dispatching', 'crm', 'estimates', 'invoicing', 'payments', 'service_agreements', 'recurring_jobs', 'pricebook', 'reporting', 'mobile_app', 'quickbooks_desktop', 'quickbooks_online'],
      partial: ['customer_notifications', 'inventory', 'gps_tracking', 'job_costing'],
    }),
    integrations: accounting(true, true, false),
    pros: ['Deep QuickBooks Desktop integration', 'Strong service-agreement management', 'Flat-rate pricebook for the trades'],
    tradeoffs: ['Quote-based pricing, so no public number', 'Built around QuickBooks Desktop, less so Online-only', 'UI less modern than newest entrants'],
    editorial: [
      {
        heading: 'The QuickBooks Desktop specialist',
        body: [
          'FieldEdge has a clear identity: it is built for established HVAC, plumbing and electrical contractors whose back office runs on QuickBooks Desktop. Its two-way Desktop sync is deeper than most rivals bother with, and if that describes your accounting, it removes the single biggest headache in this whole category, keeping the field and the books in step without double entry.',
          'The flip side is the same fact in reverse. If you are a cloud-only shop living entirely in QuickBooks Online, FieldEdge is less naturally your tool, and something built Online-first may fit better.',
        ],
      },
      {
        heading: 'Built for maintenance-driven trades',
        body: [
          'Beyond accounting, FieldEdge is strong where the mechanical trades make their steadier money: service agreements and a flat-rate pricebook. If recurring maintenance contracts are a real part of your business, managing them properly rather than by spreadsheet is where a lot of the value shows up.',
        ],
      },
      {
        heading: 'What to weigh',
        body: [
          'Pricing is quote-based, so you will not find a number on the site, expect to talk to sales and budget for a moderate, guided implementation that includes the QuickBooks setup. The interface is functional rather than flashy. For a Desktop-centric mechanical contractor that leans on maintenance agreements, that is a fair trade for the integration depth. For a lean, cloud-native startup, look elsewhere first.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'FieldEdge is repeatedly named the go-to for established HVAC shops running on QuickBooks Desktop, and users value the two-way Desktop sync, call-source and maintenance-agreement tracking, and the Coolfront flat-rate pricing.',
          'The complaints are notable precisely because accounting is its headline strength. Several reviewers report QuickBooks sync glitches and data issues, along with system downtime that can lock out both office and field, an aging mobile experience, no free trial, an annual contract, and limited custom reporting. The sensible move from those reviews: test the Desktop sync on your own data during evaluation rather than taking the integration on faith.',
        ],
      },
    ],
    alternatives: ['servicetitan', 'service-fusion', 'housecall-pro', 'simpro'],
    sources: officialSources('FieldEdge', 'fieldedge.com', { website: true, integrations: true }),
    verification: verifiedDates({ integrations: true, editorialOn: '2026-09-13' }),
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
    industries: ['hvac', 'plumbing', 'electrical', 'landscaping', 'cleaning', 'pool-service', 'appliance-repair', 'locksmith'],
    companySizes: ['solo', '2-5', '6-10'],
    businessModels: ['residential', 'both'],
    pricing: verifiedPricing('tiered', true, [
      plan('Start', 60, { includedUsers: 5, trialDays: 30, contract: 'Month-to-month (annual billing saves 20%)', sourceUrl: 'https://www.kickserv.com/pricing/' }),
      plan('Run', 119, { includedUsers: 10, trialDays: 30, contract: 'Month-to-month (annual billing saves 20%)', sourceUrl: 'https://www.kickserv.com/pricing/' }),
      plan('Scale', 199, { includedUsers: 20, trialDays: 30, contract: 'Month-to-month (annual billing saves 20%)', sourceUrl: 'https://www.kickserv.com/pricing/' }),
    ]),
    implementation: 'low',
    implementationNotes: 'Light, self-serve setup suited to very small teams.',
    features: matrix({
      available: ['scheduling', 'crm', 'estimates', 'invoicing', 'payments', 'reporting', 'mobile_app', 'quickbooks_online', 'quickbooks_desktop', 'xero'],
      partial: ['dispatching', 'customer_notifications', 'recurring_jobs'],
      notAvailable: ['financing', 'call_tracking'],
    }),
    integrations: accounting(true, true, true),
    pros: ['Accessible pricing for small teams', 'Generous 30-day free trial', 'Simple and quick to learn'],
    tradeoffs: ['Lighter dispatch and pricebook', 'QuickBooks Desktop sync is a paid add-on', 'Not built for larger operations'],
    editorial: [
      {
        heading: 'The budget-conscious starter',
        body: [
          'Kickserv is aimed at small service businesses that want the essentials done well without paying for depth they will never use. Start is $60 a month for five users, Run is $119 for ten, and Scale is $199 for twenty, and unusually for this category the free trial runs a full 30 days, which is long enough to actually run real jobs through it before you decide.',
          'For an owner-operator or a small crew that mainly needs CRM, estimates, scheduling and invoicing with clean QuickBooks sync, it covers the bases at a friendly price.',
        ],
      },
      {
        heading: 'The details that affect the real cost',
        body: [
          'Two things are worth knowing before you sign up. First, if you run QuickBooks Desktop, that sync is a paid add-on (reported around $50 a month) on the Run tier and up, rather than being built into the base price, so factor it in. Second, Kickserv runs a Kickback program that discounts your subscription by 5% if you process a minimum amount of online payments each month, which can offset the cost if you already take card payments through it.',
        ],
      },
      {
        heading: 'Where it stops',
        body: [
          'The trade for that simplicity is depth. Dispatch and the pricebook are lighter than the trade-focused platforms, and it is not built to run a larger multi-crew operation. If you are growing fast or need advanced scheduling and pricebook tools, you will likely outgrow it, but for a small team watching the budget, that is rather the point.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'Kickserv earns solid marks, around 4.4 with roughly 88 percent satisfaction, for being easy to learn, a clean calendar view, and useful customer-facing touches like seeing when an invoice or estimate has been opened.',
          'The complaints are the ones you would expect from a budget tool: reporting is basic, the workflows are not very flexible for unusual businesses, the mobile app can be glitchy and slow, and the interface feels dated next to newer, AI-driven platforms. The QuickBooks Desktop add-on fee also comes up as a transparency gripe. For a small team that wants the essentials cheaply, most reviewers still find the trade worth it.',
        ],
      },
    ],
    alternatives: ['jobber', 'workiz', 'service-fusion', 'servicem8'],
    sources: officialSources('Kickserv', 'kickserv.com', { website: true, pricing: true, integrations: true }),
    verification: verifiedDates({ pricing: true, integrations: true, pricingOn: '2026-09-13', editorialOn: '2026-09-13' }),
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
    industries: ['plumbing', 'electrical', 'hvac', 'cleaning', 'pool-service', 'garage-door'],
    companySizes: ['solo', '2-5', '6-10'],
    businessModels: ['residential', 'both'],
    pricing: verifiedPricing('tiered', true, [
      plan('Free', 0, { notes: 'Unlimited users · 30 jobs/mo', sourceUrl: 'https://www.servicem8.com/us/pricing' }),
      plan('Starter', 29, { trialDays: 14, notes: 'Unlimited users · 50 jobs/mo', sourceUrl: 'https://www.servicem8.com/us/pricing' }),
      plan('Growing', 79, { trialDays: 14, notes: 'Unlimited users · 150 jobs/mo', sourceUrl: 'https://www.servicem8.com/us/pricing' }),
      plan('Premium', 149, { trialDays: 14, notes: 'Unlimited users · 500 jobs/mo', sourceUrl: 'https://www.servicem8.com/us/pricing' }),
      plan('Premium Plus', 349, { trialDays: 14, notes: 'Unlimited users · 1,500+ jobs/mo', sourceUrl: 'https://www.servicem8.com/us/pricing' }),
    ]),
    implementation: 'low',
    implementationNotes: 'Very light, self-serve setup; strongest on Apple devices.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'estimates', 'invoicing', 'payments', 'customer_notifications', 'mobile_app', 'online_booking', 'quickbooks_online', 'xero'],
      partial: ['crm', 'recurring_jobs', 'reporting'],
      notAvailable: ['pricebook', 'financing'],
    }),
    integrations: accounting(true, false, true),
    pros: ['Priced by jobs, not users, so crews add for free', 'Free plan and a genuinely light footprint', 'Good mobile-first job flow'],
    tradeoffs: ['Best on Apple devices, weaker on Android', 'Lighter reporting', 'Not for larger operations'],
    editorial: [
      {
        heading: 'Priced by jobs, not by people',
        body: [
          'ServiceM8 does one thing differently that changes the whole calculation: it charges by how many jobs you run per month, not by how many users you have. Every plan includes unlimited users. There is a free tier for 30 jobs a month, then Starter at $29 for 50 jobs, Growing at $79 for 150, Premium at $149 for 500, and Premium Plus at $349 for 1,500 or more.',
          'For a small team that runs a modest number of larger jobs, that model is unusually cheap, because you can put the whole crew on it without paying per seat. For a high-volume shop doing hundreds of small jobs, the job count is the thing to watch, since that is what moves you up the tiers.',
        ],
      },
      {
        heading: 'The Apple question',
        body: [
          'ServiceM8 was built Apple-first, and it is at its best on iPhones and iPads. There is web access, but if your technicians are on Android, this is the single biggest thing to test before committing, because the experience is not as complete there. For an iOS-based micro business, the mobile job flow is genuinely slick and quick to pick up.',
        ],
      },
      {
        heading: 'Where it stops',
        body: [
          'This is a light tool by design. Reporting is thinner than the bigger platforms, there is no flat-rate pricebook or financing, and it is not meant to run a large operation. On accounting it syncs with QuickBooks Online and Xero but not Desktop. For a solo operator or a small Apple-based trade that wants essentials without overhead, that is exactly the trade you want.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'ServiceM8 users praise a smooth, simple interface, real-time tracking, and on-site quoting and invoicing that fit how field technicians actually work, especially on the polished iOS app.',
          'The consistent knocks are a slow, clunky invoicing flow, a reliance on a solid internet connection, and above all the weak Android story. A lighter Android app arrived in 2024 and expanded in 2025, but the vendor still steers main technicians toward iPhones, so an Android-first crew should test it thoroughly before committing rather than assume parity with the iOS experience.',
        ],
      },
    ],
    alternatives: ['jobber', 'tradify', 'kickserv', 'workiz'],
    sources: officialSources('ServiceM8', 'servicem8.com', { website: true, pricing: true, integrations: true }),
    verification: verifiedDates({ pricing: true, integrations: true, pricingOn: '2026-09-13', editorialOn: '2026-09-13' }),
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
    pros: ['Strong estimating, project and job costing', 'Genuinely deep inventory and catalog', 'Built for commercial and project complexity'],
    tradeoffs: ['High implementation effort', 'Overkill for simple residential', 'Quote-based, no public pricing'],
    editorial: [
      {
        heading: 'Built for the complicated jobs',
        body: [
          'Simpro is not a residential quick-job tool, and it does not try to be. It is built for commercial and project-based trades, the kind of work that involves multi-stage jobs, real material lists, progress billing and margins you have to actually manage. Its estimating, inventory and job costing go deeper than almost anything aimed at small residential shops, which is exactly why a project contractor would look at it and a two-person repair business would not.',
        ],
      },
      {
        heading: 'Where it stands out',
        body: [
          'The inventory and catalog handling is a genuine strength. If you carry significant stock, buy materials against jobs, and need to know the true cost and margin on complex work, this is the sort of tool that pays for itself by stopping the leaks. Multi-location support and solid reporting back that up for larger operations.',
        ],
      },
      {
        heading: 'What you are signing up for',
        body: [
          'Depth this heavy comes with a real rollout. Implementation is a structured, guided project, not a weekend, and pricing is quote-based, so you talk to sales rather than read a number off the page. On accounting it syncs with QuickBooks Online and Xero. For a commercial or project-driven trade that needs this, it is capable and worth the effort. For a simple residential operation, it is more system than the work requires.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'Where Simpro fits, larger commercial and project contractors, users value the depth: strong scheduling, real inventory, and job costing that holds up on multi-stage work, with good initial contact from the vendor.',
          'The complaints cluster in two places. Implementation is heavy, with time-consuming data transfer and configuration and an interface that feels dated (forget to save and you can lose work). And the contracts are firm, with reported multi-year lock-ins, annual increases and exit fees. Tellingly, the negative reviews concentrate among small two-to-ten-person shops that were simply too small for it, which is a size-fit warning more than a quality one.',
        ],
      },
    ],
    alternatives: ['servicetitan', 'buildops', 'commusoft', 'fieldpulse'],
    sources: officialSources('Simpro', 'simprogroup.com', { website: true, integrations: true }),
    verification: verifiedDates({ integrations: true, editorialOn: '2026-09-13' }),
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
      available: ['scheduling', 'dispatching', 'estimates', 'invoicing', 'service_agreements', 'inventory', 'job_costing', 'reporting', 'mobile_app', 'multi_location', 'api', 'quickbooks_online', 'quickbooks_desktop'],
      partial: ['crm', 'payments', 'gps_tracking', 'customer_notifications'],
    }),
    integrations: accounting(true, true, false),
    pros: ['Modern interface, rare in commercial FSM', 'Combines service and project management', 'Built for commercial mechanical and electrical'],
    tradeoffs: ['Not aimed at residential or small business', 'Quote-based, no free trial', 'Enterprise implementation commitment'],
    editorial: [
      {
        heading: 'The modern option for commercial contractors',
        body: [
          'Most software built for serious commercial contractors feels like it was designed a decade ago. BuildOps is the counter-example: it targets commercial specialty trades, mechanical, HVAC and electrical at scale, and it does it with a genuinely modern, mobile-forward interface. For a commercial contractor whose technicians have quietly hated their old system for years, that alone is a real draw.',
        ],
      },
      {
        heading: 'Service and project in one place',
        body: [
          'The other part of the pitch is scope. Commercial contractors often run both recurring service work and larger projects, and historically that meant two systems that did not talk. BuildOps aims to hold both in one platform, with the service agreements, inventory, job costing and reporting that commercial operations actually need. When it fits, that consolidation is the main reason teams move.',
        ],
      },
      {
        heading: 'Who it is not for',
        body: [
          'This is squarely an enterprise-leaning commercial tool. There is no self-serve free trial, pricing is quote-based, and onboarding is a structured implementation. If you are a residential shop, a solo operator, or you want a low-cost starter tool, BuildOps is not the right call and will feel like too much. It earns its place with commercial specialty contractors that have the scale to use it.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'Commercial contractors like that BuildOps is built for their world without the residential clutter, that it centralizes service and project work in one system, and that the support team is responsive through onboarding and troubleshooting.',
          'The trade-offs are a steep learning curve, a mobile interface some reviewers find cluttered, and a cost that feels high for smaller teams. Setup typically runs four to eight weeks and pricing is quote-only. Reviewers are clear about the sweet spot: commercial mechanical and specialty shops around several million dollars in revenue and up, where the depth pays for the effort.',
        ],
      },
    ],
    alternatives: ['servicetitan', 'simpro', 'servicetrade', 'commusoft'],
    sources: officialSources('BuildOps', 'buildops.com', { website: true, integrations: true }),
    verification: verifiedDates({ integrations: true, editorialOn: '2026-09-13' }),
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
      'A good fit for maintenance-driven trades that need deep service-contract and planned-maintenance management.',
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
    pros: ['Strong planned-maintenance and service contracts', 'Handles many properties per client well', 'Solid QuickBooks Online and Xero sync'],
    tradeoffs: ['Quote-based, no public pricing', 'More than very small teams need', 'Setup requires mapping your maintenance workflows'],
    editorial: [
      {
        heading: 'The maintenance-contract specialist',
        body: [
          'Commusoft is built around a specific kind of business: one that lives on planned, recurring maintenance rather than one-off calls. If a big part of your revenue is service contracts, scheduled inspections and keeping many properties for the same client on track, this is a platform designed for exactly that, and it handles the recurring scheduling and contract management more thoroughly than general-purpose tools.',
        ],
      },
      {
        heading: 'Where it fits',
        body: [
          'The multi-property handling is a genuine differentiator. Commercial and property-management clients often have dozens of sites under one account, and keeping the service history, contracts and billing straight across all of them is where lighter tools fall down and Commusoft holds up. It syncs cleanly with QuickBooks Online and Xero on the accounting side.',
        ],
      },
      {
        heading: 'What to weigh',
        body: [
          'This is not a tool for a solo operator doing occasional jobs, and the value only appears once you have real maintenance workflows to run. Pricing is quote-based, and setup takes some planning because you are configuring how your contracts and planned maintenance actually work. For a maintenance-driven trade, that upfront effort is the point. For simple one-off residential work, it is more than you need.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'Commusoft rates very highly, around 94 percent satisfaction, with maintenance-driven contractors, who praise the end-to-end job flow, planned-maintenance scheduling, an offline mobile app and strong support, all without a six-figure implementation.',
          'The cautions are contractual and worth reading closely. Pricing is not public, the 12-month term auto-renews with the right to raise prices annually, and users note strict terms (falling only a little late on an invoice can be treated as a default). Fleet GPS and advanced pipeline management cost extra, so map out which add-ons you will actually need before you sign the contract.',
        ],
      },
    ],
    alternatives: ['simpro', 'servicetrade', 'fieldedge', 'servicetitan'],
    sources: officialSources('Commusoft', 'commusoft.com', { website: true, integrations: true }),
    verification: verifiedDates({ integrations: true, editorialOn: '2026-09-13' }),
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
      available: ['scheduling', 'dispatching', 'crm', 'estimates', 'invoicing', 'payments', 'customer_notifications', 'inventory', 'gps_tracking', 'reporting', 'mobile_app', 'multi_location', 'api', 'quickbooks_online', 'xero', 'quickbooks_desktop'],
      partial: ['service_agreements', 'recurring_jobs', 'route_optimization', 'job_costing'],
    }),
    integrations: [...accounting(true, true, true), { name: 'Open API', category: 'automation', support: 'available' }],
    pros: ['Highly configurable workflows', 'Broad integration and open API support', 'Strong automation for custom processes'],
    tradeoffs: ['Configurability means more setup work', 'Quote-based, no public pricing', 'Not a turnkey micro-business tool'],
    editorial: [
      {
        heading: 'Flexibility is the whole pitch',
        body: [
          'Zuper sells configurability. Where most field service tools ask you to work the way the software works, Zuper is built to be shaped around your process, with custom workflows, heavy automation and a broad integration and open-API layer. For a mid-market or enterprise team whose operations do not fit a standard template, that flexibility is the reason to look at it.',
        ],
      },
      {
        heading: 'Who it suits',
        body: [
          'It fits best where integration and automation matter: teams that need the field service system to plug into other business software and to automate steps that would otherwise be manual. On accounting it covers QuickBooks Online, Desktop and Xero, and the open API means the technical ceiling is high if you have the appetite to build against it.',
        ],
      },
      {
        heading: 'The cost of configurability',
        body: [
          'Flexibility is not free. The same configurability that makes Zuper powerful means setup is more involved than a turnkey tool, and the effort scales with how much you customize. Pricing is quote-based. If you are a small team that just wants something that works out of the box, this is more platform than you need. If you have specific workflows and the will to configure them, that is where it earns its place.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'Zuper users highlight flexible scheduling, real-time technician tracking, strong configurability and Salesforce integration, and a support team that is praised particularly during implementation.',
          'The complaints match the flexible-but-not-turnkey positioning: a steep learning curve and an interface some find non-intuitive, mobile sync delays, clunky reporting, and a sense that it is expensive for what you get versus alternatives. The user community is smaller than the big platforms too, so there is less peer knowledge to lean on when you hit a wall. Review counts are modest, so weigh these as directional.',
        ],
      },
    ],
    alternatives: ['servicetitan', 'simpro', 'buildops', 'fieldpulse'],
    sources: officialSources('Zuper', 'zuper.co', { website: true, integrations: true }),
    verification: verifiedDates({ integrations: true, editorialOn: '2026-09-13' }),
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
      available: ['scheduling', 'dispatching', 'estimates', 'invoicing', 'service_agreements', 'recurring_jobs', 'reporting', 'mobile_app', 'customer_portal', 'quickbooks_online', 'api', 'quickbooks_desktop'],
      partial: ['crm', 'inventory', 'payments', 'multi_location'],
    }),
    integrations: [...accounting(true, true, false), { name: 'Open API', category: 'automation', support: 'available' }],
    pros: ['Strong inspection and compliance workflows', 'Polished customer-facing reporting and portal', 'Deep service history for recurring accounts'],
    tradeoffs: ['Not for residential or small shops', 'Quote-based, no public pricing', 'Deliberately narrow focus'],
    editorial: [
      {
        heading: 'Focused on commercial inspections',
        body: [
          'ServiceTrade knows exactly who it is for: commercial mechanical contractors and, especially, fire and life-safety businesses that run on inspections. Where a general tool treats an inspection as just another job, ServiceTrade builds around the inspection and compliance workflow, the deficiencies it turns up, and the follow-on repair work that comes from it. For that kind of contractor, that focus is the point.',
        ],
      },
      {
        heading: 'The customer-facing side is the edge',
        body: [
          'Its standout strength is how it presents work back to the customer. The service history, the online reports and the customer portal are genuinely polished, which matters in commercial service where you are proving value to a facilities manager, not just fixing a unit. When a client can log in and see exactly what was inspected and what needs attention, renewals and repair approvals get easier.',
        ],
      },
      {
        heading: 'Know the boundaries',
        body: [
          'This is a deliberately narrow tool, and that is a feature, not a bug, for the right buyer. It is not built for residential shops, solo operators or simple one-off job businesses, and pricing is quote-based. If you are a commercial mechanical or life-safety contractor that lives on inspections and recurring accounts, it is one of the most focused options available. Outside that lane, a broader platform fits better.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'ServiceTrade rates highly, around 92 percent satisfaction, with commercial and fire-protection contractors, who praise an intuitive interface, strong recurring-service and inspection setup, and real-time visibility between office and field.',
          'The recurring complaints are about stability and flexibility: some users feel updates ship under-tested, customization in forms and reports is limited, and a few single out the Inspection Manager as having grown less reliable over time. Cost also climbs as you add advanced features. It is at its best when your work genuinely is inspection-driven commercial service, which is exactly who it is built for.',
        ],
      },
    ],
    alternatives: ['servicetitan', 'buildops', 'simpro', 'commusoft'],
    sources: officialSources('ServiceTrade', 'servicetrade.com', { website: true, integrations: true }),
    verification: verifiedDates({ integrations: true, editorialOn: '2026-09-13' }),
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
    pricing: verifiedPricing('per_user', true, [
      plan('Lite', 47, { billingModel: 'per_user', trialDays: 14, notes: 'Per user, per month', sourceUrl: 'https://www.tradifyhq.com/us/pricing' }),
      plan('Pro', 51, { billingModel: 'per_user', trialDays: 14, notes: 'Per user, per month', sourceUrl: 'https://www.tradifyhq.com/us/pricing' }),
      plan('Plus', 61, { billingModel: 'per_user', trialDays: 14, notes: 'Per user, per month', sourceUrl: 'https://www.tradifyhq.com/us/pricing' }),
    ]),
    implementation: 'low',
    implementationNotes: 'Light, self-serve setup suited to small teams and solo operators.',
    features: matrix({
      available: ['scheduling', 'estimates', 'invoicing', 'payments', 'reporting', 'mobile_app', 'quickbooks_online', 'xero'],
      partial: ['crm', 'dispatching', 'recurring_jobs', 'job_costing'],
      notAvailable: ['financing', 'call_tracking'],
    }),
    integrations: accounting(true, false, true),
    pros: ['Simple and quick to adopt', 'Clean quote-to-invoice workflow', 'QuickBooks Online and Xero support'],
    tradeoffs: ['Priced per user, so it scales with headcount', 'Lighter dispatch and reporting', 'Not built for larger operations'],
    editorial: [
      {
        heading: 'Simplicity is the selling point',
        body: [
          'Tradify is aimed at solo tradespeople and small teams who want to quote, schedule, track time and get paid without wrestling with software. It does the core loop, from quote to job to invoice, cleanly and without the clutter of features a one-person electrical or plumbing business will never touch. If you have avoided software because it felt like too much, this is the kind of tool built to change your mind.',
        ],
      },
      {
        heading: 'How the pricing works',
        body: [
          'Tradify charges per user: Lite is $47 a month per user, Pro is $51, and Plus, the most popular tier, is $61, each with a 14-day trial that includes all the features. Per-user pricing is friendly for a solo operator, but it is worth doing the math as you grow, because the bill rises with every seat you add rather than staying flat, which is the opposite of a tool like Service Fusion.',
        ],
      },
      {
        heading: 'Where it stops',
        body: [
          'The trade for that simplicity is depth. Dispatch and reporting are lighter than the trade platforms, and it is not designed to run a larger, office-driven operation. On accounting it syncs with QuickBooks Online and Xero. For a solo operator or a small crew that values ease of use above all, that is a fair and deliberate trade. If you are scaling toward a bigger dispatch team, plan to reassess.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'Tradify rates extremely well, around 4.8 across thousands of reviews, with owners singling out how much faster quoting becomes (jobs that used to take 30 to 45 minutes dropping under 10), a mobile app technicians pick up without training, and one-to-one phone onboarding that new users appreciate.',
          'The limits are about scale, not quality. Per-user pricing means the cost rises directly with headcount, reporting is not deep enough for larger operations, and HVAC firms with complex service agreements want more custom fields than it offers. It is built for small crews, and the reviews reflect exactly that fit.',
        ],
      },
    ],
    alternatives: ['servicem8', 'jobber', 'kickserv', 'workiz'],
    sources: officialSources('Tradify', 'tradifyhq.com', { website: true, pricing: true, integrations: true }),
    verification: verifiedDates({ pricing: true, integrations: true, pricingOn: '2026-09-13', editorialOn: '2026-09-13' }),
    commercial: { type: 'affiliate', affiliateLinkSlug: 'tradify', disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'gorilladesk',
    name: 'GorillaDesk',
    vendorName: 'GorillaDesk',
    tagline: 'All-in-one field service software for pest, lawn, cleaning and pool businesses.',
    description:
      'GorillaDesk is a field service platform built for route-based residential trades: pest control, lawn care, cleaning and pool service. It puts scheduling, routing, invoicing, online booking and payments in one place, and prices by route rather than by user.',
    website: 'https://gorilladesk.com',
    logoMark: 'Gd',
    brandColor: '#37b34a',
    bestFor: ['Route-based residential trades (pest, lawn, cleaning, pool)', 'Small teams that want flat per-route pricing', 'Businesses that run many recurring visits a day'],
    notIdealFor: ['Commercial and project contractors', 'HVAC/plumbing needing a deep flat-rate pricebook', 'Enterprise multi-branch operations'],
    verdict:
      'A strong, affordable pick for route-dense residential trades that want routing, recurring visits and billing without per-user pricing or contracts.',
    industries: ['pest-control', 'landscaping', 'cleaning', 'pool-service'],
    companySizes: ['solo', '2-5', '6-10', '11-25'],
    businessModels: ['residential', 'route', 'both'],
    pricing: verifiedPricing('tiered', true, [
      plan('Basic', 49, { billingModel: 'flat', contract: 'Month-to-month', notes: 'Per route · unlimited admin users', sourceUrl: 'https://gorilladesk.com/pricing/' }),
      plan('Pro', 99, { billingModel: 'flat', contract: 'Month-to-month', notes: 'Per route · adds booking, GPS, QuickBooks', sourceUrl: 'https://gorilladesk.com/pricing/' }),
      plan('Growth', 149, { billingModel: 'flat', contract: 'Month-to-month', notes: 'Per route · adds pipeline, multi-branch', sourceUrl: 'https://gorilladesk.com/pricing/' }),
    ]),
    implementation: 'low',
    implementationNotes: 'Self-serve setup with free data migration; no setup fees or contracts.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'estimates', 'invoicing', 'payments', 'customer_notifications', 'online_booking', 'recurring_jobs', 'route_optimization', 'gps_tracking', 'customer_portal', 'reporting', 'mobile_app', 'quickbooks_online'],
      partial: ['crm', 'service_agreements', 'inventory'],
      notAvailable: ['quickbooks_desktop', 'financing'],
    }),
    integrations: accounting(true, false, false),
    pros: ['Flat per-route pricing with unlimited admin users', 'Strong routing for route-dense residential trades', 'No contracts and free data migration'],
    tradeoffs: ['Built for residential route work, not commercial projects', 'Syncs QuickBooks Online only, no Desktop', 'SMS messaging costs extra'],
    editorial: [
      {
        heading: 'Where GorillaDesk fits, in plain terms',
        body: [
          'GorillaDesk knows exactly who it is for: pest control, lawn care, cleaning and pool businesses that run a lot of short recurring visits and live or die on route efficiency. Instead of charging per user, it prices by route, from Basic at $49 a month up to Growth at $149, with unlimited admin users on every tier. For a route business, that pricing model alone can make it cheaper than a per-seat tool.',
        ],
      },
      {
        heading: 'What to weigh',
        body: [
          'The routing, online booking, recurring visits and billing are all built around residential route work, and there are no contracts plus free migration, so trying it is low risk. Where it is not the tool is commercial or project work, or trades that need a deep flat-rate pricebook. On accounting it syncs with QuickBooks Online but not Desktop, and SMS is a paid add-on, so factor those in.',
        ],
      },
      {
        heading: 'Where it stops',
        body: [
          'GorillaDesk is deliberately focused on route-based residential trades, and that focus is both its strength and its ceiling. It is not built for commercial or project work, there is no deep flat-rate pricebook, and it starts to feel tight once you grow past a couple of technicians or want modern AI and self-scheduling tools. If you fit the pest, lawn, cleaning or pool mould, that trade is easy to accept; if you are heading toward commercial contracting, you will outgrow it.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'GorillaDesk rates exceptionally well, around 4.9 out of 5 across hundreds of reviews, and the praise is consistent: a clean, uncluttered interface built around how route trades actually work, a genuinely reliable mobile app, automated reminders that noticeably cut no-shows, and, for most users, responsive support with real call-backs.',
          'The complaints are smaller in scale. A minority report support or uptime-communication issues, and users ask for more automation, better-looking invoices and fewer bugs after updates. Reviewers also note it shows its limits once you add a third technician or want AI and 24/7 self-scheduling, which is a fair signal of who it is and is not built for.',
        ],
      },
    ],
    alternatives: ['jobber', 'housecall-pro', 'servicem8', 'kickserv'],
    sources: officialSources('GorillaDesk', 'gorilladesk.com', { website: true, pricing: true }),
    verification: verifiedDates({ pricing: true, pricingOn: '2026-09-14', editorialOn: '2026-09-14' }),
    commercial: { type: 'affiliate', affiliateLinkSlug: 'gorilladesk', disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'quoteiq',
    name: 'QuoteIQ',
    vendorName: 'QuoteIQ',
    tagline: 'Flat-rate home-service CRM with built-in AI quoting.',
    description:
      'QuoteIQ is a home-service CRM aimed at exterior-cleaning and outdoor trades like pressure washing, window cleaning, painting and lawn care. It covers quoting, scheduling, invoicing and payments, with AI quoting tools built in, and prices flat rather than per user.',
    website: 'https://myquoteiq.com',
    logoMark: 'Qi',
    brandColor: '#2563eb',
    bestFor: ['Solo and small exterior-service pros (pressure washing, window cleaning, painting)', 'Businesses that want flat pricing with no per-seat fees', 'Owners who want fast, AI-assisted quoting'],
    notIdealFor: ['Commercial and enterprise operations', 'Teams needing deep dispatch, routing or inventory', 'Buyers wanting the most established brand'],
    verdict:
      'An affordable, flat-rate option for small home-service pros who want quoting and a customer database without paying per seat.',
    industries: ['landscaping', 'cleaning', 'other'],
    companySizes: ['solo', '2-5', '6-10'],
    businessModels: ['residential', 'both'],
    pricing: verifiedPricing('tiered', true, [
      plan('Essentials', 29.99, { billingModel: 'flat', notes: 'Flat rate, no per-user fees', sourceUrl: 'https://myquoteiq.com/pricing/' }),
      plan('Beginner', 74.99, { billingModel: 'flat', notes: 'Flat rate, no per-user fees', sourceUrl: 'https://myquoteiq.com/pricing/' }),
      plan('Pro', 149.99, { billingModel: 'flat', notes: 'Flat rate, no per-user fees', sourceUrl: 'https://myquoteiq.com/pricing/' }),
      plan('Elite', 299, { billingModel: 'flat', notes: 'Flat rate, no per-user fees', sourceUrl: 'https://myquoteiq.com/pricing/' }),
      plan('Max', 699, { billingModel: 'flat', notes: 'Flat rate, no per-user fees', sourceUrl: 'https://myquoteiq.com/pricing/' }),
    ]),
    implementation: 'low',
    implementationNotes: 'Self-serve signup with a free trial; annual billing saves roughly two months.',
    features: matrix({
      available: ['crm', 'estimates', 'invoicing', 'payments', 'scheduling', 'customer_notifications', 'online_booking', 'reporting', 'mobile_app'],
      partial: ['dispatching', 'marketing_automation'],
      notAvailable: ['route_optimization'],
    }),
    integrations: [],
    pros: ['Flat pricing with no per-user fees', 'Built-in AI quoting and content tools', 'Low entry price for a solo operator'],
    tradeoffs: ['Newer and smaller than the established brands', 'Lighter on dispatch, routing and inventory', 'Focused on residential exterior services'],
    editorial: [
      {
        heading: 'Where QuoteIQ fits, in plain terms',
        body: [
          'QuoteIQ is built for the exterior-service trades, pressure washing, window cleaning, painting and lawn care, where the job is won on a fast, clear quote. It bundles quoting, a customer database, scheduling, invoicing and payments, adds AI tools to speed up estimates, and prices flat from $29.99 a month with no per-seat fees, which keeps it cheap as you add helpers.',
        ],
      },
      {
        heading: 'What to weigh',
        body: [
          'For a solo operator or a small crew that wants to look professional and quote quickly, it is an affordable, capable option. The trade-offs are that it is a newer, smaller brand than the incumbents, and it is lighter on the heavier field-operations features like advanced dispatch, routing and inventory. If those are central to your work, weigh it against a more established platform first.',
        ],
      },
      {
        heading: 'The value pitch',
        body: [
          'The pitch owners respond to most is cost. Reviewers describe cutting their software bill sharply while getting more than they had before, and they like how fast the quote-to-send workflow is. For a small exterior-service business watching every dollar, that value, plus flat pricing that does not punish you for adding a helper, is the real draw.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'QuoteIQ’s reviews skew positive on value and speed: owners report cutting their software costs sharply versus other CRMs, praise a clean, modern interface and a responsive support team, and mention quote workflows fast enough to go from a new customer to a sent quote in a couple of minutes.',
          'The complaints point at polish and consistency. Reviewers mention occasional glitches, the app shutting down unexpectedly, and text messaging on invoices being unreliable. Several also note that quoted prices vary across third-party sites, so confirm the current plan pricing on QuoteIQ’s own page before you commit.',
        ],
      },
    ],
    alternatives: ['jobber', 'housecall-pro', 'kickserv', 'gorilladesk'],
    sources: officialSources('QuoteIQ', 'myquoteiq.com', { website: true, pricing: true }),
    verification: verifiedDates({ pricing: true, pricingOn: '2026-09-14', editorialOn: '2026-09-14' }),
    commercial: { type: 'affiliate', affiliateLinkSlug: 'quoteiq', disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'synchroteam',
    name: 'Synchroteam',
    vendorName: 'Synchroteam',
    tagline: 'Configurable field service management for dispatch-driven teams.',
    description:
      'Synchroteam is a field service platform for small-to-mid service teams, covering scheduling, dispatch, a technician mobile app, GPS tracking, jobs, invoicing and reporting. It is priced per user with a straightforward two-tier plan structure.',
    website: 'https://synchroteam.com',
    logoMark: 'Sy',
    brandColor: '#1e88e5',
    bestFor: ['Small-to-mid teams that want simple per-user pricing', 'Dispatch- and schedule-driven service operations', 'Businesses wanting GPS tracking and a solid mobile app'],
    notIdealFor: ['Teams needing a deep flat-rate pricebook or financing', 'Enterprise multi-department operations', 'Buyers who want the largest US brand'],
    verdict:
      'A straightforward, per-user field service tool for dispatch-driven teams that want scheduling, mobile and invoicing without enterprise weight.',
    industries: ['hvac', 'plumbing', 'electrical', 'commercial', 'other'],
    companySizes: ['solo', '2-5', '6-10', '11-25', '26-50'],
    businessModels: ['residential', 'commercial', 'both'],
    pricing: verifiedPricing('per_user', true, [
      plan('Standard', 39.49, { billingModel: 'per_user', trialDays: 14, contract: 'Month-to-month', notes: 'Per user, per month', sourceUrl: 'https://www.synchroteam.com/en/pricing.php' }),
      plan('Premium', 64.79, { billingModel: 'per_user', trialDays: 14, contract: 'Month-to-month', notes: 'Per user, per month', sourceUrl: 'https://www.synchroteam.com/en/pricing.php' }),
    ]),
    implementation: 'moderate',
    implementationNotes: 'Self-serve 14-day trial with no card required; one administrator account is included.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'estimates', 'invoicing', 'customer_notifications', 'gps_tracking', 'inventory', 'reporting', 'mobile_app', 'api', 'quickbooks_online', 'xero'],
      partial: ['crm', 'recurring_jobs', 'payments', 'job_costing'],
    }),
    integrations: [...accounting(true, false, true), { name: 'Open API', category: 'automation', support: 'available' }],
    pros: ['Simple per-user pricing with a free 14-day trial', 'Strong dispatch, scheduling and GPS tracking', 'QuickBooks Online and Xero support with an open API'],
    tradeoffs: ['Lighter flat-rate pricebook and financing', 'Smaller US presence than the incumbents', 'Per-user cost scales with headcount'],
    editorial: [
      {
        heading: 'Where Synchroteam fits, in plain terms',
        body: [
          'Synchroteam is a no-nonsense field service tool for dispatch-driven teams. The core is strong: a drag-and-drop schedule, a capable mobile app, GPS tracking, jobs, inventory and invoicing, with QuickBooks Online and Xero on the accounting side and an open API for custom work. Pricing is simply per user, Standard around $39 and Premium around $65 a month, with a 14-day trial and no contract.',
        ],
      },
      {
        heading: 'What to weigh',
        body: [
          'If you want the operational essentials without enterprise weight, it is a practical choice, and the open API gives you room to extend it. Where it is lighter is the sales side: there is no deep flat-rate pricebook or built-in financing, so trades that lean on those will feel the gap. Being per-user, the cost also rises with every seat, so do the math at your real headcount.',
        ],
      },
      {
        heading: 'The configurability angle',
        body: [
          'The thing reviewers single out most is how configurable it is: you can shape the service reports and workflows around your business rather than bending your business to the software. That flexibility, paired with a mobile app that works on both Android and iOS, is a real part of the appeal for teams whose work does not fit a standard template.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'Synchroteam rates solidly, around 4.4 out of 5, and users highlight how customizable it is, tailor-made service reports and workflows shaped to their business, along with easy setup, efficient scheduling and dispatch, a mobile app on both Android and iOS, and quick, helpful support.',
          'The complaints are mostly small edges rather than dealbreakers: technicians cannot pause and restart a job without creating an extra ticket, reports export as PDF only with no Word option, and a few of the more advanced features feel limited. For a team that wants a configurable, per-user field tool, most reviewers find it does the core job well.',
        ],
      },
    ],
    alternatives: ['jobber', 'workiz', 'service-fusion', 'zuper'],
    sources: officialSources('Synchroteam', 'synchroteam.com', { website: true, pricing: true }),
    verification: verifiedDates({ pricing: true, pricingOn: '2026-09-14', editorialOn: '2026-09-14' }),
    commercial: { type: 'affiliate', affiliateLinkSlug: 'synchroteam', disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'zenmaid',
    name: 'ZenMaid',
    vendorName: 'ZenMaid',
    tagline: 'Scheduling and automation built specifically for maid services.',
    description:
      'ZenMaid is scheduling and automation software made specifically for residential cleaning and maid services. It handles recurring appointments, client communication, online booking, payments and cleaner scheduling, with flat monthly pricing rather than per-cleaner fees.',
    website: 'https://zenmaid.com',
    logoMark: 'Zm',
    brandColor: '#14b8a6',
    bestFor: ['Residential cleaning and maid services', 'Small cleaning teams that want flat pricing', 'Owners who want cleaning-specific scheduling and automation'],
    notIdealFor: ['Trades other than cleaning', 'Large commercial janitorial operations', 'Teams needing a pricebook, inventory or job costing'],
    verdict:
      'The niche pick for residential maid services, built around exactly how cleaning businesses schedule, communicate and get paid.',
    industries: ['cleaning'],
    companySizes: ['solo', '2-5', '6-10', '11-25'],
    businessModels: ['residential', 'route', 'both'],
    pricing: verifiedPricing('tiered', true, [
      plan('Starter', 19, { billingModel: 'flat', trialDays: 14, contract: 'Month-to-month', notes: 'Flat rate · up to 40 appointments/mo', sourceUrl: 'https://get.zenmaid.com/pricing' }),
      plan('Pro', 39, { billingModel: 'flat', trialDays: 14, contract: 'Month-to-month', notes: 'Flat rate · unlimited appointments', sourceUrl: 'https://get.zenmaid.com/pricing' }),
      plan('Pro Max', 49, { billingModel: 'flat', trialDays: 14, contract: 'Month-to-month', notes: 'Flat rate · adds availability, ratings, integrations', sourceUrl: 'https://get.zenmaid.com/pricing' }),
    ]),
    implementation: 'low',
    implementationNotes: 'Very light, self-serve setup with a 14-day trial; built specifically for cleaning workflows.',
    features: matrix({
      available: ['scheduling', 'dispatching', 'customer_notifications', 'online_booking', 'payments', 'recurring_jobs', 'gps_tracking', 'reporting', 'mobile_app', 'quickbooks_online'],
      partial: ['crm', 'estimates'],
      notAvailable: ['pricebook', 'inventory', 'financing', 'quickbooks_desktop'],
    }),
    integrations: accounting(true, false, false),
    pros: ['Purpose-built for maid and cleaning services', 'Flat, affordable pricing from $19 a month', 'Strong client communication and automation'],
    tradeoffs: ['Only a fit for cleaning businesses', 'No flat-rate pricebook or inventory', 'SMS messaging costs extra'],
    editorial: [
      {
        heading: 'Where ZenMaid fits, in plain terms',
        body: [
          'ZenMaid does one thing and does it for one audience: scheduling and automation for residential cleaning and maid services. Because it is not trying to serve every trade, the recurring scheduling, client reminders, booking forms and cleaner management all match how a cleaning business actually runs. Pricing is flat, from $19 a month, rather than per cleaner, which keeps it cheap as your team grows.',
        ],
      },
      {
        heading: 'What to weigh',
        body: [
          'For a maid service, that focus is the whole point, and the low flat price and 14-day trial make it easy to try. The flip side is obvious: it is only for cleaning, so any other trade should look elsewhere, and it deliberately skips the heavier features like a flat-rate pricebook and inventory. SMS is also a paid extra. QuickBooks Online sync arrives on the Pro tier and up.',
        ],
      },
      {
        heading: 'Built around cleaning, deliberately',
        body: [
          'Because ZenMaid serves only maid services, the small things match the trade: recurring schedules, cleaner assignment, client reminders and booking forms all assume a cleaning business rather than a generic field-service tool. That specificity is exactly why owners pick it over a broader platform, and exactly why it is not for anyone outside cleaning.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'ZenMaid rates highly, around 4.7 out of 5 across 200-plus reviews, and cleaning-business owners consistently praise how intuitive it is, the automation that turns bookings into scheduled appointments, custom fields, SMS reminders, and fast, helpful support. Its cleaning-only focus is the single most-cited reason to choose it.',
          'The recurring complaints are about scope and add-on costs. It lacks payroll integrations and fuller availability tracking, which adds admin for a growing team, and SMS reminders are billed separately in bundles rather than included, with no annual-billing discount. Price the texting you will actually use alongside the flat plan when you compare.',
        ],
      },
    ],
    alternatives: ['jobber', 'housecall-pro', 'servicem8', 'gorilladesk'],
    sources: officialSources('ZenMaid', 'zenmaid.com', { website: true, pricing: true }),
    verification: verifiedDates({ pricing: true, pricingOn: '2026-09-14', editorialOn: '2026-09-14' }),
    commercial: { type: 'affiliate', affiliateLinkSlug: 'zenmaid', disclosure: DISCLOSURE },
    published: true,
  },
  {
    slug: 'zenbooker',
    name: 'Zenbooker',
    vendorName: 'Zenbooker',
    tagline: 'Online booking, quoting and dispatch for home-service businesses.',
    description:
      'Zenbooker is a booking-first platform for home-service businesses, combining an online booking page and website builder with quoting, dispatch, a field app and payments. It is priced by the number of service territories, with unlimited bookings and team seats on every plan.',
    website: 'https://zenbooker.com',
    logoMark: 'Zb',
    brandColor: '#7c3aed',
    bestFor: ['Home-service businesses that win work through online booking', 'Teams that want unlimited seats and bookings', 'Operations that need territory-based scheduling'],
    notIdealFor: ['Commercial and project contractors', 'Teams needing deep accounting or a pricebook', 'Enterprise multi-entity operations'],
    verdict:
      'A booking-first platform for home-service businesses whose website is their main lead source, with unlimited seats and territory control.',
    industries: ['cleaning', 'landscaping', 'pool-service', 'other'],
    companySizes: ['solo', '2-5', '6-10', '11-25'],
    businessModels: ['residential', 'route', 'both'],
    pricing: verifiedPricing('tiered', true, [
      plan('Standard', 29, { billingModel: 'flat', trialDays: 14, contract: 'Month-to-month', notes: '2 territories · unlimited bookings and seats', sourceUrl: 'https://zenbooker.com/pricing' }),
      plan('Professional', 79, { billingModel: 'flat', trialDays: 14, contract: 'Month-to-month', notes: '8 territories · adds estimates, whitelabeling', sourceUrl: 'https://zenbooker.com/pricing' }),
      plan('Enterprise', 149, { billingModel: 'flat', trialDays: 14, contract: 'Month-to-month', notes: '36 territories · adds drive-time routing', sourceUrl: 'https://zenbooker.com/pricing' }),
      plan('National', 259, { billingModel: 'flat', trialDays: 14, contract: 'Month-to-month', notes: '96 territories', sourceUrl: 'https://zenbooker.com/pricing' }),
    ]),
    implementation: 'low',
    implementationNotes: 'Self-serve 14-day trial with no card required; includes a website builder and booking page.',
    features: matrix({
      available: ['online_booking', 'scheduling', 'dispatching', 'estimates', 'invoicing', 'payments', 'customer_notifications', 'crm', 'mobile_app'],
      partial: ['reporting', 'route_optimization'],
      planDependent: ['api'],
    }),
    integrations: [{ name: 'Stripe', category: 'payments', support: 'available' }],
    pros: ['Booking-first, with a website builder and booking page', 'Unlimited bookings and team seats on every plan', 'Drive-time aware dispatch on higher tiers'],
    tradeoffs: ['Tiers are capped by number of territories', 'Lighter accounting depth', 'Aimed at residential home services, not commercial'],
    editorial: [
      {
        heading: 'Where Zenbooker fits, in plain terms',
        body: [
          'Zenbooker starts from the booking, not the back office. If your website is where you win work, it gives you an online booking page, quote requests, a website builder, and then the dispatch and field app to run the jobs that come in. Every plan includes unlimited bookings and unlimited team seats, and pricing is set by how many service territories you cover, from $29 a month for two up to $259 for ninety-six.',
        ],
      },
      {
        heading: 'What to weigh',
        body: [
          'For a residential home-service business that lives on inbound online bookings, that model is a genuine strength, and unlimited seats keep it affordable as you add crew. The higher tiers add drive-time-aware dispatch, which is useful for route-dense work. Where it is lighter is the accounting side, and it is built for residential rather than commercial or project work, so weigh that against your mix.',
        ],
      },
      {
        heading: 'The booking widget is the headline',
        body: [
          'Reviewers who have tried a stack of booking tools tend to single out Zenbooker’s customer-facing booking widget as the best-looking and highest-converting, which is the whole point for a business that wins work online. If the first impression a customer gets is your booking page, that polish is worth a lot.',
        ],
      },
      {
        heading: 'What users consistently report',
        body: [
          'Zenbooker’s standout in reviews is that customer-facing booking experience: multiple users who tested many booking platforms call its widget the best-looking and highest-converting they found, and they like the flat, no-per-user pricing and the easy setup.',
          'The complaints are on the operator side. Reviewers report slow load times at times, note that the admin experience is built for desktop rather than mobile, and describe customer support as inconsistent. If you run the business largely from your phone, test the admin side before you commit.',
        ],
      },
    ],
    alternatives: ['housecall-pro', 'jobber', 'servicem8', 'gorilladesk'],
    sources: officialSources('Zenbooker', 'zenbooker.com', { website: true, pricing: true }),
    verification: verifiedDates({ pricing: true, pricingOn: '2026-09-14', editorialOn: '2026-09-14' }),
    commercial: { type: 'affiliate', affiliateLinkSlug: 'zenbooker', disclosure: DISCLOSURE },
    published: true,
  },
];

/**
 * Slugs with a self-hosted, licensed vendor logo in public/logos/<slug>.png.
 * Attaching here keeps the render path (ProductLogo) simple and falls back to
 * the branded tile automatically for any product not in this set.
 */
const PRODUCTS_WITH_LOGOS = new Set([
  'jobber',
  'housecall-pro',
  'servicetitan',
  'workiz',
  'fieldpulse',
  'service-fusion',
  'fieldedge',
  'kickserv',
  'servicem8',
  'simpro',
  'buildops',
  'commusoft',
  'zuper',
  'servicetrade',
  'tradify',
  'gorilladesk',
  'quoteiq',
  'synchroteam',
  'zenmaid',
  'zenbooker',
]);
for (const p of PRODUCTS) {
  if (PRODUCTS_WITH_LOGOS.has(p.slug)) p.logoImage = `/logos/${p.slug}.png`;
}

export const PRODUCT_MAP: Record<string, Product> = Object.fromEntries(
  PRODUCTS.map((p) => [p.slug, p]),
);

export function getProduct(slug: string): Product | undefined {
  return PRODUCT_MAP[slug];
}

export function publishedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.published);
}
