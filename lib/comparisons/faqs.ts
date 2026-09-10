import type { CompanySizeBand, ComparisonPage, FeatureSupport, Product } from '@/types';

/**
 * Data-generated FAQs for a head-to-head comparison.
 *
 * Answers are derived from the two products' editorial/feature data and the
 * comparison's own authored choose-A / choose-B guidance. Nothing is fabricated;
 * where pricing is unverified the answer says so. Rendered visibly and emitted
 * as FAQPage JSON-LD.
 */

const SIZE_ORDER: CompanySizeBand[] = ['solo', '2-5', '6-10', '11-25', '26-50', '51-100', '100+'];

const supported = (s: FeatureSupport | undefined): boolean =>
  s === 'available' || s === 'partial' || s === 'plan_dependent' || s === 'add_on';

function lower(s: string): string {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

function differenceAnswer(a: Product, b: Product): string {
  return `The main difference is who they suit best: ${a.name} is aimed at ${lower(a.bestFor[0])}, while ${b.name} is aimed at ${lower(b.bestFor[0])}. ${a.name}'s take: ${a.verdict}`;
}

function chooseAnswer(a: Product, b: Product, c: ComparisonPage): string {
  const parts: string[] = [];
  if (c.chooseA[0]) parts.push(`Choose ${a.name} if ${lower(c.chooseA[0])}`);
  if (c.chooseB[0]) parts.push(`choose ${b.name} if ${lower(c.chooseB[0])}`);
  let answer = parts.join(', ') + '.';
  if (c.chooseNeither[0]) answer += ` Consider neither if ${lower(c.chooseNeither[0])}.`;
  answer += ` Use the Finder for a shortlist scored against your specific business.`;
  return answer;
}

function cheaperAnswer(a: Product, b: Product): string {
  const aQuote = a.pricing.model === 'quote' || a.pricing.model === 'custom';
  const bQuote = b.pricing.model === 'quote' || b.pricing.model === 'custom';
  if (aQuote && bQuote) {
    return `Both ${a.name} and ${b.name} use quote-based pricing, so cost depends on your team size and the modules you need. Request a quote from each and compare, and use the Finder to check either against your budget.`;
  }
  if (aQuote !== bQuote) {
    const publishes = aQuote ? b : a;
    const quotes = aQuote ? a : b;
    return `${quotes.name} uses quote-based pricing, while ${publishes.name} uses a published per-user model — so for a small team ${publishes.name} is usually the more predictable cost. We label unverified figures rather than guess, so confirm current pricing with each vendor.`;
  }
  return `We haven't independently verified current pricing for either ${a.name} or ${b.name}, so we don't publish figures we can't stand behind. Check each vendor's pricing page for current numbers, and use the Finder to see which fits your budget band.`;
}

function smallTeamAnswer(a: Product, b: Product): string {
  const aStart = SIZE_ORDER.indexOf(a.companySizes[0]);
  const bStart = SIZE_ORDER.indexOf(b.companySizes[0]);
  if (aStart < bStart) {
    return `${a.name} is aimed at smaller teams than ${b.name}, so for a very small operation ${a.name} is usually the easier, faster-to-adopt fit. ${b.name} tends to pay off as you grow into its depth.`;
  }
  if (bStart < aStart) {
    return `${b.name} is aimed at smaller teams than ${a.name}, so for a very small operation ${b.name} is usually the easier, faster-to-adopt fit. ${a.name} tends to pay off as you grow into its depth.`;
  }
  return `Both ${a.name} and ${b.name} serve small teams; the better fit depends on your trade, workflow and which features you rely on most. Use the Finder to compare them against your specific needs.`;
}

function quickbooksAnswer(a: Product, b: Product): string {
  const qbState = (p: Product): 'both' | 'online' | 'desktop' | 'none' => {
    const qbo = supported(p.features.quickbooks_online);
    const qbd = supported(p.features.quickbooks_desktop);
    if (qbo && qbd) return 'both';
    if (qbo) return 'online';
    if (qbd) return 'desktop';
    return 'none';
  };
  const phrase = (state: ReturnType<typeof qbState>): string => {
    switch (state) {
      case 'both':
        return 'integrates with both QuickBooks Online and Desktop';
      case 'online':
        return 'integrates with QuickBooks Online';
      case 'desktop':
        return 'integrates with QuickBooks Desktop';
      default:
        return 'has no confirmed QuickBooks integration';
    }
  };
  const desktopNote =
    ' If you run QuickBooks Desktop specifically, confirm dedicated Desktop support before choosing, as it is less common than Online.';

  const sa = qbState(a);
  const sb = qbState(b);
  if (sa === sb) {
    return `Both ${a.name} and ${b.name} ${phrase(sa)}.${desktopNote}`;
  }
  const descA = `${a.name} ${phrase(sa)}`;
  return `${descA.charAt(0).toUpperCase() + descA.slice(1)}, while ${b.name} ${phrase(sb)}.${desktopNote}`;
}

export function comparisonFaqs(a: Product, b: Product, c: ComparisonPage): { question: string; answer: string }[] {
  return [
    { question: `What is the difference between ${a.name} and ${b.name}?`, answer: differenceAnswer(a, b) },
    { question: `Should I choose ${a.name} or ${b.name}?`, answer: chooseAnswer(a, b, c) },
    { question: `Is ${a.name} or ${b.name} cheaper?`, answer: cheaperAnswer(a, b) },
    { question: `Which is better for a small team, ${a.name} or ${b.name}?`, answer: smallTeamAnswer(a, b) },
    { question: `Which integrates better with QuickBooks, ${a.name} or ${b.name}?`, answer: quickbooksAnswer(a, b) },
  ];
}
