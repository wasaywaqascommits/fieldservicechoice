import Link from 'next/link';
import type { Product } from '@/types';
import { COMPANY_SIZE_SHORT, IMPLEMENTATION_LABELS, pricingStatusLabel } from '@/lib/labels';

export interface BestTableRow {
  position: number;
  bestForLabel: string;
  product: Product;
}

/**
 * At-a-glance comparison for a "best" shortlist: one row per ranked product,
 * built entirely from existing product data (no fabricated figures). Scrolls
 * horizontally on small screens so the page body never does.
 */
export function BestComparisonTable({
  rows,
  showRank = true,
  highlightSlug,
}: {
  rows: BestTableRow[];
  /** Show the ranked "#" column (best/industry lists). Off for "vs alternatives" tables. */
  showRank?: boolean;
  /** Emphasize the row for this product slug (the page's own product). */
  highlightSlug?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="bg-surface-subtle text-left">
            {showRank && <th className="p-3 font-semibold text-ink">#</th>}
            <th className="p-3 font-semibold text-ink">Platform</th>
            <th className="p-3 font-semibold text-ink">Best for</th>
            <th className="p-3 font-semibold text-ink">Team size</th>
            <th className="p-3 font-semibold text-ink">Implementation</th>
            <th className="p-3 font-semibold text-ink">Pricing</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map(({ position, bestForLabel, product: p }) => {
            const isSelf = p.slug === highlightSlug;
            return (
              <tr key={p.slug} className={isSelf ? 'bg-brand-50' : undefined}>
                {showRank && <td className="p-3 font-semibold text-ink-muted">{position}</td>}
                <td className="p-3 font-semibold text-ink">
                  {isSelf ? (
                    <span>
                      {p.name} <span className="text-xs font-medium text-brand-700">(this tool)</span>
                    </span>
                  ) : (
                    <Link href={`/products/${p.slug}/`} className="hover:text-brand-700">
                      {p.name}
                    </Link>
                  )}
                </td>
                <td className="p-3 text-ink-soft">{bestForLabel}</td>
                <td className="whitespace-nowrap p-3 text-ink-soft">
                  {COMPANY_SIZE_SHORT[p.companySizes[0]]}–
                  {COMPANY_SIZE_SHORT[p.companySizes[p.companySizes.length - 1]]}
                </td>
                <td className="p-3 text-ink-soft">{IMPLEMENTATION_LABELS[p.implementation]}</td>
                <td className="p-3 text-ink-soft">
                  {pricingStatusLabel(p.pricing.model, p.pricing.startingStatus)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
