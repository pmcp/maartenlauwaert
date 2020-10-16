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
        template: './src/templates/Article.vue', // Optional
        refs: {
          cards: {
            typeName: 'Card'
          }
        }
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Card', // Required
        baseDir: './content/cards', // Where .md files are located
        pathPrefix: '/cards', // Add route prefix. Optional
        template: './src/templates/Card.vue' // Optional
      }
    },
  ],
  // This makes dynamic images work
  chainWebpack: config => {
    config.resolve.alias.set('@links', '@/images/links')
  },

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
