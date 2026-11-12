/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans KR"', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#08090b',
          900: '#0d0f12',
          850: '#121418',
          800: '#181b22',
          700: '#232733',
          600: '#323746',
        },
        accent: {
          DEFAULT: '#a3e635', // 밝은 연두색
          hover: '#bef264',
          muted: 'rgba(163, 230, 53, 0.15)',
          glow: 'rgba(163, 230, 53, 0.35)',
        },
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
      },
    },
  },
  plugins: [],
}
