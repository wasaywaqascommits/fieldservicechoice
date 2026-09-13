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
          'Both keep customer records, both log communication, and both can capture a lead. That shared ground is exactly why the two get mixed up. Many field service platforms, Jobber and Housecall Pro among them, include light CRM features like a contact list, notes and basic marketing, and some CRMs bolt on scheduling. The real question is which job sits at the core, because that’s the one the tool does well and the other it only dabbles in.',
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
          'Job management often treats the job or project as the unit of work: quoting, tracking labor and materials against a job, job costing, and profit per project. It tends to fit trades where a job runs over days or weeks, like an electrical fit-out or a larger install, rather than a steady stream of short service calls. Platforms like Simpro and BuildOps sit firmly on this end, with deeper estimating and job costing than a residential-focused tool.',
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
          'If dispatch is your pain point, weigh how fast you can reassign a job, whether the technician gets full job details and history on mobile, and whether customers are kept in the loop automatically. Depth varies a lot: the enterprise platforms like ServiceTitan have the most sophisticated dispatch boards for busy multi-technician operations, while lighter tools like Jobber handle small-team dispatch cleanly without the overhead. High-volume operations should look hardest at the board and routing.',
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
          'Look at how quickly you can move a job, whether recurring and route-based work is easy to set up, and how well the schedule syncs to the mobile app your technicians actually use. Most small-business tools like Jobber and Housecall Pro handle recurring jobs well; if maintenance contracts are core to your revenue, that support matters more than almost anything else.',
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
          'Field service software turns a completed job into an invoice directly, often on the technician’s phone before they leave the driveway. The line items, the customer and the pricing are already there from the job, so there’s no re-typing. Many tools also take card or ACH payment on the spot, which is the single biggest lever for getting paid faster. Just budget for the processing fee: in-app card payments typically run around 2.9% plus 30 cents per transaction, with ACH nearer 1%, on top of your subscription.',
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
          'If a pricebook is central for you, look at how deep and editable it is, whether it supports good/better/best presentation on the technician’s device, and whether it ties into financing for bigger tickets. This is where the enterprise platforms pull well ahead: ServiceTitan’s pricebook is the category benchmark, while lighter tools like Jobber offer little or none, so if flat-rate pricing is a must-have it will shape your whole shortlist.',
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
          'Check whether tracking is live and tied into the dispatch board, whether customers get automatic arrival updates, and how it handles privacy outside working hours. Watch the pricing too: some platforms include basic GPS, while others sell it as a paid add-on (Housecall Pro’s vehicle GPS and dashcams, for instance), so confirm what is in the base plan. If routing matters to you, look at how tracking feeds into route planning.',
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
          'If memberships are part of your plan, look closely at agreement management: recurring visit scheduling, recurring billing, renewal tracking, and reporting on your membership base. This is an area where the established platforms pull ahead: ServiceTitan and FieldEdge handle full membership programs well, while lighter tools like Jobber support agreements only partially, so if recurring revenue is central, treat this depth as a hard requirement.',
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
          'If parts matter, look for truck-level stock tracking, parts tied to work orders so they flow onto the invoice, reorder alerts, and multi-location support if you run more than one warehouse. Depth varies sharply here: commercial and project platforms like Simpro and ServiceTitan go deep on inventory and catalog handling, while lighter residential tools track little or nothing, so if you carry real stock this feature alone can narrow your shortlist.',
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
          'Look at whether the software captures labor, parts and materials against each job, whether it reports profit by job, job type and customer, and how much manual work it takes. Commercial and project businesses should treat deep job costing as close to essential, and the commercial platforms like BuildOps and Simpro are built for it, while residential tools such as Jobber offer only partial job costing.',
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
          'Look at how much control you have over what’s bookable and when, whether bookings flow straight into your schedule, and whether it confirms automatically with the customer. Residential-focused tools tend to do this best, Housecall Pro in particular is known for a polished consumer booking experience, so if online booking is central to how you win work, weigh that. Match the feature to your work: great for routine services, handle with care for complex ones.',
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
          'Integrated payments carry processing fees, typically around 2.9% plus 30 cents per card transaction and roughly 1% on ACH, and the exact rates vary between platforms. For a high-volume business that difference adds up fast: a shop invoicing $50,000 a month can pay well over $1,000 a month in processing alone, so check the rate, not just that the feature exists. Some tools lock you into their own processor; others let you choose. Read that part closely before you commit.',
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
          'If you serve commercial or property-management clients, look for a portal that exposes service history, quote approvals and invoice payment, ideally with multi-site support. This is a strength of the commercial platforms in particular, ServiceTrade’s customer-facing portal and reporting are a genuine standout for inspection-driven work. If you’re residential, weigh it lightly and focus instead on smooth text-based approvals and payment links.',
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
          'Accounting is the integration that most often becomes a deal-breaker, and it is worth checking on day one. The big divide is QuickBooks Online versus QuickBooks Desktop. Several popular tools, Jobber among them, sync only with QuickBooks Online, while others like FieldEdge and Service Fusion are built with Desktop firmly in mind. If your books run on Desktop, that fact alone eliminates part of the market.',
          'The same goes for Xero, payment processing and anything else your business already depends on. Verify current support with the vendor rather than trusting a feature-list checkmark, and do it before you fall for a demo.',
        ],
      },
      {
        heading: 'Be realistic about implementation and total cost',
        body: [
          'The monthly price is only part of the decision. Deeper platforms require data migration, configuration and training, and enterprise tools like ServiceTitan can carry implementation fees running into thousands of dollars and a rollout measured in weeks. On top of the subscription, most tools that take card payments add processing fees of roughly 2.9% plus 30 cents per transaction, which is a real cost at volume.',
          'Add it up as a total: subscription, extra users, the add-ons you will actually use, processing fees and implementation. The cheapest sticker price is regularly not the cheapest tool to run.',
        ],
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
          'Pricing sorts into three broad bands. Starter plans for a single user tend to run about $29 to $60 a month (Jobber starts at $29, Housecall Pro at $59, both billed annually). Small-crew plans that add automation, online booking and five to ten users usually land between roughly $100 and $300 a month, depending on the tool and the tier. And enterprise platforms built for larger trades, ServiceTitan being the obvious example, are quote-based, with contractors widely reporting figures in the region of $245 to $400 per technician per month.',
          'Treat these as orientation, not gospel. Vendors change prices, and the quote-based numbers are third-party reports, not official rates. But the bands are stable enough to tell you quickly whether a tool is in your world or not.',
        ],
      },
      {
        heading: 'How the pricing model changes the math',
        body: [
          'The billing model matters as much as the number. Per-user pricing (Tradify, for instance) is friendly for a solo operator but climbs with every seat you add. Flat pricing with unlimited users (Service Fusion) can be far cheaper for a bigger dispatch team, since the whole office and every technician are included. And a few tools price by something else entirely: ServiceM8 charges by the number of jobs per month rather than by users. Run the math at your actual headcount and job volume, because the cheapest model for a solo tradesperson can be the most expensive one for a fifteen-person shop.',
        ],
      },
      {
        heading: 'The costs that are not on the pricing page',
        body: [
          'The subscription is the floor, not the ceiling. Watch for four things. Payment processing: if you collect cards in-app, expect roughly 2.9% plus 30 cents per transaction and about 1% on ACH, on top of your plan. Add-on modules: phone systems, marketing, GPS and fleet tracking, and AI tools are often paid extras rather than part of the base. Extra users: many plans include a set number of seats and charge per head beyond that. And implementation: enterprise platforms can carry setup fees running from a few thousand dollars into the tens of thousands.',
          'Add all of that to the sticker price before you compare. The lowest headline plan is regularly not the lowest total cost once processing and add-ons are counted.',
        ],
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
          'Before you look at a single new tool, write down the two or three things your current software cannot do that are actually costing you money: no flat-rate pricebook, no QuickBooks Desktop sync, reporting you cannot trust, a mobile app the crew refuses to use. That list is your shortlist filter and your success test. If a new platform does not fix those, switching is just pain for its own sake.',
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
          'Do not flip the whole business overnight. Pick a slow week, load the new system, and run a small batch of real jobs through it end to end while the old system is still there as a safety net. Fix what breaks, train the crew on the mobile app, and only then set a hard cut-over date. Keep read-only access to the old system for a few months so you can look up history.',
        ],
      },
      {
        heading: 'Expect a dip, then a lift',
        body: [
          'The first two weeks on any new system are slower, always. Technicians grumble, quotes take longer, and it feels like a mistake. That dip is normal and temporary. Warn the team it is coming, push through it, and measure against the problem list you wrote at the start. If the new tool is fixing those, the lift arrives within a month or two.',
        ],
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
          'For each task, work out your true cost: the labor hours it actually takes, the parts and materials, and a fair share of your overhead (truck, insurance, office, tools). Then add your target profit margin. The number that comes out is your flat rate. Pricing from a competitor is how you quietly lose money, because you do not know their costs, only yours.',
        ],
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
          'A pricebook in a binder gets ignored. The point is that a technician taps a task on their phone and the price, description and options appear instantly, so the quote is consistent and takes seconds. This is where software matters: ServiceTitan and FieldEdge are known for deep, presentable pricebooks, while lighter tools like Jobber have little or none, so if a pricebook is central, let that shape your software choice.',
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
      },
      {
        heading: 'Send a real on-my-way message',
        body: [
          'The window between the booking and the technician arriving is where trust wobbles. An automatic on-my-way text with a genuine arrival window, ideally tied to GPS so it is accurate, keeps the customer home and reduces the how-far-away phone calls that eat your office time. It is a small touch that measurably reduces both no-shows and complaints.',
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
          'A four-hour window tells the customer their time does not matter, and they wander off. Narrower windows, made possible by better scheduling and live technician tracking, keep people available and set a professional tone. If your current tool cannot support tight windows and live updates, that is a sign the scheduling and dispatch side is worth upgrading.',
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
          'Adoption is won or lost on the mobile app, not the office dashboard. If it is slow, buried in taps, or does not work in a basement with no signal, the crew will abandon it and you cannot blame them. Test the real app on the real phones your team carries, Android as well as iPhone, before you commit, and treat a clunky app as a reason to walk away.',
        ],
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
          'Frame the change around the technician, not the office. Less driving because dispatch sends the closest person, no chasing the office for job details, quotes and invoices done on site so they are not doing paperwork at home. When the crew sees the app makes their own day easier, adoption stops being a fight.',
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
          'This is where a program lives or dies. Once you have more than a handful of members, remembering who is due, scheduling the visits and billing on a cycle by hand becomes unmanageable. You need software that stores the agreement, generates the maintenance visits on schedule, handles recurring billing, and flags renewals before they lapse. The established platforms like ServiceTitan and FieldEdge are strong here; lighter tools often support agreements only partially, so check this closely if memberships are the plan.',
        ],
      },
      {
        heading: 'Sell it at the kitchen table',
        body: [
          'The best moment to sign a member is right after a technician has done good work in their home. Train the crew to offer the plan on site, in plain terms: the maintenance that keeps the system healthy, plus priority and a discount, for a predictable monthly or annual fee. A simple sign-up on the technician’s device, then and there, converts far better than a follow-up email nobody opens.',
        ],
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
          'This is the whole ballgame. QuickBooks Online and QuickBooks Desktop are different products, and field service tools support them differently. Many popular platforms, Jobber among them, sync only with Online. Others, like FieldEdge and Service Fusion, are built with Desktop firmly in mind. Before anything else, confirm your field service tool supports your exact version, because Online support does not mean Desktop support.',
        ],
      },
      {
        heading: 'Understand what actually syncs',
        body: [
          'A good integration keeps a few things in step automatically: customers, invoices, payments and sometimes your product and price list. Decide which direction each flows and where the record of truth lives, so you are not editing the same customer in two places. Get clear on this before you turn it on, rather than untangling duplicates afterward.',
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
