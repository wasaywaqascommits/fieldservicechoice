import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/env';

/** Ensure a path starts with "/" and (per next trailingSlash) is consistent. */
function normalizePath(path: string): string {
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${normalizePath(path)}`;
}

export interface PageMetaInput {
  title: string;
  description: string;
  /** Canonical path, e.g. /products/jobber/. */
  path: string;
  noindex?: boolean;
  ogType?: 'website' | 'article';
  image?: string;
}

/**
 * Build page metadata with a self-referencing canonical, OpenGraph and robots
 * directives (spec §48, §49). Titles get the brand suffix unless they already
 * include it.
 */
export function buildMetadata(input: PageMetaInput): Metadata {
  const canonical = absoluteUrl(input.path);
  const fullTitle = input.title.includes(SITE_NAME) ? input.title : `${input.title} | ${SITE_NAME}`;
  return {
    title: fullTitle,
    description: input.description,
    alternates: { canonical },
    robots: input.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description: input.description,
      url: canonical,
      siteName: SITE_NAME,
      type: input.ogType ?? 'website',
      ...(input.image ? { images: [{ url: input.image }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: input.description,
    },
  };
}
