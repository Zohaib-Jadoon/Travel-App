/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b6b',
        secondary: '#feca57',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.bg-primary': {
          backgroundColor: '#ff6b6b',
        },
        '.bg-secondary': {
          backgroundColor: '#feca57',
        },
      });
    },
  ],
}
