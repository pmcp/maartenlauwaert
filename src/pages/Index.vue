<template>
  <Layout>
    <intro></intro>
    <hero></hero>
    <how-i-work></how-i-work>
    <cases></cases>
  </Layout>
</template>

<script>
import intro from '~/components/intro.vue'
import hero from '~/components/hero.vue'
import howIWork from '~/components/howIWork.vue'
import cases from '~/components/cases.vue'


export default {
  components: {
    intro,
    hero,
    howIWork,
    cases
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
