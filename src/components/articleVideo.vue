<template>
    <div class="embed-container mb-8"><iframe :src='`https://www.youtube.com/embed/${id}`' frameborder='0' allowfullscreen></iframe></div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: '' // TODO: Placeholder vid
    }
  }
};
</script>
