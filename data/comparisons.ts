import type { ComparisonPage } from '@/types';

/**
 * Curated head-to-head comparisons (spec §23). We deliberately DO NOT generate
 * every mathematical combination, only editorially meaningful matchups become
 * indexable pages.
 */
export const COMPARISONS: ComparisonPage[] = [
  {
    slug: 'jobber-vs-housecall-pro',
    productA: 'jobber',
    productB: 'housecall-pro',
    intro:
      'Jobber and Housecall Pro are the two most common choices for small residential home-service businesses. Both cover scheduling, quoting, invoicing, payments and customer communication. The differences are in emphasis: Jobber leans toward clean operations and ease of use, while Housecall Pro leans toward marketing, reviews and the consumer booking experience.',
    chooseA: [
      'You want the cleanest, fastest-to-adopt operations tool',
      'Your priority is scheduling, quoting and invoicing done well',
      'You value a well-reviewed technician mobile app',
    ],
    chooseB: [
      'Marketing, reviews and reputation are a priority',
      'You want a strong consumer-facing online booking experience',
      'You want built-in campaigns and follow-ups',
    ],
    chooseNeither: [
      'You run complex commercial or project-based work (look at ServiceTitan, Simpro or BuildOps)',
      'You need deep job costing or inventory',
    ],
    sections: [
      { heading: 'Pricing', body: ['Both publish their prices, which is refreshing in this category. Jobber runs from Core at $29 a month (one user) up to Plus at $399 (fifteen users), with extra seats at $29 each. Housecall Pro runs from Basic at $59 (one user) up to Max at $299 (eight users, then $35 per extra user). Both quote those rates on annual billing and both offer a 14-day free trial with no credit card. At the very smallest scale Jobber is the cheaper entry point; once you have a five-person team the tiers land closer together, so weigh the features you will actually use rather than the headline number. Verified against both vendors on 2026-09-13.'] },
      { heading: 'Accounting', body: ['One practical difference that can settle it: Jobber syncs with QuickBooks Online only, while Housecall Pro syncs with both QuickBooks Online and Desktop. If your books run on QuickBooks Desktop, that alone points you toward Housecall Pro.'] },
      { heading: 'Scheduling & dispatch', body: ['Both handle small-team scheduling and dispatch well. Jobber is often praised for a clean, quick workflow that technicians pick up fast; Housecall Pro is comparable and leans into customer-facing touches like on-my-way texts and booking.'] },
      { heading: 'Customer experience & marketing', body: ['This is the clearest split. Housecall Pro invests more heavily in marketing automation, review generation and consumer booking, though much of it sits in paid add-ons on top of the plan. If growth through reputation and repeat business is your focus, that emphasis is the reason to pick it; if you mainly want clean operations, Jobber keeps things simpler.'] },
      { heading: 'Best for HVAC / plumbing / landscaping', body: ['For small residential HVAC, plumbing and landscaping teams, either works well. As you add commercial complexity, deep job costing or a real pricebook, both reach their limits and a heavier platform like ServiceTitan or Simpro becomes worth evaluating.'] },
    ],
    published: true,
  },
  {
    slug: 'jobber-vs-workiz',
    productA: 'jobber',
    productB: 'workiz',
    intro:
      'Jobber and Workiz both serve small service teams, but with different centers of gravity. Jobber is a clean all-rounder for residential home service. Workiz builds around communication, a built-in phone system and call tracking, which suits phone-driven trades.',
    chooseA: ['You want a polished all-round operations tool', 'Residential home-service scheduling and invoicing is the core need', 'Ease of use is a top priority'],
    chooseB: ['Your business lives on inbound calls (locksmith, garage door, appliance repair)', 'You want call tracking and a phone system built in', 'Lead-to-job conversion is a focus'],
    chooseNeither: ['You need enterprise commercial workflows', 'You need deep project management or job costing'],
    sections: [
      { heading: 'Pricing transparency', body: ['A real difference before you even compare features: Jobber publishes its prices (Core $29 up to Plus $399 a month), while Workiz moved to a request-a-quote model during 2026, so you have to book a demo to get a number. Last-published Workiz rates reported by third parties put its main plans roughly in the $225 to $325 range for a handful of users, but that is not official. If knowing the price up front matters to you, Jobber has the edge here.'] },
      { heading: 'Communication', body: ['Workiz differentiates with a built-in phone system and call tracking. For trades that convert inbound calls into jobs, locksmiths, garage-door and appliance-repair companies, that integration is a genuine advantage, because you can see which marketing drives the calls and route them fast.'] },
      { heading: 'General operations', body: ['Jobber covers scheduling, quoting, invoicing and client communication with a refined, quick-to-adopt experience. If your business is not phone-driven, that all-round polish usually matters more than a built-in phone system you would not lean on.'] },
    ],
    published: true,
  },
  {
    slug: 'servicetitan-vs-fieldedge',
    productA: 'servicetitan',
    productB: 'fieldedge',
    intro:
      'ServiceTitan and FieldEdge both target HVAC, plumbing and electrical contractors, but at different scales. ServiceTitan is a broader enterprise platform; FieldEdge is a focused option known for deep QuickBooks Desktop integration and service agreements at a smaller footprint.',
    chooseA: ['You are a larger, growth-focused contractor', 'You want the deepest pricebook, financing and reporting', 'You have office/dispatch staff to use it fully'],
    chooseB: ['Your back office runs on QuickBooks Desktop', 'You want strong service-agreement management without full enterprise scope', 'You want a more contained implementation'],
    chooseNeither: ['You are a very small or solo operation (look at Jobber, Housecall Pro or Workiz)'],
    sections: [
      { heading: 'Cost and implementation', body: ['Neither publishes pricing, so both mean a sales conversation. The difference is scale. ServiceTitan is quoted per technician, with contractors widely reporting somewhere around $245 to $400 per tech per month plus a paid implementation that commonly runs into five figures. FieldEdge is a more contained platform with a lighter rollout, which is a large part of why an established-but-not-enterprise contractor would choose it. Treat both figures as reported rather than official and get your own quotes.'] },
      { heading: 'Accounting', body: ['FieldEdge is built around QuickBooks Desktop and its two-way Desktop sync is deeper than most. If your accounting runs on Desktop, that is a strong point in its favor and often the deciding factor. ServiceTitan supports QuickBooks too but is not the Desktop specialist FieldEdge is.'] },
      { heading: 'Who each is really for', body: ['ServiceTitan suits larger, growth-focused trades that will use enterprise depth and can absorb the cost and the multi-week rollout. FieldEdge suits established mechanical contractors, especially Desktop-centric ones that lean on service agreements, and want serious capability without the full enterprise weight.'] },
    ],
    published: true,
  },
  {
    slug: 'servicetitan-vs-buildops',
    productA: 'servicetitan',
    productB: 'buildops',
    intro:
      'ServiceTitan and BuildOps both serve larger contractors, with different roots. ServiceTitan grew from residential trades into a broad enterprise platform; BuildOps is built around commercial specialty contracting, blending service and project work.',
    chooseA: ['You have significant residential service volume', 'You want the broadest feature ecosystem', 'You want deep financing and pricebook tools'],
    chooseB: ['You are primarily a commercial specialty contractor', 'You need service and project management together', 'You want a modern platform built for commercial mechanical/electrical'],
    chooseNeither: ['You are a small residential shop (both are enterprise-oriented)'],
    sections: [
      { heading: 'Commercial vs residential DNA', body: ['This is the heart of the choice. BuildOps was built for commercial specialty contracting and blends service and project work in a modern interface; ServiceTitan grew from residential trades into a broad enterprise platform. If most of your revenue is commercial mechanical or electrical, BuildOps speaks your language; if you have significant residential service volume, ServiceTitan has the deeper ecosystem for it.'] },
      { heading: 'Cost and rollout', body: ['Both are enterprise-tier and quote-based, with no self-serve trial and a structured implementation. Expect a real budget and a multi-week rollout either way, so the decision should turn on work-type fit rather than on finding the cheaper option, because neither is cheap.'] },
    ],
    published: true,
  },
  {
    slug: 'housecall-pro-vs-fieldpulse',
    productA: 'housecall-pro',
    productB: 'fieldpulse',
    intro:
      'Housecall Pro and FieldPulse both serve growing home-service businesses. Housecall Pro emphasizes marketing and customer experience; FieldPulse positions as a broad all-in-one that reaches slightly further toward mid-market operations.',
    chooseA: ['Marketing and customer experience are a priority', 'You want a large, established residential brand', 'Reviews and reputation matter'],
    chooseB: ['You are outgrowing entry-level tools', 'You run multi-trade work and want broad coverage', 'You want more operational depth at a similar level'],
    chooseNeither: ['You need true enterprise or heavy commercial project management'],
    sections: [
      { heading: 'Pricing', body: ['Housecall Pro publishes its tiers, from Basic at $59 up to Max at $299 a month, so you can budget before you talk to anyone. FieldPulse is quote-based, with contractor-reported figures running roughly $99 a month for a small team up to $399 or more for larger crews before add-ons. If price transparency matters up front, Housecall Pro has the advantage; if you want breadth for a growing multi-trade team, FieldPulse is worth the demo.'] },
      { heading: 'Emphasis', body: ['Housecall Pro leans into marketing, reviews and consumer booking, much of it in paid add-ons, and is a large, established residential brand. FieldPulse leans into operational breadth and reaches a little further toward mid-market, with accounting sync across QuickBooks Online, Desktop and Xero that is unusually wide for the price band.'] },
      { heading: 'Growth stage', body: ['FieldPulse aims at teams stepping up from starter tools and wanting more depth; Housecall Pro spans solo through mid-size residential with a marketing emphasis. Match it to whether your next problem is winning customers or running more complex operations.'] },
    ],
    published: true,
  },
  {
    slug: 'fieldpulse-vs-service-fusion',
    productA: 'fieldpulse',
    productB: 'service-fusion',
    intro:
      'FieldPulse and Service Fusion both target small-to-mid service companies. FieldPulse is a newer, actively growing all-in-one; Service Fusion is an established platform with strong QuickBooks support, including Desktop.',
    chooseA: ['You want a modern, actively developed platform', 'You run multi-trade work', 'You want broad features at a mid-tier level'],
    chooseB: ['You rely on QuickBooks Desktop', 'You prefer an established, dependable system', 'You want predictable office-driven operations'],
    chooseNeither: ['You need enterprise-scale capabilities'],
    sections: [
      { heading: 'Pricing model', body: ['These two price very differently, and it can decide the whole thing. Service Fusion publishes flat plans with unlimited users, from Starter at $208 up to Pro at $533 a month, so a bigger team does not raise the bill. FieldPulse is quote-based and priced per seat, with reported figures rising as you add users. For a larger office-and-field team, Service Fusion flat pricing is often dramatically cheaper; for a smaller crew wanting a modern tool, FieldPulse can make more sense. Do the math at your actual headcount.'] },
      { heading: 'Accounting', body: ['Both are strong here. Service Fusion supports QuickBooks Online and Desktop; FieldPulse covers QuickBooks Online, Desktop and Xero. If you run Xero, FieldPulse has the edge; if predictable Desktop-centric operations are the goal, Service Fusion is the safer, more established pick.'] },
      { heading: 'Modern vs established', body: ['FieldPulse is newer and actively developed, with a more modern feel and features still maturing. Service Fusion is a long-standing, dependable system whose interface shows its age but whose flat pricing and QuickBooks depth keep it relevant for bigger teams.'] },
    ],
    published: true,
  },
  {
    slug: 'servicetitan-vs-simpro',
    productA: 'servicetitan',
    productB: 'simpro',
    intro:
      'ServiceTitan and Simpro are both capable platforms for larger trades, but with different strengths. ServiceTitan is strongest in residential-rooted service depth; Simpro is strongest in commercial project and job-costing workflows.',
    chooseA: ['You have heavy residential service operations', 'You want deep pricebook, financing and call booking', 'You want the broadest residential ecosystem'],
    chooseB: ['You are project- and commercial-focused', 'You need strong estimating, inventory and job costing', 'Project management is central to your work'],
    chooseNeither: ['You are a small residential shop that needs to be live quickly'],
    sections: [
      { heading: 'Service vs project', body: ['Both are capable and both are quote-based, so the real question is your dominant work type. Simpro leans into project and job-costing depth: estimating, inventory and margin control for commercial work that runs over days or weeks. ServiceTitan leans into residential-rooted service depth: a best-in-class pricebook, financing, call booking and dispatch. Buy for whichever side carries most of your revenue.'] },
      { heading: 'Cost and rollout', body: ['Neither publishes pricing and both involve a structured, guided implementation, so expect a serious rollout in both cases. This is not a decision to make on price alone; it is a decision about whether projects or high-volume service is the core of your business.'] },
    ],
    published: true,
  },
  {
    slug: 'jobber-vs-servicem8',
    productA: 'jobber',
    productB: 'servicem8',
    intro:
      'Jobber and ServiceM8 both suit small trades, but ServiceM8 is lighter and Apple-centric while Jobber is a broader all-rounder available across platforms.',
    chooseA: ['You want broad features across any device', 'You expect to grow to several crews', 'You want strong customer communication and booking'],
    chooseB: ['You are a micro or very small Apple-based team', 'You want a light footprint and pay-as-you-grow pricing', 'You need just the essentials'],
    chooseNeither: ['You need commercial or enterprise capabilities'],
    sections: [
      { heading: 'How they price', body: ['They use genuinely different models. Jobber charges per user, from Core at $29 up to Plus at $399 a month, so the bill grows with your headcount. ServiceM8 charges by jobs per month with unlimited users: a free tier for 30 jobs, then $29, $79, $149 and $349 as your job volume climbs. For a small crew running a modest number of larger jobs, ServiceM8 can be strikingly cheap because everyone is included; for a higher-volume shop, watch the job count, and for a growing team Jobber per-user pricing is more predictable.'] },
      { heading: 'Platform & scale', body: ['ServiceM8 is built Apple-first and is at its best on iPhones and iPads, so if your technicians are on Android it is the thing to test before committing. Jobber is platform-agnostic and scales further, which matters as you add crews. For a micro Apple-based team wanting essentials, ServiceM8 is efficient; for broader features across any device, Jobber is the safer bet.'] },
      { heading: 'Accounting', body: ['Jobber syncs with QuickBooks Online; ServiceM8 syncs with QuickBooks Online and Xero. Neither is a QuickBooks Desktop tool, so a Desktop shop should look elsewhere.'] },
    ],
    published: true,
  },
];

export const COMPARISON_MAP: Record<string, ComparisonPage> = Object.fromEntries(
  COMPARISONS.map((c) => [c.slug, c]),
);

export function getComparison(slug: string): ComparisonPage | undefined {
  return COMPARISON_MAP[slug];
}

export function publishedComparisons(): ComparisonPage[] {
  return COMPARISONS.filter((c) => c.published);
}
