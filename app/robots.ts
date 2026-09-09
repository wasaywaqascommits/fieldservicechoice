import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/env';

/** robots.txt (spec §51). */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/go/', '/preview/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
