/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede7f6',
          200: '#d1c4e9',
          300: '#b39ddb', // lavender
          400: '#b39ddb', // lavender
          500: '#b39ddb', // lavender
          600: '#a18cd1', // soft violet
          700: '#8e8cd1', // muted purple
          800: '#7c6bb0',
          900: '#5e548e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        handwriting: ['Shadows Into Light'],
        graffiti: ['Permanent Marker'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in-down': 'fadeInDown 1s ease-out',
        'fade-in-left': 'fadeInLeft 1s ease-out',
        'fade-in-right': 'fadeInRight 1s ease-out',
        'scale-up': 'scaleUp 0.6s ease-out',
        'rotate-in': 'rotateIn 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'flip-in': 'flipIn 0.8s ease-out',
        'zoom-in': 'zoomIn 0.6s ease-out',
        'zoom-out': 'zoomOut 0.6s ease-out',
        'float-very-slow': 'float 120s ease-in-out infinite',
        'pulse-very-slow': 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
} 