<template>
  <div class="container mx-auto p-6 sm:p-20 relative bg-white mb-20">
    
    <h1 class="text-5xl font-bold text-gray-800 tracking-tight pt-7 pb-7 capitalize">Hi, I'm Maarten.</h1>
    
    <h2 class="mt-4  text-base leading-7 text-gray-800  sm:w-2/3 pb-20">
      I help organisations define and decide the next steps for their product or service.
    </h2>
    <doodle-coffee class="absolute w-1/2 sm:w-1/3 right-0 sm:right-0 "></doodle-coffee>
  </div>
</template>

<script>
import doodleCoffee from '@/components/doodleCoffee.vue';
export default {
  components: {
    doodleCoffee,
  },
}
</script>
