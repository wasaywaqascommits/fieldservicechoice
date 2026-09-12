import { ImageResponse } from 'next/og';
import { ALL_GUIDE_SLUGS, getGuideBySlug } from '@/lib/database/content';
import { SITE_NAME } from '@/lib/env';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'FieldServiceChoice guide';

export function generateStaticParams() {
  return ALL_GUIDE_SLUGS.map((slug) => ({ slug }));
}

/**
 * Per-guide featured image. Rendered as the article's on-page hero and reused as
 * the Open Graph / social image. On-brand and license-safe (no stock photos).
 */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuideBySlug(slug);
  const title = g?.title ?? 'Field service software guide';
  const category = (g?.category ?? 'Guide').toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '76px 84px',
          backgroundColor: '#1a2050',
          backgroundImage: 'linear-gradient(135deg, #1a2050 0%, #3341c8 58%, #3f52e3 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'flex-start',
            padding: '8px 18px',
            borderRadius: 999,
            backgroundColor: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 2,
            color: '#dbe6ff',
          }}
        >
          {category}
        </div>

        <div style={{ display: 'flex', fontSize: title.length > 52 ? 62 : 72, fontWeight: 800, lineHeight: 1.06, maxWidth: 1000 }}>
          {title}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', fontSize: 32, fontWeight: 700 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 50,
              height: 50,
              borderRadius: 12,
              backgroundColor: '#ffffff',
              color: '#3f52e3',
              fontSize: 28,
              fontWeight: 800,
              marginRight: 18,
            }}
          >
            FS
          </div>
          {SITE_NAME}
        </div>
      </div>
    ),
    { ...size },
  );
}
