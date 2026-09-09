import type { FeatureSupport, Product } from '@/types';
import { FEATURE_CATEGORIES, featuresByCategory } from '@/data/features';

function SupportCell({ support }: { support: FeatureSupport | undefined }) {
  const s = support ?? 'unknown';
  const map: Record<FeatureSupport, { icon: string; className: string; label: string }> = {
    available: { icon: '✓', className: 'text-positive-fg', label: 'Available' },
    partial: { icon: '◑', className: 'text-warning-fg', label: 'Partial' },
    add_on: { icon: '+', className: 'text-warning-fg', label: 'Add-on' },
    plan_dependent: { icon: '◑', className: 'text-warning-fg', label: 'Plan-dependent' },
    not_available: { icon: '✕', className: 'text-danger-fg', label: 'Not available' },
    unknown: { icon: '–', className: 'text-ink-muted', label: 'Unverified' },
  };
  const cfg = map[s];
  return (
    <span className={`inline-flex items-center gap-1.5 text-sm ${cfg.className}`}>
      <span aria-hidden className="font-bold">
        {cfg.icon}
      </span>
      {cfg.label}
    </span>
  );
}

/** Grouped feature table (spec §21). */
export function FeatureTable({ product }: { product: Product }) {
  return (
    <div className="space-y-6">
      {FEATURE_CATEGORIES.map((category) => {
        const features = featuresByCategory(category).filter((f) => product.features[f.key] !== undefined);
        if (features.length === 0) return null;
        return (
          <div key={category} className="card overflow-hidden">
            <h3 className="border-b border-slate-100 bg-surface-subtle px-4 py-2.5 text-sm font-semibold text-ink">
              {category}
            </h3>
            <dl className="divide-y divide-slate-100">
              {features.map((f) => (
                <div key={f.key} className="flex items-center justify-between gap-4 px-4 py-2.5">
                  <dt className="text-sm text-ink-soft" title={f.description}>
                    {f.label}
                  </dt>
                  <dd>
                    <SupportCell support={product.features[f.key]} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        );
      })}
      <p className="text-xs text-ink-muted">
        Feature availability shown here is indicative and pending independent verification. Confirm
        current capabilities with the vendor before purchasing.
      </p>
    </div>
  );
}
