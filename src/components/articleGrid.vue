<template>
  <div class="prose prose-base text-gray-500"
  :class="gridClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    start: {
      type: Number,
      default: 1
    },
    end: {
      type: Number,
      default: 13
    }
  },
  computed: {
    gridClasses() {
      return `col-start-${this.start} col-end-${this.end}`
    }
  },
};
</script>
