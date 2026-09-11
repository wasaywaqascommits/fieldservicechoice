import { ImageResponse } from 'next/og';
import { SITE_NAME } from '@/lib/env';

/**
 * Site-wide default social-share image (spec §48/§49 follow-up).
 *
 * Next's file-convention automatically wires this into `og:image` AND
 * `twitter:image` for every route that doesn't set its own — fixing the
 * previously blank `summary_large_image` card. Individual pages can still
 * override via `buildMetadata({ image })`.
 */
export const runtime = 'nodejs';
export const alt = 'FieldServiceChoice: compare field service software by trade, team and budget';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#1a2050',
          backgroundImage: 'linear-gradient(135deg, #1a2050 0%, #3341c8 55%, #3f52e3 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 18px',
              borderRadius: 999,
              backgroundColor: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.25)',
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 1,
              color: '#dbe6ff',
            }}
          >
            FIELD SERVICE SOFTWARE
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 72, fontWeight: 800, lineHeight: 1.05, maxWidth: 980 }}>
            Compare field service software by trade, team &amp; budget
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 32, color: '#c7d7fe', maxWidth: 900 }}>
            Independent Fit Scores and verified pricing. Recommendations, not vendor payouts.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', fontSize: 34, fontWeight: 700 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 52,
              height: 52,
              borderRadius: 12,
              backgroundColor: '#ffffff',
              color: '#3f52e3',
              fontSize: 30,
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
