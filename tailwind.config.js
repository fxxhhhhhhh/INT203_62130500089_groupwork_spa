module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      bluelogo: '#6990c3',
      classicblue: '#0f4c81'
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
