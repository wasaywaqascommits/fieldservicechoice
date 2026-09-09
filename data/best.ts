import type { BestPage } from '@/types';

/**
 * "Best" pages (spec §26). Each is a curated shortlist with genuine editorial
 * rationale — not hundreds of thin permutations. The ordering is editorial and
 * distinct from the personalized Finder, which ranks by your specific business.
 */
const METHODOLOGY_NOTE =
  'This shortlist reflects our independent editorial view for a typical business in this category. It is not a personalized ranking — use the Finder for a Fit Score matched to your trade, team size, workflows and budget. Commercial relationships never affect ordering.';

export const BEST_PAGES: BestPage[] = [
  {
    slug: 'field-service-management-software',
    h1: 'Best Field Service Management Software',
    intro:
      'The best field service management software depends heavily on your trade, size and whether you run residential or commercial work. Below is our editorial shortlist across the market, spanning simple small-business tools through enterprise platforms.',
    methodologyNote: METHODOLOGY_NOTE,
    entries: [
      { slug: 'jobber', position: 1, bestForLabel: 'Best for small residential teams', rationale: 'Clean, fast-to-adopt operations for small and growing home-service businesses.' },
      { slug: 'housecall-pro', position: 2, bestForLabel: 'Best for marketing-driven residential', rationale: 'Strong customer experience, booking and marketing tools.' },
      { slug: 'servicetitan', position: 3, bestForLabel: 'Best for established/enterprise trades', rationale: 'Deep pricebook, financing and reporting for larger operations.' },
      { slug: 'workiz', position: 4, bestForLabel: 'Best for phone-driven trades', rationale: 'Built-in phone system and call tracking.' },
      { slug: 'fieldpulse', position: 5, bestForLabel: 'Best for teams outgrowing starter tools', rationale: 'Broad coverage reaching toward mid-market.' },
      { slug: 'simpro', position: 6, bestForLabel: 'Best for commercial / project work', rationale: 'Strong estimating, inventory and job costing.' },
    ],
    published: true,
  },
  {
    slug: 'hvac-field-service-software',
    h1: 'Best HVAC Field Service Software',
    intro:
      'HVAC has demanding requirements: emergency dispatch, equipment history, maintenance agreements, a flat-rate pricebook and financing. The best choice depends on your size and residential/commercial mix.',
    methodologyNote: METHODOLOGY_NOTE,
    entries: [
      { slug: 'servicetitan', position: 1, bestForLabel: 'Best for established HVAC companies', rationale: 'Deep pricebook, agreements, financing and reporting.' },
      { slug: 'housecall-pro', position: 2, bestForLabel: 'Best for residential HVAC', rationale: 'Strong customer experience and marketing.' },
      { slug: 'jobber', position: 3, bestForLabel: 'Best for small HVAC teams', rationale: 'Simple, fast scheduling and invoicing.' },
      { slug: 'fieldedge', position: 4, bestForLabel: 'Best for QuickBooks Desktop shops', rationale: 'Service agreements and Desktop accounting ties.' },
      { slug: 'fieldpulse', position: 5, bestForLabel: 'Best for growing HVAC teams', rationale: 'Broad features at a mid-tier level.' },
    ],
    published: true,
  },
  {
    slug: 'plumbing-field-service-software',
    h1: 'Best Plumbing Field Service Software',
    intro:
      'Plumbing shops need fast emergency dispatch, clear estimates and invoicing, and — as they grow — a pricebook and service agreements. Commercial plumbers need job costing and project tools.',
    methodologyNote: METHODOLOGY_NOTE,
    entries: [
      { slug: 'jobber', position: 1, bestForLabel: 'Best for small residential plumbers', rationale: 'Quick quoting, dispatch and payments.' },
      { slug: 'housecall-pro', position: 2, bestForLabel: 'Best for customer experience', rationale: 'Booking, reviews and marketing.' },
      { slug: 'servicetitan', position: 3, bestForLabel: 'Best for larger plumbing companies', rationale: 'Enterprise depth for established shops.' },
      { slug: 'workiz', position: 4, bestForLabel: 'Best for call-driven plumbers', rationale: 'Built-in phone and call tracking.' },
      { slug: 'simpro', position: 5, bestForLabel: 'Best for commercial plumbing', rationale: 'Project and job-costing depth.' },
    ],
    published: true,
  },
  {
    slug: 'small-business-field-service-software',
    h1: 'Best Field Service Software for Small Businesses',
    intro:
      'Small field-service businesses value fast setup, ease of use and predictable cost over enterprise depth. These platforms are the strongest fits for owner-operators and small teams.',
    methodologyNote: METHODOLOGY_NOTE,
    entries: [
      { slug: 'jobber', position: 1, bestForLabel: 'Best overall for small business', rationale: 'Clean all-rounder that is quick to adopt.' },
      { slug: 'housecall-pro', position: 2, bestForLabel: 'Best for growth & marketing', rationale: 'Customer experience and marketing tools.' },
      { slug: 'workiz', position: 3, bestForLabel: 'Best for phone-driven trades', rationale: 'Call tracking built in.' },
      { slug: 'servicem8', position: 4, bestForLabel: 'Best for micro Apple-first teams', rationale: 'Light footprint, pay-as-you-grow.' },
      { slug: 'kickserv', position: 5, bestForLabel: 'Best budget option', rationale: 'Essentials at an accessible price.' },
    ],
    published: true,
  },
  {
    slug: 'field-service-software-with-quickbooks',
    h1: 'Best Field Service Software with QuickBooks Integration',
    intro:
      'QuickBooks integration is a top requirement for many service businesses. The right choice depends on whether you use QuickBooks Online or Desktop — support varies meaningfully between platforms.',
    methodologyNote: METHODOLOGY_NOTE,
    entries: [
      { slug: 'jobber', position: 1, bestForLabel: 'Best for QuickBooks Online (small teams)', rationale: 'Clean QBO sync for small residential businesses.' },
      { slug: 'service-fusion', position: 2, bestForLabel: 'Best for QuickBooks Desktop', rationale: 'Strong Desktop and Online support.' },
      { slug: 'fieldedge', position: 3, bestForLabel: 'Best for Desktop-centric trades', rationale: 'Deep QuickBooks Desktop integration.' },
      { slug: 'housecall-pro', position: 4, bestForLabel: 'Best for QBO + marketing', rationale: 'QBO sync with strong customer tools.' },
    ],
    published: true,
  },
  {
    slug: 'field-service-software-for-1-5-technicians',
    h1: 'Best Field Service Software for 1–5 Technicians',
    intro:
      'At 1–5 technicians, the priorities are ease of use, fast setup and value. Enterprise depth is usually unnecessary; a clean, dependable all-rounder wins.',
    methodologyNote: METHODOLOGY_NOTE,
    entries: [
      { slug: 'jobber', position: 1, bestForLabel: 'Best overall', rationale: 'Ideal for small residential teams.' },
      { slug: 'workiz', position: 2, bestForLabel: 'Best for call-driven work', rationale: 'Phone and call tracking built in.' },
      { slug: 'servicem8', position: 3, bestForLabel: 'Best for Apple-first micro teams', rationale: 'Lightweight and inexpensive.' },
      { slug: 'tradify', position: 4, bestForLabel: 'Best for solo trades', rationale: 'Simple quote-to-invoice flow.' },
    ],
    published: true,
  },
];

export const BEST_MAP: Record<string, BestPage> = Object.fromEntries(
  BEST_PAGES.map((b) => [b.slug, b]),
);

export function getBestPage(slug: string): BestPage | undefined {
  return BEST_MAP[slug];
}

export function publishedBestPages(): BestPage[] {
  return BEST_PAGES.filter((b) => b.published);
}
