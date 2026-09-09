import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ALL_PRODUCT_SLUGS,
  getComparisonsForProduct,
  getProductBySlug,
  getProductsBySlugs,
} from '@/lib/database/content';
import { buildMetadata } from '@/lib/seo/metadata';
import { jsonLdScript, softwareApplicationJsonLd } from '@/lib/seo/jsonld';
import { INDUSTRY_LABELS } from '@/data/industries';
import {
  COMPANY_SIZE_LABELS,
  IMPLEMENTATION_LABELS,
  PRICING_MODEL_LABELS,
  pricingStatusLabel,
} from '@/lib/labels';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ProductLogo } from '@/components/products/ProductLogo';
import { PricingBlock } from '@/components/products/PricingBlock';
import { FeatureTable } from '@/components/products/FeatureTable';
import { SourceList } from '@/components/products/SourceList';
import { LastVerified } from '@/components/products/VerificationBadge';
import { VendorLink } from '@/components/shared/VendorLink';
import { AffiliateDisclosure } from '@/components/shared/AffiliateDisclosure';
import { CTASection } from '@/components/shared/CTASection';

export function generateStaticParams() {
  return ALL_PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return buildMetadata({ title: 'Software not found', description: 'Not found', path: `/products/${slug}/`, noindex: true });
  return buildMetadata({
    title: `${product.name} Review: Pricing, Features, Pros & Cons`,
    description: `${product.name} review — ${product.tagline} See who it's best for, key features, integrations, pricing status, trade-offs and alternatives.`,
    path: `/products/${product.slug}/`,
    ogType: 'article',
  });
}

function Badge({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">
      <p className="text-[11px] uppercase tracking-wide text-ink-muted">{label}</p>
      <p className="text-sm font-medium text-ink">{value}</p>
    </div>
  );
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const alternatives = getProductsBySlugs(product.alternatives);
  const comparisons = getComparisonsForProduct(product.slug);
  const sizeRange = `${COMPANY_SIZE_LABELS[product.companySizes[0]]} – ${COMPANY_SIZE_LABELS[product.companySizes[product.companySizes.length - 1]]}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(softwareApplicationJsonLd(product))} />
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Software', path: '/software/' },
          { name: product.name, path: `/products/${product.slug}/` },
        ]}
      />

      {/* Header */}
      <div className="container-page pt-6">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <ProductLogo product={product} size="lg" />
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {product.name} Review: Pricing, Features, Pros, Cons &amp; Alternatives
              </h1>
              <p className="mt-2 max-w-2xl text-ink-muted">{product.description}</p>
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-2">
            <VendorLink productSlug={product.slug} affiliateSlug={product.commercial.affiliateLinkSlug} sourcePage="product">
              Visit {product.name}
            </VendorLink>
            <Link href={`/find-software/?industry=${product.industries[0]}`} className="btn-secondary">
              See if {product.name} matches my business
            </Link>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          <Badge label="Best for" value={product.bestFor[0]} />
          <Badge label="Team size" value={`${product.companySizes[0]}–${product.companySizes[product.companySizes.length - 1]}`} />
          <Badge label="Industries" value={product.industries.slice(0, 2).map((i) => INDUSTRY_LABELS[i]).join(', ')} />
          <Badge label="Pricing" value={PRICING_MODEL_LABELS[product.pricing.model]} />
          <Badge label="Implementation" value={IMPLEMENTATION_LABELS[product.implementation]} />
        </div>
      </div>

      <div className="container-page grid gap-10 py-10 lg:grid-cols-[1fr_320px]">
        <div className="space-y-10">
          {/* Verdict */}
          <section>
            <div className="rounded-xl border border-brand-200 bg-brand-50 p-5">
              <h2 className="text-lg font-bold text-brand-800">FieldServiceChoice Verdict</h2>
              <p className="mt-2 text-ink-soft">{product.verdict}</p>
            </div>
          </section>

          {/* Best for / Think twice */}
          <section className="grid gap-4 sm:grid-cols-2">
            <div className="card p-5">
              <h2 className="text-base font-bold text-positive-fg">Best for</h2>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {product.bestFor.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span aria-hidden className="text-positive-fg">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-5">
              <h2 className="text-base font-bold text-warning-fg">Think twice if</h2>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {product.notIdealFor.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span aria-hidden className="text-warning-fg">!</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Quick facts */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-ink">Quick facts</h2>
            <div className="card divide-y divide-slate-100">
              {[
                ['Company', product.vendorName],
                ['Product type', 'Field Service Management'],
                ['Target company size', sizeRange],
                ['Starting price', pricingStatusLabel(product.pricing.model, product.pricing.startingStatus)],
                ['Free trial', product.pricing.freeTrial == null ? 'Not verified' : product.pricing.freeTrial ? 'Yes' : 'No'],
                ['Mobile app', product.features.mobile_app === 'available' ? 'Yes' : 'Varies'],
                ['API', product.features.api === 'available' ? 'Yes' : product.features.api === 'plan_dependent' ? 'Plan-dependent' : 'Not verified'],
                ['Implementation', IMPLEMENTATION_LABELS[product.implementation]],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 px-4 py-2.5 text-sm">
                  <dt className="text-ink-muted">{k}</dt>
                  <dd className="text-right font-medium text-ink">{v}</dd>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing">
            <h2 className="mb-3 text-xl font-bold text-ink">Pricing</h2>
            <PricingBlock product={product} />
          </section>

          {/* Features */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-ink">Features</h2>
            <FeatureTable product={product} />
          </section>

          {/* Best fit */}
          <section className="grid gap-4 sm:grid-cols-2">
            <div className="card p-5">
              <h2 className="text-base font-bold text-ink">Best fit by company size</h2>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {product.companySizes.map((s) => (
                  <span key={s} className="chip border-brand-100 bg-brand-50 text-brand-700">{COMPANY_SIZE_LABELS[s]}</span>
                ))}
              </div>
            </div>
            <div className="card p-5">
              <h2 className="text-base font-bold text-ink">Best fit by industry</h2>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {product.industries.map((i) => (
                  <Link key={i} href={`/industries/${i}/`} className="chip border-brand-100 bg-brand-50 text-brand-700 hover:bg-brand-100">
                    {INDUSTRY_LABELS[i]}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Pros / trade-offs */}
          <section className="grid gap-4 sm:grid-cols-2">
            <div className="card p-5">
              <h2 className="text-base font-bold text-ink">Pros</h2>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {product.pros.map((p) => (
                  <li key={p} className="flex gap-2"><span aria-hidden className="text-positive-fg">+</span>{p}</li>
                ))}
              </ul>
            </div>
            <div className="card p-5">
              <h2 className="text-base font-bold text-ink">Trade-offs</h2>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {product.tradeoffs.map((p) => (
                  <li key={p} className="flex gap-2"><span aria-hidden className="text-ink-muted">–</span>{p}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Integrations */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-ink">Integrations</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {product.integrations.map((i) => (
                <div key={i.name} className="card flex items-center justify-between p-3 text-sm">
                  <span className="font-medium text-ink">{i.name}</span>
                  <span className={i.support === 'available' ? 'text-positive-fg' : 'text-ink-muted'}>
                    {i.support === 'available' ? 'Available' : 'Unverified'}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Implementation */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-ink">Implementation &amp; migration</h2>
            <div className="card p-5">
              <p className="text-sm text-ink-soft">
                <span className="font-semibold text-ink">Complexity: {IMPLEMENTATION_LABELS[product.implementation]}.</span>{' '}
                {product.implementationNotes}
              </p>
            </div>
          </section>

          {/* Alternatives */}
          {alternatives.length > 0 && (
            <section>
              <h2 className="mb-3 text-xl font-bold text-ink">Alternatives to {product.name}</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {alternatives.map((a) => (
                  <Link key={a.slug} href={`/products/${a.slug}/`} className="card flex items-center gap-3 p-4 hover:border-brand-300">
                    <ProductLogo product={a} size="sm" />
                    <div>
                      <p className="font-medium text-ink">{a.name}</p>
                      <p className="text-xs text-ink-muted">{a.bestFor[0]}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href={`/alternatives/${product.slug}/`} className="mt-3 inline-flex text-sm font-medium text-brand-700 hover:underline">
                See all {product.name} alternatives →
              </Link>
            </section>
          )}

          {/* Comparisons */}
          {comparisons.length > 0 && (
            <section>
              <h2 className="mb-3 text-xl font-bold text-ink">Compare {product.name}</h2>
              <div className="flex flex-wrap gap-2">
                {comparisons.map((c) => (
                  <Link key={c.slug} href={`/compare/${c.slug}/`} className="chip border-slate-300 bg-white text-ink-soft hover:border-brand-400">
                    {c.slug.replace(/-/g, ' ').replace(' vs ', ' vs ')}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Sources */}
          <section>
            <h2 className="mb-3 text-xl font-bold text-ink">Sources &amp; verification</h2>
            <SourceList sources={product.sources} />
            <div className="mt-4 grid gap-2 text-xs text-ink-muted sm:grid-cols-2">
              <LastVerified date={product.verification.pricingVerifiedAt} label="Pricing verified" />
              <LastVerified date={product.verification.featuresVerifiedAt} label="Features verified" />
              <LastVerified date={product.verification.integrationsVerifiedAt} label="Integrations verified" />
              <LastVerified date={product.verification.editorialReviewedAt} label="Editorially reviewed" />
            </div>
          </section>

          <AffiliateDisclosure />
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-20 lg:h-fit">
          <div className="card p-5">
            <h2 className="text-base font-bold text-ink">Is {product.name} right for you?</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Get a personalized Fit Score based on your trade, team size, workflows and budget.
            </p>
            <Link href={`/find-software/?industry=${product.industries[0]}`} className="btn-primary mt-4 w-full">
              Find my match
            </Link>
            <VendorLink
              productSlug={product.slug}
              affiliateSlug={product.commercial.affiliateLinkSlug}
              sourcePage="product-sidebar"
              className="btn-secondary mt-2 w-full"
            >
              Visit {product.name}
            </VendorLink>
            <p className="mt-3 text-[11px] text-ink-muted">{product.commercial.disclosure}</p>
          </div>
        </aside>
      </div>

      <CTASection title={`See if ${product.name} fits your business`} />
    </>
  );
}
