import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { ContentPage } from '@/components/ui/ContentPage';
import { DEFAULT_WEIGHTS, DIMENSION_LABELS, type FitWeights } from '@/lib/scoring/weights';
import { CTASection } from '@/components/shared/CTASection';

export const metadata: Metadata = buildMetadata({
  title: 'Our Methodology',
  description:
    'How FieldServiceChoice researches, verifies and scores field service management software — including our transparent, weighted Fit Score and why vendor payments are never an input.',
  path: '/methodology/',
});

export default function MethodologyPage() {
  const weightRows = (Object.keys(DEFAULT_WEIGHTS) as (keyof FitWeights)[]).map((k) => ({
    label: DIMENSION_LABELS[k],
    weight: Math.round(DEFAULT_WEIGHTS[k] * 100),
  }));

  return (
    <>
      <ContentPage
        title="Our Methodology"
        subtitle="How we research, verify and score field service software — and why commercial relationships never change our recommendations."
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Methodology', path: '/methodology/' }]}
      >
        <h2>What we evaluate</h2>
        <p>
          We evaluate field service management software on the dimensions that actually determine
          fit for a real business: trade and workflow suitability, must-have feature coverage,
          company and team-size fit, budget and cost, integrations (especially accounting),
          implementation complexity, residential/commercial operating model, contract and support
          flexibility, and mobile/offline needs.
        </p>

        <h2>How we research products</h2>
        <p>
          We research each platform primarily from official vendor sources — pricing pages, product
          documentation and integration directories — supplemented by independent research. Every
          major fact is intended to carry a source, a source type, a verification status and a
          last-verified date. Where we have not verified something, we say so rather than guessing.
        </p>

        <h2>How the Fit Score works</h2>
        <p>
          The FieldServiceChoice Fit Score is a transparent, rules-based score from 0–100 that is
          personalized to your answers in the Finder. Each dimension is scored 0–100 and combined
          using the published weights below. The score you see for a product changes depending on
          your business — it is not a generic star rating.
        </p>
        <div className="not-prose overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-subtle text-left text-ink-muted">
                <th className="p-3 font-medium">Dimension</th>
                <th className="p-3 font-medium">Weight</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {weightRows.map((r) => (
                <tr key={r.label}>
                  <td className="p-3 text-ink-soft">{r.label}</td>
                  <td className="p-3 font-medium text-ink">{r.weight}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Some requirements act as hard exclusions rather than score reductions — for example, if a
          capability you mark as required is explicitly unavailable, or if a product does not serve
          your region. We explain why each product scored the way it did.
        </p>

        <h2>How facts are verified</h2>
        <p>
          We label pricing, features and integrations with a verification status and a date. Data
          older than our freshness thresholds is flagged internally for re-verification (pricing
          after 90 days; integrations after 180 days).
        </p>

        <h2>How often data is updated</h2>
        <p>
          We review products on an ongoing basis and prioritize re-verifying the facts most likely
          to change — pricing and integrations first.
        </p>

        <h2>How vendor partnerships work</h2>
        <p>
          We may have affiliate or referral relationships with some vendors, and we may pass along
          qualified leads when a buyer explicitly consents. <strong>Vendor payments and affiliate
          commissions are never inputs in FieldServiceChoice Fit Scores.</strong> Vendors may
          correct factual inaccuracies, but vendors do not approve our editorial conclusions before
          publication.
        </p>
      </ContentPage>
      <CTASection />
    </>
  );
}
