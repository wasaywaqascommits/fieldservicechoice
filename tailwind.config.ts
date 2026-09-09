import type { Config } from 'tailwindcss';

/**
 * FieldServiceChoice design system.
 * Palette intent (spec §42):
 *   - off-white background, navy/charcoal text
 *   - strong blue primary, light-blue supporting surfaces
 *   - green = positive match, amber = warning, red = important negative
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dbe6ff',
          200: '#c7d7fe',
          300: '#a4bcfd',
          400: '#7d98fa',
          500: '#5a74f0',
          600: '#3f52e3', // primary
          700: '#3341c8',
          800: '#2c39a1',
          900: '#29357f',
          950: '#1a2050',
        },
        ink: {
          DEFAULT: '#0f172a', // navy/charcoal text
          soft: '#334155',
          muted: '#64748b',
        },
        surface: {
          DEFAULT: '#ffffff',
          subtle: '#f8fafc',
          sky: '#eff6ff', // light-blue supporting background
        },
        positive: {
          bg: '#ecfdf3',
          fg: '#067647',
          border: '#abefc6',
        },
        warning: {
          bg: '#fffaeb',
          fg: '#b54708',
          border: '#fedf89',
        },
        danger: {
          bg: '#fef3f2',
          fg: '#b42318',
          border: '#fecdca',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.875rem',
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.10)',
        lift: '0 10px 30px -12px rgba(15,23,42,0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
