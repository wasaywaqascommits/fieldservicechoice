import Link from 'next/link';
import type { FeatureKey, Product } from '@/types';
import { featureLabel } from '@/data/features';
import { INDUSTRY_LABELS } from '@/data/industries';
import { COMPANY_SIZE_SHORT, pricingStatusLabel } from '@/lib/labels';
import { ProductLogo } from './ProductLogo';

/** Directory / listing card (spec §19). Presentational and server-safe. */
export function ProductCard({ product }: { product: Product }) {
  const topFeatures = (Object.keys(product.features) as FeatureKey[])
    .filter((k) => product.features[k] === 'available')
    .slice(0, 4);

  return (
    <div className="card flex h-full flex-col p-5">
      <div className="flex items-start gap-3">
        <ProductLogo product={product} />
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-ink">
            <Link href={`/products/${product.slug}/`} className="hover:text-brand-700">
              {product.name}
            </Link>
          </h3>
          <p className="mt-0.5 line-clamp-2 text-sm text-ink-muted">{product.tagline}</p>
        </div>
      </div>

      <dl className="mt-4 space-y-2 text-sm">
        <div className="flex gap-2">
          <dt className="w-24 shrink-0 text-ink-muted">Best for</dt>
          <dd className="text-ink-soft">{product.bestFor[0]}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-24 shrink-0 text-ink-muted">Team size</dt>
          <dd className="text-ink-soft">
            {COMPANY_SIZE_SHORT[product.companySizes[0]]}–
            {COMPANY_SIZE_SHORT[product.companySizes[product.companySizes.length - 1]]}
          </dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-24 shrink-0 text-ink-muted">Pricing</dt>
          <dd className="text-ink-soft">
            {pricingStatusLabel(product.pricing.model, product.pricing.startingStatus)}
          </dd>
        </div>
      </dl>

      {topFeatures.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {topFeatures.map((f) => (
            <span key={f} className="chip border-slate-200 bg-surface-subtle text-ink-muted">
              {featureLabel(f)}
            </span>
          ))}
        </div>
      )}

      <div className="mt-3 flex flex-wrap gap-1.5">
        {product.industries.slice(0, 3).map((i) => (
          <span key={i} className="chip border-brand-100 bg-brand-50 text-brand-700">
            {INDUSTRY_LABELS[i]}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4">
        <Link href={`/products/${product.slug}/`} className="btn-secondary w-full">
          View profile
        </Link>
      </div>
    </div>
  );
}
