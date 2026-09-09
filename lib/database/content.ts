/**
 * Public content data-access layer (spec §38, §41).
 *
 * Pages import content ONLY through this module — never from /data directly —
 * so the source can move to Supabase later without touching page components.
 * Today it reads the typed seed data in /data, which lets the whole public site
 * render with zero external dependencies.
 */
import {
  ALTERNATIVES,
  getAlternativePage as _getAlternative,
  publishedAlternatives,
} from '@/data/alternatives';
import { BEST_PAGES, getBestPage as _getBest, publishedBestPages } from '@/data/best';
import {
  COMPARISONS,
  getComparison as _getComparison,
  publishedComparisons,
} from '@/data/comparisons';
import { GUIDES, getGuide as _getGuide, publishedGuides } from '@/data/guides';
import {
  INDUSTRIES,
  getIndustry as _getIndustry,
  publishedIndustries,
} from '@/data/industries';
import { PRODUCTS, getProduct as _getProduct, publishedProducts } from '@/data/products';
import type {
  AlternativePage,
  BestPage,
  ComparisonPage,
  GuidePage,
  IndustryPage,
  Product,
} from '@/types';

/* Products ------------------------------------------------------------------ */
export function getProducts(): Product[] {
  return publishedProducts();
}
export function getAllProductsIncludingDrafts(): Product[] {
  return PRODUCTS;
}
export function getProductBySlug(slug: string): Product | undefined {
  const p = _getProduct(slug);
  return p && p.published ? p : undefined;
}
export function getProductsBySlugs(slugs: string[]): Product[] {
  return slugs.map((s) => getProductBySlug(s)).filter((p): p is Product => Boolean(p));
}

/* Comparisons --------------------------------------------------------------- */
export function getComparisons(): ComparisonPage[] {
  return publishedComparisons();
}
export function getComparisonBySlug(slug: string): ComparisonPage | undefined {
  const c = _getComparison(slug);
  return c && c.published ? c : undefined;
}
export function getComparisonsForProduct(slug: string): ComparisonPage[] {
  return publishedComparisons().filter((c) => c.productA === slug || c.productB === slug);
}

/* Industries ---------------------------------------------------------------- */
export function getIndustries(): IndustryPage[] {
  return publishedIndustries();
}
export function getIndustryBySlug(slug: string): IndustryPage | undefined {
  const i = _getIndustry(slug);
  return i && i.published ? i : undefined;
}

/* Best ---------------------------------------------------------------------- */
export function getBestPages(): BestPage[] {
  return publishedBestPages();
}
export function getBestPageBySlug(slug: string): BestPage | undefined {
  const b = _getBest(slug);
  return b && b.published ? b : undefined;
}

/* Alternatives -------------------------------------------------------------- */
export function getAlternativePages(): AlternativePage[] {
  return publishedAlternatives();
}
export function getAlternativePageBySlug(slug: string): AlternativePage | undefined {
  const a = _getAlternative(slug);
  return a && a.published ? a : undefined;
}

/* Guides -------------------------------------------------------------------- */
export function getGuides(): GuidePage[] {
  return publishedGuides();
}
export function getGuideBySlug(slug: string): GuidePage | undefined {
  const g = _getGuide(slug);
  return g && g.published ? g : undefined;
}

/* Convenience for static params --------------------------------------------- */
export const ALL_PRODUCT_SLUGS = PRODUCTS.filter((p) => p.published).map((p) => p.slug);
export const ALL_COMPARISON_SLUGS = COMPARISONS.filter((c) => c.published).map((c) => c.slug);
export const ALL_INDUSTRY_SLUGS = INDUSTRIES.filter((i) => i.published).map((i) => i.slug);
export const ALL_BEST_SLUGS = BEST_PAGES.filter((b) => b.published).map((b) => b.slug);
export const ALL_ALTERNATIVE_SLUGS = ALTERNATIVES.filter((a) => a.published).map((a) => a.slug);
export const ALL_GUIDE_SLUGS = GUIDES.filter((g) => g.published).map((g) => g.slug);
