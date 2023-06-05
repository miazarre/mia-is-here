/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        main: ['Porkh', 'sans-serif'],
        second: ['hind', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
