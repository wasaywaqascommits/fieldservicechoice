import { NextResponse } from 'next/server';
import { getAffiliateLink } from '@/data/affiliate-links';
import { getProduct } from '@/data/products';
import { recordVendorClick } from '@/lib/database/mutations';
import { SITE_URL } from '@/lib/env';

export const runtime = 'nodejs';

/**
 * Outbound vendor link tracking + redirect (spec §32).
 * Records the click server-side, then 302-redirects to the vendor destination
 * (the affiliate tracking URL when configured, otherwise the vendor website).
 */
export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const url = new URL(req.url);
  const from = url.searchParams.get('from');
  const sourceType = url.searchParams.get('type');

  const affiliate = getAffiliateLink(slug);
  // Affiliate slugs match product slugs in our data; fall back to the product.
  const product = getProduct(slug) ?? getProduct(affiliate?.slug ?? '');
  const destination = affiliate?.destinationUrl ?? product?.website;

  if (!destination) {
    return NextResponse.redirect(`${SITE_URL}/software/`, 302);
  }

  try {
    await recordVendorClick({
      productSlug: product?.slug ?? slug,
      affiliateSlug: affiliate?.slug ?? null,
      sourcePage: from,
      sourceType,
      sessionId: null,
      campaign: affiliate?.campaign ?? null,
    });
  } catch {
    /* never block the redirect on tracking failure */
  }

  return NextResponse.redirect(destination, 302);
}
