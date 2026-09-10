import Link from 'next/link';
import { getAllProductsIncludingDrafts } from '@/lib/database/content';
import { VerificationBadge } from '@/components/products/VerificationBadge';

function flag(date: string | null) {
  return date ? <span className="text-positive-fg">{date}</span> : <span className="text-warning-fg">needs verification</span>;
}

export default async function AdminProducts({ searchParams }: { searchParams: Promise<{ filter?: string }> }) {
  const { filter } = await searchParams;
  let products = getAllProductsIncludingDrafts();
  if (filter === 'needs-pricing') products = products.filter((p) => !p.verification.pricingVerifiedAt);
  if (filter === 'needs-features') products = products.filter((p) => !p.verification.featuresVerifiedAt);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-ink">Products</h1>
        <div className="flex gap-2 text-sm">
          <Link href="/console-x7k29q/products/" className={`rounded-md px-3 py-1.5 ${!filter ? 'bg-brand-600 text-white' : 'text-ink-soft hover:bg-white'}`}>All</Link>
          <Link href="/console-x7k29q/products/?filter=needs-pricing" className={`rounded-md px-3 py-1.5 ${filter === 'needs-pricing' ? 'bg-brand-600 text-white' : 'text-ink-soft hover:bg-white'}`}>Needs pricing</Link>
          <Link href="/console-x7k29q/products/?filter=needs-features" className={`rounded-md px-3 py-1.5 ${filter === 'needs-features' ? 'bg-brand-600 text-white' : 'text-ink-soft hover:bg-white'}`}>Needs features</Link>
        </div>
      </div>

      <p className="mt-2 text-sm text-ink-muted">
        Editing products, pricing and sources writes to Supabase when configured. In preview mode
        this is a read-only view of the seed catalogue.
      </p>

      <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="bg-surface-subtle text-left text-ink-muted">
              <th className="p-3 font-medium">Product</th>
              <th className="p-3 font-medium">Status</th>
              <th className="p-3 font-medium">Pricing verified</th>
              <th className="p-3 font-medium">Features verified</th>
              <th className="p-3 font-medium">Editorial</th>
              <th className="p-3 font-medium">Commercial</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((p) => (
              <tr key={p.slug}>
                <td className="p-3 font-medium text-ink">
                  <Link href={`/products/${p.slug}/`} className="hover:text-brand-700">{p.name}</Link>
                </td>
                <td className="p-3">
                  <VerificationBadge status={p.published ? 'verified' : 'needs_verification'} />
                </td>
                <td className="p-3">{flag(p.verification.pricingVerifiedAt)}</td>
                <td className="p-3">{flag(p.verification.featuresVerifiedAt)}</td>
                <td className="p-3">{flag(p.verification.editorialReviewedAt)}</td>
                <td className="p-3 text-ink-muted">{p.commercial.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
