/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0d0d14',
        surface: 'rgba(255,255,255,0.04)',
        border: 'rgba(255,255,255,0.08)',
        'text-primary': '#f1f5f9',
        'text-secondary': '#94a3b8',
        courses: {
          CE1103: '#06b6d4',
          CE2103: '#8b5cf6',
          CE3101: '#10b981',
          CE3104: '#f59e0b',
          CE3201: '#ef4444',
          CE4202: '#f97316',
          CE4301: '#3b82f6',
          CE4303: '#ec4899',
          CE5508: '#84cc16',
          IC6200: '#14b8a6',
          TI4601: '#a78bfa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
