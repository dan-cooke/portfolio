const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.tsx'],
  theme: {
    extend: {
      backgroundColor: '#07070D',
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Mono'],
        header: ['Plus Jakarta Sans']
      },
      colors: {
        'primary': '#26F0F1',
        'purple-dark': '#0F0F1A',
        'purple': '#2D2D4E',
        'gray': '#07070D',
        'secondary-text': '#BEBDBC'
      }

    },
  },
  plugins: [require('@tailwindcss/typography')],
}