/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sodil-yellow': '#FFC300',
        'sodil-red': '#C81010',
        'sodil-white': '#FFFFFF',
        'dark-gray': '#333333',
        'light-gray': '#666666',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        'h1': '48px',
        'h2': '36px',
        'h3': '24px',
        'body': '16px',
      },
    },
  },
  plugins: [],
}