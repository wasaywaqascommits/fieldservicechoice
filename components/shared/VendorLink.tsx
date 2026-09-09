'use client';

import type { ReactNode } from 'react';
import { EVENTS, track } from '@/lib/analytics/events';

/**
 * Outbound vendor link (spec §32). Always routed through the /go/[slug]
 * tracking endpoint and marked rel="sponsored nofollow". Fires a client-side
 * vendor_click event; the /go endpoint also records it server-side.
 */
export function VendorLink({
  productSlug,
  affiliateSlug,
  sourcePage,
  sourceType = 'product',
  children,
  className = 'btn-primary',
}: {
  productSlug: string;
  affiliateSlug: string | null;
  sourcePage?: string;
  sourceType?: string;
  children: ReactNode;
  className?: string;
}) {
  const slug = affiliateSlug ?? productSlug;
  const params = new URLSearchParams();
  if (sourcePage) params.set('from', sourcePage);
  params.set('type', sourceType);
  const href = `/go/${slug}/?${params.toString()}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={className}
      onClick={() =>
        track(EVENTS.vendorClick, { product: productSlug, affiliate: slug, source: sourceType })
      }
    >
      {children}
    </a>
  );
}
