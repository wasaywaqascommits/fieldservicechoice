import type { IndustryPage, IndustrySlug } from '@/types';

/**
 * Industry pages (spec §25). Each trade has genuinely different software
 * requirements, these are written per-trade, NOT word-swapped from a template.
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
          'Solo and small residential teams are usually well served by Jobber, Housecall Pro or Workiz: fast to adopt, and strong on scheduling, invoicing and customer communication.',
          'Established and larger HVAC companies with office and dispatch staff tend to look at ServiceTitan, FieldEdge or FieldPulse, which add deeper pricebook, financing, agreements and reporting at the cost of a larger implementation.',
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
          'Pricing ranges from modest per-user monthly plans for small-team tools to quote-based pricing for enterprise platforms like ServiceTitan, where cost depends on your size and modules. We label pricing as unverified rather than publish figures we have not confirmed. Check the vendor for current numbers and use the Finder to match a budget band.',
      },
      {
        question: 'Which HVAC software integrates with QuickBooks?',
        answer:
          'It depends on your QuickBooks version. Shops on QuickBooks Online are well served by Jobber and Housecall Pro; shops anchored to QuickBooks Desktop are usually better off with FieldEdge, which has deep Desktop ties. Confirm Online vs Desktop support before committing, as it varies between platforms.',
      },
      {
        question: 'What HVAC software is best for maintenance agreements?',
        answer:
          'Membership and maintenance-agreement management is a strength of the more established platforms. ServiceTitan and FieldEdge handle recurring agreements, visit scheduling and renewals well. If memberships are central to your revenue, treat depth here as a hard requirement when you compare options.',
      },
    ],
    published: true,
  },
  {
    slug: 'plumbing',
    name: 'Plumbing Field Service Software',
    shortName: 'Plumbing',
    intro:
      'Plumbing shops need fast emergency dispatch, clear estimates and invoicing, and, as they grow, a flat-rate pricebook and service agreements. Residential-heavy plumbers prioritize customer communication and online payments; commercial and new-construction plumbers care more about job costing and project management.',
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
          'Residential service plumbers benefit most from tools that speed up quoting, dispatch and getting paid. Jobber, Housecall Pro and Workiz are common choices.',
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
          'Small-team tools generally use predictable per-user monthly pricing, while enterprise and project platforms are often quote-based and depend on your size and modules. We label pricing as unverified rather than publish figures we have not confirmed. Check the vendor and use the Finder to match your budget.',
      },
      {
        question: 'Which plumbing software is best for emergency dispatch?',
        answer:
          'Fast dispatch is a strength of the service-oriented platforms, Jobber, Housecall Pro and Workiz all handle same-day scheduling well, and Workiz adds built-in call handling that phone-driven shops value. Larger operations with high dispatch volume may prefer ServiceTitan’s deeper dispatch board.',
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
          'Service work runs on fast scheduling, on-site quoting, invoicing and payments, a lightweight, mobile-first tool wins. Project and commercial work runs on estimating depth, job costing, materials tracking and progress billing across long jobs, which needs a platform built for projects. Most electrical businesses lean one way and should buy for that side.',
      },
      {
        question: 'What is the best software for commercial or project-based electrical work?',
        answer:
          'For commercial and project electrical contractors, Simpro, BuildOps and ServiceTitan bring the estimating, job costing and project management that larger work demands. General residential-focused service tools are usually underpowered for this kind of work.',
      },
      {
        question: 'How much does electrical field service software cost?',
        answer:
          'Service-oriented tools generally use predictable per-user monthly pricing, while project and enterprise platforms are often quote-based depending on size and modules. We label pricing as unverified rather than publish unconfirmed figures. Check the vendor and use the Finder to match your budget band.',
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
          'General FSM platforms can work well for smaller roofing service and repair work, where scheduling, quoting and invoicing are the priorities. For dedicated roofing production businesses with a real sales pipeline and project timelines, project-oriented tools like Simpro or BuildOps, or roofing-specific software, often fit better. Where a general tool is used, prioritize estimating, document management and job costing.',
      },
      {
        question: 'How much does roofing software cost?',
        answer:
          'Pricing ranges from predictable per-user monthly plans for lighter tools to quote-based pricing for project and enterprise platforms, which depends on your size and modules. We label pricing as unverified rather than publish unconfirmed figures. Check the vendor and use the Finder to match your budget.',
      },
      {
        question: 'What features matter most for roofing?',
        answer:
          'The priorities shift toward CRM and sales pipeline, estimating and proposals, document and photo management, production/project workflows, and job costing, rather than recurring-visit scheduling. If insurance or production workflows are central to your business, weigh those capabilities heavily.',
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
          'Landscaping tools generally use predictable per-user monthly pricing, with cost scaling by users and tier. We label pricing as unverified rather than publish figures we have not confirmed. Check the vendor for current numbers and use the Finder to match your budget band.',
      },
      {
        question: 'Does landscaping software handle recurring billing?',
        answer:
          'Yes, recurring and route billing is a core need for landscaping, and the platforms recommended here support repeating visits and recurring invoicing to keep revenue predictable. If subscription-style billing is central to your model. Confirm the depth of recurring billing when you evaluate options.',
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
          'Chemical and service records are important for compliance and for a clear service history per property. Coverage varies among general FSM tools, so if compliance documentation is central to your operation. Confirm how a platform records applications and service history, or consider a dedicated pest-control system.',
      },
      {
        question: 'How much does pest control software cost?',
        answer:
          'Pest control tools generally use predictable per-user monthly pricing, scaling by users and tier. We label pricing as unverified rather than publish unconfirmed figures. Check the vendor for current numbers and use the Finder to match your budget band.',
      },
      {
        question: 'Which pest control software is best for recurring billing?',
        answer:
          'Reliable recurring billing keeps revenue predictable, and the platforms recommended here support recurring visits and subscription-style invoicing. If recurring billing and route density are central to your model, prioritize the depth of recurring scheduling and billing when you compare options.',
      },
    ],
    published: true,
  },
  {
    slug: 'cleaning',
    name: 'Cleaning Business Software',
    shortName: 'Cleaning',
    intro:
      'Cleaning businesses, from residential maid services to commercial janitorial, run on recurring visits, tight routes and teams moving between a lot of short jobs a day. That makes recurring scheduling, routing and automatic billing matter far more than the heavy pricebook or financing features the trades obsess over.',
    keyRequirements: [
      'Recurring and repeat-visit scheduling',
      'Route planning for many short stops',
      'Team and crew scheduling',
      'Online booking for new clients',
      'Automated reminders to cut no-shows',
      'Recurring and auto billing',
      'Mobile checklists and photos',
      'Customer notifications',
    ],
    sections: [
      {
        heading: 'What makes cleaning different',
        body: [
          'Cleaning is a recurring, route-dense business, and that shapes everything. You are not quoting big one-off repairs; you are running the same weekly and fortnightly visits reliably, week after week, with crews hopping between many short jobs. The software that fits is the software that makes recurring scheduling effortless and keeps routes tight, not the one with the deepest flat-rate pricebook.',
          'Billing follows the same logic. Recurring, automatic invoicing for repeat clients is what keeps the revenue predictable and the admin low, so a tool that handles subscription-style billing well is worth more here than one built around one-time job invoices.',
        ],
      },
      {
        heading: 'By company size',
        body: [
          'Solo cleaners and small teams are well served by quick-to-adopt tools: Jobber and Housecall Pro both handle recurring jobs and client communication cleanly, and ServiceM8 is a light, inexpensive option for a very small Apple-based operation. Kickserv is a budget-friendly pick if you want the essentials without paying for depth.',
          'As you grow into multiple crews and denser routes, the value shifts toward stronger scheduling and route planning, since a few minutes saved per stop multiplied across dozens of daily visits is real money. Weigh how well each tool handles recurring routes and team scheduling before you commit.',
        ],
      },
    ],
    recommendedProducts: ['jobber', 'housecall-pro', 'servicem8', 'kickserv'],
    relatedComparisons: ['jobber-vs-housecall-pro', 'jobber-vs-servicem8'],
    faqs: [
      {
        question: 'What is the best software for a cleaning business?',
        answer:
          'It depends on your size and whether you run routes. Small residential cleaning teams are usually well served by Jobber or Housecall Pro for recurring scheduling and client communication, ServiceM8 suits a very small Apple-based operation, and Kickserv is a budget option. Use the Finder for a shortlist scored against your specific business.',
      },
      {
        question: 'Do cleaning businesses need route optimization?',
        answer:
          'If you run many short recurring visits a day, routing matters a great deal, because small savings per stop add up fast across a dense schedule. If you do a handful of larger commercial cleans, it matters less. Match the feature to how route-dense your work really is.',
      },
      {
        question: 'What features matter most for recurring cleaning work?',
        answer:
          'Recurring visit scheduling, automatic recurring billing, route planning, and automated reminders to cut no-shows are the core. Online booking helps win new clients, and a simple mobile app with checklists keeps crews consistent. Deep pricebook and financing features matter far less for cleaning than for the mechanical trades.',
      },
    ],
    published: true,
  },
  {
    slug: 'pool-service',
    name: 'Pool Service Software',
    shortName: 'Pool Service',
    intro:
      'Pool service is one of the most route-dense trades there is: the same recurring stops, day after day, with chemical readings and service logs at each one. That makes routing, recurring scheduling and mobile service logging the features that actually move the needle, well ahead of the heavy office tools.',
    keyRequirements: [
      'Recurring route scheduling',
      'Route optimization for dense stops',
      'Mobile service and chemical logging',
      'Service history by property',
      'Recurring and auto billing',
      'Customer notifications',
      'Seasonal scheduling flexibility',
      'A fast, simple technician app',
    ],
    sections: [
      {
        heading: 'What makes pool service different',
        body: [
          'For pool service, the route is the business. Technicians run a fixed circuit of recurring stops, and shaving drive time between them directly decides how many pools one person can service in a day. A tool that plans and holds efficient recurring routes is worth more here than almost any other feature.',
          'The other distinctive need is on-site logging. Recording chemical readings, dosing and the state of each pool against that property’s history matters for service quality and for the conversation with the customer, so a clean mobile flow for capturing readings is a genuine requirement, not a nicety.',
        ],
      },
      {
        heading: 'By company size',
        body: [
          'A solo route or small pool business can run well on a light, mobile-first tool: ServiceM8 suits an Apple-based operator, and Jobber handles recurring visits and billing cleanly across any device. Kickserv is a budget-friendly option for the essentials.',
          'Larger route businesses running many technicians and hundreds of stops should weigh routing and recurring-scheduling depth hardest, and confirm the mobile app makes logging fast. Housecall Pro is a capable all-rounder if you also lean on customer communication and online booking to win new accounts.',
        ],
      },
    ],
    recommendedProducts: ['jobber', 'housecall-pro', 'servicem8', 'kickserv'],
    relatedComparisons: ['jobber-vs-housecall-pro', 'jobber-vs-servicem8'],
    faqs: [
      {
        question: 'What is the best software for a pool service business?',
        answer:
          'Because pool service is so route-dense, prioritize recurring route scheduling and a fast mobile app for logging. Jobber and Housecall Pro are strong all-rounders, ServiceM8 suits a small Apple-based route, and Kickserv is a budget pick. Use the Finder for a shortlist scored against your specific route and team size.',
      },
      {
        question: 'How important is route optimization for pool service?',
        answer:
          'Very. Pool service runs a high volume of short recurring stops, so efficient routing is one of the biggest levers on how many pools each technician can cover in a day. Treat genuine multi-stop routing and recurring route support as a priority, not an afterthought.',
      },
      {
        question: 'Can pool service software track chemical readings?',
        answer:
          'Many field service apps let technicians capture readings, notes and photos against each property on site, which builds a service history you can refer back to. If detailed chemical logging is central to how you work, test that mobile flow specifically during a trial to be sure it fits.',
      },
    ],
    published: true,
  },
  {
    slug: 'appliance-repair',
    name: 'Appliance Repair Software',
    shortName: 'Appliance Repair',
    intro:
      'Appliance repair lives on inbound calls and first-time fixes. The job usually starts with a customer phoning about a broken machine, and the money is made or lost on whether the technician arrives with the right diagnosis and the right part. That puts call handling, parts and equipment history at the center.',
    keyRequirements: [
      'Call tracking and lead handling',
      'Fast scheduling and dispatch',
      'Parts inventory and truck stock',
      'Equipment history by make, model and serial',
      'On-site quoting and invoicing',
      'Card payment in the field',
      'Warranty and job history',
      'A strong technician mobile app',
    ],
    sections: [
      {
        heading: 'What makes appliance repair different',
        body: [
          'Two things define appliance repair software. First, it is phone-driven: most jobs begin with an inbound call, so handling those calls well and turning them into booked jobs is where growth comes from. Second, it lives and dies on the first-time fix, because a second trip for a part you did not bring wipes out the profit on the job.',
          'That makes parts and information the priorities. Truck-stock inventory so the technician carries what the job needs, and equipment history by make, model and serial so they arrive knowing the machine, are worth more here than a flashy pricebook. Warranty status matters too, since a lot of appliance work runs through manufacturer coverage.',
        ],
      },
      {
        heading: 'By company size',
        body: [
          'For a phone-heavy shop, Workiz is a natural fit because it builds a phone system and call tracking right into the scheduling, so you can see which marketing brings the calls and route them fast. Jobber and Housecall Pro are strong general all-rounders for a small residential appliance business, and Kickserv is a budget-friendly option for the essentials.',
          'As you grow, weigh inventory depth and reporting harder, since parts management and first-time-fix tracking become the levers that protect your margin at volume.',
        ],
      },
    ],
    recommendedProducts: ['workiz', 'jobber', 'housecall-pro', 'kickserv'],
    relatedComparisons: ['jobber-vs-workiz', 'jobber-vs-housecall-pro'],
    faqs: [
      {
        question: 'What is the best software for an appliance repair business?',
        answer:
          'Because appliance repair is call-driven, a tool with built-in phone and call tracking like Workiz fits many shops well. Jobber and Housecall Pro are strong all-rounders, and Kickserv is a budget option. Prioritize parts inventory and equipment history too, and use the Finder for a shortlist matched to your business.',
      },
      {
        question: 'Why does inventory matter so much for appliance repair?',
        answer:
          'Because the second trip is the profit killer. If a technician arrives without the part the machine needs, you pay for the drive and the labor twice and earn once. Truck-stock inventory tied to the job is what lifts your first-time fix rate, which is the single biggest efficiency lever in appliance repair.',
      },
      {
        question: 'Do I need call tracking for appliance repair?',
        answer:
          'If most of your work comes from inbound calls, call tracking tells you which marketing actually produces booked jobs, so you can spend where it works. Communication-focused tools such as Workiz build this in, which is why they suit phone-driven trades like appliance repair.',
      },
    ],
    published: true,
  },
  {
    slug: 'garage-door',
    name: 'Garage Door Software',
    shortName: 'Garage Door',
    intro:
      'Garage door companies blend fast repair work with higher-ticket installs, and most of it starts with a phone call. The right software handles the inbound call, gets a technician out quickly, presents clear good, better and best options on site, and offers financing when the job is a full door replacement.',
    keyRequirements: [
      'Call tracking and lead handling',
      'Fast scheduling and dispatch',
      'Good, better, best quoting on site',
      'Parts inventory and truck stock',
      'Card payment and financing on installs',
      'On-my-way texts and notifications',
      'Equipment and job history',
      'A strong technician mobile app',
    ],
    sections: [
      {
        heading: 'What makes garage door different',
        body: [
          'Garage door work sits between two modes. A lot of it is quick repair, a spring, an opener, a panel, that rewards fast call handling and dispatch. But a meaningful share is full door replacement, a bigger ticket where the sale is won on a clear, professional quote and the ability to let the customer spread the cost. Software that does both the fast-repair and the sell-the-install job well is what fits.',
          'On the repair side, being phone-driven means call handling matters. On the install side, good-better-best quoting on the technician’s device and point-of-sale financing measurably lift close rates, because a manageable monthly figure lands better than a large total.',
        ],
      },
      {
        heading: 'By company size',
        body: [
          'A smaller garage door business that lives on inbound calls fits Workiz well, given its built-in phone and call tracking. Jobber and Housecall Pro are strong all-rounders that handle quoting, scheduling and payments cleanly, and Housecall Pro in particular leans into the customer-experience side. ServiceM8 is a light option for a very small Apple-based operator.',
          'As installs become a larger share of revenue, weigh quoting depth and financing options harder, since that is where the bigger tickets are won or lost.',
        ],
      },
    ],
    recommendedProducts: ['workiz', 'jobber', 'housecall-pro', 'servicem8'],
    relatedComparisons: ['jobber-vs-workiz', 'jobber-vs-housecall-pro'],
    faqs: [
      {
        question: 'What is the best software for a garage door business?',
        answer:
          'For a call-driven repair business, Workiz fits well with its built-in phone and call tracking. Jobber and Housecall Pro are strong all-rounders that also handle installs and payments, and ServiceM8 suits a small Apple-based operator. Use the Finder for a shortlist scored against your mix of repair and install work.',
      },
      {
        question: 'Does garage door software need financing options?',
        answer:
          'If full door replacements are a meaningful part of your revenue, yes. Point-of-sale financing lets a customer spread the cost of a bigger install while you get paid up front, and it measurably lifts close rates on expensive work. If you are mostly doing quick repairs, it matters less.',
      },
      {
        question: 'How important is good-better-best quoting for garage doors?',
        answer:
          'On installs it is a real advantage. Showing a customer three clear options rather than a single price lets them choose their level, and a meaningful share choose up, which lifts your average ticket. Look for a tool that presents good, better and best cleanly on the technician’s device.',
      },
    ],
    published: true,
  },
  {
    slug: 'locksmith',
    name: 'Locksmith Software',
    shortName: 'Locksmith',
    intro:
      'Locksmithing is about as call-driven and time-sensitive as field service gets. A customer is locked out and wants someone now, so the business that answers fast, sends the nearest technician, and takes payment on the spot wins the job. Speed, mobility and call handling matter more than back-office depth.',
    keyRequirements: [
      'Call tracking and fast lead handling',
      'Rapid emergency dispatch',
      'GPS to send the nearest technician',
      'On-site quoting and card payment',
      'A fast, mobile-first app',
      'Customer notifications',
      'Job history for repeat clients',
      'Simple, quick setup',
    ],
    sections: [
      {
        heading: 'What makes locksmithing different',
        body: [
          'Locksmith work is dominated by urgent, inbound calls and a lot of small, fast jobs. The whole chain from ringing phone to paid job happens in a compressed window, so the software has to make that chain quick: capture the call, dispatch the closest available technician, and let them quote and take payment on site before they drive off. Anything that slows that loop costs you jobs to the competitor who picks up faster.',
          'Because so much of the value is speed and location, call tracking and live GPS matter more than the heavy features other trades need. A deep pricebook or complex project tools are largely beside the point for a mobile locksmith.',
        ],
      },
      {
        heading: 'By company size',
        body: [
          'For most locksmith businesses, a communication-first tool fits best: Workiz builds a phone system and call tracking straight into scheduling, which suits a trade that lives on inbound calls. Jobber is a clean all-rounder that handles scheduling, quoting and payments across any device, and Kickserv is a budget-friendly option for the essentials.',
          'As you add technicians, live GPS and fast dispatch become more valuable, since sending the genuinely nearest person to an emergency is what keeps response times, and reviews, strong.',
        ],
      },
    ],
    recommendedProducts: ['workiz', 'jobber', 'kickserv'],
    relatedComparisons: ['jobber-vs-workiz'],
    faqs: [
      {
        question: 'What is the best software for a locksmith business?',
        answer:
          'Because locksmithing is so call-driven, a tool with built-in phone and call tracking like Workiz fits many businesses well. Jobber is a strong all-rounder, and Kickserv is a budget option. Prioritize fast dispatch and on-site payment, and use the Finder for a shortlist matched to your business.',
      },
      {
        question: 'Why does GPS tracking matter for locksmiths?',
        answer:
          'Locksmith jobs are often emergencies where the closest technician wins. Live GPS lets you dispatch the genuinely nearest available person rather than guessing, which shortens response times on lockouts and keeps customers, and your reviews, happy.',
      },
      {
        question: 'Do locksmiths need a flat-rate pricebook?',
        answer:
          'Less than the mechanical trades do. Locksmith work is fast and mobile, so the priorities are quick call handling, dispatch and on-site payment rather than a deep pricebook. A simple way to quote and collect on the technician’s device usually matters more than pricebook depth.',
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
  'appliance-repair': 'Appliance Repair',
  'garage-door': 'Garage Door',
  locksmith: 'Locksmith',
  commercial: 'Commercial Field Service',
  other: 'Other',
};
