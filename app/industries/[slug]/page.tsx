import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ALL_INDUSTRY_SLUGS,
  getComparisonBySlug,
  getDefaultAuthor,
  getIndustryBySlug,
  getProductBySlug,
  getProductsBySlugs,
} from '@/lib/database/content';
import { buildMetadata } from '@/lib/seo/metadata';
import { faqPageJsonLd, itemListJsonLd, jsonLdScript } from '@/lib/seo/jsonld';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ProductCard } from '@/components/products/ProductCard';
import { BestComparisonTable, type BestTableRow } from '@/components/best/BestComparisonTable';
import { FaqList } from '@/components/best/FaqList';
import { CTASection } from '@/components/shared/CTASection';
import { AuthorByline } from '@/components/shared/AuthorByline';

export function generateStaticParams() {
  return ALL_INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustryBySlug(slug);
  if (!page) return buildMetadata({ title: 'Not found', description: 'Not found', path: `/industries/${slug}/`, noindex: true });
  return buildMetadata({
    title: `Best ${page.shortName} Field Service Software`,
    description: `${page.intro.slice(0, 155)}`,
    path: `/industries/${page.slug}/`,
    ogType: 'article',
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getIndustryBySlug(slug);
  if (!page) notFound();

  const products = getProductsBySlugs(page.recommendedProducts);
  const author = getDefaultAuthor();
  const tableRows: BestTableRow[] = products.map((product, i) => ({
    position: i + 1,
    bestForLabel: product.bestFor[0],
    product,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(itemListJsonLd(products, page.name))}
      />
      {page.faqs && page.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(faqPageJsonLd(page.faqs))}
        />
      )}
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: page.name, path: `/industries/${page.slug}/` },
        ]}
      />
      <div className="container-page py-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{page.name}</h1>
        <div className="mt-3">
          <AuthorByline author={author} prefix="By" />
        </div>
        <p className="mt-3 max-w-3xl text-ink-muted">{page.intro}</p>

        <section className="mt-8">
          <h2 className="mb-2 text-lg font-semibold text-ink">What {page.shortName} businesses need most</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {page.keyRequirements.map((r) => (
              <li key={r} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-ink-soft">
                <span aria-hidden className="text-brand-600">✓</span>
                {r}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-ink">Recommended software for {page.shortName}</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>

        {tableRows.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-3 text-xl font-bold text-ink">{page.shortName} software compared</h2>
            <BestComparisonTable rows={tableRows} />
          </section>
        )}

        <div className="mt-10 space-y-8 prose-fsc max-w-3xl">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.body.map((b, i) => (
                <p key={i}>{b}</p>
              ))}
            </section>
          ))}
        </div>

        {page.faqs && page.faqs.length > 0 && (
          <section className="mt-12 max-w-3xl">
            <h2 className="mb-4 text-xl font-bold text-ink">{page.shortName} software: frequently asked questions</h2>
            <FaqList faqs={page.faqs} />
          </section>
        )}

        {page.relatedComparisons.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-3 text-xl font-bold text-ink">Related comparisons</h2>
            <div className="flex flex-wrap gap-2">
              {page.relatedComparisons.map((cslug) => {
                const c = getComparisonBySlug(cslug);
                if (!c) return null;
                const a = getProductBySlug(c.productA);
                const b = getProductBySlug(c.productB);
                return (
                  <Link key={cslug} href={`/compare/${cslug}/`} className="chip border-slate-300 bg-white text-ink-soft hover:border-brand-400">
                    {a?.name} vs {b?.name}
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>

      <CTASection title={`Find the best software for my ${page.shortName} business`} buttonLabel="Find My Software" href={`/find-software/?industry=${page.slug}`} />
    </>
  );
}
