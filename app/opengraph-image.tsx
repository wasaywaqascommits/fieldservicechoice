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
          <svg width={52} height={62} viewBox="0 0 40 48" style={{ marginRight: 18 }} xmlns="http://www.w3.org/2000/svg">
            <path d="M20 46C11 33 5 27 5 18A15 15 0 1 1 35 18C35 27 29 33 20 46Z" fill="#ffffff" />
            <path d="M12.5 18.5L17.5 23.5L27.5 12" fill="none" stroke="#3f52e3" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {SITE_NAME}
        </div>
      </div>
    ),
    { ...size },
  );
}
