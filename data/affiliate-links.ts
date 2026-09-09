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

export const AFFILIATE_LINKS: AffiliateLink[] = Object.values(PRODUCT_MAP)
  .filter((p) => p.commercial.affiliateLinkSlug)
  .map((p) => ({
    slug: p.commercial.affiliateLinkSlug as string,
    programName: `${p.name} referral`,
    // Placeholder = the vendor's own site. Replace with approved tracking URL.
    destinationUrl: p.website,
    campaign: null,
    effectiveDate: null,
    expirationDate: null,
    active: true,
    notes: 'Placeholder destination (vendor website). Replace with approved affiliate/referral tracking URL in admin.',
  }));

export const AFFILIATE_MAP: Record<string, AffiliateLink> = Object.fromEntries(
  AFFILIATE_LINKS.map((a) => [a.slug, a]),
);

export function getAffiliateLink(slug: string): AffiliateLink | undefined {
  return AFFILIATE_MAP[slug];
}
