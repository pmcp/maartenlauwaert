<template>
<g-image
      slot="image"
      class="w-auto"
      src="~/images/velotheek/velotheek_excalidraw_step1.png"
      alt="An scheme showing the timeline of the project. Highlighted is step 1: Research"
    />  
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '' // TODO: Add placeholder
    },
    alt: {
      type: String,
      default: ''
    }
  }
};
</script>
