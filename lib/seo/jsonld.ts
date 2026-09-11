import { SITE_NAME, SITE_URL } from '@/lib/env';
import { absoluteUrl } from './metadata';
import type { Author, Product } from '@/types';

/**
 * Structured data (spec §52).
 *
 * We only emit schema.org types supported by visible, verified page content.
 * CRITICALLY: we never fabricate `aggregateRating`, `reviewCount` or reviews —
 * the platform is new and has none. SoftwareApplication omits `offers` unless a
 * verified price exists.
 */

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Independent discovery, comparison and recommendation platform for Field Service Management software.',
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/software/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * An ItemList of products (e.g. the homepage "platforms buyers compare most"
 * list). Emits ordered ListItems pointing at each product profile so search
 * engines can read the curated set as a structured collection.
 */
export function itemListJsonLd(products: Pick<Product, 'slug' | 'name'>[], listName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: absoluteUrl(`/products/${p.slug}/`),
    })),
  };
}

/**
 * Article structured data for editorial guides. Author/publisher are the
 * organization (we don't attribute to a fabricated individual).
 */
export function articleJsonLd(input: {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  author?: { name: string; url: string };
}) {
  const org = { '@type': 'Organization', name: SITE_NAME, url: SITE_URL };
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    url: absoluteUrl(input.path),
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    author: input.author ? { '@type': 'Person', name: input.author.name, url: input.author.url } : org,
    publisher: org,
  };
}

/** Person structured data for an author profile page (E-E-A-T). */
export function personJsonLd(author: Author) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    url: absoluteUrl(`/authors/${author.slug}/`),
    jobTitle: author.role,
    description: author.shortBio,
    worksFor: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    ...(author.links.linkedin ? { sameAs: [author.links.linkedin] } : {}),
    ...(author.avatar ? { image: absoluteUrl(author.avatar) } : {}),
  };
}

/**
 * FAQPage structured data. Answers are plain text (no markup) so they remain
 * valid rich-result content.
 */
export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function softwareApplicationJsonLd(product: Product) {
  const hasVerifiedPrice =
    product.pricing.startingStatus === 'verified' &&
    product.pricing.plans.some((pl) => pl.monthlyPrice != null && pl.verificationStatus === 'verified');

  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Field Service Management',
    operatingSystem: 'Web, iOS, Android',
    url: absoluteUrl(`/products/${product.slug}/`),
    description: product.tagline,
    // NOTE: aggregateRating and review are intentionally omitted — never
    // fabricate ratings for a new platform.
  };

  if (hasVerifiedPrice) {
    const cheapest = product.pricing.plans
      .filter((pl) => pl.monthlyPrice != null)
      .sort((a, b) => (a.monthlyPrice ?? 0) - (b.monthlyPrice ?? 0))[0];
    if (cheapest) {
      base.offers = {
        '@type': 'Offer',
        price: cheapest.monthlyPrice,
        priceCurrency: cheapest.currency,
      };
    }
  }

  return base;
}

/** Render helper: a <script type="application/ld+json"> tag. */
export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data),
  };
}
