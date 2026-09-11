import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/metadata';
import { ContentPage } from '@/components/ui/ContentPage';
import { NewsletterSignup } from '@/components/forms/NewsletterSignup';

export const metadata: Metadata = buildMetadata({
  title: 'Contact FieldServiceChoice',
  description: 'Get in touch with FieldServiceChoice, corrections, partnerships, press and general questions.',
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <ContentPage
      title="Contact us"
      subtitle="Questions, corrections, partnerships or press, we’d love to hear from you."
      crumbs={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact/' }]}
    >
      <h2>General & corrections</h2>
      <p>
        For general questions or to request a correction to a product’s facts, email{' '}
        <a href="mailto:hello@fieldservicechoice.com">hello@fieldservicechoice.com</a>. We take data
        accuracy seriously. See our <Link href="/data-verification/">data verification</Link> policy.
      </p>
      <h2>Software vendors</h2>
      <p>
        Interested in partnering or verifying your product data? Visit{' '}
        <Link href="/partner-with-us/">Partner With Us</Link>.
      </p>
      <h2>Field service software updates</h2>
      <p className="not-prose">Get occasional updates on pricing changes, new integrations and comparisons.</p>
      <div className="not-prose mt-3">
        <NewsletterSignup />
      </div>
    </ContentPage>
  );
}
