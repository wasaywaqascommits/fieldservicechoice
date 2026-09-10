import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ALL_BEST_SLUGS, getBestPageBySlug, getProductBySlug } from '@/lib/database/content';
import { buildMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ProductLogo } from '@/components/products/ProductLogo';
import { VendorLink } from '@/components/shared/VendorLink';
import { AffiliateDisclosure } from '@/components/shared/AffiliateDisclosure';
import { BestComparisonTable, type BestTableRow } from '@/components/best/BestComparisonTable';
import { FaqList } from '@/components/best/FaqList';
import { COMPANY_SIZE_SHORT, pricingStatusLabel } from '@/lib/labels';
import { faqPageJsonLd, itemListJsonLd, jsonLdScript } from '@/lib/seo/jsonld';
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

  const isHub = page.slug === 'field-service-management-software';
  const crumbs = [
    { name: 'Home', path: '/' },
    // The hub page IS "/best/field-service-management-software/"; only add the
    // "Best Software" crumb on the other best pages to avoid a redundant, same-URL crumb.
    ...(isHub ? [] : [{ name: 'Best Software', path: '/best/field-service-management-software/' }]),
    { name: page.h1, path: `/best/${page.slug}/` },
  ];

  const sortedEntries = [...page.entries].sort((a, b) => a.position - b.position);
  const tableRows: BestTableRow[] = sortedEntries
    .map((entry) => {
      const product = getProductBySlug(entry.slug);
      return product ? { position: entry.position, bestForLabel: entry.bestForLabel, product } : null;
    })
    .filter((r): r is BestTableRow => r !== null);

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(itemListJsonLd(tableRows.map((r) => r.product), page.h1))}
      />
      {page.faqs && page.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(faqPageJsonLd(page.faqs))}
        />
      )}

      <div className="container-page py-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{page.h1}</h1>
        <p className="mt-3 max-w-3xl text-ink-muted">{page.intro}</p>
        {page.lead && (
          <div className="mt-4 max-w-3xl space-y-3 text-ink-soft">
            {page.lead.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}
        <div className="mt-4 rounded-lg border border-slate-200 bg-surface-subtle p-4 text-sm text-ink-muted">
          {page.methodologyNote}
        </div>

        {/* At-a-glance comparison */}
        {tableRows.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-ink">At a glance</h2>
            <BestComparisonTable rows={tableRows} />
          </div>
        )}

        <div className="mt-10 space-y-5">
          {sortedEntries.map((entry) => {
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
                          {COMPANY_SIZE_SHORT[p.companySizes[0]]}–
                          {COMPANY_SIZE_SHORT[p.companySizes[p.companySizes.length - 1]]} technicians ·{' '}
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

                {p.verdict && (
                  <p className="mt-4 border-l-2 border-brand-200 pl-3 text-sm italic text-ink-soft">
                    {p.verdict}
                  </p>
                )}

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {p.pros.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-positive-fg">Pros</p>
                      <ul className="mt-2 space-y-1.5">
                        {p.pros.map((pro, i) => (
                          <li key={i} className="flex gap-2 text-sm text-ink-soft">
                            <span aria-hidden className="mt-px text-positive-fg">+</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {p.tradeoffs.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-warning-fg">Tradeoffs</p>
                      <ul className="mt-2 space-y-1.5">
                        {p.tradeoffs.map((t, i) => (
                          <li key={i} className="flex gap-2 text-sm text-ink-soft">
                            <span aria-hidden className="mt-px text-warning-fg">−</span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Buyer's-guide sections */}
        {page.sections && page.sections.length > 0 && (
          <div className="mt-12 max-w-3xl space-y-8">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-ink">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-ink-soft">
                  {section.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* FAQ */}
        {page.faqs && page.faqs.length > 0 && (
          <div className="mt-12 max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-ink">Frequently asked questions</h2>
            <FaqList faqs={page.faqs} />
          </div>
        )}

        <div className="mt-8">
          <AffiliateDisclosure />
        </div>
      </div>

      <CTASection title="Want a shortlist matched to your exact business?" buttonLabel="Find My Software" />
    </>
  );
}
