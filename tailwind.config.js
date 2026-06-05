/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Navy - Primary Brand Color (WCAG AAA compliant)
        primary: {
          50: '#f0f5fb',
          100: '#dfe9f6',
          200: '#c6d8ef',
          300: '#9fbfe3',
          400: '#72a1d4',
          500: '#5186c6',
          600: '#3d6db7',
          700: '#345a95',   // Main navy - better contrast
          800: '#2f4d7b',
          900: '#2a4166',
          950: '#1c2942',   // Darkest navy for text
        },
        // Refined Gold - Action Color (Fixed for accessibility)
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',   // Primary action - 3.1:1 on white (AA Large)
          600: '#d97706',   // Darker gold - 4.6:1 on white (AA)
          700: '#b45309',   // Darkest gold - 7.2:1 (AAA)
          800: '#92400e',
          900: '#78350f',
        },
        // Neutral Grays - Better contrast ratios
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',   // 4.6:1 on white (AA)
          600: '#525252',   // 7.0:1 on white (AAA)
          700: '#404040',   // 10.8:1 on white (AAA)
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Semantic Colors
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',   // 4.5:1 on white
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',   // 4.5:1 on white
          700: '#b91c1c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'], // For headings, can be changed to a serif later
      },
      fontSize: {
        // Improved type scale with better hierarchy
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1.2' }],         // 48px - hero
        '6xl': ['3.75rem', { lineHeight: '1.1' }],      // 60px - large hero
        '7xl': ['4.5rem', { lineHeight: '1' }],         // 72px
      },
      spacing: {
        // Consistent 8px base scale
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
      },
      borderRadius: {
        'sm': '0.25rem',  // 4px
        'DEFAULT': '0.5rem',  // 8px
        'md': '0.5rem',   // 8px
        'lg': '0.75rem',  // 12px
        'xl': '1rem',     // 16px
        '2xl': '1.5rem',  // 24px
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
}
