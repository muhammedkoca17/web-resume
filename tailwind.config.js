/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFDFB',
          100: '#FBFBF9',
          200: '#F5F4EE',
          300: '#ECEAE2',
          400: '#DFDCD2',
        },
        ink: {
          950: '#0C0D0E',
          900: '#121316',
          800: '#1C1E23',
          700: '#2E313A',
          500: '#575965',
          400: '#8E909B',
        },
        accent: {
          green: '#18C153',
          emerald: '#16A34A',
          lime: '#22C55E',
          light: '#DCFCE7',
          sage: '#4E8752',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
