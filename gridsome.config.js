// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'Maarten Lauwaert',
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      path: 'content/info/*.md',
      typeName: 'Info',
      remark: {
        // remark options
      }
    }
  }],
  transformers: {
    remark: {
      // global remark options
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    }
  }
}
