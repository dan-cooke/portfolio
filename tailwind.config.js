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
        'purple': '#4F518C',
        'gray': '#07070D',
        'secondary-text': '#E5E5E4'
      }

    },
  },
  plugins: [require('@tailwindcss/typography')],
}