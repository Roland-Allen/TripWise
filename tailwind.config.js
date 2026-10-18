/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50:  '#eff8ff',
          100: '#dbeffe',
          200: '#bfe3fd',
          300: '#93d1fb',
          400: '#60b6f7',
          500: '#3b97f3',
          600: '#2578e8',
          700: '#1d62d5',
          800: '#1e4fac',
          900: '#1e4488',
        },
        sand: {
          50:  '#fdf8f0',
          100: '#faefd9',
          200: '#f4dcb0',
          300: '#ecc47e',
          400: '#e4a64a',
          500: '#dc8f28',
          600: '#cc7620',
          700: '#a85b1d',
          800: '#874920',
          900: '#6d3c1f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
