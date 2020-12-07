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
        typeName: 'MainPage', // Required
        baseDir: './content/pages', // Where .md files are located
        // pathPrefix: '/', // Add route prefix. Optional
        template: './src/templates/Page.vue', // Optional
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
    {
      use: 'gridsome-plugin-fathom',
        options: {
          siteId: 'VCSIDLSE',
          // useful if you're running a self-hosted fathom instance
          // trackerUrl: 'your-custom-url',
          // declare this to ensure your tracking only occurs on a single host
          host: 'maartenlauwaert.eu',
          // set to true for local debugging; defaults to false
          debug: false
        }
      }
  ],
  // This makes dynamic images work
  chainWebpack: config => {
    config.resolve.alias.set('@links', '@/images/cards')
  },

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        // 'remark-toc'
      ]
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
