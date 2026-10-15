import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#D97B4F',
          dark: '#2E2A26',
          light: '#F5DCC8',
          hover: '#B85E37',
          plum: '#B85E37',
        },
        body: '#4A4744',
      },
      screens: {
        xs: '480px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-manrope)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-manrope)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '10px',
        btn: '9px',
      },
      boxShadow: {
        card: '0 2px 12px rgba(61, 53, 72, 0.08)',
        'card-hover': '0 8px 30px rgba(61, 53, 72, 0.15)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
