<template>
  <div class="text-gray-500 col-span-full px-4 sm:px-0"
  :class="gridClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    start: {
      type: Number,
      default: null
    },
    end: {
      type: Number,
      default: 12
    },
    span: {
      type: Number,
      default: null
    },
    prose: {
      type: Boolean,
      default: true
    }

  },
  computed: {
    gridClasses() {
      let prose = [];
      let gridClasses = [];
      if(this.prose) prose = ['prose', 'prose-base'];
      if(this.start !== null && this.span === null) {
        gridClasses = [`sm:col-start-${this.start}`, `sm:col-end-${this.end}`]
      }
      if(this.start === null && this.span === null) {
        gridClasses = [`sm:col-span-12`]
      }
      if(this.start === null && this.span === null) {
        gridClasses = [`sm:col-span-12`]
      }
      if(this.span !== null) {
        gridClasses = [`sm:col-span-${this.span}`]
      }
      return [...prose, ...gridClasses];

      
    }
  },
};
</script>
