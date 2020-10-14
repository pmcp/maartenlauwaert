// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require('~/main.css')

// Scrollactive library: https://github.com/eddiemf/vue-scrollactive
import VueScrollactive from 'vue-scrollactive';


import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
  head.link.push({
    rel: 'stylesheet',
    href: 'https://rsms.me/inter/inter.css'
  })

  // Scrollactive library: https://github.com/eddiemf/vue-scrollactive
  Vue.use(VueScrollactive);
}