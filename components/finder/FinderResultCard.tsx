'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Product } from '@/types';
import type { FitScoreResult } from '@/types/finder';
import { IMPLEMENTATION_LABELS, pricingStatusLabel } from '@/lib/labels';
import { EVENTS, track } from '@/lib/analytics/events';
import { MatchScore } from '@/components/products/MatchScore';
import { ProductLogo } from '@/components/products/ProductLogo';
import { VendorLink } from '@/components/shared/VendorLink';

export function FinderResultCard({
  product,
  result,
  rank,
}: {
  product: Product;
  result: FitScoreResult;
  rank: number;
}) {
  const [open, setOpen] = useState(false);
  const positives = result.reasons.filter((r) => r.sentiment === 'positive');
  const concerns = result.reasons.filter((r) => r.sentiment !== 'positive');

  return (
    <div className="card p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <ProductLogo product={product} size="lg" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-ink-muted">#{rank}</span>
              <h3 className="text-lg font-bold text-ink">
                <Link href={`/products/${product.slug}/`} className="hover:text-brand-700">
                  {product.name}
                </Link>
              </h3>
            </div>
            <p className="mt-0.5 text-sm text-ink-muted">Best for: {product.bestFor[0]}</p>
          </div>
        </div>
        <MatchScore score={result.score} size="md" />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-positive-fg">
            Strong matches
          </p>
          <ul className="space-y-1 text-sm text-ink-soft">
            {positives.slice(0, 4).map((r, i) => (
              <li key={i} className="flex gap-1.5">
                <span aria-hidden className="text-positive-fg">
                  ✓
                </span>
                {r.text}
              </li>
            ))}
            {positives.length === 0 && <li className="text-ink-muted">—</li>}
          </ul>
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-warning-fg">
            Potential concerns
          </p>
          <ul className="space-y-1 text-sm text-ink-soft">
            {concerns.slice(0, 3).map((r, i) => (
              <li key={i} className="flex gap-1.5">
                <span aria-hidden className="text-warning-fg">
                  !
                </span>
                {r.text}
              </li>
            ))}
            {concerns.length === 0 && <li className="text-ink-muted">No notable concerns.</li>}
          </ul>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-muted">
        <span>Pricing: {pricingStatusLabel(product.pricing.model, product.pricing.startingStatus)}</span>
        <span>Implementation: {IMPLEMENTATION_LABELS[product.implementation]}</span>
      </div>

      <button
        type="button"
        onClick={() => {
          setOpen((v) => !v);
          if (!open) track(EVENTS.matchExpand, { product: product.slug });
        }}
        className="mt-3 text-sm font-medium text-brand-700 hover:underline"
        aria-expanded={open}
      >
        {open ? 'Hide score breakdown' : 'Why this score?'}
      </button>

      {open && (
        <div className="mt-3 space-y-2 rounded-lg border border-slate-200 bg-surface-subtle p-3">
          {result.dimensions.map((d) => (
            <div key={d.key} className="flex items-center gap-3 text-xs">
              <span className="w-48 shrink-0 text-ink-muted">{d.label}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-brand-500"
                  style={{ width: `${Math.round(d.rawScore)}%` }}
                />
              </div>
              <span className="w-10 text-right font-medium text-ink-soft">{Math.round(d.rawScore)}</span>
            </div>
          ))}
          <p className="pt-1 text-[11px] text-ink-muted">
            Weighted by our published methodology. Commercial relationships are never a factor.
          </p>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <Link href={`/products/${product.slug}/`} className="btn-secondary">
          View {product.name} review
        </Link>
        <VendorLink
          productSlug={product.slug}
          affiliateSlug={product.commercial.affiliateLinkSlug}
          sourcePage="finder"
          sourceType="finder"
        >
          Visit {product.name}
        </VendorLink>
      </div>
    </div>
  );
}
