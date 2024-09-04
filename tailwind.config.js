const defaultTheme = require('tailwindcss/defaultTheme')

let containerScreens = Object.assign({}, defaultTheme.screens)

// Delete the 2xl breakpoint from the object
delete containerScreens['2xl']

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px'
      },
      colors: {
        primary: '#FF6464',
        secondary: '#00A8CC',
        ironlight: '#8695A4',
        light: '#EDF7FA',
        dark: '#142850',
      },
      fontSize: {
        '1.5xl': ['1.35rem', '2rem'],
        '3.5xl': ['2rem', '2.5rem'],
        '5xl': ['3rem', '3.5rem'],
      }
    },
    container: {
      screens: containerScreens
    },
    fontFamily: {
      heebo: ['Heebo', 'sans-serif']
    },
  },
  plugins: [],
}
