import Link from 'next/link';
import { getServiceClient } from '@/lib/database/client';
import {
  getAllProductsIncludingDrafts,
  getComparisons,
  getIndustries,
} from '@/lib/database/content';

async function count(table: string): Promise<number | null> {
  const supabase = getServiceClient();
  if (!supabase) return null;
  try {
    const { count: c } = await supabase.from(table).select('*', { count: 'exact', head: true });
    return c ?? 0;
  } catch {
    return null;
  }
}

function StatCard({ label, value, href, hint }: { label: string; value: string | number; href?: string; hint?: string }) {
  const body = (
    <div className="card h-full p-5">
      <p className="text-sm text-ink-muted">{label}</p>
      <p className="mt-1 text-2xl font-bold text-ink">{value}</p>
      {hint && <p className="mt-1 text-xs text-ink-muted">{hint}</p>}
    </div>
  );
  return href ? <Link href={href}>{body}</Link> : body;
}

export default async function AdminDashboard() {
  const products = getAllProductsIncludingDrafts();
  const needsPricing = products.filter((p) => !p.verification.pricingVerifiedAt).length;
  const needsFeatures = products.filter((p) => !p.verification.featuresVerifiedAt).length;

  const [leads, partners, events] = await Promise.all([
    count('leads'),
    count('partner_inquiries'),
    count('attribution_events'),
  ]);

  const fmt = (n: number | null) => (n === null ? '—' : n);

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink">Dashboard</h1>
      <p className="mt-1 text-sm text-ink-muted">Overview of content, verification workload and pipeline.</p>

      <h2 className="mt-8 mb-3 text-sm font-semibold uppercase tracking-wide text-ink-muted">Content</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Products" value={products.length} href="/admin/products/" />
        <StatCard label="Needs pricing verification" value={needsPricing} href="/admin/products/?filter=needs-pricing" hint="pricingVerifiedAt is null" />
        <StatCard label="Needs feature verification" value={needsFeatures} href="/admin/products/?filter=needs-features" />
        <StatCard label="Comparisons / industries" value={`${getComparisons().length} / ${getIndustries().length}`} />
      </div>

      <h2 className="mt-8 mb-3 text-sm font-semibold uppercase tracking-wide text-ink-muted">Pipeline</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Leads" value={fmt(leads)} href="/admin/leads/" hint={leads === null ? 'Connect Supabase' : undefined} />
        <StatCard label="Partner inquiries" value={fmt(partners)} href="/admin/partners/" hint={partners === null ? 'Connect Supabase' : undefined} />
        <StatCard label="Tracked events" value={fmt(events)} hint={events === null ? 'Connect Supabase' : 'finder, vendor clicks, etc.'} />
        <StatCard label="Vendor clicks" value={fmt(events)} hint="See attribution_events" />
      </div>
    </div>
  );
}
