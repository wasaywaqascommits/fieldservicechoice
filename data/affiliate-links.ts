import { PRODUCT_MAP } from './products';

/**
 * Affiliate / outbound link records (spec §32).
 *
 * IMPORTANT: We do NOT fabricate partner tracking URLs. Each record's
 * `destinationUrl` defaults to the vendor's own website. When a real affiliate
 * or referral program is signed, an admin replaces `destinationUrl` with the
 * approved tracking URL — no page content needs to change, because outbound
 * links are always rendered through the /go/[slug] tracking endpoint.
 */
export interface AffiliateLink {
  slug: string; // matches product slug
  programName: string;
  destinationUrl: string;
  campaign: string | null;
  effectiveDate: string | null;
  expirationDate: string | null;
  active: boolean;
  notes?: string;
}

/**
 * Approved, signed affiliate/referral tracking URLs, keyed by product slug.
 * Add a product here once its program is live; the value overrides the default
 * (the vendor's own website) for every outbound CTA site-wide, because all
 * vendor links render through the /go/[slug] tracking endpoint.
 */
const AFFILIATE_OVERRIDES: Record<
  string,
  { destinationUrl: string; programName?: string; effectiveDate?: string }
> = {
  servicetitan: {
    destinationUrl: 'https://join.servicetitan.com/mzXG1Dk',
    programName: 'ServiceTitan referral',
    effectiveDate: '2026-09-14',
  },
};

export const AFFILIATE_LINKS: AffiliateLink[] = Object.values(PRODUCT_MAP)
  .filter((p) => p.commercial.affiliateLinkSlug)
  .map((p) => {
    const slug = p.commercial.affiliateLinkSlug as string;
    const override = AFFILIATE_OVERRIDES[slug];
    return {
      slug,
      programName: override?.programName ?? `${p.name} referral`,
      // Approved tracking URL when signed, otherwise the vendor's own site.
      destinationUrl: override?.destinationUrl ?? p.website,
      campaign: null,
      effectiveDate: override?.effectiveDate ?? null,
      expirationDate: null,
      active: true,
      notes: override
        ? 'Approved affiliate/referral tracking URL.'
        : 'Placeholder destination (vendor website). Replace with approved affiliate/referral tracking URL.',
    };
  });

export const AFFILIATE_MAP: Record<string, AffiliateLink> = Object.fromEntries(
  AFFILIATE_LINKS.map((a) => [a.slug, a]),
);

export function getAffiliateLink(slug: string): AffiliateLink | undefined {
  return AFFILIATE_MAP[slug];
}
