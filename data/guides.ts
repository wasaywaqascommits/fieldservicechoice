import type { GuidePage } from '@/types';

/** Editorial guides: buying-intent decision content + field-service fundamentals. */
export const GUIDES: GuidePage[] = [
  {
    slug: 'what-is-field-service-management-software',
    title: 'What Is Field Service Management Software?',
    category: 'Field service basics',
    intro:
      'If you run a trade or home-service business, you have probably seen the term field service management software, often shortened to FSM software. This guide explains what it is, what it actually does day to day, and how to tell whether your business is ready for it. No jargon.',
    sections: [
      {
        heading: 'The short answer',
        body: [
          'Field service management software is the system a service business uses to run the work its technicians do out in the field. It takes a job from the first phone call through to a paid invoice, and it keeps a record of everything in between.',
          'Picture a normal day at a plumbing or HVAC shop. A customer calls with a problem. Someone books the visit, picks a technician, and sends over the address and the history. The technician shows up, does the work, takes a few photos, quotes any extra repairs, and collects payment. Back at the office, the job becomes an invoice, the customer record gets updated, and the numbers land in accounting. FSM software is what ties all of that together in one place, instead of a whiteboard, a shared calendar, a notebook and three apps that don’t talk to each other.',
        ],
      },
      {
        heading: 'What it does day to day',
        body: [
          'Most of the value comes from a few everyday jobs. Scheduling and dispatch put the right technician on the right job at the right time, and let you shuffle things when a cancellation or an emergency lands. A mobile app gives technicians the job details, customer history and directions on their phone, usually with an offline option for basements and rural areas where the signal drops.',
          'On the money side, the software builds estimates, turns approved work into invoices, and takes card or ACH payment on the spot. Automated “on my way” texts cut down on missed appointments. And a proper customer record holds the full history of every visit, so the next technician isn’t starting from zero.',
          'Bigger operations lean on the heavier features: a flat-rate pricebook so every technician quotes the same number, membership or service agreements that bring in recurring revenue, inventory and truck-stock tracking, and reporting that shows where the money is really being made.',
        ],
      },
      {
        heading: 'Who it’s for, and who can wait',
        body: [
          'With two or three people and a light job load, a calendar and a simple invoicing tool might still be enough. FSM software starts to pay off once the moving parts slip through the cracks: calls that never get returned, technicians double-booked, invoices going out a week late, or a customer asking about a repair nobody wrote down.',
          'It’s also worth it sooner if you sell maintenance agreements, or if your books live in QuickBooks, because keeping those in sync by hand quietly eats hours every week.',
        ],
      },
      {
        heading: 'FSM software vs a stack of separate apps',
        body: [
          'Plenty of shops run on tools that were never meant to work together: a calendar for scheduling, a messaging app for the crew, a spreadsheet for jobs, and QuickBooks for the books. It holds up for a while. Then numbers get typed twice, something falls between two apps, and nobody has the whole picture.',
          'The point of FSM software is that one job flows through one system, so the schedule, the invoice, the customer history and the accounting all reflect the same reality. That’s the change you feel most in the first month.',
        ],
      },
      {
        heading: 'Signs you’ve outgrown your current setup',
        body: [
          'A few patterns tend to show up right before a business switches. You lose track of who’s booked for what. Payments drag because invoicing happens at the kitchen table on Sunday night. Technicians keep calling the office for details that should already be on their phone. And you can’t answer a plain question like “which jobs actually made money last month” without a lot of manual adding up.',
          'If two or three of those sound familiar, you’re past the point where a spreadsheet is helping.',
        ],
      },
      {
        heading: 'How to start without overbuying',
        body: [
          'The most common and expensive mistake is buying a big enterprise platform before you need it, then paying for months of setup and features nobody touches. Start from your actual pain instead. Write down the three or four things that hurt most today, and shortlist tools that fix those well.',
          'From there, our software finder scores platforms against your trade, team size, budget and must-have integrations, and our best-of guides give an editorial shortlist for common situations. Either is a good next step once you know what you need.',
        ],
      },
    ],
    related: [
      { label: 'Find software matched to your business', href: '/find-software/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
      { label: 'Field service software vs CRM', href: '/guides/field-service-management-software-vs-crm/' },
      { label: 'How to choose field service software', href: '/guides/how-to-choose-field-service-software/' },
    ],
    publishedAt: '2026-09-12',
    updatedAt: '2026-09-12',
    published: true,
  },
  {
    slug: 'field-service-management-software-vs-crm',
    title: 'Field Service Software vs CRM: What’s the Difference?',
    category: 'Field service basics',
    intro:
      'Field service software and CRM software overlap enough to cause real confusion, and plenty of businesses buy the wrong one first. Here’s how they actually differ, where they cross over, and which one a service business should start with.',
    sections: [
      {
        heading: 'What each one is built to do',
        body: [
          'A CRM, short for customer relationship management, is built around the relationship and the sale. It tracks leads, contacts, deals and follow-ups, and it’s at its best helping a sales team move a prospect toward a signature.',
          'Field service software is built around the job. Its center of gravity is booking a visit, dispatching a technician, doing the work, and getting paid. Customer records exist, but they sit next to the schedule, the invoice and the service history rather than a sales pipeline.',
        ],
      },
      {
        heading: 'Where they cross over',
        body: [
          'Both keep customer records, both log communication, and both can capture a lead. That shared ground is exactly why the two get mixed up. Many field service platforms include light CRM features, like a contact list, notes and a bit of marketing, and some CRMs bolt on scheduling. The real question is which job sits at the core, because that’s the one the tool does well.',
        ],
      },
      {
        heading: 'Which one a service business needs',
        body: [
          'If your day is defined by technicians, appointments and invoices, start with field service software. It covers the customer-record basics you need, and it handles the operational reality a generic CRM was never designed for, like assigning the nearest available technician or pushing a finished job straight into QuickBooks.',
          'A dedicated CRM makes sense when a real sales process is the bottleneck: long deal cycles, a sales team working leads, or high-value quotes that need nurturing over weeks. Larger operations often run both and connect them, with the CRM owning the pipeline and the field service platform owning the work.',
        ],
      },
      {
        heading: 'A simple rule of thumb',
        body: [
          'Ask where your business loses money today. If it’s missed appointments, slow invoicing and jobs falling through the cracks, that’s a field service problem. If it’s leads going cold and quotes never followed up, that’s a CRM problem. Buy for the pain you have now, not the one you might have later.',
        ],
      },
    ],
    related: [
      { label: 'What is field service management software?', href: '/guides/what-is-field-service-management-software/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
    ],
    publishedAt: '2026-09-12',
    updatedAt: '2026-09-12',
    published: true,
  },
  {
    slug: 'field-service-management-vs-job-management-software',
    title: 'Field Service Software vs Job Management Software',
    category: 'Field service basics',
    intro:
      'Field service software and job management software are close cousins, and the labels get used almost interchangeably. There is a real distinction, though, and it matters most for trades and project-based businesses deciding what to buy.',
    sections: [
      {
        heading: 'The overlap is real',
        body: [
          'Both help you plan work, track it through to completion, and invoice for it. For a small trade business, a lot of products marketed as “job management” and a lot marketed as “field service management” will feel almost identical in daily use. So don’t get hung up on the label by itself.',
        ],
      },
      {
        heading: 'Where field service leans',
        body: [
          'Field service management usually puts more weight on the field side of the operation: dispatching technicians to locations, changing the schedule on the fly, a strong mobile app, service agreements and recurring maintenance, and customer updates like on-my-way texts. It shines when the core challenge is coordinating people moving between job sites all day.',
        ],
      },
      {
        heading: 'Where job management leans',
        body: [
          'Job management often treats the job or project as the unit of work: quoting, tracking labor and materials against a job, job costing, and profit per project. It tends to fit trades where a job runs over days or weeks, like an electrical fit-out or a larger install, rather than a steady stream of short service calls.',
        ],
      },
      {
        heading: 'How to choose between them',
        body: [
          'Picture your typical week. If it’s a high volume of short visits with technicians on the road, weigh the field service strengths: dispatch, mobile, routing and recurring service. If it’s fewer, longer projects where staying on top of labor, materials and margin is the real test, weigh the job management strengths: estimating depth and job costing.',
          'Most tools do some of both. Decide which side carries most of your revenue, buy for that, and accept a little compromise on the other.',
        ],
      },
    ],
    related: [
      { label: 'What is field service management software?', href: '/guides/what-is-field-service-management-software/' },
      { label: 'Best software for commercial and project work', href: '/best/field-service-management-software/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-12',
    updatedAt: '2026-09-12',
    published: true,
  },
  {
    slug: 'field-service-management-software-vs-erp',
    title: 'Field Service Software vs ERP: Which Does Your Business Need?',
    category: 'Field service basics',
    intro:
      'ERP and field service software both promise to run your operation from one place, and for a growing service business the line between them blurs fast. Here’s what each is really for, and when a trade or home-service company actually needs an ERP.',
    sections: [
      {
        heading: 'What an ERP is',
        body: [
          'ERP stands for enterprise resource planning. It’s the backbone system large companies use to run finance, procurement, HR, inventory and manufacturing in one connected database. The whole idea is a single source of truth across departments that mostly don’t deal with customers directly.',
          'Field service software lives at the front line instead: the schedule, the technician, the job and the invoice. It’s built for the work that happens at a customer’s property, not for running a factory floor or a corporate finance department.',
        ],
      },
      {
        heading: 'Where people get confused',
        body: [
          'The mix-up starts because both handle money and both hold a lot of operational data. A big field service platform can feel ERP-like once it’s tracking inventory, job costing and reporting, and some ERPs have a field service module bolted on. But the design goals are different, and that difference shows up in how usable each one is for a service crew.',
        ],
      },
      {
        heading: 'When a service business needs an ERP',
        body: [
          'Most trade and home-service businesses don’t need an ERP. You reach for one when the complexity outgrows field service software: multiple entities or locations with consolidated financials, real manufacturing or heavy warehousing, formal procurement, or a finance team that needs controls a service tool was never meant to provide.',
          'That’s usually a far larger company than a typical HVAC, plumbing or electrical contractor. If you’re asking the question at all, the honest answer is often “not yet.”',
        ],
      },
      {
        heading: 'The setup that works for most',
        body: [
          'Plenty of mid-sized service companies run field service software for the work and QuickBooks or Xero for the books, then connect the two. That covers the operational side and the accounting without the cost and weight of a full ERP. If you eventually outgrow it, an ERP with a service module, or a service platform that integrates with your ERP, is the next step.',
        ],
      },
    ],
    related: [
      { label: 'What is field service management software?', href: '/guides/what-is-field-service-management-software/' },
      { label: 'Field service software vs CRM', href: '/guides/field-service-management-software-vs-crm/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'cloud-vs-on-premise-field-service-software',
    title: 'Cloud vs On-Premise Field Service Software',
    category: 'Field service basics',
    intro:
      'Almost every field service tool sold today is cloud-based, but the question still comes up, especially from shops that already run QuickBooks Desktop or older systems. Here’s the practical difference and what it means for your business.',
    sections: [
      {
        heading: 'The basic difference',
        body: [
          'Cloud software runs on the vendor’s servers, and you use it through a browser and a mobile app. On-premise software (often shortened to on-prem) is installed on a computer or server you own and maintain. With cloud, the vendor handles updates, backups and uptime. With on-prem, that’s on you.',
        ],
      },
      {
        heading: 'Why the market moved to cloud',
        body: [
          'Field work is mobile by nature. A technician needs the job details and the ability to update a job from a phone at the customer’s house, and that’s exactly what cloud plus a mobile app delivers. Cloud also means no server to babysit, automatic updates, and access from anywhere, which is why nearly all modern field service platforms are cloud-only.',
        ],
      },
      {
        heading: 'Where on-premise still shows up',
        body: [
          'The most common brush with on-prem for a service business is QuickBooks Desktop. It’s desktop accounting software, and syncing it with a cloud field service tool needs a small sync agent running on a Windows machine. That isn’t the field service software being on-prem, but it’s the closest most shops get, and it’s worth knowing if your books live in Desktop.',
          'A few very large or security-sensitive organizations still prefer self-hosted systems for control. For the vast majority of trades, that trade-off isn’t worth the maintenance burden.',
        ],
      },
      {
        heading: 'What to actually check',
        body: [
          'Since your field service tool will almost certainly be cloud-based, the practical questions are about reliability and access. Does the mobile app work offline when there’s no signal? How does it handle your accounting, especially QuickBooks Desktop if that’s what you run? And who owns your data, and can you export it? Those matter far more than the cloud-versus-on-prem label itself.',
        ],
      },
    ],
    related: [
      { label: 'What is field service management software?', href: '/guides/what-is-field-service-management-software/' },
      { label: 'Best field service software with QuickBooks', href: '/best/field-service-software-with-quickbooks/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'all-in-one-vs-point-solutions-field-service',
    title: 'All-in-One vs Point Solutions for Field Service',
    category: 'Field service basics',
    intro:
      'Should you run one platform that does everything, or stitch together specialist tools that each do one thing well? Both approaches are common in field service, and the right call depends on your size and how demanding any single part of your operation is.',
    sections: [
      {
        heading: 'What each approach means',
        body: [
          'An all-in-one platform tries to cover the whole operation under one login: scheduling, dispatch, estimates, invoicing, payments, CRM and often marketing. A point solution, sometimes called best-of-breed, is a specialist you connect to the rest of your stack, for example a dedicated routing tool, a standalone estimating app, or a separate marketing platform.',
        ],
      },
      {
        heading: 'The case for all-in-one',
        body: [
          'For most small and mid-sized service businesses, all-in-one wins. One system means one place to learn, one support line, and data that already flows between scheduling, invoicing and the customer record without you wiring up integrations. Fewer moving parts is a real advantage when you don’t have an office team to manage software.',
        ],
      },
      {
        heading: 'The case for point solutions',
        body: [
          'Best-of-breed earns its place when one part of your operation is unusually demanding and the all-in-one tools fall short there. A business that lives or dies on route density might want a specialist routing engine. A sales-heavy operation might want a real marketing platform. The cost is more integrations to maintain and more places for data to drift out of sync.',
        ],
      },
      {
        heading: 'How to decide',
        body: [
          'Start all-in-one unless you have a specific, painful reason not to. If one workflow is clearly underserved and it’s central to your revenue, add a specialist for that single thing and keep everything else in your core platform. Bolting on specialists everywhere, too early, usually creates more admin than it saves.',
        ],
      },
    ],
    related: [
      { label: 'What is field service management software?', href: '/guides/what-is-field-service-management-software/' },
      { label: 'How to choose field service software', href: '/guides/how-to-choose-field-service-software/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'how-to-choose-field-service-software',
    title: 'How to Choose Field Service Software',
    category: 'Buying guide',
    intro:
      'Choosing field service management software is less about finding the "best" product and more about matching a platform to your specific business, your trade, team size, workflows, integrations and budget. This guide walks through the decisions that actually determine fit.',
    sections: [
      {
        heading: 'Start with your trade and work type',
        body: [
          'The single biggest driver of fit is what you do. Residential service, commercial service, route-based recurring work and project-based work each reward different software strengths.',
          'A residential HVAC company and a commercial mechanical contractor can both call themselves "HVAC" and yet need very different tools. Be specific about your dominant work type before you shortlist.',
        ],
      },
      {
        heading: 'Size the platform to your team',
        body: [
          'Small teams usually win with fast-to-adopt tools; larger operations justify the depth and implementation of enterprise platforms. Buying "too much software" is a common and costly mistake for small teams.',
        ],
      },
      {
        heading: 'Pin down your must-have capabilities',
        body: [
          'List the handful of capabilities you genuinely cannot operate without, for example a flat-rate pricebook, service agreements, QuickBooks Desktop, or route optimization. These often eliminate options quickly.',
        ],
      },
      {
        heading: 'Check integrations early',
        body: [
          'Accounting integration in particular (QuickBooks Online vs Desktop vs Xero) varies a lot between platforms and can be a deal-breaker. Verify it before you fall in love with a product.',
        ],
      },
      {
        heading: 'Be realistic about implementation',
        body: [
          'Deeper platforms require more setup, data migration and training. Factor the rollout, not just the monthly price, into your decision.',
        ],
      },
    ],
    related: [
      { label: 'Find software matched to your business', href: '/find-software/' },
      { label: 'Field service software pricing, explained', href: '/guides/field-service-software-pricing-explained/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
    ],
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10',
    published: true,
  },
  {
    slug: 'field-service-software-pricing-explained',
    title: 'Field Service Software Pricing, Explained',
    category: 'Buying guide',
    intro:
      'Field service software pricing ranges from transparent per-user tiers to fully quote-based enterprise contracts. Understanding the pricing model helps you compare options fairly and avoid surprises.',
    sections: [
      {
        heading: 'Common pricing models',
        body: [
          'Tiered / per-user pricing (common for small-business tools) scales with the number of users and the features you need. Quote-based pricing (common for enterprise platforms) requires a conversation and often reflects a larger implementation.',
        ],
      },
      {
        heading: 'Watch for the total cost',
        body: [
          'Beyond the headline price, watch for payment processing fees, add-on modules, additional user costs, setup/implementation fees and contract length. The cheapest sticker price is not always the lowest total cost.',
        ],
      },
      {
        heading: 'Our approach to pricing data',
        body: [
          'We do not publish fabricated prices. Where a vendor publishes pricing, we verify and date it; where pricing is quote-based, we say so. Always confirm current pricing directly with the vendor before deciding.',
        ],
      },
    ],
    related: [
      { label: 'How to choose field service software', href: '/guides/how-to-choose-field-service-software/' },
      { label: 'Find software matched to your budget', href: '/find-software/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
    ],
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10',
    published: true,
  },
];

export const GUIDE_MAP: Record<string, GuidePage> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g]),
);

export function getGuide(slug: string): GuidePage | undefined {
  return GUIDE_MAP[slug];
}

export function publishedGuides(): GuidePage[] {
  return GUIDES.filter((g) => g.published);
}
