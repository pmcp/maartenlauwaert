// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require('~/main.css')

// Scrollactive library: https://github.com/eddiemf/vue-scrollactive
import VueScrollactive from 'vue-scrollactive';


// Global Components
import cardInline from '~/components/cardInline.vue'
import imageInline from '~/components/imageInline.vue'
import articleMeta from '~/components/articleMeta.vue'
import articleGrid from '~/components/articleGrid.vue'
import articleVideo from '~/components/articleVideo.vue'



import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),

  // Global components
  Vue.component('cardInline', cardInline),
  Vue.component('imageInline', imageInline),
  Vue.component('articleMeta', articleMeta),
  Vue.component('articleGrid', articleGrid),
  Vue.component('articleVideo', articleVideo),





  // // Scroll Directive (https://vuejs.org/v2/cookbook/creating-custom-scroll-directives.html)
  // Vue.directive('scroll', {
  //   inserted: function (el, binding) {
  //     let f = function (evt) {
  //       console.log('here1', el)
  //       if (binding.value(evt, el)) {
  //         console.log('here2')
  //         window.removeEventListener('scroll', f)
  //       }
  //     }
  //     window.addEventListener('scroll', f)
  //   }
  // })

  // Scrollactive library: https://github.com/eddiemf/vue-scrollactive
  Vue.use(VueScrollactive);
}