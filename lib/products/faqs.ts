import type { FeatureSupport, Product } from '@/types';
import { IMPLEMENTATION_LABELS, PRICING_MODEL_LABELS } from '@/lib/labels';

/**
 * Data-generated product FAQs.
 *
 * Every answer is derived from the product's own editorial/feature data — we
 * never fabricate pricing, ratings or capabilities. Where a fact is not
 * verified (e.g. pricing on a new platform), the answer says so honestly rather
 * than inventing a figure. Rendered visibly and emitted as FAQPage JSON-LD.
 */

function joinList(items: string[]): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

const supported = (s: FeatureSupport | undefined): boolean =>
  s === 'available' || s === 'partial' || s === 'plan_dependent' || s === 'add_on';

function costAnswer(product: Product): string {
  const name = product.name;
  const model = PRICING_MODEL_LABELS[product.pricing.model].toLowerCase();
  if (product.pricing.model === 'quote' || product.pricing.model === 'custom') {
    return `${name} uses quote-based pricing, so the cost depends on your team size and the modules you need. Contact the vendor for a tailored quote, or use our Finder to see whether it fits your budget.`;
  }
  if (product.pricing.startingStatus === 'verified' || product.pricing.startingStatus === 'vendor_confirmed') {
    return `${name} uses a ${model} pricing model. See the pricing section above for the current details we have verified.`;
  }
  return `We haven't independently verified ${name}'s current pricing yet, so we don't publish a figure we can't stand behind. It uses a ${model} model — check the vendor's pricing page for current numbers, and use our Finder to see whether it fits your budget band.`;
}

function quickbooksAnswer(product: Product): string {
  const name = product.name;
  const qbo = supported(product.features.quickbooks_online);
  const qbd = supported(product.features.quickbooks_desktop);
  if (qbo && qbd) return `Yes — ${name} integrates with both QuickBooks Online and QuickBooks Desktop.`;
  if (qbo) return `Yes — ${name} integrates with QuickBooks Online. We haven't confirmed dedicated QuickBooks Desktop support, so verify that directly if you run Desktop.`;
  if (qbd) return `Yes — ${name} integrates with QuickBooks Desktop. Confirm QuickBooks Online support with the vendor if you run the cloud version.`;
  return `We haven't confirmed a QuickBooks integration for ${name}. If accounting sync matters to you, verify current QuickBooks Online or Desktop support with the vendor before committing.`;
}

function trialAnswer(product: Product): string {
  const name = product.name;
  if (product.pricing.freeTrial === true) {
    return `Yes, ${name} offers a free trial. Check the vendor's site for the current trial length and terms.`;
  }
  if (product.pricing.freeTrial === false) {
    return `${name} does not currently advertise a free trial. Contact the vendor to ask about a trial or a guided demo.`;
  }
  return `We haven't verified whether ${name} offers a free trial. Check the vendor's site for current trial or demo options.`;
}

function setupAnswer(product: Product): string {
  const name = product.name;
  const level = product.implementation;
  const phrase =
    level === 'low' ? 'a low implementation effort' : level === 'moderate' ? 'a moderate implementation effort' : 'a higher implementation effort';
  return `${name} has ${phrase} (${IMPLEMENTATION_LABELS[level]}). ${product.implementationNotes}`;
}

export function productFaqs(product: Product, alternatives: Product[]): { question: string; answer: string }[] {
  const name = product.name;
  const faqs: { question: string; answer: string }[] = [
    { question: `Who is ${name} best for?`, answer: product.verdict },
    { question: `How much does ${name} cost?`, answer: costAnswer(product) },
    { question: `Does ${name} integrate with QuickBooks?`, answer: quickbooksAnswer(product) },
    { question: `Does ${name} offer a free trial?`, answer: trialAnswer(product) },
    { question: `Is ${name} easy to set up?`, answer: setupAnswer(product) },
  ];

  const altNames = alternatives.slice(0, 4).map((a) => a.name);
  if (altNames.length > 0) {
    faqs.push({
      question: `What are the best alternatives to ${name}?`,
      answer: `Popular alternatives to ${name} include ${joinList(altNames)}. See our ${name} alternatives page and head-to-head comparisons for how they differ on trade fit, team size and features.`,
    });
  }

  return faqs;
}
