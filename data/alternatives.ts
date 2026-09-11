import type { AlternativePage } from '@/types';

/** Alternatives pages (spec §24). */
export const ALTERNATIVES: AlternativePage[] = [
  {
    slug: 'servicetitan',
    intro:
      'ServiceTitan is a powerful enterprise platform, but it is not the right fit for everyone. Businesses look for alternatives for a few common reasons: cost, implementation complexity, or simply being smaller than ServiceTitan is designed for. Here are strong alternatives depending on why ServiceTitan is not the fit.',
    reasons: [
      'Cost is higher than your budget allows',
      'Implementation is more involved than you want',
      'Your team is smaller than ServiceTitan targets',
      'You want simpler, faster-to-adopt software',
      'You need a different commercial or project focus',
    ],
    alternatives: [
      { slug: 'fieldedge', bestFor: 'Established HVAC/plumbing/electrical on QuickBooks Desktop', whyConsider: 'Deep service agreements and QuickBooks Desktop ties with a more contained footprint.', majorDifference: 'More focused and less broad than ServiceTitan.' },
      { slug: 'housecall-pro', bestFor: 'Residential home service prioritizing marketing', whyConsider: 'Faster to adopt with strong customer experience and marketing tools.', majorDifference: 'Aimed at smaller residential teams, not enterprise.' },
      { slug: 'jobber', bestFor: 'Small and growing residential teams', whyConsider: 'Clean, low-friction operations at a fraction of the implementation effort.', majorDifference: 'Much simpler; not built for enterprise depth.' },
      { slug: 'workiz', bestFor: 'Phone-driven small service trades', whyConsider: 'Built-in phone and call tracking for lead-heavy businesses.', majorDifference: 'Smaller-scale and communication-focused.' },
      { slug: 'buildops', bestFor: 'Commercial specialty contractors', whyConsider: 'Modern commercial service + project platform if your work is commercial.', majorDifference: 'Commercial focus rather than residential breadth.' },
    ],
    published: true,
  },
  {
    slug: 'jobber',
    intro:
      'Jobber is an excellent small-business platform, but some teams need something different, more communication tooling, more mid-market depth, or a lighter/cheaper option. These alternatives cover the most common reasons teams look beyond Jobber.',
    reasons: [
      'You need built-in phone / call tracking',
      'You are outgrowing small-business tooling',
      'You want a lighter or cheaper option',
      'You need more commercial or project depth',
    ],
    alternatives: [
      { slug: 'housecall-pro', bestFor: 'Residential service with a marketing focus', whyConsider: 'Comparable core with stronger marketing and reviews.', majorDifference: 'More marketing emphasis.' },
      { slug: 'workiz', bestFor: 'Phone-driven trades', whyConsider: 'Built-in phone system and call tracking.', majorDifference: 'Communication-centric.' },
      { slug: 'fieldpulse', bestFor: 'Teams outgrowing entry-level tools', whyConsider: 'Broader feature set reaching toward mid-market.', majorDifference: 'More operational depth.' },
      { slug: 'servicem8', bestFor: 'Micro Apple-first teams', whyConsider: 'Lighter and pay-as-you-grow.', majorDifference: 'Smaller footprint, Apple-centric.' },
    ],
    published: true,
  },
  {
    slug: 'housecall-pro',
    intro:
      'Housecall Pro is a strong residential platform, but alternatives make sense if you want cleaner operations over marketing, more mid-market depth, or built-in communication tooling. Here are the leading options.',
    reasons: [
      'You prefer operations focus over marketing features',
      'You need more mid-market depth',
      'You want built-in phone / call tracking',
      'You want a different pricing structure',
    ],
    alternatives: [
      { slug: 'jobber', bestFor: 'Clean small-business operations', whyConsider: 'Refined scheduling, quoting and invoicing.', majorDifference: 'Less marketing emphasis, very easy to adopt.' },
      { slug: 'fieldpulse', bestFor: 'Growing multi-trade teams', whyConsider: 'Broader features for teams stepping up.', majorDifference: 'Reaches further toward mid-market.' },
      { slug: 'workiz', bestFor: 'Phone-driven service businesses', whyConsider: 'Communication and call tracking built in.', majorDifference: 'Communication-centric.' },
      { slug: 'service-fusion', bestFor: 'QuickBooks-centric back offices', whyConsider: 'Established platform with QuickBooks Desktop and Online.', majorDifference: 'Stronger Desktop accounting support.' },
    ],
    published: true,
  },
];

export const ALTERNATIVE_MAP: Record<string, AlternativePage> = Object.fromEntries(
  ALTERNATIVES.map((a) => [a.slug, a]),
);

export function getAlternativePage(slug: string): AlternativePage | undefined {
  return ALTERNATIVE_MAP[slug];
}

export function publishedAlternatives(): AlternativePage[] {
  return ALTERNATIVES.filter((a) => a.published);
}
