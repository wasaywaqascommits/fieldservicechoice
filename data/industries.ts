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
    faqs: [
      {
        question: 'What is the best software for an HVAC business?',
        answer:
          'It depends on your size and residential/commercial mix. Established HVAC companies running memberships, financing and a flat-rate pricebook tend to fit ServiceTitan or FieldEdge; small and residential-focused teams are usually better served by Jobber, Housecall Pro or Workiz, which are faster to adopt. Use the Finder for a shortlist scored against your specific business.',
      },
      {
        question: 'What features do HVAC businesses need most?',
        answer:
          'Beyond core scheduling and invoicing, HVAC benefits from emergency and same-day dispatch, equipment and service history by unit, maintenance or membership agreements, a flat-rate pricebook, point-of-sale financing for system replacements, inventory or truck stock, and a strong technician mobile app. Which of these are must-haves depends on whether you sell replacements and run memberships.',
      },
      {
        question: 'How much does HVAC field service software cost?',
        answer:
          'Pricing ranges from modest per-user monthly plans for small-team tools to quote-based pricing for enterprise platforms like ServiceTitan, where cost depends on your size and modules. We label pricing as unverified rather than publish figures we have not confirmed — check the vendor for current numbers and use the Finder to match a budget band.',
      },
      {
        question: 'Which HVAC software integrates with QuickBooks?',
        answer:
          'It depends on your QuickBooks version. Shops on QuickBooks Online are well served by Jobber and Housecall Pro; shops anchored to QuickBooks Desktop are usually better off with FieldEdge, which has deep Desktop ties. Confirm Online vs Desktop support before committing, as it varies between platforms.',
      },
      {
        question: 'What HVAC software is best for maintenance agreements?',
        answer:
          'Membership and maintenance-agreement management is a strength of the more established platforms — ServiceTitan and FieldEdge handle recurring agreements, visit scheduling and renewals well. If memberships are central to your revenue, treat depth here as a hard requirement when you compare options.',
      },
    ],
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
    faqs: [
      {
        question: 'What is the best software for a plumbing business?',
        answer:
          'It depends on whether you are primarily a residential service business or a commercial/project business. Residential-heavy plumbers usually fit Jobber, Housecall Pro or Workiz, which speed up quoting, dispatch and getting paid; commercial and project plumbers are better served by Simpro or ServiceTitan for estimating and job-costing depth. Use the Finder for a personalized shortlist.',
      },
      {
        question: 'What do plumbers need from field service software?',
        answer:
          'Service plumbing needs fast emergency and on-call scheduling, clear on-site estimates, invoicing and online payments, and strong customer communication. As shops grow, a flat-rate pricebook and service agreements help. Commercial and project plumbers additionally need job costing, inventory and progress billing.',
      },
      {
        question: 'What is the best software for commercial plumbing?',
        answer:
          'Commercial and project-based plumbing needs estimating depth, job costing, materials tracking and progress billing, which points toward Simpro or the enterprise depth of ServiceTitan. General residential-focused tools tend to be underpowered for genuine commercial project work.',
      },
      {
        question: 'How much does plumbing software cost?',
        answer:
          'Small-team tools generally use predictable per-user monthly pricing, while enterprise and project platforms are often quote-based and depend on your size and modules. We label pricing as unverified rather than publish figures we have not confirmed — check the vendor and use the Finder to match your budget.',
      },
      {
        question: 'Which plumbing software is best for emergency dispatch?',
        answer:
          'Fast dispatch is a strength of the service-oriented platforms — Jobber, Housecall Pro and Workiz all handle same-day scheduling well, and Workiz adds built-in call handling that phone-driven shops value. Larger operations with high dispatch volume may prefer ServiceTitan’s deeper dispatch board.',
      },
    ],
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
    faqs: [
      {
        question: 'What is the best software for electrical contractors?',
        answer:
          'It depends on whether your work is service-heavy or project-based. Service electricians are well served by Jobber, Workiz or Tradify for scheduling, quoting and invoicing; commercial and project-based contractors need the estimating, job costing and project management of Simpro, BuildOps or ServiceTitan. Use the Finder for a shortlist matched to your mix.',
      },
      {
        question: 'What is the difference between service and project electrical software?',
        answer:
          'Service work runs on fast scheduling, on-site quoting, invoicing and payments — a lightweight, mobile-first tool wins. Project and commercial work runs on estimating depth, job costing, materials tracking and progress billing across long jobs, which needs a platform built for projects. Most electrical businesses lean one way and should buy for that side.',
      },
      {
        question: 'What is the best software for commercial or project-based electrical work?',
        answer:
          'For commercial and project electrical contractors, Simpro, BuildOps and ServiceTitan bring the estimating, job costing and project management that larger work demands. General residential-focused service tools are usually underpowered for this kind of work.',
      },
      {
        question: 'How much does electrical field service software cost?',
        answer:
          'Service-oriented tools generally use predictable per-user monthly pricing, while project and enterprise platforms are often quote-based depending on size and modules. We label pricing as unverified rather than publish unconfirmed figures — check the vendor and use the Finder to match your budget band.',
      },
      {
        question: 'Which electrical software integrates with QuickBooks or Xero?',
        answer:
          'Most platforms integrate with QuickBooks Online, and several also support Xero, but depth varies and QuickBooks Desktop support is less common. Confirm which accounting system and version a platform supports before committing, especially if you run QuickBooks Desktop.',
      },
    ],
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
    faqs: [
      {
        question: 'What is the best software for a roofing business?',
        answer:
          'Roofing is more sales- and project-driven than most trades, so the best fit depends on how much of your work is production/project versus smaller service and repair. Project-oriented roofers benefit from the estimating and project management of Simpro or BuildOps; smaller service/repair roofing can run on Jobber or FieldPulse. Use the Finder for a shortlist matched to your business.',
      },
      {
        question: 'Why is roofing software different from other trades?',
        answer:
          'A roofing job is closer to a project than a service call: it involves a sales cycle, an estimate, materials, a crew and a production timeline. That makes CRM and sales pipeline, estimating, document and photo management, and project tracking more important than the high-volume recurring dispatch that drives HVAC or pest control software.',
      },
      {
        question: 'Do general field service tools work for roofing?',
        answer:
          'General FSM platforms can work well for smaller roofing service and repair work, where scheduling, quoting and invoicing are the priorities. For dedicated roofing production businesses with a real sales pipeline and project timelines, project-oriented tools like Simpro or BuildOps — or roofing-specific software — often fit better. Where a general tool is used, prioritize estimating, document management and job costing.',
      },
      {
        question: 'How much does roofing software cost?',
        answer:
          'Pricing ranges from predictable per-user monthly plans for lighter tools to quote-based pricing for project and enterprise platforms, which depends on your size and modules. We label pricing as unverified rather than publish unconfirmed figures — check the vendor and use the Finder to match your budget.',
      },
      {
        question: 'What features matter most for roofing?',
        answer:
          'The priorities shift toward CRM and sales pipeline, estimating and proposals, document and photo management, production/project workflows, and job costing — rather than recurring-visit scheduling. If insurance or production workflows are central to your business, weigh those capabilities heavily.',
      },
    ],
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
    faqs: [
      {
        question: 'What is the best software for a landscaping business?',
        answer:
          'Because so much landscaping and lawn-care work is recurring and route-based, the best fit is a tool that handles repeating visits and routes efficiently. Jobber is a popular general fit for landscaping; FieldPulse and Kickserv are also common choices, and larger route-dense operations may want more specialized routing tools. Use the Finder for a personalized shortlist.',
      },
      {
        question: 'What features do landscaping businesses need most?',
        answer:
          'The priorities center on recurring and route service, route optimization, crew scheduling, straightforward estimates and invoicing, and customer notifications. Because much of the work repeats seasonally, strong recurring-job handling and reliable recurring billing matter more than emergency dispatch.',
      },
      {
        question: 'Which landscaping software is best for route-based lawn care?',
        answer:
          'Route-heavy lawn-care operations benefit most from strong recurring scheduling and routing. Jobber handles recurring visits and routing well for many businesses; very large, route-dense operations may consider more specialized route-optimization tooling. Prioritize recurring-job handling and mobile crew tools when you compare.',
      },
      {
        question: 'How much does landscaping software cost?',
        answer:
          'Landscaping tools generally use predictable per-user monthly pricing, with cost scaling by users and tier. We label pricing as unverified rather than publish figures we have not confirmed — check the vendor for current numbers and use the Finder to match your budget band.',
      },
      {
        question: 'Does landscaping software handle recurring billing?',
        answer:
          'Yes — recurring and route billing is a core need for landscaping, and the platforms recommended here support repeating visits and recurring invoicing to keep revenue predictable. If subscription-style billing is central to your model, confirm the depth of recurring billing when you evaluate options.',
      },
    ],
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
    faqs: [
      {
        question: 'What is the best software for a pest control business?',
        answer:
          'Pest control is one of the most route- and recurring-service-intensive trades, so the best fit is a tool with strong routing and recurring scheduling. Jobber, FieldPulse, Workiz and Kickserv are common general choices; dedicated pest-control platforms also exist for compliance-heavy operations. Use the Finder for a shortlist matched to your business.',
      },
      {
        question: 'What features do pest control businesses need most?',
        answer:
          'The highest priorities are route optimization, recurring scheduling and subscriptions, reliable recurring billing, technician scheduling, and service and chemical/application records. Because so much work runs on routes and recurring visits, efficient routing and recurring management matter more than one-off emergency dispatch.',
      },
      {
        question: 'Does pest control software track chemical and service records?',
        answer:
          'Chemical and service records are important for compliance and for a clear service history per property. Coverage varies among general FSM tools, so if compliance documentation is central to your operation, confirm how a platform records applications and service history — or consider a dedicated pest-control system.',
      },
      {
        question: 'How much does pest control software cost?',
        answer:
          'Pest control tools generally use predictable per-user monthly pricing, scaling by users and tier. We label pricing as unverified rather than publish unconfirmed figures — check the vendor for current numbers and use the Finder to match your budget band.',
      },
      {
        question: 'Which pest control software is best for recurring billing?',
        answer:
          'Reliable recurring billing keeps revenue predictable, and the platforms recommended here support recurring visits and subscription-style invoicing. If recurring billing and route density are central to your model, prioritize the depth of recurring scheduling and billing when you compare options.',
      },
    ],
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
