import type { Author } from '@/types';

/**
 * Site authors / editors. Real, named people behind the content (E-E-A-T).
 * Bios stick to verifiable facts, no fabricated credentials.
 */
export const AUTHORS: Author[] = [
  {
    slug: 'abdul-wasay-waqas',
    name: 'Abdul Wasay Waqas',
    role: 'Editor & SEO Specialist',
    shortBio: 'Editor & SEO Specialist at FieldServiceChoice.',
    bio: [
      'Abdul Wasay Waqas is the editor and SEO specialist behind FieldServiceChoice. He works in the field service and home-services software market, researching platforms, setting the site’s editorial standards, and making software buying less confusing for trade and home-service business owners.',
      'He built FieldServiceChoice on a simple principle: comparisons should work for the buyer, not the vendor. That means independent Fit Scores vendor payments can’t influence, pricing that’s verified and dated against official sources, and honest guidance about who a tool is wrong for, not just who it’s right for.',
      'He oversees the site’s research and verification process, from the Fit Score methodology to the way every pricing figure is checked and dated.',
    ],
    initials: 'AW',
    avatarColor: '#3f52e3',
    // Headshot supplied by the author. To activate: save the photo to
    // public/authors/abdul-wasay-waqas.jpg, then set:
    // avatar: '/authors/abdul-wasay-waqas.jpg',
    avatar: undefined,
    links: {
      linkedin: 'https://www.linkedin.com/in/abdul-wasay-waqas-seo/',
    },
    published: true,
  },
];

export const AUTHOR_MAP: Record<string, Author> = Object.fromEntries(AUTHORS.map((a) => [a.slug, a]));

/** The site's primary author/editor, used as the default byline. */
export const DEFAULT_AUTHOR_SLUG = 'abdul-wasay-waqas';

export function getAuthor(slug: string): Author | undefined {
  return AUTHOR_MAP[slug];
}

export function publishedAuthors(): Author[] {
  return AUTHORS.filter((a) => a.published);
}
