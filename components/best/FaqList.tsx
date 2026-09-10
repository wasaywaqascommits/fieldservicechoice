/**
 * Accessible FAQ list for "best" pages. Uses native <details>/<summary> so it
 * works without JavaScript; the matching FAQPage JSON-LD is emitted separately.
 */
export function FaqList({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {faqs.map((f) => (
        <details key={f.question} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
            {f.question}
            <span
              aria-hidden
              className="shrink-0 text-brand-600 transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}
