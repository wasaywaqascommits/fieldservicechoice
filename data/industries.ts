import type { IndustryPage, IndustrySlug } from '@/types';

/**
 * Industry pages (spec §25). Each trade has genuinely different software
 * requirements — these are written per-trade, NOT word-swapped from a template.
 */
export const INDUSTRIES: IndustryPage[] = [
  {
    slug: 'hvac',
    name: 'HVAC Field Service Software',
    shortName: 'HVAC',
    intro:
      'HVAC businesses have some of the most demanding software requirements in the trades: emergency dispatch, equipment and warranty history, recurring maintenance agreements, a flat-rate pricebook, financing at the point of sale and tight accounting integration. The right platform depends heavily on your size and whether you run residential, commercial or both.',
    keyRequirements: [
      'Emergency and same-day dispatch',
      'Equipment and service history by unit/serial',
      'Maintenance / membership agreements',
      'Flat-rate pricebook with good/better/best',
      'Point-of-sale consumer financing',
      'Inventory and truck stock',
      'QuickBooks integration',
      'Strong technician mobile app',
    ],
    sections: [
      {
        heading: 'What makes HVAC different',
        body: [
          'HVAC combines demand (break/fix, emergencies) with planned maintenance (seasonal tune-ups, membership agreements). Your software has to handle both the reactive dispatch of a no-cooling call in July and the proactive scheduling of hundreds of maintenance visits.',
          'Equipment history matters: technicians need to see the make, model, serial number, install date and warranty status of the unit in front of them. That context drives faster diagnoses and better upsells.',
        ],
      },
      {
        heading: 'By company size',
        body: [
          'Solo and small residential teams are usually well served by Jobber, Housecall Pro or Workiz — fast to adopt, strong on scheduling, invoicing and customer communication.',
          'Established and larger HVAC companies with office and dispatch staff tend to look at ServiceTitan, FieldEdge or FieldPulse, which add deeper pricebook, financing, agreements and reporting — at the cost of a larger implementation.',
        ],
      },
    ],
    recommendedProducts: ['servicetitan', 'housecall-pro', 'jobber', 'fieldedge', 'fieldpulse', 'workiz'],
    relatedComparisons: ['servicetitan-vs-fieldedge', 'jobber-vs-housecall-pro', 'housecall-pro-vs-fieldpulse'],
    published: true,
  },
  {
    slug: 'plumbing',
    name: 'Plumbing Field Service Software',
    shortName: 'Plumbing',
    intro:
      'Plumbing shops need fast emergency dispatch, clear estimates and invoicing, and — as they grow — a flat-rate pricebook and service agreements. Residential-heavy plumbers prioritize customer communication and online payments; commercial and new-construction plumbers care more about job costing and project management.',
    keyRequirements: [
      'Emergency dispatch and on-call scheduling',
      'Flat-rate pricebook',
      'Estimates and online payments',
      'Service agreements for recurring customers',
      'Job costing for commercial work',
      'QuickBooks integration',
      'Technician mobile app',
    ],
    sections: [
      {
        heading: 'Residential vs commercial plumbing',
        body: [
          'Residential service plumbers benefit most from tools that speed up quoting, dispatch and getting paid — Jobber, Housecall Pro and Workiz are common choices.',
          'Commercial and project-based plumbers need job costing, inventory and project management; Simpro, BuildOps and ServiceTitan are more appropriate at that end.',
        ],
      },
    ],
    recommendedProducts: ['jobber', 'housecall-pro', 'servicetitan', 'workiz', 'fieldpulse', 'simpro'],
    relatedComparisons: ['jobber-vs-housecall-pro', 'jobber-vs-workiz', 'servicetitan-vs-simpro'],
    published: true,
  },
  {
    slug: 'electrical',
    name: 'Electrical Field Service Software',
    shortName: 'Electrical',
    intro:
      'Electrical contractors span from residential service work to commercial and project-based installation. Service-oriented electricians want scheduling, estimating and payments; project-oriented contractors need estimating depth, job costing, materials and progress billing.',
    keyRequirements: [
      'Estimating and proposals',
      'Scheduling and dispatch',
      'Job costing and materials tracking',
      'Progress billing for projects',
      'Service agreements',
      'QuickBooks or Xero integration',
      'Mobile app for field techs',
    ],
    sections: [
      {
        heading: 'Service work vs project work',
        body: [
          'For service-heavy electrical businesses, Jobber, Housecall Pro, Workiz and Tradify cover scheduling, quoting and invoicing well.',
          'For commercial and project-based electrical contractors, Simpro, BuildOps and ServiceTitan bring the estimating, job costing and project management that larger work demands.',
        ],
      },
    ],
    recommendedProducts: ['jobber', 'workiz', 'servicetitan', 'simpro', 'tradify', 'fieldpulse'],
    relatedComparisons: ['jobber-vs-workiz', 'jobber-vs-servicem8', 'servicetitan-vs-buildops'],
    published: true,
  },
  {
    slug: 'roofing',
    name: 'Roofing Field Service Software',
    shortName: 'Roofing',
    intro:
      'Roofing is more sales- and project-driven than most field-service trades. The software priorities shift toward CRM and sales pipeline, estimating, document and photo management, insurance/production workflows and project tracking, rather than high-volume recurring dispatch.',
    keyRequirements: [
      'CRM and sales pipeline',
      'Estimating and proposals',
      'Document and photo management',
      'Production / project workflows',
      'Job costing',
      'Invoicing and payments',
    ],
    sections: [
      {
        heading: 'Why roofing is different',
        body: [
          'A roofing job is closer to a project than a service call: it involves a sales cycle, an estimate, materials, a crew and a production timeline. That makes CRM, pipeline and project management more important than recurring-visit scheduling.',
          'General field-service platforms can work for smaller roofing service/repair work, but roofing-specific and project-oriented tools often fit dedicated roofing production businesses better. Where a general FSM is used, prioritize estimating, document management and job costing.',
        ],
      },
    ],
    recommendedProducts: ['jobber', 'fieldpulse', 'simpro', 'buildops'],
    relatedComparisons: ['jobber-vs-housecall-pro'],
    published: true,
  },
  {
    slug: 'landscaping',
    name: 'Landscaping Field Service Software',
    shortName: 'Landscaping',
    intro:
      'Landscaping and lawn-care businesses are route- and crew-driven, with heavy recurring/route service, seasonal scheduling and crew management. Software priorities center on recurring jobs, routing, crew scheduling and straightforward invoicing.',
    keyRequirements: [
      'Recurring / route service',
      'Route optimization',
      'Crew scheduling',
      'Estimates and proposals',
      'Invoicing and online payments',
      'Customer notifications',
    ],
    sections: [
      {
        heading: 'Route and recurring service',
        body: [
          'Because so much landscaping work is recurring, the ability to set up repeating visits and manage routes efficiently is central. Jobber is a popular general fit; larger route-based operations may consider more specialized route/route-density tooling.',
          'Crew management and seasonal scheduling matter more than emergency dispatch. Look for strong recurring-job handling and mobile crew tools.',
        ],
      },
    ],
    recommendedProducts: ['jobber', 'fieldpulse', 'kickserv', 'workiz'],
    relatedComparisons: ['jobber-vs-housecall-pro', 'jobber-vs-workiz'],
    published: true,
  },
  {
    slug: 'pest-control',
    name: 'Pest Control Field Service Software',
    shortName: 'Pest Control',
    intro:
      'Pest control is one of the most route- and recurring-service-intensive trades. Software priorities are route optimization, recurring scheduling, service and chemical records, technician scheduling and reliable recurring billing. Compliance and service documentation matter more here than in many other trades.',
    keyRequirements: [
      'Route optimization',
      'Recurring jobs and subscriptions',
      'Service and chemical/application records',
      'Technician scheduling',
      'Recurring billing',
      'Customer notifications',
    ],
    sections: [
      {
        heading: 'Routes, recurring service and records',
        body: [
          'Pest control runs on routes and recurring subscriptions, so efficient routing and recurring scheduling are the highest priorities. Reliable recurring billing keeps revenue predictable.',
          'Chemical and service records are important for compliance and for a clear service history per property. Among general FSM tools, prioritize strong recurring-job and routing support; dedicated pest-control platforms also exist and may be added to our directory over time.',
        ],
      },
    ],
    recommendedProducts: ['jobber', 'fieldpulse', 'workiz', 'kickserv'],
    relatedComparisons: ['jobber-vs-workiz', 'housecall-pro-vs-fieldpulse'],
    published: true,
  },
];

export const INDUSTRY_MAP: Record<string, IndustryPage> = Object.fromEntries(
  INDUSTRIES.map((i) => [i.slug, i]),
);

export function getIndustry(slug: string): IndustryPage | undefined {
  return INDUSTRY_MAP[slug];
}

export function publishedIndustries(): IndustryPage[] {
  return INDUSTRIES.filter((i) => i.published);
}

/** Human labels for every industry slug, including ones without a full page. */
export const INDUSTRY_LABELS: Record<IndustrySlug, string> = {
  hvac: 'HVAC',
  plumbing: 'Plumbing',
  electrical: 'Electrical',
  roofing: 'Roofing',
  landscaping: 'Landscaping',
  'pest-control': 'Pest Control',
  cleaning: 'Cleaning',
  'pool-service': 'Pool Service',
  commercial: 'Commercial Field Service',
  other: 'Other',
};
