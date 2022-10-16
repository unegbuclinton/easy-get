/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSizes: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
    },
    colors: {
      'navy-blue': '#170073',
    },
    fontFamily: {
      lemonada: ['Lemonada', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
};
