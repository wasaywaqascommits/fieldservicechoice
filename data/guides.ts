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
          'Most of the value comes from a few everyday jobs. Scheduling and dispatch put the right technician on the right job at the right time, and let you shuffle things when a cancellation or an emergency lands. A mobile app gives technicians the job details, customer history and directions on their phone, usually with an offline option for basements and rural areas where the signal drops.',
          'On the money side, the software builds estimates, turns approved work into invoices, and takes card or ACH payment on the spot. Automated “on my way” texts cut down on missed appointments. And a proper customer record holds the full history of every visit, so the next technician isn’t starting from zero.',
          'Bigger operations lean on the heavier features: a flat-rate pricebook so every technician quotes the same number, membership or service agreements that bring in recurring revenue, inventory and truck-stock tracking, and reporting that shows where the money is really being made.',
        ],
      },
      {
        heading: 'What it actually costs',
        body: [
          'Pricing sorts into three rough bands. Starter plans for a single user run around $29 to $50 a month (Jobber’s entry plan is $29 billed annually, for example). Small-crew plans that add automation, online booking and five to ten users tend to land between $100 and $200 a month. And the enterprise platforms built for larger trades, ServiceTitan being the obvious one, are quote-based, so you talk to sales rather than read a price off a page.',
          'Two costs sit outside that subscription and catch people out. First, payment processing: if you collect card payments through the software, expect roughly 2.9% plus 30 cents per card transaction and about 1% on ACH, on top of your plan. For a business invoicing tens of thousands a month, that is a real line item. Second, implementation. The small-business tools are self-serve and you can be live in days; the enterprise platforms involve data migration and training and a multi-week rollout, which is a cost in both money and attention.',
        ],
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
          'A dispatch board shows every technician and every job on one screen, usually as a drag-and-drop schedule you can rearrange in seconds. The better tools factor in location and skills, send the job straight to the technician’s phone, and fire off an automatic “on my way” text to the customer. GPS tracking shows where crews actually are, so you’re dispatching from reality rather than a guess.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'If dispatch is your pain point, weigh how fast you can reassign a job, whether the technician gets full job details and history on mobile, and whether customers are kept in the loop automatically. High-volume operations should look hardest at the dispatch board and routing. You can compare how each platform handles this in our reviews and shortlists.',
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
          'A good scheduler gives you a calendar you can drag jobs around on, color-coded by technician or job type, with recurring jobs that repeat automatically so seasonal maintenance doesn’t rely on someone’s memory. It pushes each visit to the technician’s phone and, in stronger tools, warns you about conflicts and gaps before they turn into a problem.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'Look at how quickly you can move a job, whether recurring and route-based work is easy to set up, and how well the schedule syncs to the mobile app your technicians actually use. If you run recurring maintenance, that support matters more than almost anything else.',
        ],
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
          'Field service software turns a completed job into an invoice directly, often on the technician’s phone before they leave the driveway. The line items, the customer and the pricing are already there from the job, so there’s no re-typing. Many tools also take card or ACH payment on the spot, which is the single biggest lever for getting paid faster.',
        ],
      },
      {
        heading: 'Where accounting fits',
        body: [
          'The invoice shouldn’t live in a silo. The better setups sync invoices and payments into QuickBooks or Xero automatically, so your books stay current without anyone entering the same numbers twice. If your accounting runs on QuickBooks Desktop, check that support specifically, because it varies between platforms.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'Weigh how fast a technician can invoice and collect in the field, whether payments are built in, and how cleanly it syncs with your accounting. Getting those three right is usually worth more to cash flow than any other single feature.',
        ],
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
      },
      {
        heading: 'Why it matters',
        body: [
          'Without one, pricing lives in your senior technicians’ heads, which means it walks out the door when they do and shifts from job to job. A pricebook makes quoting consistent, faster, and easy to hand to a newer technician. The good/better/best format also tends to lift the average ticket, because customers often choose up when they’re given the choice.',
        ],
      },
      {
        heading: 'Who needs one',
        body: [
          'Flat-rate pricing earns its keep for trades that do a lot of repeatable repairs and replacements, HVAC and plumbing especially. If most of your work is custom or project-based, a full pricebook matters less than solid estimating. Match the feature to how repeatable your work really is.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'If a pricebook is central for you, look at how deep and editable it is, whether it supports good/better/best presentation on the technician’s device, and whether it ties into financing for bigger tickets. This is an area where the enterprise platforms tend to pull ahead of the lighter tools.',
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
          'A strong mobile app gives the technician the full job in one place: address and directions, customer and equipment history, the tasks to do, and room for notes and photos. It lets them build a quote, invoice and take payment on site, and capture a signature. The best ones keep working offline and sync once the signal comes back, which matters in basements and rural service areas.',
        ],
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
          'Judge the app the way your technicians will. Is it fast? Is everything they need one or two taps away? Does it work offline, and does it run well on the phones they already carry, Android as well as iPhone? The office features matter, but adoption is won or lost on the app.',
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
          'A work order is the full record of one job: who the customer is, what needs doing, who’s assigned, what was done, the parts used, and the outcome. In field service it’s the thread that ties a request to a completed, invoiced job, and it’s where the history lives when the same customer calls again next year.',
        ],
      },
      {
        heading: 'Why managing them matters',
        body: [
          'When work orders are scattered across texts, paper and someone’s memory, things get missed: a job nobody invoiced, a part that was never charged for, a follow-up that never happened. Good work order management keeps every job in one place with a clear status, so nothing is finished until it’s actually finished and billed.',
        ],
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
          'Look at how much of the job the work order captures (notes, photos, parts, signatures), how clearly you can see status across all your open jobs, and whether it links to equipment history for repeat customers. If you do commercial or contract work, custom fields and templates start to matter too.',
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
          'The practical wins are dispatching and communication. When an emergency comes in, you can send the closest available technician instead of guessing. When a customer asks where their technician is, you can tell them, or better, the software sends an automatic on-my-way text with an arrival window. It also gives you honest numbers on drive time and time on site.',
        ],
      },
      {
        heading: 'The people side',
        body: [
          'It’s worth being straight with your team about why you’re using it. Framed as “we’ll stop sending you across town when someone closer is free, and cut the how-far-away calls,” it lands very differently than surveillance. The businesses that get the most from it treat it as a dispatch and customer-service tool, not a stopwatch.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'Check whether tracking is live and tied into the dispatch board, whether customers get automatic arrival updates, and how it handles privacy outside working hours. If routing matters to you, look at how tracking feeds into route planning.',
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
          'This is a big deal for route-dense work: landscaping and lawn care, pest control, cleaning, and any operation running dozens of short recurring visits a day. For a business doing a handful of longer service calls, it matters far less. Be honest about which one you are before you pay for it.',
        ],
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
          'If routes are central, look for genuine multi-stop optimization rather than just a map view, support for recurring routes, and how it handles changes mid-day. Some all-in-one platforms include solid routing; very route-heavy operations sometimes add a specialist tool on top.',
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
          'Customers usually get a few quotes, and the one that arrives first and reads clearly has an edge. Building the estimate on the technician’s device, on site, while the problem is fresh, beats promising to send something over and then following up days later. Offering good, better and best options also lets the customer choose their level instead of just accepting or rejecting a single price.',
        ],
      },
      {
        heading: 'From estimate to invoice',
        body: [
          'The real payoff comes when an approved estimate turns into a scheduled job and then an invoice without anyone re-typing it. That’s where field service software pulls ahead of a generic document tool: the quote, the job and the invoice are the same record moving through stages.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'Look at how fast a technician can build and send a quote from the field, whether it supports good/better/best and optional line items, and how smoothly an accepted quote becomes a job and an invoice. Commercial and project work also needs deeper estimating with materials and labor.',
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
          'Agreements smooth out the seasonal peaks and troughs that make service businesses stressful to run. They fill the slow months with booked maintenance visits, they raise the lifetime value of each customer, and members tend to call you first when something bigger goes wrong. A healthy membership base is one of the strongest signs of a durable service business.',
        ],
      },
      {
        heading: 'What software needs to handle',
        body: [
          'Running agreements by hand gets painful fast: remembering who’s due, scheduling hundreds of visits, billing on a recurring cycle, and tracking renewals. Good field service software manages the agreement itself, generates the maintenance visits on schedule, handles recurring billing, and flags renewals before they lapse.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'If memberships are part of your plan, look closely at agreement management: recurring visit scheduling, recurring billing, renewal tracking, and reporting on your membership base. This is an area where the established platforms tend to be much deeper than the lightweight tools.',
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
          'Two things leak money without it. First, parts used on a job that never get charged to the customer, which quietly erodes your margin. Second, second trips, where a technician arrives, finds they don’t have the part, and has to come back another day. Tracking stock and tying parts to work orders closes both gaps: the part gets counted, charged and reordered.',
        ],
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
          'If parts matter, look for truck-level stock tracking, parts tied to work orders so they flow onto the invoice, reorder alerts, and multi-location support if you run more than one warehouse. This is an area where the heavier platforms tend to be stronger than the simple tools.',
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
          'Revenue hides a lot. A business can be flat out and still barely profitable because a handful of job types lose money every time and no one has measured it. Job costing turns that into numbers: you can see that a certain kind of work is underpriced, that a crew is slower than assumed, or that material waste is eating the margin. Then you can fix the price or stop taking the work.',
        ],
      },
      {
        heading: 'Where software fits',
        body: [
          'For job costing to be accurate, the costs have to be captured as the job happens: technician time logged, parts added to the work order, materials recorded. Field service software that captures all of that can roll it up into a real cost per job with little extra effort. Doing it by hand after the fact is so tedious that most businesses simply don’t, which is why they stay in the dark.',
        ],
      },
      {
        heading: 'What to look for',
        body: [
          'Look at whether the software captures labor, parts and materials against each job, whether it reports profit by job, job type and customer, and how much manual work it takes. Commercial and project businesses should treat deep job costing as close to essential.',
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
          'A lot of booking happens outside office hours, in the evening or at the weekend, when no one is answering the phone. A customer who can book then and there is a customer you keep; one who hits voicemail often calls the next company. For simpler, repeatable services it also saves your office the back-and-forth of scheduling by phone.',
        ],
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
          'Look at how much control you have over what’s bookable and when, whether bookings flow straight into your schedule, and whether it confirms automatically with the customer. Match the feature to your work: great for routine services, handle with care for complex ones.',
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
          'Integrated payments let a technician take a card or ACH payment on site, the moment the work is done, instead of mailing an invoice and waiting. The payment ties straight back to the job and the invoice, so nothing has to be reconciled by hand later. The practical effect is simple: you get paid sooner and chase fewer overdue invoices.',
        ],
      },
      {
        heading: 'The cost of convenience',
        body: [
          'Integrated payments carry processing fees, and the rates vary between platforms. For a high-volume business that difference adds up, so it’s worth checking the rate, not just that the feature exists. Some tools lock you into their own processor; others let you choose. Read that part closely before you commit.',
        ],
      },
      {
        heading: 'Consumer financing on bigger jobs',
        body: [
          'For large tickets, a system replacement or a major repair, consumer financing lets the customer pay over time while you get paid up front. For trades like HVAC, being able to offer financing at the point of sale measurably lifts close rates on expensive work, because the monthly number feels manageable even when the total doesn’t. It’s usually offered through a lender partner built into the software.',
        ],
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
          'Portals matter most for commercial and property-management customers, who often manage many sites and want to see service history, approve work and pull invoices without calling you each time. For those accounts a good portal is a genuine selling point and cuts a lot of admin on both sides.',
        ],
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
          'If you serve commercial or property-management clients, look for a portal that exposes service history, quote approvals and invoice payment, ideally with multi-site support. If you’re residential, weigh it lightly and focus instead on smooth text-based approvals and payment links.',
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
