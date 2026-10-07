/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: '#FAF7F2',
          paper: '#F4F0EA',
          card: '#FFFFFF',
          yellow: '#FFDE00',
          yellowHover: '#E5C700',
          red: '#FF4D4D',
          blue: '#2563EB',
          cyan: '#00D2FE',
          green: '#10B981',
          purple: '#8B5CF6',
          orange: '#FF8800',
          dark: '#121212',
          gray: '#E5E0D8',
          subtle: '#6B7280'
        }
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px #121212',
        'brutal': '4px 4px 0px #121212',
        'brutal-lg': '6px 6px 0px #121212',
        'brutal-xl': '8px 8px 0px #121212',
        'brutal-yellow': '5px 5px 0px #FFDE00',
        'brutal-red': '5px 5px 0px #FF4D4D',
        'brutal-blue': '5px 5px 0px #2563EB',
        'brutal-hover': '2px 2px 0px #121212',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        }
      }
    },
  },
  plugins: [],
}
