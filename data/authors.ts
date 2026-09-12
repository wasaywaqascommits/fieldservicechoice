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
    shortBio: 'Editor & SEO Specialist at FieldServiceChoice, with SEO experience in B2B and field-service software.',
    bio: [
      'Abdul Wasay Waqas is the editor and SEO specialist behind FieldServiceChoice. He specializes in organic growth for B2B and field-service software, and built the site to give trade and home-service business owners independent, transparent software comparisons.',
      'He has led organic strategy as SEO Manager at Makula Technology, a Berlin-based B2B industrial and field-service SaaS platform serving asset-heavy manufacturing. There he owned end-to-end SEO — technical, content and off-page — earning Google AI Overview citations for competitive category terms, running rigorous site-health and schema audits, and building semantic content frameworks mapped to complex maintenance workflows.',
      'He applies that background to the field service software market at FieldServiceChoice on a simple principle: comparisons should work for the buyer, not the vendor. He oversees the site’s research and verification — independent Fit Scores that vendor payments can’t influence, pricing and integrations verified and dated against official sources, and honest guidance about who a tool is wrong for, not just who it’s right for.',
    ],
    initials: 'AW',
    avatarColor: '#3f52e3',
    avatar: '/authors/abdul-wasay-waqas.png',
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
