import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/metadata';
import {
  getComparisons,
  getGuides,
  getIndustries,
  getProductsBySlugs,
} from '@/lib/database/content';
import { getProductBySlug } from '@/lib/database/content';
import { Section, SectionHeading } from '@/components/ui/Section';
import { ProductCard } from '@/components/products/ProductCard';
import { CTASection } from '@/components/shared/CTASection';
import { FitScoreExample } from '@/components/home/FitScoreExample';
import { itemListJsonLd, jsonLdScript } from '@/lib/seo/jsonld';
import { INDUSTRY_LABELS } from '@/data/industries';

export const metadata: Metadata = buildMetadata({
  title: 'Compare Field Service Software by Trade & Budget',
  description:
    'Compare leading field service platforms based on your trade, team size, workflows, integrations and budget. Independent, transparent recommendations — not vendor payouts.',
  path: '/',
});

const HERO_INDUSTRIES = ['hvac', 'plumbing', 'electrical', 'roofing', 'landscaping', 'pest-control'] as const;
const POPULAR_SLUGS = ['jobber', 'housecall-pro', 'servicetitan', 'workiz', 'fieldpulse', 'fieldedge'];

export default function HomePage() {
  const popular = getProductsBySlugs(POPULAR_SLUGS);
  const industries = getIndustries();
  const comparisons = getComparisons().slice(0, 6);
  const guides = getGuides();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-surface-sky to-white">
        <div className="container-page py-16 text-center sm:py-20">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-700">
            Specialists in Field Service Management software
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Find the Right Field Service Software for Your Business
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-muted">
            Compare leading field service platforms based on your trade, team size, workflows,
            integrations and budget.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/find-software/" className="btn-primary px-6 py-3 text-base">
              Find My Software
            </Link>
            <Link href="/software/" className="btn-secondary px-6 py-3 text-base">
              Browse Software
            </Link>
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Independent comparisons · Transparent methodology · Recommendations based on your
            business—not vendor payouts.
          </p>

          {/* Lightweight Finder preview */}
          <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-slate-200 bg-white p-5 shadow-card">
            <p className="mb-3 text-sm font-semibold text-ink">What type of business do you run?</p>
            <div className="flex flex-wrap justify-center gap-2">
              {HERO_INDUSTRIES.map((slug) => (
                <Link
                  key={slug}
                  href={`/find-software/?industry=${slug}`}
                  className="chip cursor-pointer border-slate-300 bg-white px-3 py-1.5 text-ink-soft hover:border-brand-400 hover:text-brand-700"
                >
                  {INDUSTRY_LABELS[slug]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is field service software (definitional / snippet-shaped) */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="The basics" title="What is field service software?" />
          <p className="text-lg text-ink-soft">
            Field service software (also called field service management, or FSM, software) is a
            platform that helps trade and home-service businesses run the work their technicians do
            in the field — scheduling and dispatching jobs, tracking technicians, quoting and
            invoicing, taking payments, and keeping a full history for every customer.
          </p>
          <p className="mt-4 text-ink-muted">
            The best fit depends on your trade, team size and how you work. Core capabilities to
            weigh include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {[
              ['Scheduling & dispatch', 'Assign and route jobs to the right technician.'],
              ['Estimates & invoicing', 'Quote work and get paid faster.'],
              ['Technician mobile app', 'Job details, notes and photos in the field — often offline.'],
              ['GPS & routing', 'Live location tracking and optimized multi-stop routes.'],
              ['Payments', 'Card and ACH processing, sometimes with consumer financing.'],
              ['Accounting integration', 'Two-way sync with QuickBooks, Xero and others.'],
            ].map(([term, desc]) => (
              <li key={term} className="flex gap-2 text-sm text-ink-soft">
                <span aria-hidden className="mt-0.5 text-brand-600">
                  ✓
                </span>
                <span>
                  <span className="font-semibold text-ink">{term}</span> — {desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-ink-muted">
            New to the category? Start with our guide to the{' '}
            <Link
              href="/best/field-service-management-software/"
              className="font-medium text-brand-700 hover:underline"
            >
              best field service management software
            </Link>
            , or get matched to your business with the{' '}
            <Link href="/find-software/" className="font-medium text-brand-700 hover:underline">
              software finder
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* Popular software */}
      <Section tone="subtle">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            itemListJsonLd(popular, 'Field service software platforms buyers compare most'),
          )}
        />
        <SectionHeading eyebrow="Popular software" title="The platforms buyers compare most" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-6">
          <Link href="/software/" className="font-medium text-brand-700 hover:underline">
            Browse all 15 platforms →
          </Link>
        </div>
      </Section>

      {/* Find software for your trade */}
      <Section>
        <SectionHeading
          eyebrow="By industry"
          title="Find software for your trade"
          subtitle="Every trade has different software requirements. We evaluate them trade-by-trade."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <Link
              key={i.slug}
              href={`/industries/${i.slug}/`}
              className="card group flex items-center justify-between p-5 hover:border-brand-300"
            >
              <div>
                <h3 className="font-semibold text-ink group-hover:text-brand-700">{i.shortName}</h3>
                <p className="mt-1 text-sm text-ink-muted">Best software for {i.shortName.toLowerCase()} businesses</p>
              </div>
              <span aria-hidden className="text-brand-600">→</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Popular comparisons */}
      <Section tone="subtle">
        <SectionHeading eyebrow="Head to head" title="Popular comparisons" />
        <div className="grid gap-3 sm:grid-cols-2">
          {comparisons.map((c) => {
            const a = getProductBySlug(c.productA);
            const b = getProductBySlug(c.productB);
            if (!a || !b) return null;
            return (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}/`}
                className="card flex items-center justify-between p-4 hover:border-brand-300"
              >
                <span className="font-medium text-ink">
                  {a.name} <span className="text-ink-muted">vs</span> {b.name}
                </span>
                <span aria-hidden className="text-brand-600">→</span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeading eyebrow="How it works" title="Personalized matches in three steps" center />
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { n: 1, t: 'Tell us about your business', d: 'Your trade, team size, workflows, integrations and budget.' },
            { n: 2, t: 'We compare your requirements', d: 'Our transparent Fit Score weighs each product against your needs.' },
            { n: 3, t: 'Get personalized software matches', d: 'See your best-fit platforms, why they matched, and their trade-offs.' },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-brand-600 text-lg font-bold text-white">
                {s.n}
              </div>
              <h3 className="mt-4 font-semibold text-ink">{s.t}</h3>
              <p className="mt-2 text-sm text-ink-muted">{s.d}</p>
            </div>
          ))}
        </div>

        {/* Real, build-time Fit Score output for a sample buyer */}
        <div className="mt-12">
          <p className="mb-5 text-center text-sm font-semibold uppercase tracking-wide text-brand-600">
            What a Fit Score looks like
          </p>
          <FitScoreExample />
        </div>
      </Section>

      {/* Why FieldServiceChoice */}
      <Section tone="sky">
        <SectionHeading eyebrow="Why FieldServiceChoice" title="Built for buyers, not vendors" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['Field-service specialization', 'We focus only on field service management — not every software category.'],
            ['Transparent scoring', 'Our Fit Score methodology is published and explained on every match.'],
            ['Real trade-specific requirements', 'HVAC, plumbing, roofing and pest control are evaluated on their own terms.'],
            ['Pricing verification', 'We label what’s verified, what’s quote-based, and when it was last checked.'],
            ['No pay-for-ranking', 'Vendor payments never change Fit Scores or editorial recommendations.'],
            ['Useful even without a deal', 'We recommend the right fit even when there’s no affiliate relationship.'],
          ].map(([t, d]) => (
            <div key={t} className="card p-5">
              <h3 className="font-semibold text-ink">{t}</h3>
              <p className="mt-2 text-sm text-ink-muted">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Buying guides */}
      <Section>
        <SectionHeading eyebrow="Resources" title="Popular buying guides" />
        <div className="grid gap-4 sm:grid-cols-2">
          {guides.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}/`} className="card p-5 hover:border-brand-300">
              <h3 className="font-semibold text-ink">{g.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{g.intro.slice(0, 130)}…</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Methodology trust */}
      <Section tone="subtle">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-ink">How we make recommendations</h2>
          <p className="mt-3 text-ink-muted">
            We research each platform from official sources, structure the data, and score products
            against your specific requirements using a published, weighted methodology. Commercial
            relationships are never an input.
          </p>

          {/* Visible verification proof — every pricing fact carries a status label */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-ink-muted">We label every pricing fact:</span>
            <span className="chip border-positive-border bg-positive-bg px-3 py-1 text-xs font-medium text-positive-fg">
              ✓ Verified
            </span>
            <span className="chip border-warning-border bg-warning-bg px-3 py-1 text-xs font-medium text-warning-fg">
              Quote-based
            </span>
            <span className="chip border-slate-300 bg-white px-3 py-1 text-xs font-medium text-ink-soft">
              Last checked, dated
            </span>
          </div>

          <p className="mt-6 text-sm text-ink-muted">
            Researched and maintained by the FieldServiceChoice editorial team.
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/independence/" className="font-medium text-brand-700 hover:underline">
              Our Independence Pledge →
            </Link>
            <Link href="/methodology/" className="font-medium text-brand-700 hover:underline">
              Full methodology →
            </Link>
            <Link href="/editorial-policy/" className="font-medium text-brand-700 hover:underline">
              Editorial policy →
            </Link>
            <Link href="/data-verification/" className="font-medium text-brand-700 hover:underline">
              How we verify data →
            </Link>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
