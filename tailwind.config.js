/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderColor: {
        border: 'rgb(46,46,46)',
      },

      colors: {
        bg: 'rgb(26,26,26)',
        brand: {
          DEFAULT: '#00A76F',
          dark: '#008F5D',
          darker: '#007A4D',
          darkest: '#00663E',
          light: '#33B989',
          lighter: '#66CCA3',
          lightest: '#99DFBD',
        },
        surface: {
          DEFAULT: '#1A1A1A',
          dark: '#141414',
          light: '#242424',
        },
      },
      backgroundColor: {
        dark: '#1A1A1A',
      },
    },
  },
  plugins: [],
};
