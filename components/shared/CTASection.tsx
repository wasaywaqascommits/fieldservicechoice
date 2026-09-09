import Link from 'next/link';

/**
 * Final Finder CTA band (spec §18 §9, §74). Every commercial page should feed
 * naturally into the Finder.
 */
export function CTASection({
  title = 'Find the software that fits your business',
  subtitle = 'Answer a few questions about your trade, team size, workflows and budget to get personalized Fit Scores.',
  buttonLabel = 'Find My Software',
  href = '/find-software/',
}: {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="bg-brand-600">
      <div className="container-page py-14 text-center">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-100">{subtitle}</p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
