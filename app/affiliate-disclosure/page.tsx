import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { ContentPage } from '@/components/ui/ContentPage';

export const metadata: Metadata = buildMetadata({
  title: 'Affiliate Disclosure',
  description:
    'How FieldServiceChoice makes money and why our commercial relationships never influence Fit Scores or editorial recommendations.',
  path: '/affiliate-disclosure/',
});

export default function AffiliateDisclosurePage() {
  return (
    <ContentPage
      title="Affiliate Disclosure"
      subtitle="How we make money, and how we keep it separate from our recommendations."
      crumbs={[{ name: 'Home', path: '/' }, { name: 'Affiliate Disclosure', path: '/affiliate-disclosure/' }]}
    >
      <p>
        FieldServiceChoice may earn referral fees from certain software providers when you visit or
        purchase through links on our site. This is how we fund the research that powers our reviews,
        comparisons and Finder.
      </p>
      <p>
        <strong>These relationships do not influence our Fit Scores or editorial recommendations.</strong>{' '}
        Our scoring engine does not read any commercial data, vendor payouts, affiliate status or
        partnership terms are never inputs. We recommend the right fit for your business even when we
        have no commercial relationship with the best option.
      </p>
      <h2>What this means for you</h2>
      <ul>
        <li>Outbound links to vendors may be affiliate or referral links.</li>
        <li>We label commercial relationships close to the recommendation, not just here.</li>
        <li>You never pay more because you came through FieldServiceChoice.</li>
      </ul>
      <p>
        For the full picture of how we research and score products. See our{' '}
        <a href="/methodology/">methodology</a> and <a href="/editorial-policy/">editorial policy</a>.
      </p>
    </ContentPage>
  );
}
