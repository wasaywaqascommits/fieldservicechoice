import Link from 'next/link';
import type { ReactNode } from 'react';
import type { GuideSection } from '@/types';

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Parse inline [label](href) markdown links in a paragraph into React nodes.
 * Internal links (starting with "/") use next/link; anything else is a plain
 * anchor. Everything outside a link is returned as text.
 */
function parseInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(LINK_RE)) {
    const idx = m.index ?? 0;
    if (idx > last) nodes.push(text.slice(last, idx));
    const label = m[1];
    const href = m[2];
    if (href.startsWith('/')) {
      nodes.push(
        <Link key={key++} href={href} className="font-medium text-brand-700 hover:underline">
          {label}
        </Link>,
      );
    } else {
      nodes.push(
        <a key={key++} href={href} className="font-medium text-brand-700 hover:underline">
          {label}
        </a>,
      );
    }
    last = idx + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function GuideTable({ table }: { table: NonNullable<GuideSection['table']> }) {
  return (
    <figure className="not-prose my-6">
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface-subtle text-left">
              {table.headings.map((h) => (
                <th key={h} className="border-b border-slate-200 px-4 py-2.5 font-semibold text-ink">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, ri) => (
              <tr key={ri} className="align-top">
                {row.map((cell, ci) => (
                  <td key={ci} className="border-b border-slate-100 px-4 py-2.5 text-ink-soft">
                    {parseInline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.caption && (
        <figcaption className="mt-2 text-xs text-ink-muted">{table.caption}</figcaption>
      )}
    </figure>
  );
}

function GuideCallout({ callout }: { callout: NonNullable<GuideSection['callout']> }) {
  return (
    <blockquote className="not-prose my-6 rounded-r-lg border-l-4 border-brand-500 bg-brand-50 px-5 py-4">
      <p className="text-base font-medium text-ink">{parseInline(callout.text)}</p>
      {callout.source && <footer className="mt-1.5 text-sm text-ink-muted">{callout.source}</footer>}
    </blockquote>
  );
}

function GuideChart({ chart }: { chart: NonNullable<GuideSection['chart']> }) {
  const max = Math.max(...chart.bars.map((b) => b.value), 1);
  return (
    <figure className="not-prose my-6 rounded-xl border border-slate-200 p-5">
      {chart.title && <p className="mb-4 text-sm font-semibold text-ink">{chart.title}</p>}
      <div className="space-y-3">
        {chart.bars.map((b) => (
          <div key={b.label}>
            <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
              <span className="text-ink-soft">{b.label}</span>
              <span className="font-semibold text-ink">{b.valueLabel ?? b.value}</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-subtle">
              <div
                className="h-full rounded-full bg-brand-600"
                style={{ width: `${Math.max(4, Math.round((b.value / max) * 100))}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      {chart.caption && <figcaption className="mt-4 text-xs text-ink-muted">{chart.caption}</figcaption>}
    </figure>
  );
}

/** Renders an article's structured sections: paragraphs with inline links,
 *  plus optional table, callout, chart and image blocks. */
export function GuideSections({ sections }: { sections: GuideSection[] }) {
  return (
    <div className="mt-8 max-w-3xl prose-fsc">
      {sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          {s.body.map((b, i) => (
            <p key={i}>{parseInline(b)}</p>
          ))}
          {s.chart && <GuideChart chart={s.chart} />}
          {s.table && <GuideTable table={s.table} />}
          {s.callout && <GuideCallout callout={s.callout} />}
          {s.image && (
            <figure className="not-prose my-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image.src}
                alt={s.image.alt}
                className="w-full rounded-xl border border-slate-200"
                loading="lazy"
              />
              {s.image.caption && (
                <figcaption className="mt-2 text-xs text-ink-muted">{s.image.caption}</figcaption>
              )}
            </figure>
          )}
        </section>
      ))}
    </div>
  );
}
