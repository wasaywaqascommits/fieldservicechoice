import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ALL_BEST_SLUGS, getBestPageBySlug, getProductBySlug } from '@/lib/database/content';
import { buildMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ProductLogo } from '@/components/products/ProductLogo';
import { VendorLink } from '@/components/shared/VendorLink';
import { AffiliateDisclosure } from '@/components/shared/AffiliateDisclosure';
import { pricingStatusLabel } from '@/lib/labels';
import { CTASection } from '@/components/shared/CTASection';

export function generateStaticParams() {
  return ALL_BEST_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getBestPageBySlug(slug);
  if (!page) return buildMetadata({ title: 'Not found', description: 'Not found', path: `/best/${slug}/`, noindex: true });
  return buildMetadata({
    title: page.h1,
    description: `${page.intro.slice(0, 155)}`,
    path: `/best/${page.slug}/`,
    ogType: 'article',
  });
}

export default async function BestPageView({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getBestPageBySlug(slug);
  if (!page) notFound();

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Best Software', path: '/best/field-service-management-software/' },
          { name: page.h1, path: `/best/${page.slug}/` },
        ]}
      />
      <div className="container-page py-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{page.h1}</h1>
        <p className="mt-3 max-w-3xl text-ink-muted">{page.intro}</p>
        <div className="mt-4 rounded-lg border border-slate-200 bg-surface-subtle p-4 text-sm text-ink-muted">
          {page.methodologyNote}
        </div>

        <div className="mt-8 space-y-4">
          {page.entries
            .sort((a, b) => a.position - b.position)
            .map((entry) => {
              const p = getProductBySlug(entry.slug);
              if (!p) return null;
              return (
                <div key={entry.slug} className="card p-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                        {entry.position}
                      </span>
                      <div className="flex items-start gap-3">
                        <ProductLogo product={p} />
                        <div>
                          <h2 className="text-lg font-bold text-ink">
                            <Link href={`/products/${p.slug}/`} className="hover:text-brand-700">{p.name}</Link>
                          </h2>
                          <p className="text-sm font-medium text-brand-700">{entry.bestForLabel}</p>
                          <p className="mt-1 text-sm text-ink-soft">{entry.rationale}</p>
                          <p className="mt-1 text-xs text-ink-muted">
                            {pricingStatusLabel(p.pricing.model, p.pricing.startingStatus)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/products/${p.slug}/`} className="btn-secondary">Review</Link>
                      <VendorLink productSlug={p.slug} affiliateSlug={p.commercial.affiliateLinkSlug} sourcePage="best">Visit</VendorLink>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="mt-8">
          <AffiliateDisclosure />
        </div>
      </div>

      <CTASection title="Want a shortlist matched to your exact business?" buttonLabel="Find My Software" />
    </>
  );
}
