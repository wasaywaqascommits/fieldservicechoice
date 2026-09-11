import type { AlternativePage, Product } from '@/types';

/**
 * Data-generated FAQs for a "best alternatives to X" page. Built from the
 * product, the page's authored reasons, and the alternative list. Nothing
 * fabricated; pricing stays honest about verification. Rendered visibly and
 * emitted as FAQPage JSON-LD.
 */

function joinList(items: string[]): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

function lower(s: string): string {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

export function alternativesFaqs(
  product: Product,
  page: AlternativePage,
  alts: { name: string; bestFor: string }[],
): { question: string; answer: string }[] {
  const name = product.name;
  const altNames = alts.map((a) => a.name);
  const first = alts[0];

  const faqs: { question: string; answer: string }[] = [];

  if (altNames.length > 0) {
    faqs.push({
      question: `What is the best alternative to ${name}?`,
      answer: `The best ${name} alternative depends on why you're switching. Popular options include ${joinList(altNames)}.${
        first ? ` ${first.name} is a common pick, best for ${lower(first.bestFor)}.` : ''
      } Use the Finder to match one to your trade, team size and budget.`,
    });
  }

  if (page.reasons.length > 0) {
    faqs.push({
      question: `Why do people look for a ${name} alternative?`,
      answer: `Common reasons include ${joinList(page.reasons.map(lower))}. If one of these applies to you, another platform may fit better, which one depends on your specific requirements.`,
    });
  }

  faqs.push({
    question: `Is there a cheaper alternative to ${name}?`,
    answer: `We label pricing as unverified rather than guess, so we don't rank alternatives on price alone. Smaller-team tools are generally more affordable than enterprise platforms, use the Finder to filter by your budget band and see which ${name} alternatives fit.`,
  });

  if (alts.length > 0) {
    faqs.push({
      question: `What are the top alternatives to ${name}?`,
      answer: `${joinList(alts.map((a) => `${a.name} (best for ${lower(a.bestFor)})`))}. Each suits a different kind of business, so the right choice depends on your trade and how you work.`,
    });
  }

  return faqs;
}
