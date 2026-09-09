import type { FeatureKey, FeatureSupport, Product } from '@/types';
import { featureLabel } from '@/data/features';
import { INDUSTRY_LABELS } from '@/data/industries';
import {
  COMPANY_SIZE_SHORT,
  IMPLEMENTATION_LABELS,
  PRICING_MODEL_LABELS,
} from '@/lib/labels';

const COMPARE_FEATURES: FeatureKey[] = [
  'scheduling',
  'dispatching',
  'crm',
  'estimates',
  'invoicing',
  'payments',
  'online_booking',
  'customer_notifications',
  'service_agreements',
  'recurring_jobs',
  'pricebook',
  'inventory',
  'job_costing',
  'marketing_automation',
  'reporting',
  'mobile_app',
  'quickbooks_online',
  'quickbooks_desktop',
  'api',
];

function support(s: FeatureSupport | undefined): { icon: string; className: string } {
  switch (s) {
    case 'available':
      return { icon: '✓', className: 'text-positive-fg' };
    case 'partial':
    case 'plan_dependent':
    case 'add_on':
      return { icon: '◑', className: 'text-warning-fg' };
    case 'not_available':
      return { icon: '✕', className: 'text-danger-fg' };
    default:
      return { icon: '–', className: 'text-ink-muted' };
  }
}

/**
 * Head-to-head comparison table (spec §22, §44). Horizontally scrollable on
 * small screens with a sticky first column so it stays readable.
 */
export function ComparisonTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <thead>
          <tr className="bg-surface-subtle">
            <th className="sticky left-0 z-10 bg-surface-subtle p-3 text-left font-semibold text-ink">
              &nbsp;
            </th>
            {products.map((p) => (
              <th key={p.slug} className="p-3 text-left font-semibold text-ink">
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <th scope="row" className="sticky left-0 z-10 bg-white p-3 text-left font-medium text-ink-soft">
              Pricing model
            </th>
            {products.map((p) => (
              <td key={p.slug} className="p-3 text-ink-soft">
                {PRICING_MODEL_LABELS[p.pricing.model]}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className="sticky left-0 z-10 bg-white p-3 text-left font-medium text-ink-soft">
              Team size
            </th>
            {products.map((p) => (
              <td key={p.slug} className="p-3 text-ink-soft">
                {COMPANY_SIZE_SHORT[p.companySizes[0]]}–
                {COMPANY_SIZE_SHORT[p.companySizes[p.companySizes.length - 1]]}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className="sticky left-0 z-10 bg-white p-3 text-left font-medium text-ink-soft">
              Best industries
            </th>
            {products.map((p) => (
              <td key={p.slug} className="p-3 text-ink-soft">
                {p.industries.slice(0, 3).map((i) => INDUSTRY_LABELS[i]).join(', ')}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className="sticky left-0 z-10 bg-white p-3 text-left font-medium text-ink-soft">
              Implementation
            </th>
            {products.map((p) => (
              <td key={p.slug} className="p-3 text-ink-soft">
                {IMPLEMENTATION_LABELS[p.implementation]}
              </td>
            ))}
          </tr>
          {COMPARE_FEATURES.map((f) => (
            <tr key={f}>
              <th scope="row" className="sticky left-0 z-10 bg-white p-3 text-left font-medium text-ink-soft">
                {featureLabel(f)}
              </th>
              {products.map((p) => {
                const cfg = support(p.features[f]);
                return (
                  <td key={p.slug} className={`p-3 font-semibold ${cfg.className}`}>
                    <span aria-hidden>{cfg.icon}</span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
