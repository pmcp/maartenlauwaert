<template>
  <figure>
    <slot name="image"></slot>
    <figcaption  v-if="captionPassed" class="flex mt-3 text-sm text-gray-500">
      <svg
        class="flex-none w-5 h-5 mr-2 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
          clip-rule="evenodd"
        />
      </svg>
      <slot name="caption"></slot>
    </figcaption>
  </figure>
</template>
<script>
export default {
computed: {
  captionPassed() {
    console.log(this.$slots.caption )
    if(this.$slots.caption === undefined) return false
    return true;
  }
},
};
</script>
