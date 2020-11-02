<template>
  <div class=" bg-gray-100 ">
    <div class="container mx-auto px-6 sm:px-15 py-15 pb-20">
      <h2 class="text-3xl font-bold text-gray-800 tracking-tight pb-7 capitalize">Case studies</h2>
      <div class="grid gap-16  lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
        <case-link
          v-for="(i, id) in cases"
          :key="id"
          :content="i.node"
        ></case-link>
      </div>

    </div>
  </div>
</template>
<script>
import caseLink from "@/components/caseLink.vue";
export default {
  props: {
    cases: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  components: {
    caseLink,
  },
};
</script>