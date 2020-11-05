<template>
  <div class="flex flex-col justify-between h-full border-solid border-2 border-gray-500 p-6 shadow-xl rounded whiteborders">

    <g-link
      :to="`/articles/${content.meta.slug}`"
      class="block"
    >
      <h3 class="text-xl leading-7 font-semibold text-gray-200">
        {{ content.title }}
      </h3>
      <p class="mt-3 text-base leading-6 text-gray-300">
        {{ content.meta.summary }}
      </p>
    </g-link>
    <div class="mt-4">
      <g-link
        :to="`/articles/${content.meta.slug}`"
        class="p-2 bg-black text-sm text-white leading-6 hover:bg-accent hover:text-black transition ease-in-out duration-150"
      >
        {{ content.meta.button }} </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
