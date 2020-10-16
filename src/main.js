// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require('~/main.css')

// Scrollactive library: https://github.com/eddiemf/vue-scrollactive
import VueScrollactive from 'vue-scrollactive';


// Global Components
// import testComp from '~/components/testComp.vue'
import openSideInfo from '~/components/openSideInfo.vue'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),

  // Global components
  // Vue.component('test-comp', testComp),
  Vue.component('open-side-info', openSideInfo),





  // Scroll Directive (https://vuejs.org/v2/cookbook/creating-custom-scroll-directives.html)
  Vue.directive('scroll', {
    inserted: function (el, binding) {
      let f = function (evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('scroll', f)
        }
      }
      window.addEventListener('scroll', f)
    }
  })

  // Scrollactive library: https://github.com/eddiemf/vue-scrollactive
  Vue.use(VueScrollactive);
  
}