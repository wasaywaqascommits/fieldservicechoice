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
    lead: [
      'There is no single best field service management (FSM) platform — there is a best platform for your trade, your team size and the way you already work. A two-truck residential HVAC shop and a fifty-technician commercial contractor need almost opposite things from their software, and a tool that is excellent for one is usually wrong for the other.',
      'This shortlist reflects that. It spans quick-to-adopt tools built for owner-operators and small crews, mid-market platforms for teams outgrowing starter software, and enterprise systems built for established multi-department operations. For each pick we show who it is genuinely for, what it does well and where it falls short.',
      'One thing we do differently: we sell nothing and rank nothing for payment. Where a pricing figure is not published by the vendor, we label it as unverified rather than guess. The ordering below is our independent editorial view — not a personalized ranking. For a shortlist scored against your specific business, use the Finder.',
    ],
    methodologyNote: METHODOLOGY_NOTE,
    entries: [
      { slug: 'jobber', position: 1, bestForLabel: 'Best for small residential teams', rationale: 'Clean, fast-to-adopt operations for small and growing home-service businesses.' },
      { slug: 'housecall-pro', position: 2, bestForLabel: 'Best for marketing-driven residential', rationale: 'Strong customer experience, booking and marketing tools.' },
      { slug: 'servicetitan', position: 3, bestForLabel: 'Best for established/enterprise trades', rationale: 'Deep pricebook, financing and reporting for larger operations.' },
      { slug: 'workiz', position: 4, bestForLabel: 'Best for phone-driven trades', rationale: 'Built-in phone system and call tracking.' },
      { slug: 'fieldpulse', position: 5, bestForLabel: 'Best for teams outgrowing starter tools', rationale: 'Broad coverage reaching toward mid-market.' },
      { slug: 'simpro', position: 6, bestForLabel: 'Best for commercial / project work', rationale: 'Strong estimating, inventory and job costing.' },
    ],
    sections: [
      {
        heading: 'What field service management software actually does',
        body: [
          'Field service management software is the system a trade or home-service business uses to run the work its technicians do in the field. At its core it turns a job into a repeatable flow: a customer request becomes a scheduled visit, a dispatched technician, a completed job with notes and photos, an invoice and a payment — with a full history kept against the customer and the equipment.',
          'The capabilities that matter most in practice are scheduling and dispatch, a technician mobile app (ideally one that works offline), estimates and invoicing, online payments, customer notifications, and an accounting integration so the same numbers do not get typed twice. Larger operations add a flat-rate pricebook, service or membership agreements, inventory, job costing and deeper reporting.',
          'Almost every platform claims all of these. The difference is depth: a tool can technically "do" job costing while being far too shallow for a commercial contractor, or "support" QuickBooks while syncing only the Online version and not Desktop. That gap between a checkbox and a capability is what this shortlist is trying to cut through.',
        ],
      },
      {
        heading: 'How to choose the right platform',
        body: [
          'Start with your trade and your mix of residential versus commercial work. Residential service businesses are usually best served by tools that speed up quoting, dispatch and getting paid; commercial and project-based work pushes you toward estimating depth, job costing and project management.',
          'Then weigh your team size and appetite for implementation. Small teams almost always win by choosing software they can adopt in days without a paid onboarding project; established operations with office and dispatch staff can justify a heavier platform because the pricebook, agreements and reporting pay for the setup effort.',
          'Finally, pin down your hard requirements before you look at demos: which accounting system you run (QuickBooks Online and QuickBooks Desktop are not interchangeable — support varies meaningfully), whether technicians need a genuine offline mode, and whether you need multi-location or API access. A single non-negotiable requirement that a platform cannot meet should remove it from your list no matter how good the rest of it looks.',
        ],
      },
      {
        heading: 'Small business versus enterprise: where the line falls',
        body: [
          'The clearest divide in this market is between tools optimized for speed and simplicity and platforms optimized for depth and control. Jobber, Housecall Pro, Workiz and similar tools sit on the first side: fast to adopt, strong on scheduling, invoicing and customer communication, and priced for small teams.',
          'ServiceTitan, FieldEdge and the more commercial platforms sit on the second side: a deeper flat-rate pricebook, financing, agreements and reporting, at the cost of a larger implementation and a higher price. FieldPulse and a few others deliberately aim for the middle, for teams that have outgrown starter tools but are not ready for enterprise weight. Buying "up" too early is one of the most common and expensive mistakes in this category.',
        ],
      },
      {
        heading: 'How we chose this shortlist',
        body: [
          'We build a structured profile of each platform from official vendor sources — features, integrations, target company sizes and pricing model — and record when each fact was last checked. We do not fabricate prices or ratings; where a vendor does not publish a figure, we label it as unverified rather than invent one.',
          'The ordering here is editorial: our independent read on which platforms serve a typical business in this category best, across the full range of sizes. Commercial relationships never affect it. For a ranking scored against your own trade, team size, workflows, integrations and budget, use the Finder — it applies the same data to your specific answers.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the best field service management software?',
        answer:
          'There is no single best platform — the right choice depends on your trade, team size and whether you run residential or commercial work. For small residential teams, Jobber and Housecall Pro are common strong fits; for established or enterprise trades, ServiceTitan and FieldEdge offer more depth; for commercial and project work, Simpro is better suited. Use the Finder for a shortlist scored against your specific business.',
      },
      {
        question: 'How much does field service software cost?',
        answer:
          'Pricing ranges from modest per-user monthly plans for small-team tools to quote-based enterprise pricing that depends on your size and modules. Cost is driven mainly by the number of users, the depth of features you need (pricebook, financing, agreements) and implementation. Where a vendor does not publish pricing, we label it as unverified rather than estimate a figure.',
      },
      {
        question: 'Which field service software works with QuickBooks?',
        answer:
          'Most major platforms integrate with QuickBooks, but QuickBooks Online and QuickBooks Desktop are supported differently. Tools like Jobber and Housecall Pro sync cleanly with QuickBooks Online, while Desktop-centric shops are usually better served by platforms with deep Desktop ties such as FieldEdge or Service Fusion. Confirm which version a platform supports before committing.',
      },
      {
        question: 'What is the best field service software for a small business?',
        answer:
          'Small businesses generally win by prioritizing ease of use, fast setup and predictable cost over enterprise depth. Jobber is a strong all-round default for small residential teams; Housecall Pro adds stronger marketing and booking tools; Workiz suits phone-driven trades. Enterprise platforms are usually overkill and slower to adopt at this size.',
      },
      {
        question: 'Do I need field service software with an offline mode?',
        answer:
          'If your technicians regularly work in basements, rural areas or buildings with poor signal, a genuine offline mode matters — the app should let them view job details and capture notes and photos without a connection and sync later. If your crews are always connected, it is less critical. Treat it as a hard requirement only if your field conditions demand it.',
      },
      {
        question: 'How is a "best" list different from your Fit Score?',
        answer:
          'This list is our independent editorial view for a typical business in the category, ordered by our overall read of each platform. The Fit Score is personalized: it scores every product against your specific trade, team size, required features, integrations and budget, and can exclude products that fail a hard requirement. The two can rank products differently, and that is expected.',
      },
      {
        question: 'Does FieldServiceChoice get paid to rank these products?',
        answer:
          'No. Ordering is editorial and independent, and commercial relationships never affect it. We may earn a referral fee if you visit or purchase from some providers, but that never changes the shortlist, the ordering or the Fit Score. Where we have not verified a fact such as pricing, we label it rather than guess.',
      },
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
