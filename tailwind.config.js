// const colors = require('@tailwindcss/ui/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    typography: {
      default: {
        css: {
          lineHeight: round(32 / 16),
          p: {
            marginTop: em(20, 16),
            marginBottom: em(20, 16),
          },
        },
      },
    },
    extend: {
      colors: {
        'accent': '#00FFA3',
        // 'accent': '#00C6BA'
        // 'accent-alt': '#00C6BA'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
