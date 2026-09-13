/**
 * Field service software glossary (Cluster G of the topical map).
 *
 * A single authoritative reference page. Every term links out to the deeper
 * guide that covers it, so the glossary acts as an internal-linking hub that
 * ties the whole content map together. Definitions are plain-language and
 * accurate, never padded.
 */

export interface GlossaryTerm {
  /** Display term. */
  term: string;
  /** URL anchor (kebab-case). */
  slug: string;
  /** One or two sentence definition. */
  definition: string;
  /** Optional link to the guide that covers this term in depth. */
  related?: { label: string; href: string };
}

/** Terms are sorted alphabetically at render time, so order here does not matter. */
export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'API',
    slug: 'api',
    definition:
      'An application programming interface is the connection point that lets your field service software exchange data with other systems automatically. An open API matters most for larger or technical operations that want custom integrations rather than off-the-shelf ones.',
    related: { label: 'Connecting field service software to other tools', href: '/guides/field-service-software-and-zapier/' },
  },
  {
    term: 'Consumer financing',
    slug: 'consumer-financing',
    definition:
      'A point-of-sale option that lets a customer pay for a large job over time through a lender partner while you get paid up front. For big-ticket trades like HVAC, offering financing measurably lifts close rates on expensive work.',
    related: { label: 'Payments and financing in field service', href: '/guides/field-service-payments-and-financing/' },
  },
  {
    term: 'CRM',
    slug: 'crm',
    definition:
      'Customer relationship management software is built around the relationship and the sale: leads, contacts, deals and follow-ups. Field service tools include light CRM features, but a dedicated CRM is a different tool aimed at a sales pipeline rather than the job.',
    related: { label: 'Field service software vs CRM', href: '/guides/field-service-management-software-vs-crm/' },
  },
  {
    term: 'Customer portal',
    slug: 'customer-portal',
    definition:
      'A secure area where customers can log in to see their service history, approve quotes and pay invoices on their own time. It matters most for commercial and property-management clients, and much less for everyday residential work.',
    related: { label: 'Customer portals in field service software', href: '/guides/field-service-customer-portal/' },
  },
  {
    term: 'Dispatching',
    slug: 'dispatching',
    definition:
      'Assigning a job to a technician and getting them to the right place, at the right time, with the right information. Good dispatching is really about handling change quickly, an emergency, a cancellation, a job running long, without dropping anyone.',
    related: { label: 'Field service dispatching explained', href: '/guides/field-service-dispatching/' },
  },
  {
    term: 'ERP',
    slug: 'erp',
    definition:
      'Enterprise resource planning software is the backbone system large companies use to run finance, procurement, HR and inventory in one database. Most trade and home-service businesses do not need one; field service software plus QuickBooks or Xero covers them.',
    related: { label: 'Field service software vs ERP', href: '/guides/field-service-management-software-vs-erp/' },
  },
  {
    term: 'Estimate (quote)',
    slug: 'estimate',
    definition:
      'Your proposed price for work before it is done. In field service the fastest, clearest estimate usually wins the job, especially when it is built on the technician’s device on site rather than sent days later.',
    related: { label: 'Estimating and quoting in field service', href: '/guides/field-service-estimating/' },
  },
  {
    term: 'Field service management (FSM)',
    slug: 'field-service-management',
    definition:
      'The system a trade or home-service business uses to run the work its technicians do in the field, taking a job from the first phone call through to a paid invoice and keeping a record of everything in between.',
    related: { label: 'What is field service management software?', href: '/guides/what-is-field-service-management-software/' },
  },
  {
    term: 'First-time fix rate',
    slug: 'first-time-fix-rate',
    definition:
      'The share of jobs completed on the first visit, without a return trip. It is one of the most important efficiency measures in field service, because a second trip means you pay for the drive and labor twice and earn once.',
    related: { label: 'How to improve your first-time fix rate', href: '/guides/how-to-improve-first-time-fix-rate/' },
  },
  {
    term: 'Flat-rate pricebook',
    slug: 'flat-rate-pricebook',
    definition:
      'A catalog of common jobs and repairs, each with a set price, so every technician quotes the same number for the same work. It usually includes good, better and best options and protects your margin as you grow.',
    related: { label: 'Flat-rate pricebook explained', href: '/guides/flat-rate-pricebook/' },
  },
  {
    term: 'Good, better, best',
    slug: 'good-better-best',
    definition:
      'A pricing presentation that offers the customer three options instead of a single price. A meaningful share of customers choose up when given the choice, which lifts the average ticket without any hard selling.',
    related: { label: 'How to build a flat-rate pricebook', href: '/guides/how-to-build-a-flat-rate-pricebook/' },
  },
  {
    term: 'GPS tracking',
    slug: 'gps-tracking',
    definition:
      'Showing where your technicians or vehicles are in real time on a map. Used well it is a dispatch and customer-service tool, letting you send the closest technician and give customers accurate arrival windows, not a way to watch people.',
    related: { label: 'GPS and technician tracking', href: '/guides/field-service-gps-tracking/' },
  },
  {
    term: 'Implementation',
    slug: 'implementation',
    definition:
      'The work of getting new software live: data migration, configuration and training. Small-business tools are self-serve and live in days; enterprise platforms involve a structured, paid rollout measured in weeks.',
    related: { label: 'Field service software implementation: what to expect', href: '/guides/field-service-software-implementation-what-to-expect/' },
  },
  {
    term: 'Inventory (truck stock)',
    slug: 'inventory',
    definition:
      'Tracking the parts and materials you hold, both in the warehouse and on each truck. Knowing what is on which van is what lets you send the technician who is actually carrying the part, which lifts your first-time fix rate.',
    related: { label: 'Inventory and truck stock in field service', href: '/guides/field-service-inventory-management/' },
  },
  {
    term: 'Invoicing',
    slug: 'invoicing',
    definition:
      'Turning completed work into a bill and getting paid. In field service the biggest cash-flow gain comes from invoicing, and often collecting payment, on the technician’s device before they leave the site.',
    related: { label: 'Field service invoicing explained', href: '/guides/field-service-invoicing/' },
  },
  {
    term: 'Job costing',
    slug: 'job-costing',
    definition:
      'Comparing what a job brought in against what it actually cost to deliver, labor, parts, materials and overhead, to find the real profit. It reveals which job types quietly lose money so you can fix the price or stop taking the work.',
    related: { label: 'Job costing explained', href: '/guides/field-service-job-costing/' },
  },
  {
    term: 'On my way text',
    slug: 'on-my-way-text',
    definition:
      'An automatic message telling the customer their technician is en route, ideally with an accurate arrival window tied to GPS. It reduces no-shows and the how-far-away phone calls that eat office time.',
    related: { label: 'How to reduce no-shows and missed appointments', href: '/guides/how-to-reduce-no-shows-field-service/' },
  },
  {
    term: 'Online booking',
    slug: 'online-booking',
    definition:
      'Letting a customer request or schedule a visit from your website or a link, without calling the office. It captures demand outside office hours, and works best for well-defined services with guardrails on what is bookable.',
    related: { label: 'Online booking for field service', href: '/guides/field-service-online-booking/' },
  },
  {
    term: 'Payment processing',
    slug: 'payment-processing',
    definition:
      'Taking card or ACH payment through the software, usually at a rate around 2.9% plus 30 cents per card transaction and roughly 1% on ACH. Some tools lock you into their own processor, so check whether you can bring your own.',
    related: { label: 'Payment processing in field service software', href: '/guides/field-service-software-payment-processing/' },
  },
  {
    term: 'Per-user pricing',
    slug: 'per-user-pricing',
    definition:
      'A billing model that charges for each user or seat, so the cost rises directly with your headcount. It is friendly for a solo operator but can get expensive for a larger team, where flat unlimited-user pricing may cost less.',
    related: { label: 'Field service software pricing, explained', href: '/guides/field-service-software-pricing-explained/' },
  },
  {
    term: 'QuickBooks Online vs Desktop',
    slug: 'quickbooks-online-vs-desktop',
    definition:
      'Two different QuickBooks products that field service tools support differently. Many platforms sync only with the Online version, so if your books run on Desktop, confirm Desktop support specifically before you commit.',
    related: { label: 'How to connect field service software to QuickBooks', href: '/guides/how-to-connect-field-service-software-to-quickbooks/' },
  },
  {
    term: 'Quote-based pricing',
    slug: 'quote-based-pricing',
    definition:
      'A pricing model, common on enterprise platforms, where the cost is not published and depends on your size, the modules you pick and negotiation. Get the per-user rate, included modules, implementation fee and contract length in writing.',
    related: { label: 'Field service software pricing, explained', href: '/guides/field-service-software-pricing-explained/' },
  },
  {
    term: 'Recurring job',
    slug: 'recurring-job',
    definition:
      'A visit that repeats on a schedule, such as a weekly clean or a seasonal maintenance call, generated automatically rather than rebooked by hand. Strong recurring scheduling is essential for route and maintenance-driven businesses.',
    related: { label: 'Field service scheduling explained', href: '/guides/field-service-scheduling/' },
  },
  {
    term: 'Route optimization',
    slug: 'route-optimization',
    definition:
      'Working out the most efficient order to visit a set of jobs to cut drive time and fit in more visits. It matters most for route-dense trades like landscaping, pest control, cleaning and pool service.',
    related: { label: 'Route optimization for field service teams', href: '/guides/field-service-route-optimization/' },
  },
  {
    term: 'Scheduling',
    slug: 'scheduling',
    definition:
      'Planning who does what, and when: matching jobs to technicians across a day or week, balancing new bookings against recurring visits, and leaving slack for emergencies. Good scheduling software lets you see and rearrange it all fast.',
    related: { label: 'Field service scheduling explained', href: '/guides/field-service-scheduling/' },
  },
  {
    term: 'Service agreement (membership)',
    slug: 'service-agreement',
    definition:
      'A recurring arrangement where a customer pays for scheduled maintenance and perks like priority service. Agreements turn one-off customers into predictable recurring revenue and smooth out seasonal peaks and troughs.',
    related: { label: 'Service agreements and memberships explained', href: '/guides/field-service-service-agreements/' },
  },
  {
    term: 'Technician mobile app',
    slug: 'technician-mobile-app',
    definition:
      'The app technicians use in the field to see job details, capture notes and photos, quote, invoice and take payment. It is the feature that quietly decides whether the whole system gets adopted, so offline support and speed matter.',
    related: { label: 'The technician mobile app', href: '/guides/field-service-technician-mobile-app/' },
  },
  {
    term: 'Work order',
    slug: 'work-order',
    definition:
      'The full record of a single job: the customer, what needs doing, who is assigned, what was done, the parts used and the outcome. It is the thread that ties a request to a completed, invoiced job and holds the history.',
    related: { label: 'Work order management', href: '/guides/field-service-work-order-management/' },
  },
  {
    term: 'Xero',
    slug: 'xero',
    definition:
      'A cloud accounting platform used instead of QuickBooks by many businesses. Most field service tools are QuickBooks-first, so Xero users should confirm genuine Xero support rather than assume it from a feature-grid tick.',
    related: { label: 'Field service software that works with Xero', href: '/guides/field-service-software-and-xero/' },
  },
];
