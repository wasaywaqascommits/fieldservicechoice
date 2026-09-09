'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type {
  AccountingSystem,
  BudgetBand,
  FinderAnswers,
} from '@/types/finder';
import type { BusinessModel, CompanySizeBand, FeatureKey, IndustrySlug } from '@/types';
import { getProducts } from '@/lib/database/content';
import { rankProducts } from '@/lib/scoring/engine';
import {
  ACCOUNTING_LABELS,
  BUDGET_LABELS,
  BUSINESS_MODEL_LABELS,
  COMPANY_SIZE_LABELS,
} from '@/lib/labels';
import { INDUSTRY_LABELS } from '@/data/industries';
import { FINDER_FEATURE_CHOICES, featureLabel } from '@/data/features';
import { EVENTS, track } from '@/lib/analytics/events';
import { AffiliateDisclosure } from '@/components/shared/AffiliateDisclosure';
import { FinderResultCard } from './FinderResultCard';
import { LeadForm } from './LeadForm';

type Option<T extends string> = { value: T; label: string };

function optionsFrom<T extends string>(labels: Record<T, string>): Option<T>[] {
  return (Object.keys(labels) as T[]).map((value) => ({ value, label: labels[value] }));
}

const INDUSTRY_OPTIONS = optionsFrom<IndustrySlug>(INDUSTRY_LABELS);
const SIZE_OPTIONS = optionsFrom<CompanySizeBand>(COMPANY_SIZE_LABELS);
const MODEL_OPTIONS = optionsFrom<BusinessModel>(BUSINESS_MODEL_LABELS);
const ACCOUNTING_OPTIONS = optionsFrom<AccountingSystem>(ACCOUNTING_LABELS);
const BUDGET_OPTIONS = optionsFrom<BudgetBand>(BUDGET_LABELS);

const TOTAL_STEPS = 6;

export function FinderClient({ initialAnswers }: { initialAnswers?: Partial<FinderAnswers> }) {
  const [answers, setAnswers] = useState<Partial<FinderAnswers>>(initialAnswers ?? {});
  const [features, setFeatures] = useState<FeatureKey[]>(initialAnswers?.requiredFeatures ?? []);
  const [step, setStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [refineOpen, setRefineOpen] = useState(false);

  const fullAnswers: FinderAnswers = useMemo(
    () => ({
      industry: answers.industry ?? 'other',
      technicians: answers.technicians ?? '2-5',
      businessModel: answers.businessModel ?? 'residential',
      requiredFeatures: features,
      accounting: answers.accounting ?? 'not_important',
      budget: answers.budget ?? 'not_sure',
      needsMultiLocation: answers.needsMultiLocation,
      needsInventory: answers.needsInventory,
      needsOfflineMobile: answers.needsOfflineMobile,
      needsApi: answers.needsApi,
    }),
    [answers, features],
  );

  const results = useMemo(() => {
    if (!showResults) return [];
    return rankProducts(fullAnswers, getProducts(), { limit: 5 });
  }, [fullAnswers, showResults]);

  const matchedProducts = useMemo(() => {
    const all = getProducts();
    return results
      .map((r) => {
        const product = all.find((p) => p.slug === r.productSlug);
        return product ? { product, score: r.score, result: r } : null;
      })
      .filter((x): x is { product: (typeof all)[number]; score: number; result: (typeof results)[number] } => Boolean(x));
  }, [results]);

  function setSingle<K extends keyof FinderAnswers>(key: K, value: FinderAnswers[K]) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    track(EVENTS.finderAnswer, { step: key, value: String(value) });
    advance();
  }

  function advance() {
    if (step === 0 && !answers.industry) track(EVENTS.finderStart, {});
    if (step + 1 >= TOTAL_STEPS) {
      finish();
    } else {
      track(EVENTS.finderStepComplete, { step });
      setStep((s) => s + 1);
    }
  }

  function finish() {
    setShowResults(true);
    track(EVENTS.finderComplete, {
      industry: fullAnswers.industry,
      technicians: fullAnswers.technicians,
      budget: fullAnswers.budget,
    });
  }

  function toggleFeature(f: FeatureKey) {
    setFeatures((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));
  }

  function toggleRefine(key: 'needsMultiLocation' | 'needsInventory' | 'needsOfflineMobile' | 'needsApi') {
    setAnswers((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  /* ---------------------------------------------------------------------- */
  /* Results view                                                           */
  /* ---------------------------------------------------------------------- */
  if (showResults) {
    return (
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-ink">Your top matches</h2>
            <p className="text-sm text-ink-muted">
              Personalized Fit Scores for a {INDUSTRY_LABELS[fullAnswers.industry].toLowerCase()} business,{' '}
              {COMPANY_SIZE_LABELS[fullAnswers.technicians].toLowerCase()}.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setShowResults(false);
              setStep(0);
            }}
            className="btn-secondary"
          >
            Start over
          </button>
        </div>

        <AffiliateDisclosure compact />

        <div className="rounded-lg border border-slate-200 bg-white">
          <button
            type="button"
            onClick={() => setRefineOpen((v) => !v)}
            className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-ink-soft"
            aria-expanded={refineOpen}
          >
            Refine your results (optional)
            <span aria-hidden>{refineOpen ? '−' : '+'}</span>
          </button>
          {refineOpen && (
            <div className="grid gap-2 border-t border-slate-100 p-4 sm:grid-cols-2">
              <RefineToggle label="I need multi-location support" checked={!!fullAnswers.needsMultiLocation} onChange={() => toggleRefine('needsMultiLocation')} />
              <RefineToggle label="I need inventory management" checked={!!fullAnswers.needsInventory} onChange={() => toggleRefine('needsInventory')} />
              <RefineToggle label="I need offline mobile use" checked={!!fullAnswers.needsOfflineMobile} onChange={() => toggleRefine('needsOfflineMobile')} />
              <RefineToggle label="I need API access" checked={!!fullAnswers.needsApi} onChange={() => toggleRefine('needsApi')} />
            </div>
          )}
        </div>

        {matchedProducts.length === 0 ? (
          <div className="card p-6 text-center text-ink-muted">
            No products matched every hard requirement. Try relaxing a required capability above.
          </div>
        ) : (
          <div className="space-y-4">
            {matchedProducts.map((m, i) => (
              <FinderResultCard key={m.product.slug} product={m.product} result={m.result} rank={i + 1} />
            ))}
          </div>
        )}

        <LeadForm
          matches={matchedProducts.map((m) => ({ product: m.product, score: m.score }))}
          answers={fullAnswers}
          sourcePage="finder"
        />

        <p className="text-center text-xs text-ink-muted">
          Want to browse everything instead?{' '}
          <Link href="/software/" className="text-brand-700 hover:underline">
            See all field service software
          </Link>
          .
        </p>
      </div>
    );
  }

  /* ---------------------------------------------------------------------- */
  /* Questionnaire view                                                     */
  /* ---------------------------------------------------------------------- */
  return (
    <div>
      <FinderProgress step={step} total={TOTAL_STEPS} onBack={step > 0 ? () => setStep((s) => s - 1) : undefined} />

      {step === 0 && (
        <QuestionSingle
          title="What type of business do you run?"
          options={INDUSTRY_OPTIONS}
          selected={answers.industry}
          onSelect={(v) => setSingle('industry', v)}
        />
      )}
      {step === 1 && (
        <QuestionSingle
          title="How many field technicians do you have?"
          options={SIZE_OPTIONS}
          selected={answers.technicians}
          onSelect={(v) => setSingle('technicians', v)}
        />
      )}
      {step === 2 && (
        <QuestionSingle
          title="Your work is mostly…"
          options={MODEL_OPTIONS}
          selected={answers.businessModel}
          onSelect={(v) => setSingle('businessModel', v)}
        />
      )}
      {step === 3 && (
        <div>
          <h2 className="mb-1 text-xl font-bold text-ink">What do you need most?</h2>
          <p className="mb-4 text-sm text-ink-muted">Select all that apply — or skip if you’re not sure yet.</p>
          <div className="flex flex-wrap gap-2">
            {FINDER_FEATURE_CHOICES.map((f) => {
              const active = features.includes(f);
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => toggleFeature(f)}
                  aria-pressed={active}
                  className={`chip cursor-pointer px-3 py-1.5 ${
                    active
                      ? 'border-brand-600 bg-brand-600 text-white'
                      : 'border-slate-300 bg-white text-ink-soft hover:border-brand-400'
                  }`}
                >
                  {featureLabel(f)}
                </button>
              );
            })}
          </div>
          <button type="button" onClick={advance} className="btn-primary mt-6">
            Continue
          </button>
        </div>
      )}
      {step === 4 && (
        <QuestionSingle
          title="Which accounting system do you use?"
          options={ACCOUNTING_OPTIONS}
          selected={answers.accounting}
          onSelect={(v) => setSingle('accounting', v)}
        />
      )}
      {step === 5 && (
        <QuestionSingle
          title="Approximate monthly software budget?"
          options={BUDGET_OPTIONS}
          selected={answers.budget}
          onSelect={(v) => setSingle('budget', v)}
        />
      )}
    </div>
  );
}

function FinderProgress({ step, total, onBack }: { step: number; total: number; onBack?: () => void }) {
  const pct = Math.round((step / total) * 100);
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between text-xs text-ink-muted">
        <span>
          Step {step + 1} of {total}
        </span>
        {onBack && (
          <button type="button" onClick={onBack} className="font-medium text-brand-700 hover:underline">
            ← Back
          </button>
        )}
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-brand-600 transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function QuestionSingle<T extends string>({
  title,
  options,
  selected,
  onSelect,
}: {
  title: string;
  options: Option<T>[];
  selected: T | undefined;
  onSelect: (v: T) => void;
}) {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-ink">{title}</h2>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => onSelect(o.value)}
            aria-pressed={selected === o.value}
            className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition ${
              selected === o.value
                ? 'border-brand-600 bg-brand-50 text-brand-700'
                : 'border-slate-300 bg-white text-ink-soft hover:border-brand-400 hover:bg-surface-subtle'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function RefineToggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-sm text-ink-soft">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
      />
      {label}
    </label>
  );
}
