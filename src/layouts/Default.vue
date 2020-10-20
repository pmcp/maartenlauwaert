<template>
  <div>
    <header>
      <main-nav></main-nav>
    </header>
    <slot/>
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainNav from '@/components/mainNav.vue';
import mainFooter from '@/components/mainFooter.vue';
export default {
components:  {
  mainNav,
  mainFooter
}
}
</script>
