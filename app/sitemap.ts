import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/env';
import {
  getAlternativePages,
  getBestPages,
  getComparisons,
  getGuides,
  getIndustries,
  getProducts,
} from '@/lib/database/content';

/**
 * Dynamic sitemap (spec §50). Includes public, indexable pages only — never
 * admin, api, /go redirects, internal search, or Finder result permutations.
 * lastModified uses real content/verification dates, not the deploy time.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${SITE_URL}${path}`;
  const products = getProducts();

  const staticPages: MetadataRoute.Sitemap = [
    { url: url('/'), changeFrequency: 'weekly', priority: 1 },
    { url: url('/software/'), changeFrequency: 'weekly', priority: 0.9 },
    { url: url('/find-software/'), changeFrequency: 'monthly', priority: 0.9 },
    { url: url('/best/field-service-management-software/'), changeFrequency: 'monthly', priority: 0.8 },
    { url: url('/methodology/'), changeFrequency: 'yearly', priority: 0.5 },
    { url: url('/data-verification/'), changeFrequency: 'yearly', priority: 0.4 },
    { url: url('/editorial-policy/'), changeFrequency: 'yearly', priority: 0.4 },
    { url: url('/affiliate-disclosure/'), changeFrequency: 'yearly', priority: 0.3 },
    { url: url('/about/'), changeFrequency: 'yearly', priority: 0.4 },
    { url: url('/contact/'), changeFrequency: 'yearly', priority: 0.3 },
    { url: url('/partner-with-us/'), changeFrequency: 'yearly', priority: 0.5 },
    { url: url('/privacy/'), changeFrequency: 'yearly', priority: 0.2 },
    { url: url('/terms/'), changeFrequency: 'yearly', priority: 0.2 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: url(`/products/${p.slug}/`),
    lastModified: p.verification.editorialReviewedAt ?? undefined,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const industryPages: MetadataRoute.Sitemap = getIndustries().map((i) => ({
    url: url(`/industries/${i.slug}/`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const comparisonPages: MetadataRoute.Sitemap = getComparisons().map((c) => ({
    url: url(`/compare/${c.slug}/`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const alternativePages: MetadataRoute.Sitemap = getAlternativePages().map((a) => ({
    url: url(`/alternatives/${a.slug}/`),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const bestPages: MetadataRoute.Sitemap = getBestPages().map((b) => ({
    url: url(`/best/${b.slug}/`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const guidePages: MetadataRoute.Sitemap = getGuides().map((g) => ({
    url: url(`/guides/${g.slug}/`),
    lastModified: g.updatedAt ?? undefined,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  // Pricing pages are only added once they carry verified plan data (spec §110).
  const pricingPages: MetadataRoute.Sitemap = products
    .filter((p) => p.pricing.plans.some((pl) => pl.verificationStatus === 'verified' && pl.monthlyPrice != null))
    .map((p) => ({ url: url(`/pricing/${p.slug}/`), changeFrequency: 'monthly', priority: 0.6 }));

  return [
    ...staticPages,
    ...productPages,
    ...industryPages,
    ...comparisonPages,
    ...alternativePages,
    ...bestPages,
    ...guidePages,
    ...pricingPages,
  ];
}
