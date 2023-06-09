/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'small': '300px',

      'mobile': '400px',

      'tablet': '550px',

      'laptop': '720px',

      'desktop': '950px',

      'desktop_large': '1090px',
    },
  },
  plugins: [],
}