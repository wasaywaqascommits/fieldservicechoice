import type { GuidePage } from '@/types';

/** Editorial guides: buying-intent decision content + field-service fundamentals. */
export const GUIDES: GuidePage[] = [
  {
    slug: 'what-is-field-service-management-software',
    title: 'What Is Field Service Management Software?',
    category: 'Field service basics',
    intro:
      'If you run a trade or home-service business, you have probably seen the term field service management software, usually shortened to FSM software. This guide covers what it is, what it actually does day to day, what it tends to cost, and how to tell whether your business is ready for it yet.',
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
          'Most of the value comes from a few everyday jobs. [Scheduling](/guides/field-service-scheduling/) and [dispatch](/guides/field-service-dispatching/) put the right technician on the right job at the right time, and let you shuffle things when a cancellation or an emergency lands. A [mobile app](/guides/field-service-technician-mobile-app/) gives technicians the job details, customer history and directions on their phone, usually with an offline option for basements and rural areas where the signal drops.',
          'On the money side, the software builds [estimates](/guides/field-service-estimating/), turns approved work into [invoices](/guides/field-service-invoicing/), and takes card or ACH payment on the spot. Automated “on my way” texts cut down on missed appointments. And a proper customer record holds the full history of every visit, so the next technician isn’t starting from zero.',
          'Bigger operations lean on the heavier features: a [flat-rate pricebook](/guides/flat-rate-pricebook/) so every technician quotes the same number, [service agreements](/guides/field-service-service-agreements/) that bring in recurring revenue, [inventory and truck-stock tracking](/guides/field-service-inventory-management/), and reporting that shows where the money is really being made.',
        ],
      },
      {
        heading: 'What it actually costs',
        body: [
          'Pricing sorts into three rough bands. Starter plans for a single user run around $29 to $50 a month ([Jobber](/products/jobber/)’s entry plan is $29 billed annually, for example). Small-crew plans that add automation, online booking and five to ten users tend to land between $100 and $200 a month. And the enterprise platforms built for larger trades, [ServiceTitan](/products/servicetitan/) being the obvious one, are quote-based, so you talk to sales rather than read a price off a page.',
          'Two costs sit outside that subscription and catch people out. First, payment processing: if you collect card payments through the software, expect roughly 2.9% plus 30 cents per card transaction and about 1% on ACH, on top of your plan. For a business invoicing tens of thousands a month, that is a real line item. Second, implementation. The small-business tools are self-serve and you can be live in days; the enterprise platforms involve data migration and training and a multi-week rollout, which is a cost in both money and attention. Our [pricing guide](/guides/field-service-software-pricing-explained/) breaks all of this down.',
        ],
        chart: {
          title: 'Typical monthly price bands',
          caption: 'Indicative starting points, not exact quotes. See verified pricing on each product page. Enterprise is quoted per technician.',
          bars: [
            { label: 'Starter (1 user)', value: 50, valueLabel: '$29–$50/mo' },
            { label: 'Small crew (5–10 users)', value: 200, valueLabel: '$100–$200/mo' },
            { label: 'Enterprise (per technician)', value: 400, valueLabel: '$245–$400/tech' },
          ],
        },
      },
      {
        heading: 'Who it’s for, and who can wait',
        body: [
          'With two or three people and a light job load, a calendar and a simple invoicing tool might still be enough. FSM software starts to pay off once the moving parts slip through the cracks: calls that never get returned, technicians double-booked, invoices going out a week late, or a customer asking about a repair nobody wrote down.',
          'It’s also worth it sooner if you sell maintenance agreements, or if your books live in QuickBooks, because keeping those in sync by hand quietly eats hours every week. One caveat worth checking early: if your accounting runs on QuickBooks Desktop rather than Online, your options narrow fast, because several popular tools sync only with the Online version. Confirm that before you fall for a demo.',
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
        heading: 'What most buyers get wrong',
        body: [
          'The most common and expensive mistake is buying a big enterprise platform before you need it, then paying for months of setup and features nobody touches. The mirror image is just as costly: picking the cheapest starter tool, outgrowing it in a year, and going through a painful data migration you could have skipped. Buy for where you will be in eighteen months, not for today and not for some distant someday.',
          'The other trap is shopping by feature list. Every vendor’s list looks complete on paper. What actually matters is whether the two or three things you do most often are genuinely good, and whether the tool fits how your team already works. A long feature list you never use is not value, it is just a higher bill.',
        ],
        callout: {
          text: 'Buy for where you will be in about eighteen months, not for today and not for some distant someday.',
        },
      },
      {
        heading: 'How to start without overbuying',
        body: [
          'Start from your actual pain, not a feature comparison. Write down the three or four things that hurt most today, the jobs that slip, the invoices that lag, the calls you keep fielding, and shortlist tools that fix those well.',
          'From there, our software finder scores platforms against your trade, team size, budget and must-have integrations, and our best-of guides give an editorial shortlist for common situations. Either is a good next step once you know what you actually need.',
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
    updatedAt: '2026-09-13',
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
          'Field service software is built around the job. Its center of gravity is booking a visit, [dispatching a technician](/guides/field-service-dispatching/), doing the work, and getting paid. Customer records exist, but they sit next to the schedule, the [invoice](/guides/field-service-invoicing/) and the service history rather than a sales pipeline.',
        ],
        table: {
          caption: 'The overlap is real, but the center of gravity is different.',
          headings: ['', 'Field service software', 'CRM'],
          rows: [
            ['Built around', 'The job: schedule to invoice', 'The relationship and the sale'],
            ['Core features', 'Scheduling, dispatch, invoicing', 'Leads, deals, pipeline, follow-ups'],
            ['Buy it when', 'Missed jobs and slow invoicing hurt', 'Leads go cold and quotes are not chased'],
            ['Examples', '[Jobber](/products/jobber/), [Housecall Pro](/products/housecall-pro/)', 'Salesforce, HubSpot'],
          ],
        },
      },
      {
        heading: 'Where they cross over',
        body: [
          'Both keep customer records, both log communication, and both can capture a lead. That shared ground is exactly why the two get mixed up. Many field service platforms, [Jobber](/products/jobber/) and [Housecall Pro](/products/housecall-pro/) among them, include light CRM features like a contact list, notes and basic marketing, and some CRMs bolt on scheduling. The real question is which job sits at the core, because that’s the one the tool does well and the other it only dabbles in.',
        ],
      },
      {
        heading: 'Which one a service business needs',
        body: [
          'If your day is defined by technicians, appointments and invoices, start with field service software. It covers the customer-record basics you need, and it handles the operational reality a generic CRM was never designed for, like assigning the nearest available technician or [pushing a finished job straight into QuickBooks](/guides/how-to-connect-field-service-software-to-quickbooks/).',
          'A dedicated CRM makes sense when a real sales process is the bottleneck: long deal cycles, a sales team working leads, or high-value quotes that need nurturing over weeks. Larger operations often run both and connect them, with the CRM owning the pipeline and the field service platform owning the work.',
        ],
      },
      {
        heading: 'A simple rule of thumb',
        body: [
          'Ask where your business loses money today. If it’s missed appointments, slow invoicing and jobs falling through the cracks, that’s a field service problem. If it’s leads going cold and quotes never followed up, that’s a CRM problem.',
        ],
        callout: {
          text: 'Buy for the pain you have now, not the one you might have later.',
        },
      },
    ],
    related: [
      { label: 'What is field service management software?', href: '/guides/what-is-field-service-management-software/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
    ],
    publishedAt: '2026-09-12',
    updatedAt: '2026-09-13',
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
          'Job management often treats the job or project as the unit of work: quoting, tracking labor and materials against a job, [job costing](/guides/field-service-job-costing/), and profit per project. It tends to fit trades where a job runs over days or weeks, like an electrical fit-out or a larger install, rather than a steady stream of short service calls. Platforms like [Simpro](/products/simpro/) and [BuildOps](/products/buildops/) sit firmly on this end, with deeper estimating and job costing than a residential-focused tool.',
        ],
        table: {
          caption: 'Same daily overlap, different center of gravity.',
          headings: ['', 'Field service', 'Job management'],
          rows: [
            ['Unit of work', 'The visit', 'The job or project'],
            ['Leans into', '[Dispatch](/guides/field-service-dispatching/), mobile, [routing](/guides/field-service-route-optimization/), recurring', 'Estimating, labor and materials, [job costing](/guides/field-service-job-costing/)'],
            ['Fits', 'Many short visits on the road', 'Fewer, longer projects'],
            ['Examples', '[Jobber](/products/jobber/), [Housecall Pro](/products/housecall-pro/)', '[Simpro](/products/simpro/), [BuildOps](/products/buildops/)'],
          ],
        },
      },
      {
        heading: 'How to choose between them',
        body: [
          'Picture your typical week. If it’s a high volume of short visits with technicians on the road, weigh the field service strengths: dispatch, mobile, routing and recurring service. If it’s fewer, longer projects where staying on top of labor, materials and margin is the real test, weigh the job management strengths: estimating depth and job costing.',
        ],
        callout: {
          text: 'Most tools do some of both. Decide which side carries most of your revenue, buy for that, and accept a little compromise on the other.',
        },
      },
    ],
    related: [
      { label: 'What is field service management software?', href: '/guides/what-is-field-service-management-software/' },
      { label: 'Best software for commercial and project work', href: '/best/field-service-management-software/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-12',
    updatedAt: '2026-09-13',
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
          'The mix-up starts because both handle money and both hold a lot of operational data. A big field service platform can feel ERP-like once it’s tracking [inventory](/guides/field-service-inventory-management/), [job costing](/guides/field-service-job-costing/) and reporting, and some ERPs have a field service module bolted on. But the design goals are different, and that difference shows up in how usable each one is for a service crew.',
        ],
        table: {
          caption: 'Two different jobs, often confused because both touch money and data.',
          headings: ['', 'Field service software', 'ERP'],
          rows: [
            ['Runs', 'The front line: jobs, technicians, invoices', 'The whole company: finance, HR, procurement'],
            ['Built for', 'Work at the customer’s property', 'A cross-department single source of truth'],
            ['Right when', 'You run service or trade operations', 'Multi-entity finance, manufacturing, warehousing'],
            ['Typical user', 'HVAC, plumbing, electrical contractors', 'Large enterprises'],
          ],
        },
      },
      {
        heading: 'When a service business needs an ERP',
        body: [
          'Most trade and home-service businesses don’t need an ERP. You reach for one when the complexity outgrows field service software: multiple entities or locations with consolidated financials, real manufacturing or heavy warehousing, formal procurement, or a finance team that needs controls a service tool was never meant to provide.',
          'That’s usually a far larger company than a typical HVAC, plumbing or electrical contractor.',
        ],
        callout: {
          text: 'If you’re asking whether you need an ERP at all, the honest answer is usually not yet.',
        },
      },
      {
        heading: 'The setup that works for most',
        body: [
          'Plenty of mid-sized service companies run field service software for the work and [QuickBooks or Xero](/guides/field-service-software-accounting-integrations/) for the books, then connect the two. That covers the operational side and the accounting without the cost and weight of a full ERP. If you eventually outgrow it, an ERP with a service module, or a service platform that integrates with your ERP, is the next step.',
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
        table: {
          caption: 'Nearly all modern field service tools are cloud; on-prem lingers mainly in accounting.',
          headings: ['', 'Cloud', 'On-premise'],
          rows: [
            ['Runs on', 'The vendor’s servers', 'A server you own and maintain'],
            ['Updates and backups', 'Handled by the vendor', 'Your responsibility'],
            ['Access', 'Any browser or mobile app, anywhere', 'Usually on-site only'],
            ['Field and mobile use', 'Built for it', 'Limited'],
          ],
        },
      },
      {
        heading: 'Why the market moved to cloud',
        body: [
          'Field work is mobile by nature. A technician needs the job details and the ability to update a job from [a phone at the customer’s house](/guides/field-service-technician-mobile-app/), and that’s exactly what cloud plus a mobile app delivers. Cloud also means no server to babysit, automatic updates, and access from anywhere, which is why nearly all modern field service platforms are cloud-only.',
        ],
      },
      {
        heading: 'Where on-premise still shows up',
        body: [
          'The most common brush with on-prem for a service business is [QuickBooks Desktop](/guides/how-to-connect-field-service-software-to-quickbooks/). It’s desktop accounting software, and syncing it with a cloud field service tool needs a small sync agent running on a Windows machine. That isn’t the field service software being on-prem, but it’s the closest most shops get, and it’s worth knowing if your books live in Desktop.',
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
          'An all-in-one platform tries to cover the whole operation under one login: [scheduling](/guides/field-service-scheduling/), [dispatch](/guides/field-service-dispatching/), estimates, invoicing, payments, CRM and often marketing. A point solution, sometimes called best-of-breed, is a specialist you connect to the rest of your stack, for example a dedicated [routing tool](/guides/field-service-route-optimization/), a standalone estimating app, or a separate marketing platform.',
        ],
        table: {
          caption: 'Most small and mid-sized businesses are better off starting all-in-one.',
          headings: ['', 'All-in-one', 'Point solutions'],
          rows: [
            ['What it is', 'One platform for the whole operation', 'Specialist tools you connect together'],
            ['Strength', 'One login, data flows on its own', 'Best-in-class at one job'],
            ['Cost', 'A few features may be shallow', 'More integrations to maintain and sync'],
            ['Best for', 'Most small and mid-sized teams', 'One workflow that is unusually demanding'],
          ],
        },
      },
      {
        heading: 'The case for all-in-one',
        body: [
          'For most small and mid-sized service businesses, all-in-one wins. One system means one place to learn, one support line, and data that already flows between scheduling, invoicing and the customer record without you [wiring up integrations](/guides/field-service-software-and-zapier/). Fewer moving parts is a real advantage when you don’t have an office team to manage software.',
        ],
      },
      {
        heading: 'The case for point solutions',
        body: [
          'Best-of-breed earns its place when one part of your operation is unusually demanding and the all-in-one tools fall short there. A business that lives or dies on [route density](/guides/field-service-route-optimization/) might want a specialist routing engine. A sales-heavy operation might want a real marketing platform. The cost is more integrations to maintain and more places for data to drift out of sync.',
        ],
      },
      {
        heading: 'How to decide',
        body: [
          'If one workflow is clearly underserved and it’s central to your revenue, add a specialist for that single thing and keep everything else in your core platform. Bolting on specialists everywhere, too early, usually creates more admin than it saves.',
        ],
        callout: {
          text: 'Start all-in-one unless you have a specific, painful reason not to.',
        },
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
    slug: 'field-service-dispatching',
    title: 'Field Service Dispatching: What It Is and How to Get It Right',
    category: 'Feature',
    intro:
      'Dispatching is where a lot of service businesses win or lose the day. This guide explains what dispatching actually means in field service, why it’s so easy to get wrong, and what to look for in software that handles it well.',
    sections: [
      {
        heading: 'What dispatching means',
        body: [
          'Dispatching is the act of assigning a job to a technician and getting them to the right place, at the right time, with the right information. In a small shop it might be one person with a phone and a whiteboard. As you grow it becomes a live puzzle: who’s free, who’s closest, who has the skills and parts for this job, and what happens when an emergency jumps the queue.',
        ],
      },
      {
        heading: 'Why it’s hard to do well',
        body: [
          'The trouble is that the plan never survives contact with the day. A no-show frees up a slot, a two-hour job turns into four, a priority call lands at 11am. Good dispatching is really about handling change quickly without dropping anyone. Done badly, you get idle technicians, missed appointments, and customers left waiting with no update.',
        ],
      },
      {
        heading: 'How software helps',
        body: [
          'A dispatch board shows every technician and every job on one screen, usually as a drag-and-drop schedule you can rearrange in seconds. The better tools factor in location and skills, send the job straight to the technician’s phone, and fire off an automatic [on-my-way text](/guides/how-to-reduce-no-shows-field-service/) to the customer. [GPS tracking](/guides/field-service-gps-tracking/) shows where crews actually are, so you’re dispatching from reality rather than a guess.',
        ],
        callout: {
          text: 'Dispatch is not about the perfect morning plan. It is about how fast you recover when the day breaks it.',
        },
      },
      {
        heading: 'What to look for',
        body: [
          'If dispatch is your pain point, weigh how fast you can reassign a job, whether the technician gets full job details and history on mobile, and whether customers are kept in the loop automatically. Depth varies a lot: the enterprise platforms like [ServiceTitan](/products/servicetitan/) have the most sophisticated dispatch boards for busy multi-technician operations, while lighter tools like [Jobber](/products/jobber/) handle small-team dispatch cleanly without the overhead. High-volume operations should look hardest at the board and [routing](/guides/field-service-route-optimization/).',
        ],
      },
    ],
    related: [
      { label: 'Field service scheduling explained', href: '/guides/field-service-scheduling/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
      { label: 'ServiceTitan review', href: '/products/servicetitan/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-scheduling',
    title: 'Field Service Scheduling: What It Is and How to Do It Well',
    category: 'Feature',
    intro:
      'Scheduling sounds simple until you’re juggling a dozen technicians, recurring visits and last-minute emergencies. Here’s what scheduling means in field service, where it usually breaks down, and what good scheduling software actually does.',
    sections: [
      {
        heading: 'What scheduling covers',
        body: [
          'Scheduling is planning who does what, and when. In field service that means matching jobs to technicians across a day or a week, balancing new bookings against recurring maintenance visits, and leaving enough slack for the emergency that always seems to land at the worst moment.',
        ],
      },
      {
        heading: 'Where it breaks down',
        body: [
          'Most scheduling pain comes from two places: not seeing the whole picture, and not being able to change it fast. A paper calendar or a shared spreadsheet can’t show you at a glance who’s overbooked and who’s idle, and it can’t rearrange itself when a job runs long. That’s how you end up with technicians sitting around while customers wait.',
        ],
      },
      {
        heading: 'What software does',
        body: [
          'A good scheduler gives you a calendar you can drag jobs around on, color-coded by technician or job type, with recurring jobs that repeat automatically so [seasonal maintenance](/guides/field-service-service-agreements/) doesn’t rely on someone’s memory. It pushes each visit to the [technician’s phone](/guides/field-service-technician-mobile-app/) and, in stronger tools, warns you about conflicts and gaps before they turn into a problem.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'Look at how quickly you can move a job, whether recurring and route-based work is easy to set up, and how well the schedule syncs to the [mobile app](/guides/field-service-technician-mobile-app/) your technicians actually use. Most small-business tools like [Jobber](/products/jobber/) and [Housecall Pro](/products/housecall-pro/) handle recurring jobs well; if maintenance contracts are core to your revenue, that support matters more than almost anything else.',
        ],
        callout: {
          text: 'The test of a scheduler is not how it looks on a quiet Monday. It is how fast you can rearrange it when Wednesday falls apart.',
        },
      },
    ],
    related: [
      { label: 'Field service dispatching explained', href: '/guides/field-service-dispatching/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
      { label: 'Jobber review', href: '/products/jobber/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-invoicing',
    title: 'Field Service Invoicing: Getting Paid Faster',
    category: 'Feature',
    intro:
      'The gap between finishing a job and getting paid is where a lot of service businesses quietly lose money. This guide covers what invoicing looks like in field service and how the right software shortens that gap.',
    sections: [
      {
        heading: 'The problem with manual invoicing',
        body: [
          'When invoicing happens back at the office, often at night or on the weekend, it drifts. A job finishes Tuesday and the invoice goes out the following Monday, if it goes out at all. Every day of delay is a day longer until you’re paid, and the occasional job slips through and never gets billed.',
        ],
      },
      {
        heading: 'How field service invoicing works',
        body: [
          'Field service software turns a completed job into an invoice directly, often on the technician’s phone before they leave the driveway. The line items, the customer and the pricing are already there from the job, so there’s no re-typing. Many tools also [take card or ACH payment on the spot](/guides/how-to-get-paid-faster-field-service/), which is the single biggest lever for getting paid faster. Just budget for the [processing fee](/guides/field-service-software-payment-processing/): in-app card payments typically run around 2.9% plus 30 cents per transaction, with ACH nearer 1%, on top of your subscription.',
        ],
      },
      {
        heading: 'Where accounting fits',
        body: [
          'The invoice shouldn’t live in a silo. The better setups [sync invoices and payments into QuickBooks or Xero](/guides/field-service-software-accounting-integrations/) automatically, so your books stay current without anyone entering the same numbers twice. If your accounting runs on [QuickBooks Desktop](/guides/how-to-connect-field-service-software-to-quickbooks/), check that support specifically, because it varies between platforms.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'Weigh how fast a technician can invoice and collect in the field, whether payments are built in, and how cleanly it syncs with your accounting.',
        ],
        callout: {
          text: 'Getting invoicing, on-site payment and accounting sync right does more for cash flow than any other single feature.',
        },
      },
    ],
    related: [
      { label: 'Field service scheduling explained', href: '/guides/field-service-scheduling/' },
      { label: 'Best field service software with QuickBooks', href: '/best/field-service-software-with-quickbooks/' },
      { label: 'Housecall Pro review', href: '/products/housecall-pro/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'flat-rate-pricebook',
    title: 'Flat-Rate Pricebook: Consistent Pricing for the Trades',
    category: 'Feature',
    intro:
      'A flat-rate pricebook is one of the features that separates a growing trades business from a struggling one. Here’s what it is, why it matters, and which businesses actually need one.',
    sections: [
      {
        heading: 'What a flat-rate pricebook is',
        body: [
          'A flat-rate pricebook is a catalog of your common jobs and repairs, each with a set price, so a technician quotes the same number for the same work no matter who they are or how the day is going. It usually includes good, better and best options, so a customer chooses their level rather than just hearing one price.',
        ],
        table: {
          caption: 'An illustrative good/better/best layout. You set your own prices from your real costs, see how to build a pricebook.',
          headings: ['Option', 'What it covers', 'Why customers pick it'],
          rows: [
            ['Good', 'The essential repair', 'Lowest price, fixes the problem today'],
            ['Better', 'Repair plus an upgraded part or longer warranty', 'More peace of mind for a bit more'],
            ['Best', 'Full replacement or the premium option', 'Longest-term value and fewer future callbacks'],
          ],
        },
      },
      {
        heading: 'Why it matters',
        body: [
          'Without one, pricing lives in your senior technicians’ heads, which means it walks out the door when they do and shifts from job to job. A pricebook makes quoting consistent, faster, and easy to hand to a newer technician.',
        ],
        callout: {
          text: 'Priced right, a good/better/best menu lifts your average ticket without anyone having to sell harder.',
        },
      },
      {
        heading: 'Who needs one',
        body: [
          'Flat-rate pricing earns its keep for trades that do a lot of repeatable repairs and replacements, HVAC and plumbing especially. If most of your work is custom or project-based, a full pricebook matters less than solid [estimating](/guides/field-service-estimating/). Match the feature to how repeatable your work really is.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'If a pricebook is central for you, look at how deep and editable it is, whether it supports good/better/best presentation on the technician’s device, and whether it ties into [financing for bigger tickets](/guides/field-service-payments-and-financing/). This is where the enterprise platforms pull well ahead: [ServiceTitan](/products/servicetitan/)’s pricebook is the category benchmark, while lighter tools like [Jobber](/products/jobber/) offer little or none, so if flat-rate pricing is a must-have it will shape your whole shortlist. When you are ready, here is [how to build one](/guides/how-to-build-a-flat-rate-pricebook/).',
        ],
      },
    ],
    related: [
      { label: 'Field service invoicing explained', href: '/guides/field-service-invoicing/' },
      { label: 'Best HVAC field service software', href: '/best/hvac-field-service-software/' },
      { label: 'ServiceTitan review', href: '/products/servicetitan/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-technician-mobile-app',
    title: 'The Technician Mobile App: Why It Makes or Breaks Adoption',
    category: 'Feature',
    intro:
      'You can buy the most powerful field service platform on the market, but if your technicians won’t use the app, none of it matters. Here’s why the mobile app is the feature that quietly decides whether the software sticks.',
    sections: [
      {
        heading: 'Why the app is the real product',
        body: [
          'For the office, field service software is a dashboard. For your technicians, it’s the app in their pocket, and that’s where the work actually happens. If the app is slow, confusing, or missing the details they need, they’ll go back to calling the office and writing on paper, and the whole system falls apart.',
        ],
      },
      {
        heading: 'What a good app does in the field',
        body: [
          'A strong mobile app gives the technician the full job in one place: address and directions, customer and equipment history, the tasks to do, and room for notes and photos. It lets them build a [quote](/guides/field-service-estimating/), [invoice](/guides/field-service-invoicing/) and take payment on site, and capture a signature. The best ones keep working offline and sync once the signal comes back, which matters in basements and rural service areas.',
        ],
        callout: {
          text: 'You are not really buying the office dashboard. You are buying whether the crew still opens the app on job number seven.',
        },
      },
      {
        heading: 'Offline is not optional for some trades',
        body: [
          'If your technicians regularly work where there’s no signal, offline support moves from nice-to-have to essential. Without it, an app that looks great in the demo becomes useless the moment someone’s in a mechanical room with no bars. Ask about offline specifically, and test it rather than taking it on faith.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'Judge the app the way your technicians will. Is it fast? Is everything they need one or two taps away? Does it work offline, and does it run well on the phones they already carry, Android as well as iPhone? That last point is a real gotcha: ServiceM8, for instance, is built Apple-first and is weaker on Android, so if your crews are on Android, test it on their actual phones before you commit. The office features matter, but adoption is won or lost on the app.',
        ],
      },
    ],
    related: [
      { label: 'Field service dispatching explained', href: '/guides/field-service-dispatching/' },
      { label: 'Best field service software for 1–5 technicians', href: '/best/field-service-software-for-1-5-technicians/' },
      { label: 'ServiceM8 review', href: '/products/servicem8/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-work-order-management',
    title: 'Work Order Management: The Backbone of Field Service',
    category: 'Feature',
    intro:
      'A work order is the record of a single job, and managing those well is the difference between a business that runs smoothly and one that runs on memory and sticky notes. Here’s what work order management covers and what to look for.',
    sections: [
      {
        heading: 'What a work order actually is',
        body: [
          'A work order is the full record of one job: who the customer is, what needs doing, who’s assigned, what was done, the parts used, and the outcome. In field service it’s the thread that ties a request to a completed, [invoiced job](/guides/field-service-invoicing/), and it’s where the history lives when the same customer calls again next year.',
        ],
      },
      {
        heading: 'Why managing them matters',
        body: [
          'When work orders are scattered across texts, paper and someone’s memory, things get missed: a job nobody invoiced, a part that was never charged for, a follow-up that never happened. Good work order management keeps every job in one place with a clear status, so nothing is finished until it’s actually finished and billed.',
        ],
        callout: {
          text: 'A job is not done when the work is done. It is done when it is recorded, invoiced and paid.',
        },
      },
      {
        heading: 'What software does',
        body: [
          'Field service software creates a work order the moment a job is booked and carries it through its whole life: assigned, scheduled, in progress, completed, invoiced. The technician updates it from the field with notes, photos and parts, and the office watches the status change in real time. Everything attaches to the customer and, in stronger tools, to the specific piece of equipment.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'Look at how much of the job the work order captures (notes, photos, parts, signatures), how clearly you can see status across all your open jobs, and whether it links to equipment history for repeat customers. If you do commercial or contract work, custom fields and templates start to matter too, and the commercial-focused platforms like Commusoft and ServiceTrade tend to go deepest on multi-property work orders and equipment history.',
        ],
      },
    ],
    related: [
      { label: 'Field service dispatching explained', href: '/guides/field-service-dispatching/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
      { label: 'Commusoft review', href: '/products/commusoft/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-gps-tracking',
    title: 'GPS and Technician Tracking in Field Service',
    category: 'Feature',
    intro:
      'GPS tracking gets a mixed reaction: office teams love it, and some technicians bristle at it. Used well, it’s about dispatching smarter and keeping customers informed, not watching people. Here’s what it does and how to think about it.',
    sections: [
      {
        heading: 'What it tracks',
        body: [
          'GPS tracking shows where your technicians or vehicles are in real time, usually on a map alongside the day’s jobs. Some tools track the phone, others tie into vehicle trackers. The point is to know who’s actually near the next job when plans change.',
        ],
      },
      {
        heading: 'Where it helps',
        body: [
          'The practical wins are [dispatching](/guides/field-service-dispatching/) and communication. When an emergency comes in, you can send the closest available technician instead of guessing. When a customer asks where their technician is, you can tell them, or better, the software sends an automatic [on-my-way text](/guides/how-to-reduce-no-shows-field-service/) with an arrival window. It also gives you honest numbers on drive time and time on site.',
        ],
      },
      {
        heading: 'The people side',
        body: [
          'It’s worth being straight with your team about why you’re using it. Framed as “we’ll stop sending you across town when someone closer is free, and cut the how-far-away calls,” it lands very differently than surveillance. The businesses that get the most from it treat it as a dispatch and customer-service tool, not a stopwatch.',
        ],
        callout: {
          text: 'Sold to the crew as a stopwatch, GPS breeds resentment. Sold as smarter dispatch and fewer where-are-you calls, it earns its place.',
        },
      },
      {
        heading: 'What to look for',
        body: [
          'Check whether tracking is live and tied into the [dispatch board](/guides/field-service-dispatching/), whether customers get automatic arrival updates, and how it handles privacy outside working hours. Watch the pricing too: some platforms include basic GPS, while others sell it as a paid add-on ([Housecall Pro](/products/housecall-pro/)’s vehicle GPS and dashcams, for instance), so confirm what is in the base plan. If routing matters to you, look at how tracking feeds into [route planning](/guides/field-service-route-optimization/).',
        ],
      },
    ],
    related: [
      { label: 'Field service dispatching explained', href: '/guides/field-service-dispatching/' },
      { label: 'Route optimization explained', href: '/guides/field-service-route-optimization/' },
      { label: 'ServiceTitan review', href: '/products/servicetitan/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-route-optimization',
    title: 'Route Optimization for Field Service Teams',
    category: 'Feature',
    intro:
      'For any business whose technicians drive between a lot of stops, route optimization is one of the clearest ways to fit more jobs into a day. Here’s what it does and which businesses it matters most for.',
    sections: [
      {
        heading: 'What route optimization is',
        body: [
          'Route optimization works out the most efficient order to visit a set of jobs, taking distance and sometimes time windows and traffic into account. Instead of a technician zig-zagging across town, the software sequences the stops to cut drive time and fit in more visits.',
        ],
      },
      {
        heading: 'Who it matters most for',
        body: [
          'This is a big deal for route-dense work: [landscaping](/industries/landscaping/) and lawn care, [pest control](/industries/pest-control/), [cleaning](/industries/cleaning/), and any operation running dozens of short recurring visits a day. For a business doing a handful of longer service calls, it matters far less. Be honest about which one you are before you pay for it.',
        ],
        callout: {
          text: 'For a route business, the day’s route is not admin. It is the single biggest lever on how many jobs each truck can do.',
        },
      },
      {
        heading: 'What good routing does',
        body: [
          'Beyond ordering today’s stops, stronger tools plan recurring routes so the same regular visits fall into an efficient pattern week after week, and they re-optimize when jobs are added or cancelled. The saved time shows up as lower fuel costs and more jobs per technician per day, which is real money in a route business.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'If routes are central, look for genuine multi-stop optimization rather than just a map view, support for recurring routes, and how it handles changes mid-day. Some all-in-one platforms include solid routing; very route-heavy operations sometimes [add a specialist tool on top](/guides/all-in-one-vs-point-solutions-field-service/).',
        ],
      },
    ],
    related: [
      { label: 'Field service scheduling explained', href: '/guides/field-service-scheduling/' },
      { label: 'Software for landscaping businesses', href: '/industries/landscaping/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-estimating',
    title: 'Estimating and Quoting in Field Service',
    category: 'Feature',
    intro:
      'The estimate is often the first real impression a customer gets of how you work, and a slow or sloppy one loses jobs. Here’s what estimating covers in field service and what separates a good quoting tool from a frustrating one.',
    sections: [
      {
        heading: 'What estimating covers',
        body: [
          'An estimate, or quote, is your proposed price for work before it’s done. In field service that ranges from a quick number for a simple repair to a detailed multi-option proposal for a system replacement or a commercial project. The faster and clearer you can produce one, the more likely you are to win the job.',
        ],
      },
      {
        heading: 'Why speed and clarity win',
        body: [
          'Customers usually get a few quotes, and the one that arrives first and reads clearly has an edge. Building the estimate on the technician’s device, on site, while the problem is fresh, beats promising to send something over and then following up days later. Offering [good, better and best options](/guides/flat-rate-pricebook/) also lets the customer choose their level instead of just accepting or rejecting a single price.',
        ],
        callout: {
          text: 'The quote that arrives first, on site, while the problem is still fresh usually wins the job.',
        },
      },
      {
        heading: 'From estimate to invoice',
        body: [
          'The real payoff comes when an approved estimate turns into a scheduled job and then an [invoice](/guides/field-service-invoicing/) without anyone re-typing it. That’s where field service software pulls ahead of a generic document tool: the quote, the job and the invoice are the same record moving through stages.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'Look at how fast a technician can build and send a quote from the field, whether it supports good/better/best and optional line items, and how smoothly an accepted quote becomes a job and an invoice. Match the depth to your work: residential tools like Jobber and Housecall Pro focus on fast good/better/best quotes, while commercial and project tools like Simpro go much deeper on materials-and-labor estimating for jobs that run over weeks.',
        ],
      },
    ],
    related: [
      { label: 'Field service invoicing explained', href: '/guides/field-service-invoicing/' },
      { label: 'Flat-rate pricebook explained', href: '/guides/flat-rate-pricebook/' },
      { label: 'Simpro review', href: '/products/simpro/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-service-agreements',
    title: 'Service Agreements and Memberships: Recurring Revenue for the Trades',
    category: 'Feature',
    intro:
      'Service agreements turn one-off customers into predictable, recurring revenue, and they’re one of the healthiest things a trades business can build. Here’s how they work and what your software needs to support them.',
    sections: [
      {
        heading: 'What a service agreement is',
        body: [
          'A service agreement, often sold as a membership or maintenance plan, is a recurring arrangement where a customer pays for scheduled maintenance and usually some perks, like priority service or discounts. For HVAC it might be two tune-ups a year; for other trades it varies. The customer gets peace of mind, and you get recurring revenue and a reason to stay in touch.',
        ],
      },
      {
        heading: 'Why they’re worth building',
        body: [
          'Agreements smooth out the seasonal peaks and troughs that make service businesses stressful to run. They fill the slow months with booked maintenance visits, they raise the lifetime value of each customer, and members tend to call you first when something bigger goes wrong.',
        ],
        callout: {
          text: 'A healthy membership base is one of the strongest signs of a durable service business, and one of the hardest things for a competitor to take from you.',
        },
      },
      {
        heading: 'What software needs to handle',
        body: [
          'Running agreements by hand gets painful fast: remembering who’s due, [scheduling](/guides/field-service-scheduling/) hundreds of visits, billing on a recurring cycle, and tracking renewals. Good field service software manages the agreement itself, generates the maintenance visits on schedule, handles recurring billing, and flags renewals before they lapse. When you are ready, here is [how to set up a membership program](/guides/how-to-set-up-service-agreements/).',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'If memberships are part of your plan, look closely at agreement management: recurring visit scheduling, recurring billing, renewal tracking, and reporting on your membership base. This is an area where the established platforms pull ahead: [ServiceTitan](/products/servicetitan/) and [FieldEdge](/products/fieldedge/) handle full membership programs well, while lighter tools like [Jobber](/products/jobber/) support agreements only partially, so if recurring revenue is central, treat this depth as a hard requirement.',
        ],
      },
    ],
    related: [
      { label: 'Best HVAC field service software', href: '/best/hvac-field-service-software/' },
      { label: 'Field service scheduling explained', href: '/guides/field-service-scheduling/' },
      { label: 'ServiceTitan review', href: '/products/servicetitan/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-inventory-management',
    title: 'Inventory and Truck Stock in Field Service',
    category: 'Feature',
    intro:
      'Parts that nobody tracked are money leaking out of a service business: stock that walks off trucks, jobs where the markup never made it onto the invoice, and second trips because the right part wasn’t on board. Here’s what inventory features do and who needs them.',
    sections: [
      {
        heading: 'What it tracks',
        body: [
          'Inventory management keeps count of the parts and materials you hold, both in the warehouse and on each truck. Truck stock is the part that matters most in field service: knowing what’s on which van means you can send the technician who’s actually carrying the part, instead of sending someone who has to drive back for it.',
        ],
      },
      {
        heading: 'Why it pays off',
        body: [
          'Two things leak money without it. First, parts used on a job that never get charged to the customer, which quietly erodes your margin. Second, [second trips](/guides/how-to-improve-first-time-fix-rate/), where a technician arrives, finds they don’t have the part, and has to come back another day. Tracking stock and tying parts to [work orders](/guides/field-service-work-order-management/) closes both gaps: the part gets counted, charged and reordered.',
        ],
        callout: {
          text: 'Parts that nobody tracked are just margin walking off the truck.',
        },
      },
      {
        heading: 'Who actually needs it',
        body: [
          'Be honest about your parts load. A business that mostly does labor, or buys materials per job, can get by with light or no inventory features. A business carrying significant stock across multiple trucks, or doing a lot of parts-heavy repairs, gets real value from proper tracking, including reorder points and usage reports.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'If parts matter, look for truck-level stock tracking, parts tied to work orders so they flow onto the invoice, reorder alerts, and multi-location support if you run more than one warehouse. Depth varies sharply here: commercial and project platforms like [Simpro](/products/simpro/) and [ServiceTitan](/products/servicetitan/) go deep on inventory and catalog handling, while lighter residential tools track little or nothing, so if you carry real stock this feature alone can narrow your shortlist.',
        ],
      },
    ],
    related: [
      { label: 'Field service work order management', href: '/guides/field-service-work-order-management/' },
      { label: 'Simpro review', href: '/products/simpro/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-job-costing',
    title: 'Job Costing: Knowing Which Jobs Actually Make Money',
    category: 'Feature',
    intro:
      'Plenty of busy service businesses aren’t as profitable as they should be, and the reason is usually that nobody knows which jobs make money and which quietly lose it. Job costing is how you find out. Here’s what it means and what to look for.',
    sections: [
      {
        heading: 'What job costing is',
        body: [
          'Job costing compares what a job brought in against what it actually cost to deliver: labor hours, parts, materials and any subcontractor or equipment cost. The result is the real profit on that job, not the estimate, and not revenue with the costs ignored.',
        ],
      },
      {
        heading: 'Why it matters more than it seems',
        body: [
          'Revenue hides a lot. A business can be flat out and still barely profitable because a handful of job types lose money every time and no one has measured it. Job costing turns that into numbers: you can see that a certain kind of work is underpriced, that a crew is slower than assumed, or that material waste is eating the margin. Then you can [fix the price](/guides/how-to-price-a-service-call/) or stop taking the work.',
        ],
        callout: {
          text: 'Being busy and being profitable are not the same thing, and only job costing tells you which one you are.',
        },
      },
      {
        heading: 'Where software fits',
        body: [
          'For job costing to be accurate, the costs have to be captured as the job happens: technician time logged, parts added to the [work order](/guides/field-service-work-order-management/), materials recorded. Field service software that captures all of that can roll it up into a real cost per job with little extra effort. Doing it by hand after the fact is so tedious that most businesses simply don’t, which is why they stay in the dark.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'Look at whether the software captures labor, parts and materials against each job, whether it reports profit by job, job type and customer, and how much manual work it takes. Commercial and project businesses should treat deep job costing as close to essential, and the commercial platforms like [BuildOps](/products/buildops/) and [Simpro](/products/simpro/) are built for it, while residential tools such as [Jobber](/products/jobber/) offer only partial job costing. Here is [how to track job profitability](/guides/how-to-track-job-profitability/) once you have the data.',
        ],
      },
    ],
    related: [
      { label: 'Field service software pricing explained', href: '/guides/field-service-software-pricing-explained/' },
      { label: 'BuildOps review', href: '/products/buildops/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
      { label: 'How to choose field service software', href: '/guides/how-to-choose-field-service-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-online-booking',
    title: 'Online Booking for Field Service Businesses',
    category: 'Feature',
    intro:
      'More customers want to book a service the way they book everything else, online, without a phone call. Online booking can win you jobs you’d otherwise miss, but it needs guardrails. Here’s how it works and what to watch for.',
    sections: [
      {
        heading: 'What online booking does',
        body: [
          'Online booking lets a customer request or schedule a visit from your website or a link, picking a service and often a time slot, without calling your office. The request lands in your scheduling system ready to confirm or assign.',
        ],
      },
      {
        heading: 'Why it wins jobs',
        body: [
          'A lot of booking happens outside office hours, in the evening or at the weekend, when no one is answering the phone. For simpler, repeatable services it also saves your office the back-and-forth of [scheduling](/guides/field-service-scheduling/) by phone.',
        ],
        callout: {
          text: 'A customer who can book at 9pm is a customer you keep. One who hits voicemail often just calls the next company.',
        },
      },
      {
        heading: 'Where it needs guardrails',
        body: [
          'Online booking works best for well-defined services where you know the rough time and price. For complex diagnostic work, a raw calendar slot can do more harm than good, so the stronger tools let you control which services are bookable, buffer travel time, and route requests for review before they’re locked in. The goal is to capture demand without wrecking your schedule.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'Look at how much control you have over what’s bookable and when, whether bookings flow straight into your schedule, and whether it confirms automatically with the customer. Residential-focused tools tend to do this best, [Housecall Pro](/products/housecall-pro/) in particular is known for a polished consumer booking experience, so if online booking is central to how you win work, weigh that. Match the feature to your work: great for routine services, handle with care for complex ones.',
        ],
      },
    ],
    related: [
      { label: 'Field service scheduling explained', href: '/guides/field-service-scheduling/' },
      { label: 'Housecall Pro review', href: '/products/housecall-pro/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-payments-and-financing',
    title: 'Payments and Financing in Field Service',
    category: 'Feature',
    intro:
      'Getting paid faster is one of the most direct ways software improves a service business, and for bigger jobs, offering financing can be the difference between a yes and a no. Here’s how payments and financing work in field service tools.',
    sections: [
      {
        heading: 'Taking payment in the field',
        body: [
          'Integrated payments let a technician take a card or ACH payment on site, the moment the work is done, instead of [mailing an invoice](/guides/field-service-invoicing/) and waiting. The payment ties straight back to the job and the invoice, so nothing has to be reconciled by hand later. The practical effect is simple: you [get paid sooner](/guides/how-to-get-paid-faster-field-service/) and chase fewer overdue invoices.',
        ],
      },
      {
        heading: 'The cost of convenience',
        body: [
          'Integrated payments carry [processing fees](/guides/field-service-software-payment-processing/), typically around 2.9% plus 30 cents per card transaction and roughly 1% on ACH, and the exact rates vary between platforms. For a high-volume business that difference adds up fast, so check the rate, not just that the feature exists. Some tools lock you into their own processor; others let you choose. Read that part closely before you commit.',
        ],
        chart: {
          title: 'Roughly what card processing costs each month',
          caption: 'At about 2.9% per card transaction, plus 30 cents each. On top of your subscription; ACH is cheaper at around 1%.',
          bars: [
            { label: '$10,000 invoiced by card', value: 290, valueLabel: '~$290/mo' },
            { label: '$50,000 invoiced by card', value: 1450, valueLabel: '~$1,450/mo' },
            { label: '$100,000 invoiced by card', value: 2900, valueLabel: '~$2,900/mo' },
          ],
        },
      },
      {
        heading: 'Consumer financing on bigger jobs',
        body: [
          'For large tickets, a system replacement or a major repair, consumer financing lets the customer pay over time while you get paid up front. For trades like [HVAC](/industries/hvac/), being able to offer financing at the point of sale measurably lifts close rates on expensive work, because the monthly number feels manageable even when the total doesn’t. It’s usually offered through a lender partner built into the software.',
        ],
        callout: {
          text: 'On a big-ticket job, being able to offer financing is often the difference between a yes and a maybe.',
        },
      },
      {
        heading: 'What to look for',
        body: [
          'Check the processing rates, whether you can use your own processor, how cleanly payments reconcile back to invoices, and, if you sell big-ticket work, whether financing is available and through whom. The cheapest headline plan isn’t always the cheapest once payment fees are counted.',
        ],
      },
    ],
    related: [
      { label: 'Field service invoicing explained', href: '/guides/field-service-invoicing/' },
      { label: 'Field service software pricing explained', href: '/guides/field-service-software-pricing-explained/' },
      { label: 'Best HVAC field service software', href: '/best/hvac-field-service-software/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-customer-portal',
    title: 'Customer Portals in Field Service Software',
    category: 'Feature',
    intro:
      'A customer portal gives your customers a place to see their history, approve quotes and pay invoices on their own time. It’s more common in commercial work than residential, and whether you need one depends on who you serve. Here’s the rundown.',
    sections: [
      {
        heading: 'What a customer portal is',
        body: [
          'A customer portal is a secure area where your customers can log in and see their own information: past visits, upcoming appointments, quotes waiting for approval, and invoices to pay. It turns the relationship from a series of phone calls into something the customer can self-serve.',
        ],
      },
      {
        heading: 'Where it earns its keep',
        body: [
          'Portals matter most for commercial and property-management customers, who often manage many sites and want to see [service history](/guides/field-service-work-order-management/), approve work and pull invoices without calling you each time. For those accounts a good portal is a genuine selling point and cuts a lot of admin on both sides.',
        ],
        callout: {
          text: 'For a homeowner, a text with a payment link beats a login every time. For a facilities manager with forty sites, the opposite is true.',
        },
      },
      {
        heading: 'Where it matters less',
        body: [
          'For everyday residential work, many homeowners won’t log into a portal; they’d rather get a text and a link to approve a quote or pay. So don’t over-weight this feature if you’re purely residential. The lighter tools often skip full portals in favor of simple text-and-link approvals, which is the right call for that audience.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'If you serve commercial or property-management clients, look for a portal that exposes service history, quote approvals and invoice payment, ideally with multi-site support. This is a strength of the commercial platforms in particular, [ServiceTrade](/products/servicetrade/)’s customer-facing portal and reporting are a genuine standout for inspection-driven work. If you’re residential, weigh it lightly and focus instead on smooth text-based approvals and payment links.',
        ],
      },
    ],
    related: [
      { label: 'Field service service agreements explained', href: '/guides/field-service-service-agreements/' },
      { label: 'ServiceTrade review', href: '/products/servicetrade/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
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
      'Choosing field service software is less about finding the single best product and more about matching a platform to your business: your trade, your team size, the way you work, your integrations and your budget. This guide walks through the decisions that actually determine fit, and the traps that catch people.',
    sections: [
      {
        heading: 'Start with your trade and work type',
        body: [
          'The single biggest driver of fit is what you actually do. Residential service, commercial service, route-based recurring work and project work each reward different software strengths, and a tool that is excellent for one can be a poor fit for another.',
          'A residential HVAC company and a commercial mechanical contractor can both call themselves HVAC and still need completely different tools. The residential shop wants fast scheduling, on-my-way texts and slick quoting; the commercial contractor wants project job costing, inventory and progress billing. Be specific about your dominant work type before you shortlist anything.',
        ],
      },
      {
        heading: 'Size the platform to your team',
        body: [
          'Small teams usually win with fast-to-adopt tools that go live in days. Larger operations can justify the depth, and the multi-week implementation, of an enterprise platform. Buying more software than you need is one of the most common and costly mistakes in this category.',
          'A useful rule: buy for where you will be in about eighteen months, not for today and not for some distant someday. That keeps you from both outgrowing a starter tool in a year and paying for enterprise features nobody touches.',
        ],
      },
      {
        heading: 'Pin down your must-have capabilities',
        body: [
          'Write down the handful of things you genuinely cannot run the business without: a flat-rate pricebook, service agreements, QuickBooks Desktop sync, route optimization, strong inventory. These are the filters that shrink a long list fast, because plenty of otherwise good tools simply do not do one of them well.',
          'Be honest about which are true must-haves versus nice-to-haves. A long wish list makes everything look inadequate; a short must-have list makes the real choices obvious.',
        ],
      },
      {
        heading: 'Check integrations early, especially accounting',
        body: [
          'Accounting is the integration that most often becomes a deal-breaker, and it is worth checking on day one. The big divide is QuickBooks Online versus QuickBooks Desktop. Several popular tools, [Jobber](/products/jobber/) among them, sync only with QuickBooks Online, while others like [FieldEdge](/products/fieldedge/) and [Service Fusion](/products/service-fusion/) are built with Desktop firmly in mind. If your books run on Desktop, that fact alone eliminates part of the market.',
          'The same goes for Xero, payment processing and anything else your business already depends on. Verify current support with the vendor rather than trusting a feature-list checkmark, and do it before you fall for a demo. Our [accounting integrations guide](/guides/field-service-software-accounting-integrations/) covers who supports what.',
        ],
        table: {
          caption: 'Confirm the exact version with the vendor; support varies and changes.',
          headings: ['Your accounting', 'What to know', 'Strong fits'],
          rows: [
            ['QuickBooks Online', 'Most tools support it', '[Jobber](/products/jobber/), [Housecall Pro](/products/housecall-pro/)'],
            ['QuickBooks Desktop', 'Fewer tools; confirm Desktop specifically', '[FieldEdge](/products/fieldedge/), [Service Fusion](/products/service-fusion/)'],
            ['Xero', 'A QuickBooks-first market, so verify it', '[Tradify](/products/tradify/), [ServiceM8](/products/servicem8/)'],
          ],
        },
      },
      {
        heading: 'Be realistic about implementation and total cost',
        body: [
          'The monthly price is only part of the decision. Deeper platforms require data migration, configuration and training, and enterprise tools like [ServiceTitan](/products/servicetitan/) can carry implementation fees running into thousands of dollars and a rollout measured in weeks. On top of the subscription, most tools that take card payments add processing fees of roughly 2.9% plus 30 cents per transaction, which is a real cost at volume.',
          'Add it up as a total: subscription, extra users, the add-ons you will actually use, processing fees and implementation. The cheapest sticker price is regularly not the cheapest tool to run.',
        ],
        callout: {
          text: 'Ask a vendor directly who their tool is a poor fit for. An honest answer tells you more than any feature list, and anyone who claims it is perfect for everyone is the one to be wary of.',
        },
      },
      {
        heading: 'What a good demo looks like',
        body: [
          'When you get to demos, do not let the vendor drive a canned tour. Come with your two or three most common real jobs and ask them to walk each one through the system end to end, from booking to invoice. That is where you find out whether the tool fits how you actually work, rather than how the sales script wants to present it.',
          'Ask directly who the tool is a poor fit for. An honest answer tells you more than any feature list, and a vendor who claims it is perfect for everyone is the one to be wary of.',
        ],
      },
    ],
    related: [
      { label: 'Find software matched to your business', href: '/find-software/' },
      { label: 'Field service software pricing, explained', href: '/guides/field-service-software-pricing-explained/' },
      { label: 'What is field service management software', href: '/guides/what-is-field-service-management-software/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
    ],
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-software-pricing-explained',
    title: 'Field Service Software Pricing, Explained',
    category: 'Buying guide',
    intro:
      'Field service software pricing runs from transparent per-user tiers you can read off a web page to fully quote-based enterprise contracts you have to negotiate. Knowing the models, and the costs that sit outside the headline number, lets you compare options fairly and avoid nasty surprises after you sign.',
    sections: [
      {
        heading: 'The rough price bands',
        body: [
          'Pricing sorts into three broad bands. Starter plans for a single user tend to run about $29 to $60 a month ([Jobber](/products/jobber/) starts at $29, [Housecall Pro](/products/housecall-pro/) at $59, both billed annually). Small-crew plans that add automation, online booking and five to ten users usually land between roughly $100 and $300 a month, depending on the tool and the tier. And enterprise platforms built for larger trades, [ServiceTitan](/products/servicetitan/) being the obvious example, are quote-based, with contractors widely reporting figures in the region of $245 to $400 per technician per month.',
          'Treat these as orientation, not gospel. Vendors change prices, and the quote-based numbers are third-party reports, not official rates. But the bands are stable enough to tell you quickly whether a tool is in your world or not.',
        ],
      },
      {
        heading: 'How the pricing model changes the math',
        body: [
          'The billing model matters as much as the number. Per-user pricing ([Tradify](/products/tradify/), for instance) is friendly for a solo operator but climbs with every seat you add. Flat pricing with unlimited users ([Service Fusion](/products/service-fusion/)) can be far cheaper for a bigger dispatch team, since the whole office and every technician are included. And a few tools price by something else entirely: [ServiceM8](/products/servicem8/) charges by the number of jobs per month rather than by users. Run the math at your actual headcount and job volume, because the cheapest model for a solo tradesperson can be the most expensive one for a fifteen-person shop.',
        ],
        table: {
          caption: 'Match the billing model to your size, not the headline price.',
          headings: ['Model', 'How you are billed', 'Cheapest when', 'Example'],
          rows: [
            ['Per user', 'Per seat, per month', 'You are solo or a very small team', '[Tradify](/products/tradify/)'],
            ['Flat / unlimited users', 'One flat plan fee', 'You have a bigger office and field team', '[Service Fusion](/products/service-fusion/)'],
            ['Per job', 'By jobs handled per month', 'You run a low volume of larger jobs', '[ServiceM8](/products/servicem8/)'],
            ['Quote-based', 'Custom quote by size and modules', 'You need enterprise depth', '[ServiceTitan](/products/servicetitan/)'],
          ],
        },
      },
      {
        heading: 'The costs that are not on the pricing page',
        body: [
          'The subscription is the floor, not the ceiling. Watch for four things. [Payment processing](/guides/field-service-software-payment-processing/): if you collect cards in-app, expect roughly 2.9% plus 30 cents per transaction and about 1% on ACH, on top of your plan. Add-on modules: phone systems, marketing, GPS and fleet tracking, and AI tools are often paid extras rather than part of the base. Extra users: many plans include a set number of seats and charge per head beyond that. And implementation: enterprise platforms can carry setup fees running from a few thousand dollars into the tens of thousands.',
          'Add all of that to the sticker price before you compare. The lowest headline plan is regularly not the lowest total cost once processing and add-ons are counted.',
        ],
        chart: {
          title: 'Roughly what card processing costs each month',
          caption: 'At about 2.9% per card transaction (plus 30 cents each), before ACH, which is cheaper at around 1%. This is on top of your subscription.',
          bars: [
            { label: '$10,000 invoiced by card', value: 290, valueLabel: '~$290/mo' },
            { label: '$50,000 invoiced by card', value: 1450, valueLabel: '~$1,450/mo' },
            { label: '$100,000 invoiced by card', value: 2900, valueLabel: '~$2,900/mo' },
          ],
        },
        callout: {
          text: 'The lowest headline plan is regularly not the cheapest tool to run once processing and add-ons are counted.',
        },
      },
      {
        heading: 'Why so many enterprise tools hide their price',
        body: [
          'If a platform makes you request a quote instead of showing a number, it is usually because the real cost depends on your size, the modules you pick and some negotiation, and because they want a sales conversation. That is not automatically a bad sign, but it does mean you should get everything in writing: the per-user or base rate, which modules are included versus extra, the implementation fee, and the contract length. During 2026 even some mid-market tools, Workiz among them, moved from published tiers to request-a-quote pricing, so this is worth checking fresh for any tool on your list.',
        ],
      },
      {
        heading: 'How we handle pricing data',
        body: [
          'We do not publish invented prices. Where a vendor publishes pricing, we verify it against the official page and date it. Where pricing is quote-based, we say so plainly and, if we cite a reported figure, we attribute it as a third-party estimate rather than dressing it up as official. Prices move, so whatever you read here or anywhere else, confirm the current number directly with the vendor before you decide.',
        ],
      },
    ],
    related: [
      { label: 'How to choose field service software', href: '/guides/how-to-choose-field-service-software/' },
      { label: 'Field service payments and financing', href: '/guides/field-service-payments-and-financing/' },
      { label: 'Find software matched to your budget', href: '/find-software/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
    ],
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'how-to-switch-field-service-software',
    title: 'How to Switch Field Service Software Without Losing Your Mind',
    category: 'How-to guide',
    intro:
      'Changing the system your whole business runs on is nerve-wracking, which is why plenty of shops stay on a tool they have outgrown for years. Done in the right order, a switch is manageable. Here is the sequence that keeps a migration from turning into a disaster.',
    sections: [
      {
        heading: 'Get clear on why you are moving',
        body: [
          'Before you look at a single new tool, write down the two or three things your current software cannot do that are actually costing you money: no [flat-rate pricebook](/guides/flat-rate-pricebook/), no [QuickBooks Desktop sync](/guides/how-to-connect-field-service-software-to-quickbooks/), reporting you cannot trust, a [mobile app](/guides/field-service-technician-mobile-app/) the crew refuses to use. That list is your shortlist filter and your success test. If a new platform does not fix those, switching is just pain for its own sake.',
        ],
      },
      {
        heading: 'Export and clean your data first',
        body: [
          'Your customer list, job history, open invoices and price list are the assets you are moving. Export them from your current system early, while you still have access, and clean them up: dedupe customers, fix obvious errors, and delete the junk you do not need to carry over. A migration is the one good chance you will get to start with tidy data, so take it.',
          'Confirm what the new vendor can actually import. Most will bring in customers and basic history from a spreadsheet; deep job history and attachments are harder. Ask specifically, and get it in writing, rather than assuming everything transfers.',
        ],
      },
      {
        heading: 'Sort out accounting before you commit',
        body: [
          'The most common migration trap is accounting. If your books run on QuickBooks Desktop, confirm the new tool syncs with Desktop, not just Online, because several popular platforms are Online-only. Test the sync with a handful of real invoices during the trial and check they land correctly in your books. This is the single check that saves the most heartache later.',
        ],
      },
      {
        heading: 'Run a parallel period, then cut over',
        body: [
          'Do not flip the whole business overnight. Pick a slow week, load the new system, and run a small batch of real jobs through it end to end while the old system is still there as a safety net. Fix what breaks, [train the crew](/guides/how-to-get-team-to-use-field-service-software/) on the mobile app, and only then set a hard cut-over date. Keep read-only access to the old system for a few months so you can look up history.',
        ],
      },
      {
        heading: 'Expect a dip, then a lift',
        body: [
          'The first two weeks on any new system are slower, always. Technicians grumble, quotes take longer, and it feels like a mistake. That dip is normal and temporary. Warn the team it is coming, push through it, and measure against the problem list you wrote at the start. If the new tool is fixing those, the lift arrives within a month or two.',
        ],
        callout: {
          text: 'The first two weeks on any new system feel like a mistake. Warn the team, push through, and judge it against your problem list, not your first Monday.',
        },
      },
    ],
    related: [
      { label: 'How to choose field service software', href: '/guides/how-to-choose-field-service-software/' },
      { label: 'How to get your team to use new software', href: '/guides/how-to-get-team-to-use-field-service-software/' },
      { label: 'Best field service software with QuickBooks', href: '/best/field-service-software-with-quickbooks/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'how-to-build-a-flat-rate-pricebook',
    title: 'How to Build a Flat-Rate Pricebook That Actually Works',
    category: 'How-to guide',
    intro:
      'A flat-rate pricebook makes every technician quote the same price for the same work, protects your margin, and speeds up selling. Building one feels daunting, but it comes down to a clear method. Here is how to put one together from scratch.',
    sections: [
      {
        heading: 'Start with your most common jobs',
        body: [
          'Do not try to price everything at once. Pull your last few months of jobs and list the twenty or thirty tasks you do most often. Those handful of repeat jobs are where a pricebook pays off fastest, and they usually cover the large majority of your work. You can add the long tail later.',
        ],
      },
      {
        heading: 'Price from real costs, not guesses',
        body: [
          'For each task, work out your true cost: the labor hours it actually takes, the parts and materials, and a fair share of your overhead (truck, insurance, office, tools). Then add your target profit margin. The number that comes out is your flat rate. Our guide to [pricing a service call](/guides/how-to-price-a-service-call/) walks through the cost-per-hour math in more detail.',
        ],
        table: {
          caption: 'An illustrative build-up for a single task. Use your own numbers, not these.',
          headings: ['Component', 'What goes in', 'Notes'],
          rows: [
            ['Labor', 'The hours the task really takes', 'Cost per hour, not just the wage'],
            ['Parts and materials', 'What you pay, plus markup', 'Track this so it reaches the invoice'],
            ['Overhead share', 'Truck, insurance, office, tools', 'Spread across your billable hours'],
            ['Profit margin', 'Your target, added on top', 'Built in, not hoped for at year-end'],
          ],
        },
        callout: {
          text: 'Price from your own costs, never a competitor’s. You know yours; you are only guessing at theirs.',
        },
      },
      {
        heading: 'Build in good, better and best',
        body: [
          'For anything with options, offer three versions: a basic fix, a mid-tier option, and a premium one. Customers who are only ever shown one price can accept or decline. Customers shown three choose a level, and a meaningful share choose up, which lifts your average ticket without any hard selling. This is one of the highest-return moves a trades business can make.',
        ],
      },
      {
        heading: 'Put it on the technician’s device',
        body: [
          'A pricebook in a binder gets ignored. The point is that a technician taps a task on their phone and the price, description and options appear instantly, so the quote is consistent and takes seconds. This is where software matters: [ServiceTitan](/products/servicetitan/) and [FieldEdge](/products/fieldedge/) are known for deep, presentable pricebooks, while lighter tools like [Jobber](/products/jobber/) have little or none, so if a pricebook is central, let that shape your software choice.',
        ],
      },
      {
        heading: 'Review it on a schedule',
        body: [
          'A pricebook is not set-and-forget. Parts costs move, wages rise, and a rate you set last year may now be underwater. Put a recurring reminder in the calendar, quarterly is sensible, to review your costs and update the numbers. A pricebook that drifts out of date quietly erodes the margin it was built to protect.',
        ],
      },
    ],
    related: [
      { label: 'Flat-rate pricebook explained', href: '/guides/flat-rate-pricebook/' },
      { label: 'Estimating and quoting in field service', href: '/guides/field-service-estimating/' },
      { label: 'Best HVAC field service software', href: '/best/hvac-field-service-software/' },
      { label: 'ServiceTitan review', href: '/products/servicetitan/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'how-to-reduce-no-shows-field-service',
    title: 'How to Reduce No-Shows and Missed Appointments',
    category: 'How-to guide',
    intro:
      'A missed appointment is money gone twice: the job you did not do, and the slot you could have filled. Most no-shows are preventable with a few simple habits and the automation to make them stick. Here is how to cut them down.',
    sections: [
      {
        heading: 'Confirm the appointment automatically',
        body: [
          'The biggest single lever is a reminder the customer actually sees. An automated text the day before, and again a couple of hours out, dramatically cuts the number of people who forget or drift off. Doing this by hand does not scale, which is why it matters that your software sends reminders on its own once the job is booked. Almost every modern tool does this, so use it.',
        ],
        callout: {
          text: 'A missed appointment costs you twice: the job you did not do, and the slot you could have filled with it.',
        },
      },
      {
        heading: 'Send a real on-my-way message',
        body: [
          'The window between the booking and the technician arriving is where trust wobbles. An automatic on-my-way text with a genuine arrival window, ideally tied to [GPS](/guides/field-service-gps-tracking/) so it is accurate, keeps the customer home and reduces the how-far-away phone calls that eat your office time. It is a small touch that measurably reduces both no-shows and complaints.',
        ],
      },
      {
        heading: 'Make rescheduling easy, not silent',
        body: [
          'People who cannot easily reschedule often just do not answer the door. Give them a simple way to move the appointment, a reply to the text, a link, a quick call, so a conflict becomes a rebooked job rather than a wasted trip. Capturing the reschedule is far better than losing the slot entirely.',
        ],
      },
      {
        heading: 'Tighten your arrival windows',
        body: [
          'A four-hour window tells the customer their time does not matter, and they wander off. Narrower windows, made possible by better [scheduling](/guides/field-service-scheduling/) and live technician tracking, keep people available and set a professional tone. If your current tool cannot support tight windows and live updates, that is a sign the scheduling and [dispatch](/guides/field-service-dispatching/) side is worth upgrading.',
        ],
      },
    ],
    related: [
      { label: 'Field service scheduling explained', href: '/guides/field-service-scheduling/' },
      { label: 'Field service dispatching explained', href: '/guides/field-service-dispatching/' },
      { label: 'GPS and technician tracking', href: '/guides/field-service-gps-tracking/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'how-to-get-team-to-use-field-service-software',
    title: 'How to Get Your Team to Actually Use New Software',
    category: 'How-to guide',
    intro:
      'The best field service platform is worthless if your technicians quietly go back to paper and phone calls. Adoption, not features, is what decides whether the investment pays off. Here is how to get the crew genuinely using the tool.',
    sections: [
      {
        heading: 'Involve the crew before you buy',
        body: [
          'Technicians resent software that lands on them by decree. Bring one or two respected people from the field into the demos and let them poke at the mobile app before you sign. They will spot deal-breakers you would miss, and, just as important, they become the champions who help everyone else over the hump instead of leading the resistance.',
        ],
      },
      {
        heading: 'Judge the app the way they will',
        body: [
          'Adoption is won or lost on the [mobile app](/guides/field-service-technician-mobile-app/), not the office dashboard. If it is slow, buried in taps, or does not work in a basement with no signal, the crew will abandon it and you cannot blame them. Test the real app on the real phones your team carries, Android as well as iPhone, before you commit, and treat a clunky app as a reason to walk away.',
        ],
        callout: {
          text: 'Adoption, not the feature list, decides whether the software ever pays off. The crew has to choose the app over paper every single day.',
        },
      },
      {
        heading: 'Train short, then train again',
        body: [
          'One long training session before go-live does not stick. Do a short, hands-on session focused only on what a technician does every day, book, navigate, add notes and photos, quote, invoice, then come back a week or two later once real questions have surfaced. Little and often beats one firehose day nobody remembers.',
        ],
      },
      {
        heading: 'Remove the old fallback',
        body: [
          'As long as paper tickets and the office phone still work, some people will keep using them, and your data stays half in the system and half out. Once the crew is trained and past the first wobble, retire the old way on a set date. It sounds harsh, but a clean cut-over is what actually forces adoption and gets you the complete data the software promised.',
        ],
      },
      {
        heading: 'Show them what is in it for them',
        body: [
          'Frame the change around the technician, not the office. Less driving because [dispatch sends the closest person](/guides/field-service-dispatching/), no chasing the office for job details, [quotes](/guides/field-service-estimating/) and [invoices](/guides/field-service-invoicing/) done on site so they are not doing paperwork at home. When the crew sees the app makes their own day easier, adoption stops being a fight.',
        ],
      },
    ],
    related: [
      { label: 'The technician mobile app', href: '/guides/field-service-technician-mobile-app/' },
      { label: 'How to switch field service software', href: '/guides/how-to-switch-field-service-software/' },
      { label: 'Best field service software for 1–5 technicians', href: '/best/field-service-software-for-1-5-technicians/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'how-to-set-up-service-agreements',
    title: 'How to Set Up a Service Agreement or Membership Program',
    category: 'How-to guide',
    intro:
      'A membership program turns one-off customers into recurring revenue and fills your slow months with booked work. Building one is mostly a matter of getting the offer and the mechanics right. Here is how to stand one up.',
    sections: [
      {
        heading: 'Design an offer worth paying for',
        body: [
          'Start with what the customer gets. A typical plan bundles scheduled maintenance (for HVAC, often two tune-ups a year) with perks that reduce their risk and reward loyalty: priority scheduling, a discount on repairs, no overtime fees, a longer labor warranty. The plan has to feel like clear value to them, not just a subscription that benefits you, or it will not sell.',
        ],
      },
      {
        heading: 'Price it so the math works both ways',
        body: [
          'Price the plan so the recurring fee covers the maintenance visits and leaves a modest margin, then let the real return come from what memberships drive: members call you first, they approve repairs faster, and they replace equipment with you when the time comes. Do not price the maintenance at a loss hoping to make it back later, but do value the relationship, not just the two visits.',
        ],
      },
      {
        heading: 'Automate the visits and the billing',
        body: [
          'This is where a program lives or dies. Once you have more than a handful of members, remembering who is due, [scheduling the visits](/guides/field-service-scheduling/) and billing on a cycle by hand becomes unmanageable. You need software that stores the agreement, generates the maintenance visits on schedule, handles recurring billing, and flags renewals before they lapse. The established platforms like [ServiceTitan](/products/servicetitan/) and [FieldEdge](/products/fieldedge/) are strong here; lighter tools often support agreements only partially, so check this closely if memberships are the plan.',
        ],
      },
      {
        heading: 'Sell it at the kitchen table',
        body: [
          'The best moment to sign a member is right after a technician has done good work in their home. Train the crew to offer the plan on site, in plain terms: the maintenance that keeps the system healthy, plus priority and a discount, for a predictable monthly or annual fee. A simple sign-up on the technician’s device, then and there, converts far better than a follow-up email nobody opens.',
        ],
        callout: {
          text: 'The best moment to sign a member is right after a technician has done good work in their home, not in a follow-up email nobody opens.',
        },
      },
      {
        heading: 'Track renewals like revenue',
        body: [
          'A membership base only compounds if people renew. Watch your renewal rate the way you watch sales, reach out before plans lapse, and treat a slipping renewal number as an early warning. A healthy, growing membership base is one of the strongest signs of a durable service business, so give it the attention it deserves.',
        ],
      },
    ],
    related: [
      { label: 'Service agreements and memberships explained', href: '/guides/field-service-service-agreements/' },
      { label: 'Field service scheduling explained', href: '/guides/field-service-scheduling/' },
      { label: 'Best HVAC field service software', href: '/best/hvac-field-service-software/' },
      { label: 'ServiceTitan review', href: '/products/servicetitan/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'how-to-connect-field-service-software-to-quickbooks',
    title: 'How to Connect Field Service Software to QuickBooks',
    category: 'How-to guide',
    intro:
      'Getting your field service software and QuickBooks talking to each other is the difference between clean books and typing every invoice twice. The setup is straightforward once you understand the one distinction that trips everyone up. Here is how to get it right.',
    sections: [
      {
        heading: 'Know which QuickBooks you run',
        body: [
          'This is the whole ballgame. QuickBooks Online and QuickBooks Desktop are different products, and field service tools support them differently. Many popular platforms, [Jobber](/products/jobber/) among them, sync only with Online. Others, like [FieldEdge](/products/fieldedge/) and [Service Fusion](/products/service-fusion/), are built with Desktop firmly in mind. Before anything else, confirm your field service tool supports your exact version, because Online support does not mean Desktop support.',
        ],
        table: {
          caption: 'Confirm your exact version before you shortlist; support varies by tool.',
          headings: ['', 'QuickBooks Online', 'QuickBooks Desktop'],
          rows: [
            ['How it syncs', 'Cloud to cloud, straightforward', 'Via a small sync agent on a Windows PC'],
            ['Tool support', 'Broad; most tools have it', 'Narrower; confirm it specifically'],
            ['Strong fits', '[Jobber](/products/jobber/), [Housecall Pro](/products/housecall-pro/)', '[FieldEdge](/products/fieldedge/), [Service Fusion](/products/service-fusion/)'],
          ],
        },
        callout: {
          text: 'Online support does not mean Desktop support. Sort out which QuickBooks you run before you fall for a demo.',
        },
      },
      {
        heading: 'Understand what actually syncs',
        body: [
          'A good integration keeps a few things in step automatically: customers, [invoices](/guides/field-service-invoicing/), payments and sometimes your product and price list. Decide which direction each flows and where the record of truth lives, so you are not editing the same customer in two places. Get clear on this before you turn it on, rather than untangling duplicates afterward.',
        ],
      },
      {
        heading: 'The Desktop setup is a little different',
        body: [
          'QuickBooks Desktop is not cloud software, so syncing it with a cloud field service tool usually means running a small sync agent on a Windows machine that is left on. It works well when configured correctly, but it is a real setup step, not a switch you flip. Some tools also require you to create employees or items in QuickBooks first, so follow the vendor’s order of operations rather than improvising.',
        ],
      },
      {
        heading: 'Test with a few real invoices',
        body: [
          'Do not trust the integration until you have watched it work. Push a handful of real invoices and payments through and confirm they land in QuickBooks correctly, mapped to the right accounts, with no duplicates. This is worth doing during a free trial, because a buggy sync is a common and genuine complaint even on tools that advertise the integration, so verify it on your own data before you rely on it.',
        ],
      },
    ],
    related: [
      { label: 'Field service invoicing explained', href: '/guides/field-service-invoicing/' },
      { label: 'Cloud vs on-premise field service software', href: '/guides/cloud-vs-on-premise-field-service-software/' },
      { label: 'Best field service software with QuickBooks', href: '/best/field-service-software-with-quickbooks/' },
      { label: 'FieldEdge review', href: '/products/fieldedge/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'how-to-price-a-service-call',
    title: 'How to Price a Service Call So You Actually Make Money',
    category: 'How-to guide',
    intro:
      'Plenty of busy service businesses are not as profitable as they should be, and it usually starts with pricing that was set by gut feel or by copying a competitor. Here is how to price a service call from your real numbers, so every job earns its keep.',
    sections: [
      {
        heading: 'Know your true cost per hour',
        body: [
          'You cannot price work until you know what an hour actually costs you to deliver. That is not just the technician’s wage. Add payroll taxes and benefits, the truck and fuel, insurance, tools, software, and a share of the office and owner time that keeps the whole thing running. Divide your total monthly costs by your billable hours and you get a real cost per hour, and it is almost always higher than owners expect.',
        ],
        table: {
          caption: 'An illustrative cost-per-hour build-up. Use your own monthly figures.',
          headings: ['Input', 'What goes in', 'Notes'],
          rows: [
            ['Total monthly costs', 'Wages, taxes, truck, insurance, tools, office', 'Everything it takes to operate'],
            ['Billable hours', 'The hours you can actually invoice', 'Not clocked hours, the ones customers pay for'],
            ['Cost per hour', 'Total costs divided by billable hours', 'Almost always higher than owners expect'],
            ['Your price', 'Cost per hour plus your target margin', 'Margin built in, not hoped for'],
          ],
        },
      },
      {
        heading: 'Add the margin you need to survive',
        body: [
          'Your price has to cover that cost and leave a genuine profit on top, not just break even. Decide the net margin the business needs to grow and pay you properly, then build it into the rate rather than hoping it shows up at the end of the year.',
        ],
        callout: {
          text: 'A job that only covers its costs is a job that kept you busy and made you nothing.',
        },
      },
      {
        heading: 'Move from hourly to flat-rate where you can',
        body: [
          'Billing by the hour punishes you for being fast and makes customers nervous about an open-ended bill. For repeatable work, price the job, not the clock. [Build a flat-rate pricebook](/guides/how-to-build-a-flat-rate-pricebook/) from your cost-per-hour and typical times, so a technician quotes the same clear number every time and a faster crew earns more, not less. This is one of the biggest profitability levers a trades business has.',
        ],
      },
      {
        heading: 'Do not anchor to your competitor',
        body: [
          'Pricing off the company down the road is guessing with someone else’s numbers. You do not know their costs, their efficiency or their margins, so matching their price can quietly commit you to losing money on every job. Price from your own costs first, then sanity-check against the market, not the other way around.',
        ],
      },
      {
        heading: 'Check the reality with job costing',
        body: [
          'Once you are pricing deliberately, confirm it is working. Job costing compares what each job brought in against what it truly cost, so you can see which work is underpriced and fix it. If you are not tracking that yet, it is the next step, because pricing without measuring the outcome is just a better class of guessing.',
        ],
      },
    ],
    related: [
      { label: 'How to build a flat-rate pricebook', href: '/guides/how-to-build-a-flat-rate-pricebook/' },
      { label: 'Job costing explained', href: '/guides/field-service-job-costing/' },
      { label: 'Estimating and quoting in field service', href: '/guides/field-service-estimating/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'how-to-get-paid-faster-field-service',
    title: 'How to Get Paid Faster in a Service Business',
    category: 'How-to guide',
    intro:
      'The gap between finishing a job and having the money in your account is where a lot of service businesses quietly strangle their own cash flow. Closing that gap is mostly about changing when and how you invoice. Here is how to get paid faster.',
    sections: [
      {
        heading: 'Invoice on site, not on Sunday night',
        body: [
          'The single biggest delay is [invoicing](/guides/field-service-invoicing/) that happens back at the office days after the work. Every day between finishing and sending is a day added to when you get paid, and the occasional job slips through and never gets billed at all. Invoicing from the technician’s phone before they leave the driveway removes that gap entirely, and the details are already there from the job, so there is nothing to re-type.',
        ],
      },
      {
        heading: 'Take payment before you leave',
        body: [
          'An invoice sent is not the same as money received. The strongest lever is collecting on the spot: card or ACH payment on the technician’s device the moment the work is signed off. It turns a receivable you have to chase into cash in hand. Just factor in the [processing cost](/guides/field-service-software-payment-processing/), typically around 2.9% plus 30 cents per card transaction and roughly 1% on ACH, and price with that in mind.',
        ],
        callout: {
          text: 'An invoice sent is not money received. Collect on the spot and the receivable never has to be chased.',
        },
      },
      {
        heading: 'Make paying effortless for the customer',
        body: [
          'People pay fast when it is easy and slow when it is a chore. Send the invoice as a text or email with a payment link they can tap, rather than a paper bill they have to dig out a checkbook for. Offer the payment methods they actually use. Every bit of friction you remove shortens the time to payment.',
        ],
      },
      {
        heading: 'Automate the follow-up on what is owed',
        body: [
          'For the invoices that do go unpaid, do not rely on remembering to chase them. Good software shows you what is outstanding at a glance and sends automatic reminders on the ones that age past their due date. Consistent, automatic nudges collect far more than sporadic manual ones, and they do it without anyone feeling like the office villain.',
        ],
      },
    ],
    related: [
      { label: 'Field service invoicing explained', href: '/guides/field-service-invoicing/' },
      { label: 'Payments and financing in field service', href: '/guides/field-service-payments-and-financing/' },
      { label: 'Housecall Pro review', href: '/products/housecall-pro/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'how-to-improve-first-time-fix-rate',
    title: 'How to Improve Your First-Time Fix Rate',
    category: 'How-to guide',
    intro:
      'A second trip is one of the most expensive things a service business does: you pay for the drive and the labor twice and earn once, and the customer remembers the delay, not the fix. Raising your first-time fix rate is where real efficiency lives. Here is how.',
    sections: [
      {
        heading: 'Send the technician in informed',
        body: [
          'A lot of second trips are booked blind. If the technician arrives without the equipment history, the model and serial number, or notes from the last visit, they diagnose from scratch and often discover they needed a part they did not bring. Full job and equipment history on the [mobile app](/guides/field-service-technician-mobile-app/), before they knock, is the first and biggest fix.',
        ],
        callout: {
          text: 'A second trip pays for the drive and the labor twice and earns once. Almost nothing else on the job is that expensive.',
        },
      },
      {
        heading: 'Get the right parts on the truck',
        body: [
          'The classic second trip is arriving, finding the fault, and not having the part. [Truck-stock inventory](/guides/field-service-inventory-management/) that tracks what is on each van, tied to the kind of work booked, means you can send the technician who is actually carrying what the job needs. For parts-heavy trades, this alone moves the number materially.',
        ],
      },
      {
        heading: 'Match the job to the right technician',
        body: [
          'Skills-based dispatch matters more than pure proximity. Sending the nearest technician is no good if they cannot do the work. When your [dispatch board](/guides/field-service-dispatching/) factors in who has the skills and the parts for a specific job, not just who is closest, more jobs get finished on the first visit. That is a scheduling and dispatch capability worth prioritizing.',
        ],
      },
      {
        heading: 'Capture what happened for next time',
        body: [
          'First-time fix compounds when every visit feeds the next. Notes, photos and the parts used, captured on site and attached to the customer and the equipment, mean the next technician (or the same one next year) starts informed instead of blind. Measure the rate, too: if your software can report first-time fix, watch it, because what you measure is what improves.',
        ],
      },
    ],
    related: [
      { label: 'Inventory and truck stock in field service', href: '/guides/field-service-inventory-management/' },
      { label: 'Field service dispatching explained', href: '/guides/field-service-dispatching/' },
      { label: 'Work order management', href: '/guides/field-service-work-order-management/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'how-to-optimize-field-service-routes',
    title: 'How to Optimize Routes for a Field Service Team',
    category: 'How-to guide',
    intro:
      'For any business whose technicians drive between a lot of stops, the route is a cost you pay every single day in fuel and lost hours. Tightening it is one of the clearest ways to fit more work into the same day. Here is how to actually do it.',
    sections: [
      {
        heading: 'Decide whether routing is really your problem',
        body: [
          'Be honest about your work first. [Route optimization](/guides/field-service-route-optimization/) is a big deal for route-dense trades, [landscaping](/industries/landscaping/), [pest control](/industries/pest-control/), [cleaning](/industries/cleaning/), and anyone running dozens of short recurring visits a day. If you do a handful of longer service calls, drive time is a smaller slice of the day and the payoff is modest. Spend your effort where it moves the number.',
        ],
        callout: {
          text: 'Every extra minute per stop, multiplied across dozens of daily visits, is a job you never got to.',
        },
      },
      {
        heading: 'Cluster work by geography',
        body: [
          'The simplest win is to stop scattering a technician across town. Group jobs by area so a day’s stops sit near each other, and hold recurring visits in a sensible geographic pattern week to week. Even before any clever software, clustering by zone cuts drive time noticeably.',
        ],
      },
      {
        heading: 'Let the software sequence the stops',
        body: [
          'Real route optimization does more than show pins on a map: it works out the most efficient order to visit a set of stops, accounting for distance and, in stronger tools, time windows and traffic. For recurring routes it plans the whole pattern and re-optimizes when a job is added or cancelled. If routes are central to your business, insist on genuine multi-stop optimization, not just a map view.',
        ],
      },
      {
        heading: 'Feed it accurate, live locations',
        body: [
          'Routing is only as good as the data under it. [Live GPS](/guides/field-service-gps-tracking/) on your vehicles or technicians lets you re-route around a cancellation or an emergency using where people actually are, not where the morning plan assumed they would be. The combination of good sequencing and live location is what turns routing from a nice map into saved fuel and extra jobs.',
        ],
      },
    ],
    related: [
      { label: 'Route optimization explained', href: '/guides/field-service-route-optimization/' },
      { label: 'GPS and technician tracking', href: '/guides/field-service-gps-tracking/' },
      { label: 'Software for landscaping businesses', href: '/industries/landscaping/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'how-to-get-more-customer-reviews',
    title: 'How to Get More Customer Reviews for Your Service Business',
    category: 'How-to guide',
    intro:
      'For a home-service business, online reviews are the storefront: they decide who calls you before anyone speaks to you. Getting a steady stream of them is a system, not luck. Here is how to build one that runs mostly on its own.',
    sections: [
      {
        heading: 'Ask at the moment of relief',
        body: [
          'Timing is everything. The best time to ask for a review is right after you have solved the customer’s problem, when the relief and goodwill are highest. Wait a week and the feeling fades and the request gets ignored. Train technicians to mention it on the way out, and back that up with an [automated request](/guides/field-service-software-marketing-integrations/) that goes out the same day the job is marked complete.',
        ],
        callout: {
          text: 'Ask right after you have solved the problem, when goodwill is highest. A week later the feeling has faded and the request gets ignored.',
        },
      },
      {
        heading: 'Remove every bit of friction',
        body: [
          'People want to help but will not hunt for the right page. Send a text or email with a direct link straight to the review form, so leaving one takes seconds, not a search. The easier you make it, the higher the share of happy customers who actually follow through. Automation that fires the link at the right moment is what makes this consistent instead of occasional.',
        ],
      },
      {
        heading: 'Catch problems before they become reviews',
        body: [
          'A quiet way to protect your rating is to give unhappy customers a private route to reach you before they reach the public. A quick follow-up that asks how the visit went surfaces the dissatisfied few, so you can make it right directly rather than reading about it in a one-star review. This is about fixing genuine problems fast, not hiding them.',
        ],
      },
      {
        heading: 'Make it part of the workflow, not a project',
        body: [
          'Review generation works when it is automatic and forgettable, not a campaign someone has to remember to run. Tools built around residential service, [Housecall Pro](/products/housecall-pro/) is a well-known example, bake review requests into the end-of-job flow so they happen every time without anyone thinking about it. That consistency, job after job, is what compounds into a wall of recent reviews.',
        ],
      },
    ],
    related: [
      { label: 'Online booking for field service', href: '/guides/field-service-online-booking/' },
      { label: 'Housecall Pro review', href: '/products/housecall-pro/' },
      { label: 'Best field service management software', href: '/best/field-service-management-software/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'how-to-track-job-profitability',
    title: 'How to Track Job Profitability (and Fix What Is Losing Money)',
    category: 'How-to guide',
    intro:
      'Being busy and being profitable are not the same thing, and the gap between them is usually a few job types that lose money every time while nobody is looking. Tracking profitability by job is how you find them. Here is how to set it up.',
    sections: [
      {
        heading: 'Capture costs as the job happens',
        body: [
          '[Job costing](/guides/field-service-job-costing/) only works if the costs are recorded while the work is live, not reconstructed from memory later. That means technician time logged against the job, parts added to the [work order](/guides/field-service-work-order-management/), and materials recorded on site. If capturing this is a manual chore done after the fact, it simply will not happen, which is exactly why most businesses stay in the dark about which jobs pay.',
        ],
        callout: {
          text: 'Being busy and being profitable are not the same thing. Only job costing tells you, job by job, which one you are.',
        },
      },
      {
        heading: 'Compare revenue to true cost, job by job',
        body: [
          'Profit is what the job brought in minus what it actually cost to deliver: labor, parts, materials, and any subcontractor or equipment cost. Not the estimate, and not revenue with the costs waved away. Seeing that real number per job is what turns a vague sense that some work is not worth it into a fact you can act on.',
        ],
      },
      {
        heading: 'Look at profit by job type and customer',
        body: [
          'The insight usually lives in the patterns. Group your job costing by type of work and by customer, and the losers jump out: a certain service that is underpriced, a crew that is slower than assumed, a big account whose discount has quietly eaten the margin. Reporting that slices profit this way is worth prioritizing if profitability is the question you care about.',
        ],
      },
      {
        heading: 'Then fix the price or drop the work',
        body: [
          'Measurement is only useful if it changes something. Once you can see which work loses money, you have two honest choices: [raise the price](/guides/how-to-price-a-service-call/) until it makes sense, or stop taking that work and put the capacity toward jobs that pay. Commercial and project businesses should treat this as essential; the platforms built for them, like [Simpro](/products/simpro/) and [BuildOps](/products/buildops/), are strong on job costing, while lighter residential tools track it only partially.',
        ],
      },
    ],
    related: [
      { label: 'Job costing explained', href: '/guides/field-service-job-costing/' },
      { label: 'How to price a service call', href: '/guides/how-to-price-a-service-call/' },
      { label: 'Simpro review', href: '/products/simpro/' },
      { label: 'Field service software pricing explained', href: '/guides/field-service-software-pricing-explained/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'do-you-need-field-service-software',
    title: 'Do You Actually Need Field Service Software Yet?',
    category: 'Buying guide',
    intro:
      'Not every service business needs a dedicated platform, and buying one too early wastes money and effort. The honest answer to whether you need it depends less on your size than on where things are slipping. Here is how to tell.',
    sections: [
      {
        heading: 'When a calendar and QuickBooks are still fine',
        body: [
          'If you are one or two people, running a modest number of jobs, and nothing is falling through the cracks, you probably do not need dedicated software yet. A shared calendar, a phone, and a simple invoicing tool can carry a very small operation for a surprisingly long time.',
        ],
        callout: {
          text: 'There is no prize for buying a platform before the pain is real, and plenty of downside in paying for one you barely use.',
        },
      },
      {
        heading: 'The signs you have outgrown it',
        body: [
          'The moment to look seriously is when the moving parts start slipping. Calls that never get returned. Technicians double-booked, or idle while customers wait. Invoices going out a week late, or the occasional job that never gets billed at all. Someone asking about a repair from last year that nobody wrote down. If two or three of those sound familiar, a spreadsheet is no longer helping you, it is quietly costing you.',
        ],
      },
      {
        heading: 'Two triggers that move the timeline up',
        body: [
          'Two things make software worth it sooner than headcount alone would suggest. First, selling [maintenance agreements or memberships](/guides/field-service-service-agreements/): tracking who is due, scheduling the visits and billing on a cycle by hand becomes unmanageable fast. Second, accounting friction: if you are re-typing every invoice into [QuickBooks or Xero](/guides/field-service-software-accounting-integrations/), a tool that syncs automatically pays for itself in reclaimed hours. Either one can justify the move even at a small size.',
        ],
      },
      {
        heading: 'What it realistically costs to start',
        body: [
          'The barrier is lower than many owners assume. Entry plans for a single user run around $29 to $60 a month, and a couple of tools even offer a [free tier](/guides/free-field-service-software/) for very low job volume. So the question is rarely can I afford it, it is whether the time and money you are losing to missed jobs and late invoices now is bigger than a modest monthly plan. Usually, once the pain has started, it is.',
        ],
      },
    ],
    related: [
      { label: 'What is field service management software?', href: '/guides/what-is-field-service-management-software/' },
      { label: 'How to choose field service software', href: '/guides/how-to-choose-field-service-software/' },
      { label: 'Best field service software for 1–5 technicians', href: '/best/field-service-software-for-1-5-technicians/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-software-contracts-what-to-watch',
    title: 'Field Service Software Contracts: What to Watch Before You Sign',
    category: 'Buying guide',
    intro:
      'The demo is exciting, the salesperson is friendly, and the contract is where the surprises hide. In field service software, the terms you skim past are exactly the ones that cost real money later. Here is what to read closely before you sign.',
    sections: [
      {
        heading: 'The length of the commitment',
        body: [
          'Small-business tools tend to offer month-to-month or annual billing, which keeps your risk low. Enterprise platforms are a different story: multi-year contracts are common, and some [ServiceTitan](/products/servicetitan/) users report being locked into three-year terms. The longer the commitment, the more certain you need to be before you sign, because backing out is where the pain starts.',
        ],
        table: {
          caption: 'The five terms worth reading closely before you sign.',
          headings: ['Term', 'What to ask', 'Watch for'],
          rows: [
            ['Commitment length', 'Month-to-month, annual, or multi-year?', 'Multi-year lock-ins on enterprise tools'],
            ['Early-exit fee', 'What does it cost to leave early?', 'Quotes from thousands into five figures'],
            ['Auto-renewal', 'When must I cancel to avoid renewing?', 'Auto-renewal plus 8 to 12% annual rises'],
            ['Included vs add-ons', 'What is actually in the base price?', 'Phone, marketing, GPS, extra users on top'],
            ['Data export', 'Can I export my data if I leave?', 'A hard exit means you are locked in'],
          ],
        },
      },
      {
        heading: 'Early-exit fees',
        body: [
          'This is the term that catches people hardest. On the heavier platforms, leaving early can trigger significant penalties: contractors have reported being quoted anywhere from a few thousand dollars into five figures to exit a contract before it runs out. Ask the exit question directly during the sales process, get the number in writing, and treat a vague or evasive answer as a warning in itself.',
        ],
        callout: {
          text: 'Ask what it costs to leave, during the sales process. A vague answer about the exit is itself the answer.',
        },
      },
      {
        heading: 'Auto-renewal and price increases',
        body: [
          'Many contracts renew automatically unless you cancel within a specific window, and quite a few reserve the right to raise your price each year, commonly in the region of eight to twelve percent. Some also treat a late payment, sometimes only a little over a week late, as a contractual default. None of this is necessarily a deal-breaker, but you need to know it going in rather than discovering it on renewal day.',
        ],
      },
      {
        heading: 'What is included versus what is an add-on',
        body: [
          'The base price is rarely the real price. Phone systems, marketing, GPS and fleet tracking, extra users and [payment processing](/guides/field-service-software-payment-processing/) are frequently paid extras stacked on top. Before you sign, get an itemized quote of everything you will actually switch on, so the number you commit to is the number you will pay, not the headline that got you in the door. Our [pricing guide](/guides/field-service-software-pricing-explained/) covers the full picture.',
        ],
      },
      {
        heading: 'Your data and your exit',
        body: [
          'Ask two questions that protect your future self: can you export your own data, customers, history, invoices, if you leave, and in what format? A platform that makes it hard to get your data out is a platform that is betting you will never leave. Knowing the exit is clean makes the whole commitment safer.',
        ],
      },
    ],
    related: [
      { label: 'How to choose field service software', href: '/guides/how-to-choose-field-service-software/' },
      { label: 'Field service software pricing explained', href: '/guides/field-service-software-pricing-explained/' },
      { label: 'ServiceTitan review', href: '/products/servicetitan/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-software-implementation-what-to-expect',
    title: 'Field Service Software Implementation: What to Expect',
    category: 'Buying guide',
    intro:
      'The monthly price is only half the cost of new software. The other half is implementation, the time, effort and sometimes money it takes to get live, and underestimating it is how rollouts stall. Here is what to expect so you can plan for it.',
    sections: [
      {
        heading: 'Two very different worlds',
        body: [
          'Implementation splits sharply by the kind of tool. Small-business platforms are self-serve: you can sign up, import your customers and be running real jobs within days, with little or no cost beyond the subscription. Enterprise platforms are a project: structured onboarding, data migration and training, a rollout measured in weeks, and setup fees that can run from a few thousand dollars into the tens of thousands. Know which world your shortlist is in before you commit.',
        ],
        table: {
          caption: 'Which world your shortlist is in shapes the whole rollout.',
          headings: ['', 'Small-business tools', 'Enterprise platforms'],
          rows: [
            ['Setup', 'Self-serve signup', 'Structured, guided onboarding'],
            ['Time to live', 'Days', 'Weeks'],
            ['Setup fee', 'Little or none', 'Thousands into tens of thousands'],
            ['Your effort', 'Import customers and start', 'Data migration, config and training'],
          ],
        },
      },
      {
        heading: 'The work that is yours, not the vendor’s',
        body: [
          'Even a smooth implementation asks something of you. Someone has to clean and export your existing data, decide how your services and pricing map into the new system, and configure the workflows to match how you actually work. The vendor guides it, but the decisions and the tidy-up are yours, so budget internal time, not just money, for it.',
        ],
        callout: {
          text: 'Budget internal time, not just money. The vendor guides the rollout, but the decisions and the clean-up are yours.',
        },
      },
      {
        heading: 'Accounting is the step that bites',
        body: [
          'The part of setup that most often goes wrong is the accounting connection, especially with [QuickBooks Desktop](/guides/how-to-connect-field-service-software-to-quickbooks/), which needs a sync agent on a Windows machine and a specific order of operations. Get this configured and tested early with real invoices, because discovering it does not work after go-live is the classic implementation disaster.',
        ],
      },
      {
        heading: 'Plan for the dip',
        body: [
          'Every rollout has a slow patch in the first couple of weeks while the team learns the tool. That dip is normal and temporary, not a sign you chose wrong. The businesses that come through it well warn the crew it is coming, run a small batch of real jobs before the full cut-over, and retire the old way on a set date so people cannot quietly drift back to paper.',
        ],
      },
    ],
    related: [
      { label: 'How to switch field service software', href: '/guides/how-to-switch-field-service-software/' },
      { label: 'How to connect field service software to QuickBooks', href: '/guides/how-to-connect-field-service-software-to-quickbooks/' },
      { label: 'How to get your team to use new software', href: '/guides/how-to-get-team-to-use-field-service-software/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'free-field-service-software',
    title: 'Free Field Service Software: What You Actually Get',
    category: 'Buying guide',
    intro:
      'Free field service software sounds like the obvious place to start, and for the right business it genuinely is. But free comes in a few different shapes, and knowing which is which saves you from a nasty surprise later. Here is the honest picture.',
    sections: [
      {
        heading: 'Free trial is not the same as a free plan',
        body: [
          'The first thing to sort out is which kind of free you are looking at. Most platforms offer a free trial, typically 14 to 30 days, which is a full-featured test drive that ends. A genuine free plan, one you can stay on indefinitely, is much rarer. Both are useful, but they answer different questions: a trial tells you if the tool fits, a free plan tells you if you can run on it long term.',
        ],
        table: {
          caption: 'Two different kinds of free that answer different questions.',
          headings: ['', 'Free trial', 'Free plan'],
          rows: [
            ['How long', 'Usually 14 to 30 days', 'Indefinite'],
            ['Features', 'Full-featured', 'Deliberately limited'],
            ['It answers', 'Does the tool fit?', 'Can I run on it long term?'],
            ['Common example', 'Most platforms offer one', '[ServiceM8](/products/servicem8/) free tier'],
          ],
        },
      },
      {
        heading: 'Where a real free plan exists',
        body: [
          'Genuine free tiers do exist at the very small end. [ServiceM8](/products/servicem8/), for example, has a free plan capped at a low number of jobs per month, which suits a true micro operation or someone dipping a toe in. These plans are deliberately limited, on job volume, users or features, so they work as a starting point, not a destination, and you should expect to pay once you grow past the cap.',
        ],
      },
      {
        heading: 'Use the trial like a real test, not a demo',
        body: [
          'A free trial is worth far more if you run real jobs through it rather than clicking around. Put a few genuine bookings, quotes and invoices through it, test the [mobile app](/guides/field-service-technician-mobile-app/) on your technicians’ actual phones, and if accounting matters, [sync a real invoice to QuickBooks or Xero](/guides/how-to-connect-field-service-software-to-quickbooks/) and confirm it lands correctly. That is how you find the deal-breakers while it still costs you nothing.',
        ],
      },
      {
        heading: 'When free stops being worth it',
        body: [
          'The moment the job cap, the missing features or the lack of proper support starts costing you more in lost time than a paid plan would cost in money, the free option has done its job and it is time to move up. Treat it as a first step, not a permanent home for a growing business.',
        ],
        callout: {
          text: 'Free is a fine place to start and a poor place to get stuck.',
        },
      },
    ],
    related: [
      { label: 'ServiceM8 review', href: '/products/servicem8/' },
      { label: 'Do you actually need field service software yet?', href: '/guides/do-you-need-field-service-software/' },
      { label: 'Field service software pricing explained', href: '/guides/field-service-software-pricing-explained/' },
      { label: 'Best field service software for 1–5 technicians', href: '/best/field-service-software-for-1-5-technicians/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'is-field-service-software-worth-it',
    title: 'Is Field Service Software Worth It? How to Judge the Return',
    category: 'Buying guide',
    intro:
      'Field service software is a real monthly cost, and it is fair to ask whether it pays for itself. For most businesses past a certain size it does, but the return comes from specific places. Here is how to judge it honestly for your own operation.',
    sections: [
      {
        heading: 'Where the money actually comes back',
        body: [
          'The return is not magic, it is a handful of concrete gains. You [get paid faster](/guides/how-to-get-paid-faster-field-service/) because invoicing and payment happen on site instead of a week later. You bill for work that used to slip through unrecorded. You fit more jobs into a day through [tighter scheduling](/guides/field-service-scheduling/) and less wasted driving. And you cut the [second trips](/guides/how-to-improve-first-time-fix-rate/) that cost you a drive and a labor hour for no extra revenue. Add those up and the number is usually bigger than the subscription.',
        ],
        table: {
          caption: 'Add these gains against the true monthly cost of the tool.',
          headings: ['Gain', 'Where it shows up'],
          rows: [
            ['Paid faster', 'Invoicing and payment on site, not a week later'],
            ['Fewer missed bills', 'Jobs that used to slip through get invoiced'],
            ['More jobs per day', 'Tighter scheduling and less wasted driving'],
            ['Fewer second trips', 'The right parts and info on the first visit'],
          ],
        },
      },
      {
        heading: 'The soft gains that are still real',
        body: [
          'Some of the value does not show up on an invoice but matters all the same: fewer missed appointments and angry how-far-away calls, a more professional impression that wins repeat work, and hours of office admin handed back to you every week. These are harder to put a number on, but any owner who has made the switch will tell you they are real.',
        ],
      },
      {
        heading: 'Do the math for your own shop',
        body: [
          'Judge it against your own figures, not a vendor’s claim. Roughly what are you losing now to late or missed invoicing, second trips and idle time in a month? Compare that to the true monthly cost of the tool, subscription plus the add-ons and [processing fees](/guides/field-service-software-payment-processing/) you will actually use. For most businesses past a couple of technicians, the losses dwarf the plan. For a very small, tidy operation, it can genuinely be too early. If you want to measure it properly, [track job profitability](/guides/how-to-track-job-profitability/) once you are running.',
        ],
      },
      {
        heading: 'When it is not worth it (yet)',
        body: [
          'Being honest cuts both ways. If you are tiny, well organized, and nothing is slipping, the return may not be there yet, and forcing an enterprise platform onto a small team is a common way to spend a lot for value you cannot use.',
        ],
        callout: {
          text: 'The tool is worth it when it fixes problems you actually have, sized to the business you run, not the one you imagine you might become.',
        },
      },
    ],
    related: [
      { label: 'Do you actually need field service software yet?', href: '/guides/do-you-need-field-service-software/' },
      { label: 'Field service software pricing explained', href: '/guides/field-service-software-pricing-explained/' },
      { label: 'How to track job profitability', href: '/guides/how-to-track-job-profitability/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-software-accounting-integrations',
    title: 'Field Service Software and Accounting: How the Integrations Really Work',
    category: 'Integration',
    intro:
      'The accounting integration is the one that decides whether your books stay clean or you re-type every invoice by hand. It is also the integration people get wrong most often, because support for QuickBooks Online, QuickBooks Desktop and Xero varies sharply between platforms.',
    sections: [
      {
        heading: 'The one distinction that matters most',
        body: [
          'QuickBooks Online and QuickBooks Desktop are different products, and field service tools support them differently. This is the single fact that eliminates options fastest. [Jobber](/products/jobber/), Workiz, [ServiceM8](/products/servicem8/), Simpro and Tradify sync with the Online version but not Desktop. [Housecall Pro](/products/housecall-pro/), [Service Fusion](/products/service-fusion/), [FieldEdge](/products/fieldedge/), ServiceTitan and BuildOps handle Desktop too. If your books run on Desktop, that fact alone removes a chunk of the market, so [settle it before you fall for a demo](/guides/how-to-connect-field-service-software-to-quickbooks/).',
        ],
        table: {
          caption: 'Accounting support varies sharply. Confirm your exact version with the vendor.',
          headings: ['Your accounting', 'Tools that support it', 'Notes'],
          rows: [
            ['QuickBooks Online', '[Jobber](/products/jobber/), [Housecall Pro](/products/housecall-pro/), and most others', 'The broadest support'],
            ['QuickBooks Desktop', '[FieldEdge](/products/fieldedge/), [Service Fusion](/products/service-fusion/), [ServiceTitan](/products/servicetitan/)', 'Narrower; needs a sync agent'],
            ['Xero', '[FieldPulse](/products/fieldpulse/), [ServiceM8](/products/servicem8/), [Tradify](/products/tradify/), [Simpro](/products/simpro/)', 'A QuickBooks-first market, so verify'],
          ],
        },
        callout: {
          text: 'Online support does not mean Desktop support. This one distinction eliminates options faster than any feature on the list.',
        },
      },
      {
        heading: 'Where Xero fits',
        body: [
          'If you run [Xero](/guides/field-service-software-and-xero/) rather than QuickBooks, your shortlist looks different again. Tools with solid Xero support include FieldPulse, ServiceM8, Simpro, Kickserv and Tradify, while some of the most established US platforms lean QuickBooks-first and support Xero lightly or not at all. Xero users should treat it as a hard requirement and confirm it directly, because a checkmark on a feature grid does not tell you how deep the sync goes.',
        ],
      },
      {
        heading: 'What a good sync actually moves',
        body: [
          'A proper accounting integration keeps a few things in step without double entry: customers, invoices, payments and often your product and price list. The value is simple, the same numbers never get typed twice, so the books stay current on their own. Before you switch it on, decide which direction each record flows and where the master copy lives, so you are not editing the same customer in two systems and creating duplicates.',
        ],
      },
      {
        heading: 'Test it before you trust it',
        body: [
          'A sync that looks fine on the feature list can still misbehave in practice, duplicate entries and failed syncs are a genuine, commonly reported complaint even on tools that advertise the integration. Push a handful of real invoices and payments through during a free trial and confirm they land in your accounting correctly, mapped to the right accounts, with no duplicates. Verifying it on your own data is the check that saves the most pain later.',
        ],
      },
    ],
    related: [
      { label: 'How to connect field service software to QuickBooks', href: '/guides/how-to-connect-field-service-software-to-quickbooks/' },
      { label: 'Field service software and Xero', href: '/guides/field-service-software-and-xero/' },
      { label: 'Best field service software with QuickBooks', href: '/best/field-service-software-with-quickbooks/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-software-and-xero',
    title: 'Field Service Software That Works With Xero',
    category: 'Integration',
    intro:
      'Most field service software is built QuickBooks-first, so if your books run on Xero, your options narrow and it pays to know which tools genuinely support it. Here is how Xero integration works in field service and which platforms do it well.',
    sections: [
      {
        heading: 'Why Xero users have to look harder',
        body: [
          'A lot of the best-known US field service platforms grew up around QuickBooks, so Xero support ranges from deep to nonexistent. That does not mean you are short of good options, it means you cannot assume. Treat Xero as a hard requirement on your shortlist and confirm it directly with each vendor, rather than trusting a feature-grid tick that might cover only a shallow or one-way sync.',
        ],
      },
      {
        heading: 'Tools with solid Xero support',
        body: [
          'Several strong platforms sync with Xero, and they span the range of business sizes. FieldPulse and Kickserv cover Xero alongside QuickBooks; ServiceM8 and Tradify pair Xero with QuickBooks Online and suit smaller and Apple-based trades; and Simpro brings Xero support to the commercial and project end. So whether you are a solo operator or a commercial contractor, there is a Xero-friendly option in your size band.',
        ],
        table: {
          caption: 'Xero-friendly options across the range of business sizes.',
          headings: ['Business size', 'Xero-friendly options'],
          rows: [
            ['Solo or small, Apple-based', '[ServiceM8](/products/servicem8/), [Tradify](/products/tradify/)'],
            ['Growing multi-trade', '[FieldPulse](/products/fieldpulse/), [Kickserv](/products/kickserv/)'],
            ['Commercial or project', '[Simpro](/products/simpro/)'],
          ],
        },
        callout: {
          text: 'Treat Xero as a hard requirement and confirm it directly. A feature-grid tick does not tell you how deep the sync goes.',
        },
      },
      {
        heading: 'What the sync should handle',
        body: [
          'A good Xero integration keeps customers, invoices and payments in step automatically, so a job invoiced in the field lands in Xero without anyone re-keying it. Check whether it also syncs your items or price list, and which direction contacts flow, so you are not maintaining the same customer in two places. Clarify that before go-live rather than cleaning up duplicates after.',
        ],
      },
      {
        heading: 'Prove it on your own data',
        body: [
          'As with any accounting sync, the only real test is your own invoices. During a free trial, push a few genuine jobs through to Xero and confirm they arrive correctly coded, with payments matched and no duplicates. A sync that advertises well but stumbles on your actual data is exactly the surprise you want to catch before you commit, not after.',
        ],
      },
    ],
    related: [
      { label: 'Field service software and accounting integrations', href: '/guides/field-service-software-accounting-integrations/' },
      { label: 'ServiceM8 review', href: '/products/servicem8/' },
      { label: 'Tradify review', href: '/products/tradify/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-software-payment-processing',
    title: 'Payment Processing in Field Service Software: What to Check',
    category: 'Integration',
    intro:
      'Taking card and ACH payments through your field service software is one of the fastest ways to get paid, but the way processing is built in varies, and so does what it costs you. Here is what to look at before you rely on it.',
    sections: [
      {
        heading: 'How in-app payments work',
        body: [
          'Most modern platforms include a built-in payment layer, often their own branded product, so a technician can take a card or ACH payment on site and have it tie straight back to the job and invoice. The upside is real: you get paid on the spot instead of mailing a bill and waiting, and nothing has to be reconciled by hand. It is one of the biggest cash-flow levers the software offers.',
        ],
      },
      {
        heading: 'Know the real rate',
        body: [
          'Convenience has a price, and it is worth reading. In-app card payments typically run around 2.9% plus 30 cents per transaction, with ACH nearer 1%. That is standard for the category, but at volume it adds up fast: a business invoicing $50,000 a month can pay well over $1,000 a month in processing alone, on top of the subscription. Factor that into any comparison, because a cheaper plan with a higher processing rate can cost more overall.',
        ],
        table: {
          caption: 'Typical in-app processing rates. Confirm the exact figure with the vendor.',
          headings: ['Method', 'Typical rate', 'Best for'],
          rows: [
            ['Card', 'About 2.9% plus 30 cents per transaction', 'Convenience, most customer payments'],
            ['ACH / bank transfer', 'About 1%', 'Larger invoices where the fee matters'],
          ],
        },
        callout: {
          text: 'A cheaper plan with a higher processing rate can cost more overall. Read the rate, not just the sticker price.',
        },
      },
      {
        heading: 'Can you bring your own processor?',
        body: [
          'This is the question people forget to ask. Some platforms lock you into their own payment processor, so you take their rate whether you like it or not. Others let you connect an outside processor such as Stripe or your existing merchant account. If you already have a good rate or a processor you trust, confirm you can keep it before you sign, because switching later is a hassle.',
        ],
      },
      {
        heading: 'Financing for the big tickets',
        body: [
          'For large jobs, a system replacement or a major repair, look at whether the platform offers point-of-sale [consumer financing](/guides/field-service-payments-and-financing/) through a lender partner. For trades like [HVAC](/industries/hvac/), letting a customer spread the cost measurably lifts close rates on expensive work, because a manageable monthly figure lands better than a large total. If you sell big tickets, treat financing as part of the payments question, not an afterthought.',
        ],
      },
    ],
    related: [
      { label: 'Payments and financing in field service', href: '/guides/field-service-payments-and-financing/' },
      { label: 'How to get paid faster in a service business', href: '/guides/how-to-get-paid-faster-field-service/' },
      { label: 'Field service software pricing explained', href: '/guides/field-service-software-pricing-explained/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-software-and-zapier',
    title: 'Connecting Field Service Software to the Rest of Your Tools',
    category: 'Integration',
    intro:
      'No field service platform does everything, so sooner or later you will want it to talk to another tool, a lead source, a marketing app, a spreadsheet. Zapier and open APIs are how that happens. Here is what is realistic and what to check.',
    sections: [
      {
        heading: 'Two ways tools connect',
        body: [
          'There are broadly two routes. A native integration is one the vendor built and maintains for a specific partner, which tends to be the most reliable. Beyond that, many platforms connect through Zapier, a middle layer that links thousands of apps without code, or through an open API for custom work. Zapier covers most everyday needs; an API matters when you have a developer and a specific job to automate.',
        ],
        table: {
          caption: 'Three ways your tools connect, from most to least turnkey.',
          headings: ['Method', 'What it is', 'Best when'],
          rows: [
            ['Native integration', 'Built and maintained by the vendor', 'A named partner you both support'],
            ['Zapier', 'A no-code middle layer to thousands of apps', 'Everyday automations, no developer'],
            ['Open API', 'Custom code against the platform', 'Unusual workflows and a developer on hand'],
          ],
        },
      },
      {
        heading: 'What people actually automate',
        body: [
          'The useful automations are usually mundane and high-value: a web-form lead creating a customer or job automatically, a completed job triggering a [review request or a marketing follow-up](/guides/field-service-software-marketing-integrations/), or job data flowing into a spreadsheet or dashboard you already use. Start from the manual step that annoys you most and see whether a connection removes it, rather than automating for its own sake.',
        ],
      },
      {
        heading: 'Where an open API earns its place',
        body: [
          'If you have unusual workflows or your own systems, an open API is the difference between bending your business to the software and bending the software to your business. Platforms like [ServiceTitan](/products/servicetitan/) and [Zuper](/products/zuper/) lean into configurability and API access for exactly this reason. It is overkill for a small residential shop, but for a larger or more technical operation it is a real deciding factor.',
        ],
      },
      {
        heading: 'Do not over-connect',
        body: [
          'For most small and mid-sized businesses, an [all-in-one platform](/guides/all-in-one-vs-point-solutions-field-service/) that already covers the core is simpler and safer than stitching together a dozen specialists. Add connections to fix a specific, painful gap, not to build a clever machine that needs constant babysitting.',
        ],
        callout: {
          text: 'Every integration is one more thing that can break. Add one to fix a real pain, not to build a clever machine that needs babysitting.',
        },
      },
    ],
    related: [
      { label: 'All-in-one vs point solutions for field service', href: '/guides/all-in-one-vs-point-solutions-field-service/' },
      { label: 'ServiceTitan review', href: '/products/servicetitan/' },
      { label: 'Zuper review', href: '/products/zuper/' },
      { label: 'Find your best-fit software', href: '/find-software/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
    published: true,
  },
  {
    slug: 'field-service-software-marketing-integrations',
    title: 'Marketing Integrations in Field Service Software',
    category: 'Integration',
    intro:
      'Winning the next job is a marketing problem as much as an operations one, and where your field service software connects to reviews, email and lead sources decides how much of that runs on its own. Here is what to look for on the marketing side.',
    sections: [
      {
        heading: 'Reviews are the highest-value connection',
        body: [
          'For a home-service business, online reviews are the storefront, and the software that [automates review requests](/guides/how-to-get-more-customer-reviews/) at the end of every job compounds a real advantage over time. Some residential-focused platforms bake this in, [Housecall Pro](/products/housecall-pro/) is a well-known example, so the request fires automatically the moment a job is marked complete. If reputation drives your leads, weigh this heavily.',
        ],
        callout: {
          text: 'For a home-service business, your recent reviews are the storefront. The software that asks for one after every job quietly compounds an edge.',
        },
      },
      {
        heading: 'Email and campaign tools',
        body: [
          'Staying in front of past customers is where a lot of repeat revenue hides. Look at whether the platform includes email and campaign tools or connects cleanly to something like Mailchimp, so your customer list actually gets used rather than sitting idle. Be clear about what is included versus a paid add-on, because marketing modules are a common place the base price quietly grows.',
        ],
      },
      {
        heading: 'Tracking where leads come from',
        body: [
          'You cannot double down on what works if you do not know what works. Call tracking and lead-source tagging tell you which marketing actually produces booked jobs. Communication-focused tools like [Workiz](/products/workiz/) build this in, and it turns marketing spend from a guess into a measured decision. For lead-heavy trades, this is one of the most useful integrations there is.',
        ],
      },
      {
        heading: 'Match the depth to how you grow',
        body: [
          'Be honest about how much marketing you will really run. A referral-driven business does not need a full campaign suite, and paying for one is waste. A business trying to grow through reviews, repeat email and paid leads should treat marketing integration as a core requirement, not a nice-to-have. Buy for the way you actually win work.',
        ],
      },
    ],
    related: [
      { label: 'How to get more customer reviews', href: '/guides/how-to-get-more-customer-reviews/' },
      { label: 'Online booking for field service', href: '/guides/field-service-online-booking/' },
      { label: 'Housecall Pro review', href: '/products/housecall-pro/' },
      { label: 'Workiz review', href: '/products/workiz/' },
    ],
    publishedAt: '2026-09-13',
    updatedAt: '2026-09-13',
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
