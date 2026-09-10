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
export function BestComparisonTable({ rows }: { rows: BestTableRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="bg-surface-subtle text-left">
            <th className="p-3 font-semibold text-ink">#</th>
            <th className="p-3 font-semibold text-ink">Platform</th>
            <th className="p-3 font-semibold text-ink">Best for</th>
            <th className="p-3 font-semibold text-ink">Team size</th>
            <th className="p-3 font-semibold text-ink">Implementation</th>
            <th className="p-3 font-semibold text-ink">Pricing</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map(({ position, bestForLabel, product: p }) => (
            <tr key={p.slug}>
              <td className="p-3 font-semibold text-ink-muted">{position}</td>
              <td className="p-3 font-semibold text-ink">
                <Link href={`/products/${p.slug}/`} className="hover:text-brand-700">
                  {p.name}
                </Link>
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
          ))}
        </tbody>
      </table>
    </div>
  );
}
