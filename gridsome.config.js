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
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Article', // Required
        baseDir: './content/articles', // Where .md files are located
        pathPrefix: '/articles', // Add route prefix. Optional
        template: './src/templates/Article.vue' // Optional
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Link', // Required
        baseDir: './content/links', // Where .md files are located
        pathPrefix: '/links', // Add route prefix. Optional
        template: './src/templates/Link.vue' // Optional
      }
    }
  ],
  // transformers: {
  //   remark: {
  //     // global remark options
  //   }
  // },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    }
  }
}
