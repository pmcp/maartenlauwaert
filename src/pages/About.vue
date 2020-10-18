<template>
  <Layout>

  </Layout>
</template>



<script>
import sideInfo from '~/components/sideInfo.vue'

export default {
  metaInfo: {
    title: "About Me",
  },
  data() {
    return {
      scrollPos: 0,
      scrollTreshold: 150,
    };
  },
  components: {
    sideInfo  },
  methods: {
    handleScroll: function (evt, el) {
      if (this.infoId === null) {
        return;
      }
      if (window.scrollY > this.scrollPos + this.scrollTreshold) {
        this.infoId = null;
        this.scrollPos = window.scrollY;
      }
      return;
    },
  },
};
</script>
