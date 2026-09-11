import type { Product } from '@/types';
import { PRICING_MODEL_LABELS } from '@/lib/labels';
import { LastVerified } from './VerificationBadge';

/**
 * Pricing display (spec §21, §27, §68).
 * We NEVER show fabricated numbers. When no verified plan exists we show the
 * pricing model and a clear "contact vendor" state instead of a made-up price.
 */
export function PricingBlock({ product }: { product: Product }) {
  const { pricing } = product;
  const verifiedPlans = pricing.plans.filter(
    (p) => p.verificationStatus === 'verified' && p.monthlyPrice != null,
  );

  return (
    <div className="card p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="text-sm text-ink-muted">Pricing model</span>
          <p className="text-lg font-semibold text-ink">{PRICING_MODEL_LABELS[pricing.model]}</p>
        </div>
        <LastVerified date={product.verification.pricingVerifiedAt} label="Pricing verified" />
      </div>

      {verifiedPlans.length > 0 ? (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-ink-muted">
                <th className="py-2 pr-4 font-medium">Plan</th>
                <th className="py-2 pr-4 font-medium">Monthly</th>
                <th className="py-2 font-medium">Includes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {verifiedPlans.map((p) => (
                <tr key={p.name}>
                  <td className="py-2 pr-4 font-medium text-ink">{p.name}</td>
                  <td className="py-2 pr-4 text-ink-soft">
                    {p.monthlyPrice != null ? `$${p.monthlyPrice} ${p.currency}` : '—'}
                  </td>
                  <td className="py-2 text-ink-muted">
                    {p.includedUsers != null
                      ? `${p.includedUsers} user${p.includedUsers === 1 ? '' : 's'}`
                      : p.notes ?? '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-ink-muted">
            Monthly prices from {product.name}&rsquo;s official pricing page; billing basis (annual vs
            month-to-month) varies by plan.
            {product.verification.pricingVerifiedAt
              ? ` Verified ${product.verification.pricingVerifiedAt}.`
              : ''}
          </p>
        </div>
      ) : (
        <div className="mt-4 rounded-lg border border-warning-border bg-warning-bg p-4 text-sm text-warning-fg">
          {pricing.model === 'quote'
            ? "This vendor uses custom, quote-based pricing. Contact the vendor for a quote specific to your business."
            : 'We have not yet independently verified this vendor’s current pricing. Check the vendor’s pricing page for the latest plans and rates.'}
        </div>
      )}
    </div>
  );
}
