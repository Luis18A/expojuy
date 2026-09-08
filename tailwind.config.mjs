/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      // ─── Design System Colors (design.md) ──────────────────────────────
      colors: {
        // Base neutrals
        ink:   '#3C3C3B',
        paper: '#F2F2F2',
        white: '#FFFFFF',
        carbon: '#222222',

        // Official palette (a5cbae9b design.md)
        violet: {
          dark:   '#730DD9',  // Títulos h1/h2, botones primarios
          mid:    '#7552F2',  // Subtítulos, badges, navbar
          lavender:'#A988F2', // Hover, cards secundarias
        },
        cyan: {
          DEFAULT: '#29C7D9', // Badges destacados, enlaces, acentos
        },

        // Territorial palette (design.md original)
        yungas: {
          DEFAULT: '#0C6196',
          soft:    '#A0D9FF',
        },
        valles: {
          DEFAULT: '#25C0D4',
          deep:    '#005539',
        },
        puna: {
          DEFAULT: '#820CD0',
          deep:    '#B3008F',
        },
        quebrada: {
          DEFAULT: '#7553F2',
          warm:    '#FF8A63',
        },
      },

      // ─── Gradients as backgroundImage ──────────────────────────────────
      backgroundImage: {
        'gradient-yungas':   'linear-gradient(to right top, #0c6196, #3b7db0, #5d9bca, #7ebae4, #a0d9ff)',
        'gradient-valles':   'linear-gradient(to left top, #25c0d4, #00a5aa, #008a81, #006f5c, #005539)',
        'gradient-puna':     'linear-gradient(to left bottom, #820cd0, #9700be, #a500ad, #ae009d, #b3008f)',
        'gradient-quebrada': 'linear-gradient(to right top, #ff8a63, #ff6477, #fa429b, #d13dc8, #7553f2)',
        'gradient-hero':     'linear-gradient(135deg, #730DD9 0%, #7552F2 40%, #29C7D9 100%)',
        'gradient-violet':   'linear-gradient(135deg, #730DD9, #A988F2)',
      },

      // ─── Border Radius ─────────────────────────────────────────────────
      borderRadius: {
        sm:   '8px',
        md:   '14px',
        lg:   '24px',
        pill: '999px',
        DEFAULT: '14px',
      },

      // ─── Spacing (multiples of 8px) ────────────────────────────────────
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '24px',
        '6': '32px',
        '7': '48px',
        '8': '64px',
        '9': '96px',
        'safe': 'env(safe-area-inset-bottom)',
      },

      // ─── Typography ────────────────────────────────────────────────────
      fontFamily: {
        sans:  ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        ambit: ['Ambit', 'Inter', 'ui-sans-serif', 'sans-serif'],
        body:  ['Inter', 'ui-sans-serif', 'sans-serif'],
      },
      fontSize: {
        // Display
        'display':    ['clamp(40px, 6vw, 72px)', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(32px, 4vw, 48px)', { lineHeight: '1.15', fontWeight: '800', letterSpacing: '-0.025em' }],
        // Headings
        'h1': ['clamp(32px, 4vw, 52px)', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h2': ['clamp(26px, 3vw, 40px)', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.015em' }],
        'h3': ['clamp(20px, 2.5vw, 28px)', { lineHeight: '1.3', fontWeight: '700' }],
        // Body
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body':    ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'small':   ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.02em' }],
        // Label
        'label':   ['14px', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '0.05em' }],
      },

      // ─── Shadows ───────────────────────────────────────────────────────
      boxShadow: {
        sm:    '0 2px 8px rgb(60 60 59 / 8%)',
        md:    '0 8px 24px rgb(60 60 59 / 12%)',
        lg:    '0 18px 48px rgb(60 60 59 / 16%)',
        violet:'0 8px 32px rgb(115 13 217 / 25%)',
        cyan:  '0 4px 20px rgb(41 199 217 / 30%)',
      },

      // ─── Max widths ────────────────────────────────────────────────────
      maxWidth: {
        container: '1200px',
        prose:     '65ch',
        reading:   '75ch',
      },

      // ─── Screens ───────────────────────────────────────────────────────
      screens: {
        'xs':  '375px',
        'sm':  '640px',
        'md':  '768px',
        'lg':  '1024px',
        'xl':  '1280px',
        '2xl': '1536px',
      },

      // ─── Transitions ───────────────────────────────────────────────────
      transitionDuration: {
        DEFAULT: '150ms',
        fast:    '100ms',
        normal:  '200ms',
        slow:    '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        spring:  'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [
    // scrollbar-none utility
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        },
        '.pb-safe': {
          'padding-bottom': 'env(safe-area-inset-bottom)',
        },
        '.snap-x-mandatory': {
          'scroll-snap-type': 'x mandatory',
        },
        '.snap-start': {
          'scroll-snap-align': 'start',
        },
      });
    },
  ],
};
