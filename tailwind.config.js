/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-left': '#4E7C32',
        'custom-right': '#665345',
        'custom-footer': '#053D29',
        'banner-left': '#B5DCB0',
        'banner-right': '#F9F3EE',
        'shop-left': '#B5DCB0',
        'shop-right': '#F9F3EE',
      },
    },
  },
  plugins: [],
}