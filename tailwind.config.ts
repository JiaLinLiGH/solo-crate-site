import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // The 'ink' scale stays the brand colors. We redefine the
        // utility neutrals via CSS variables so they invert in dark mode.
        ink: {
          DEFAULT: '#0b0b0a',
          50: '#f7f7f6',
          100: '#eeeeed',
          200: '#d6d6d3',
          300: '#b3b3af',
          400: '#82827d',
          500: '#5d5d58',
          600: '#3f3f3b',
          700: '#2a2a27',
          800: '#1a1a18',
          900: '#0b0b0a',
          950: '#050505',
        },
        // Surface tokens that swap between modes via CSS variables
        surface: {
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
          subtle: 'rgb(var(--surface-subtle) / <alpha-value>)',
          muted: 'rgb(var(--surface-muted) / <alpha-value>)',
          // Fixed-dark surface — never inverts (used for "knockout" sections,
          // primary CTAs that should look dark in both modes)
          inverse: 'rgb(var(--surface-inverse) / <alpha-value>)',
        },
        fg: {
          DEFAULT: 'rgb(var(--fg) / <alpha-value>)',
          muted: 'rgb(var(--fg-muted) / <alpha-value>)',
          subtle: 'rgb(var(--fg-subtle) / <alpha-value>)',
          inverse: 'rgb(var(--fg-inverse) / <alpha-value>)',
        },
        edge: {
          DEFAULT: 'rgb(var(--edge) / <alpha-value>)',
          strong: 'rgb(var(--edge-strong) / <alpha-value>)',
        },
        moss: {
          50: '#f1f7f3',
          100: '#dcebe1',
          200: '#b9d6c4',
          300: '#8bb89c',
          400: '#5d9676',
          500: '#3d7a5c',
          600: '#2c6149',
          700: '#234d3b',
          800: '#1c3e2f',
          900: '#162f25',
        },
        amber: {
          50: '#fdf8eb',
          100: '#fbeec3',
          200: '#f6dc8a',
          300: '#f4ca5e',
          400: '#f4b942',
          500: '#d49a1e',
          600: '#a87715',
          700: '#7d540e',
          800: '#553808',
          900: '#321e02',
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        display: [
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      letterSpacing: {
        'tightest': '-0.04em',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.06)',
        'lifted': '0 1px 2px rgba(0, 0, 0, 0.05), 0 24px 48px rgba(0, 0, 0, 0.10)',
      },
      keyframes: {
        'fadeUp': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fadeUp': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fadeIn': 'fadeIn 0.4s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
