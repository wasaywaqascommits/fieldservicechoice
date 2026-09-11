import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { ContentPage } from '@/components/ui/ContentPage';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Use',
  description: 'The terms governing your use of FieldServiceChoice.',
  path: '/terms/',
});

export default function TermsPage() {
  return (
    <ContentPage
      title="Terms of Use"
      crumbs={[{ name: 'Home', path: '/' }, { name: 'Terms', path: '/terms/' }]}
      updated="2026-09-10"
    >
      <div className="rounded-lg border border-warning-border bg-warning-bg p-4 text-sm text-warning-fg">
        This is a template terms of use provided for development. It is not legal advice, have it
        reviewed by qualified counsel before launch.
      </div>
      <h2>Acceptance of terms</h2>
      <p>By using FieldServiceChoice, you agree to these terms. If you do not agree, please do not use the site.</p>
      <h2>Informational purpose</h2>
      <p>
        Our reviews, comparisons, Fit Scores and recommendations are provided for informational
        purposes to help you evaluate software. They are our independent opinions and do not
        constitute professional, legal or financial advice. Always confirm current pricing, features
        and terms directly with the vendor before purchasing.
      </p>
      <h2>Commercial relationships</h2>
      <p>
        We may earn referral fees from some providers. See our{' '}
        <a href="/affiliate-disclosure/">affiliate disclosure</a>. These relationships do not affect
        our recommendations.
      </p>
      <h2>No warranty</h2>
      <p>
        The site is provided “as is” without warranties of any kind. We work hard to keep information
        accurate and dated, but we do not guarantee it is complete or error-free.
      </p>
      <h2>Limitation of liability</h2>
      <p>To the fullest extent permitted by law, FieldServiceChoice is not liable for decisions made based on information on the site.</p>
      <h2>Contact</h2>
      <p>Questions about these terms? Email legal@fieldservicechoice.com.</p>
    </ContentPage>
  );
}
