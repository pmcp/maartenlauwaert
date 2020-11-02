<template>
  <div class="flex flex-col  bg-white">
    <header>
      <main-nav></main-nav>
    </header>
    <main class="flex-grow">
      <slot />
    </main>
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
