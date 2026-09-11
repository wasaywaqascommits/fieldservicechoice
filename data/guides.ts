import type { GuidePage } from '@/types';

/** Editorial buying guides (spec §55, buying-intent over generic content). */
export const GUIDES: GuidePage[] = [
  {
    slug: 'how-to-choose-field-service-software',
    title: 'How to Choose Field Service Software',
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
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10',
    published: true,
  },
  {
    slug: 'field-service-software-pricing-explained',
    title: 'Field Service Software Pricing, Explained',
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
