'use client';

import { useMemo, useState } from 'react';
import type { BusinessModel, CompanySizeBand, FeatureKey, IndustrySlug, Product } from '@/types';
import { INDUSTRY_LABELS } from '@/data/industries';
import { BUSINESS_MODEL_LABELS, COMPANY_SIZE_SHORT } from '@/lib/labels';
import { ProductCard } from '@/components/products/ProductCard';
import { ComparisonTable } from '@/components/comparison/ComparisonTable';

const INDUSTRY_FILTERS: IndustrySlug[] = ['hvac', 'plumbing', 'electrical', 'roofing', 'landscaping', 'pest-control', 'commercial'];
const SIZE_FILTERS: CompanySizeBand[] = ['solo', '2-5', '6-10', '11-25', '26-50', '51-100', '100+'];
const MODEL_FILTERS: BusinessModel[] = ['residential', 'commercial', 'both', 'route', 'project'];
const FEATURE_FILTERS: FeatureKey[] = ['quickbooks_online', 'quickbooks_desktop', 'service_agreements', 'inventory', 'multi_location', 'api', 'recurring_jobs'];

const FEATURE_FILTER_LABELS: Record<string, string> = {
  quickbooks_online: 'QuickBooks Online',
  quickbooks_desktop: 'QuickBooks Desktop',
  service_agreements: 'Service agreements',
  inventory: 'Inventory',
  multi_location: 'Multi-location',
  api: 'API',
  recurring_jobs: 'Recurring jobs',
};

const MAX_COMPARE = 4;

export function SoftwareDirectory({ products, initialQuery = '' }: { products: Product[]; initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [industries, setIndustries] = useState<IndustrySlug[]>([]);
  const [size, setSize] = useState<CompanySizeBand | null>(null);
  const [models, setModels] = useState<BusinessModel[]>([]);
  const [features, setFeatures] = useState<FeatureKey[]>([]);
  const [compare, setCompare] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  function toggle<T>(list: T[], setList: (v: T[]) => void, value: T) {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (q && !(`${p.name} ${p.tagline} ${p.vendorName}`.toLowerCase().includes(q))) return false;
      if (industries.length && !industries.some((i) => p.industries.includes(i))) return false;
      if (size && !p.companySizes.includes(size)) return false;
      if (models.length && !models.some((m) => p.businessModels.includes(m))) return false;
      if (features.length && !features.every((f) => {
        const s = p.features[f];
        return s === 'available' || s === 'partial' || s === 'plan_dependent' || s === 'add_on';
      })) return false;
      return true;
    });
  }, [products, query, industries, size, models, features]);

  const compareProducts = products.filter((p) => compare.includes(p.slug));

  function toggleCompare(slug: string) {
    setCompare((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, slug];
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      {/* Filters */}
      <aside className="space-y-6">
        <div>
          <label className="mb-1 block text-sm font-medium text-ink-soft" htmlFor="dir-search">
            Search
          </label>
          <input
            id="dir-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jobber, ServiceTitan, QuickBooks…"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>

        <FilterGroup title="Trade">
          {INDUSTRY_FILTERS.map((i) => (
            <FilterChip key={i} active={industries.includes(i)} onClick={() => toggle(industries, setIndustries, i)}>
              {INDUSTRY_LABELS[i]}
            </FilterChip>
          ))}
        </FilterGroup>

        <FilterGroup title="Team size">
          {SIZE_FILTERS.map((s) => (
            <FilterChip key={s} active={size === s} onClick={() => setSize(size === s ? null : s)}>
              {COMPANY_SIZE_SHORT[s]}
            </FilterChip>
          ))}
        </FilterGroup>

        <FilterGroup title="Work type">
          {MODEL_FILTERS.map((m) => (
            <FilterChip key={m} active={models.includes(m)} onClick={() => toggle(models, setModels, m)}>
              {BUSINESS_MODEL_LABELS[m]}
            </FilterChip>
          ))}
        </FilterGroup>

        <FilterGroup title="Capabilities">
          {FEATURE_FILTERS.map((f) => (
            <FilterChip key={f} active={features.includes(f)} onClick={() => toggle(features, setFeatures, f)}>
              {FEATURE_FILTER_LABELS[f]}
            </FilterChip>
          ))}
        </FilterGroup>
      </aside>

      {/* Results */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-ink-muted">
            {filtered.length} {filtered.length === 1 ? 'platform' : 'platforms'}
          </p>
          {compare.length >= 2 && (
            <button type="button" onClick={() => setShowCompare((v) => !v)} className="btn-primary">
              {showCompare ? 'Hide comparison' : `Compare ${compare.length} selected`}
            </button>
          )}
        </div>

        {showCompare && compareProducts.length >= 2 && (
          <div className="mb-6">
            <ComparisonTable products={compareProducts} />
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="card p-8 text-center text-ink-muted">
            No platforms match those filters. Try removing a filter.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {filtered.map((p) => (
              <div key={p.slug} className="relative">
                <label className="absolute right-3 top-3 z-10 flex cursor-pointer items-center gap-1.5 rounded-md border border-slate-200 bg-white/90 px-2 py-1 text-xs font-medium text-ink-soft shadow-sm">
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                    checked={compare.includes(p.slug)}
                    onChange={() => toggleCompare(p.slug)}
                    disabled={!compare.includes(p.slug) && compare.length >= MAX_COMPARE}
                  />
                  Compare
                </label>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-muted">{title}</h3>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`chip cursor-pointer ${active ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300 bg-white text-ink-soft hover:border-brand-400'}`}
    >
      {children}
    </button>
  );
}
