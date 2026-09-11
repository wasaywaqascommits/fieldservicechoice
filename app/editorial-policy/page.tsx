import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { ContentPage } from '@/components/ui/ContentPage';

export const metadata: Metadata = buildMetadata({
  title: 'Editorial Policy',
  description:
    'FieldServiceChoice editorial policy: independent editorial control, no pay-for-ranking, clear sponsorship labels, corrections, source standards and conflict-of-interest rules.',
  path: '/editorial-policy/',
});

export default function EditorialPolicyPage() {
  return (
    <ContentPage
      title="Editorial Policy"
      subtitle="The rules that keep our recommendations independent and useful."
      crumbs={[{ name: 'Home', path: '/' }, { name: 'Editorial Policy', path: '/editorial-policy/' }]}
    >
      <h2>Independent editorial control</h2>
      <p>Our editorial team has final say over reviews, comparisons, recommendations and Fit Scores. No advertiser, affiliate or partner can override editorial judgment.</p>
      <h2>No pay-for-ranking</h2>
      <p>Vendors cannot buy a higher Fit Score, a better ranking, or a more favorable review. Commercial relationships are never an input to our scoring.</p>
      <h2>Clear sponsorship labels</h2>
      <p>Where we have a commercial relationship, we disclose it clearly and close to the relevant recommendation, not only in the footer.</p>
      <h2>Corrections policy</h2>
      <p>If we get a fact wrong, we correct it promptly and update the verification date. Vendors and readers can request corrections via our contact page.</p>
      <h2>Vendor fact verification</h2>
      <p>Vendors may review and correct factual inaccuracies about their product. Vendors do not approve our editorial conclusions before publication.</p>
      <h2>Source standards</h2>
      <p>We prioritize official vendor sources for facts about pricing, features and integrations, supplemented by independent research. We do not claim hands-on testing unless it actually occurred.</p>
      <h2>Updating policy</h2>
      <p>We prioritize re-verifying the facts most likely to change, pricing and integrations first, and record when each was last checked.</p>
      <h2>Conflicts of interest</h2>
      <p>We recommend the right fit for the buyer even when there is no commercial relationship, and we disclose relationships transparently.</p>
      <h2>Affiliate disclosure</h2>
      <p>See our <a href="/affiliate-disclosure/">affiliate disclosure</a> for how we make money and how we keep it separate from recommendations.</p>
    </ContentPage>
  );
}
