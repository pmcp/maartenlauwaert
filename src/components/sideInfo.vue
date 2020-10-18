<template>
  <!-- <transition-group
    enter-active-class="transition ease-in duration-100"
    leave-active-class="transition ease-in duration-100"
    enter-class="opacity-0 scale-70"
    enter-to-class="opacity-100 scale-100"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-70"
  > -->
<div>

  

    <div
      v-if="infoId === null"
      key="noInfo"
    > 
      <p class="mt-4 mx-auto text-sm leading-normal shadow-inner px-2 py-6  text-gray-300 italic absolute">
        If you hover over an underlined word, the explanation will appear here.
      </p>
    </div>
    <info v-else :infoId="infoId"></info>
</div>
  <!-- </transition-group> -->
</template>

<script>
import info from '@/components/info.vue';
export default {
  components: {
    info,
  },
  props: {
    infoId: {
      type: String,
      default: null 
    },
  }
};
</script>
