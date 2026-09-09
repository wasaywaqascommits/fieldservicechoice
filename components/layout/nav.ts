/** Shared navigation model (spec §16, §98, §99). */
export interface NavLink {
  label: string;
  href: string;
}

export const PRIMARY_NAV: NavLink[] = [
  { label: 'Software', href: '/software/' },
  { label: 'Industries', href: '/industries/hvac/' },
  { label: 'Compare', href: '/compare/jobber-vs-housecall-pro/' },
  { label: 'Best Software', href: '/best/field-service-management-software/' },
];

export const RESOURCES_NAV: NavLink[] = [
  { label: 'Methodology', href: '/methodology/' },
  { label: 'Data Verification', href: '/data-verification/' },
  { label: 'Editorial Policy', href: '/editorial-policy/' },
  { label: 'Buying Guides', href: '/guides/how-to-choose-field-service-software/' },
];

export const INDUSTRY_NAV: NavLink[] = [
  { label: 'HVAC', href: '/industries/hvac/' },
  { label: 'Plumbing', href: '/industries/plumbing/' },
  { label: 'Electrical', href: '/industries/electrical/' },
  { label: 'Roofing', href: '/industries/roofing/' },
  { label: 'Landscaping', href: '/industries/landscaping/' },
  { label: 'Pest Control', href: '/industries/pest-control/' },
];

export const FOOTER_SOFTWARE: NavLink[] = [
  { label: 'Browse all software', href: '/software/' },
  { label: 'Jobber', href: '/products/jobber/' },
  { label: 'Housecall Pro', href: '/products/housecall-pro/' },
  { label: 'ServiceTitan', href: '/products/servicetitan/' },
  { label: 'Workiz', href: '/products/workiz/' },
];

export const FOOTER_COMPARISONS: NavLink[] = [
  { label: 'Jobber vs Housecall Pro', href: '/compare/jobber-vs-housecall-pro/' },
  { label: 'ServiceTitan vs FieldEdge', href: '/compare/servicetitan-vs-fieldedge/' },
  { label: 'Jobber vs Workiz', href: '/compare/jobber-vs-workiz/' },
  { label: 'ServiceTitan vs BuildOps', href: '/compare/servicetitan-vs-buildops/' },
];

export const FOOTER_COMPANY: NavLink[] = [
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Partner With Us', href: '/partner-with-us/' },
];

export const FOOTER_LEGAL: NavLink[] = [
  { label: 'Editorial Policy', href: '/editorial-policy/' },
  { label: 'Data Verification', href: '/data-verification/' },
  { label: 'Affiliate Disclosure', href: '/affiliate-disclosure/' },
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms', href: '/terms/' },
];
