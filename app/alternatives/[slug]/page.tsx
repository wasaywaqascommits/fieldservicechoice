import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ALL_ALTERNATIVE_SLUGS, getAlternativePageBySlug, getProductBySlug } from '@/lib/database/content';
import { buildMetadata } from '@/lib/seo/metadata';
import { faqPageJsonLd, itemListJsonLd, jsonLdScript } from '@/lib/seo/jsonld';
import { alternativesFaqs } from '@/lib/alternatives/faqs';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { FaqList } from '@/components/best/FaqList';
import { ProductLogo } from '@/components/products/ProductLogo';
import { VendorLink } from '@/components/shared/VendorLink';
import { AffiliateDisclosure } from '@/components/shared/AffiliateDisclosure';
import { CTASection } from '@/components/shared/CTASection';

export function generateStaticParams() {
  return ALL_ALTERNATIVE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getAlternativePageBySlug(slug);
  const product = getProductBySlug(slug);
  if (!page || !product) return buildMetadata({ title: 'Not found', description: 'Not found', path: `/alternatives/${slug}/`, noindex: true });
  return buildMetadata({
    title: `Best ${product.name} Alternatives`,
    description: `Looking for a ${product.name} alternative? Compare the best options by cost, implementation, business size and features, with independent Fit guidance.`,
    path: `/alternatives/${slug}/`,
    ogType: 'article',
  });
}

export default async function AlternativesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getAlternativePageBySlug(slug);
  const product = getProductBySlug(slug);
  if (!page || !product) notFound();

  const resolvedAlts = page.alternatives
    .map((alt) => {
      const p = getProductBySlug(alt.slug);
      return p ? { alt, product: p } : null;
    })
    .filter((r): r is { alt: (typeof page.alternatives)[number]; product: NonNullable<ReturnType<typeof getProductBySlug>> } => r !== null);
  const altProducts = resolvedAlts.map((r) => r.product);
  const faqs = alternativesFaqs(
    product,
    page,
    resolvedAlts.map((r) => ({ name: r.product.name, bestFor: r.alt.bestFor })),
  );

  return (
    <>
      {altProducts.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(itemListJsonLd(altProducts, `Best ${product.name} alternatives`))}
        />
      )}
      {faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqPageJsonLd(faqs))} />
      )}
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Software', path: '/software/' },
          { name: product.name, path: `/products/${product.slug}/` },
          { name: 'Alternatives', path: `/alternatives/${slug}/` },
        ]}
      />
      <div className="container-page py-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Best {product.name} Alternatives</h1>
        <p className="mt-3 max-w-3xl text-ink-muted">{page.intro}</p>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-semibold text-ink">Why people look for an alternative</h2>
          <ul className="flex flex-wrap gap-2">
            {page.reasons.map((r) => (
              <li key={r} className="chip border-slate-300 bg-white text-ink-soft">{r}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 space-y-4">
          {page.alternatives.map((alt) => {
            const p = getProductBySlug(alt.slug);
            if (!p) return null;
            return (
              <div key={alt.slug} className="card p-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <ProductLogo product={p} />
                    <div>
                      <h3 className="text-lg font-bold text-ink">
                        <Link href={`/products/${p.slug}/`} className="hover:text-brand-700">{p.name}</Link>
                      </h3>
                      <p className="text-sm text-ink-muted">Best for: {alt.bestFor}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/products/${p.slug}/`} className="btn-secondary">Review</Link>
                    <VendorLink productSlug={p.slug} affiliateSlug={p.commercial.affiliateLinkSlug} sourcePage="alternatives">Visit</VendorLink>
                  </div>
                </div>
                <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                  <p className="text-ink-soft"><span className="font-semibold text-ink">Why consider it:</span> {alt.whyConsider}</p>
                  <p className="text-ink-soft"><span className="font-semibold text-ink">Major difference:</span> {alt.majorDifference}</p>
                </div>
              </div>
            );
          })}
        </div>

        {faqs.length > 0 && (
          <div className="mt-12 max-w-3xl">
            <h2 className="mb-4 text-xl font-bold text-ink">{product.name} alternatives: frequently asked questions</h2>
            <FaqList faqs={faqs} />
          </div>
        )}

        <div className="mt-8">
          <AffiliateDisclosure />
        </div>
      </div>

      <CTASection title={`Find your best ${product.name} alternative`} buttonLabel="Find My Match" />
    </>
  );
}
