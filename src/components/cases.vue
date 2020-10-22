<template>
<div class="bg-grey-400 p-15 ">
  <div class="container mx-auto m-15 ">
    <h2 class="text-3xl font-bold text-gray-800 tracking-tight pb-7 capitalize">Case studies</h2>
    <div class="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
      <div v-for="(i, id) in cases" :key="id">
        
        <!-- <p class="text-sm leading-5 text-gray-500">
          <time datetime="2020-03-10">Mar 10, 2020</time>
        </p> -->
        <g-link :to="`/articles/${i.node.meta.slug}`" class="block">
          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
            {{ i.node.title }}
          </h3>
          <p class="mt-3 text-base leading-6 text-gray-500">
            {{ i.node.meta.summary }}
          </p>
        </g-link>
        <div class="mt-3">
          <g-link :to="`/articles/${i.node.meta.slug}`" class="p-2 bg-black text-sm text-white leading-6 hover:bg-accent hover:text-black transition ease-in-out duration-150">
            {{ i.node.meta.button }}
          </g-link>
        </div>
      </div>
    
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    cases: {
      type: Array,
      default() {
        return {};
      },
    },
  },
}
</script>