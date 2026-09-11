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
      { heading: 'Pricing', body: ['Both use published tiered pricing. We show verified plan details on each product page as they are confirmed; until then. Check the vendor pricing page directly.'] },
      { heading: 'Scheduling & dispatch', body: ['Both handle small-team scheduling and dispatch well. Jobber is often praised for a clean, quick workflow; Housecall Pro is comparable and adds strong customer-facing touches.'] },
      { heading: 'Customer experience & marketing', body: ['Housecall Pro invests more in marketing automation, reviews and consumer booking. If growth through reputation and repeat business is your focus, that emphasis matters.'] },
      { heading: 'Best for HVAC / plumbing / landscaping', body: ['For small residential HVAC, plumbing and landscaping teams, either works. As you add commercial complexity, both start to reach their limits and a more advanced platform becomes worth evaluating.'] },
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
      { heading: 'Communication', body: ['Workiz differentiates with a built-in phone system and call tracking. For trades that convert phone calls into jobs, that integration is a meaningful advantage.'] },
      { heading: 'General operations', body: ['Jobber covers scheduling, quoting, invoicing and client communication with a refined experience that many small teams adopt quickly.'] },
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
      { heading: 'Scale & implementation', body: ['ServiceTitan is the heavier, more capable platform with a larger implementation. FieldEdge is more contained and can be a better fit for established-but-not-enterprise contractors.'] },
      { heading: 'Accounting', body: ['FieldEdge is particularly known for QuickBooks Desktop integration. If your accounting is Desktop-based, that is a strong point in its favor.'] },
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
      { heading: 'Commercial vs residential DNA', body: ['BuildOps is oriented to commercial specialty contracting; ServiceTitan has deep residential roots and broad coverage. Your work mix should drive the choice.'] },
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
      { heading: 'Growth stage', body: ['FieldPulse aims at teams stepping up from starter tools; Housecall Pro spans solo through mid-size residential with a marketing emphasis.'] },
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
      { heading: 'Accounting', body: ['Service Fusion is notable for QuickBooks Desktop and Online support. FieldPulse covers QuickBooks Online and Xero. Your accounting stack is a key deciding factor.'] },
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
      { heading: 'Service vs project', body: ['Simpro leans into project and job-costing depth for commercial work; ServiceTitan leans into residential service depth. Match the tool to your dominant work type.'] },
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
      { heading: 'Platform & scale', body: ['ServiceM8 is efficient for very small Apple-first teams. Jobber scales further and is platform-agnostic, which matters as you add technicians.'] },
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
