import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { FinderClient } from '@/components/finder/FinderClient';
import { INDUSTRY_LABELS } from '@/data/industries';
import type { IndustrySlug } from '@/types';

export const metadata: Metadata = buildMetadata({
  title: 'Find My Field Service Software',
  description:
    'Answer a few questions about your trade, team size, workflows and budget to get personalized Fit Scores for the best field service management software for your business.',
  path: '/find-software/',
});

function isIndustry(v: string | undefined): v is IndustrySlug {
  return !!v && v in INDUSTRY_LABELS;
}

export default async function FindSoftwarePage({
  searchParams,
}: {
  searchParams: Promise<{ industry?: string }>;
}) {
  const sp = await searchParams;
  const initialAnswers = isIndustry(sp.industry) ? { industry: sp.industry } : undefined;

  return (
    <div className="bg-surface-subtle">
      <div className="container-page py-10 sm:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Find your field service software
          </h1>
          <p className="mt-3 text-ink-muted">
            Get personalized Fit Scores based on your trade, team size, workflows, integrations and
            budget. No email required to see your matches.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <FinderClient initialAnswers={initialAnswers} />
        </div>

        {/* Crawlable context for SEO, this landing page is indexable (spec §47, §110). */}
        <div className="mx-auto mt-10 max-w-2xl prose-fsc text-sm">
          <h2 className="text-lg font-semibold text-ink">How the Finder works</h2>
          <p>
            The FieldServiceChoice Finder matches your business to field service management software
            using a transparent, weighted Fit Score. We consider your trade and workflows, must-have
            features, team size, budget, accounting integrations, implementation complexity and more.
            Vendor payments never influence your results.
          </p>
        </div>
      </div>
    </div>
  );
}
