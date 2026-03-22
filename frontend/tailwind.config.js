/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wood: {
          50:  '#fdf8f3',
          100: '#f9edd9',
          200: '#f0d4a8',
          300: '#e4b472',
          400: '#d4893d',
          500: '#c4711e',
          600: '#a85c14',
          700: '#8a4712',
          800: '#6e3810',
          900: '#4a2509',
        },
        bark: {
          50:  '#f5f0eb',
          100: '#e8ddd2',
          200: '#d0bba5',
          300: '#b49278',
          400: '#956d52',
          500: '#7a5337',
          600: '#5f3f28',
          700: '#472f1e',
          800: '#2e1f14',
          900: '#1a110a',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
