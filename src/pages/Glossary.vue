<template>
  <Layout>
    <h1 class="px-4 sm:px-0 container mx-auto mt-2 mb-6 sm:mb-14 font-extrabold tracking-tight text-gray-900 text-3xl sm:text-5xl leading-snug sm:leading-tight">Work & Writings</h1>

    <div class="container mx-auto m-15 ">
      <h2 class="text-3xl font-bold text-gray-800 tracking-tight pb-7 capitalize">Tools</h2>
      <div class="grid gap-16 pt-10 lg:gap-x-5 lg:gap-y-12">

        <div
          v-for="(card, id) in $page.allCard.edges"
          :key="id"
        >

          <div>

            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {{ card.node.name}}
            </h3>
            <p class="mt-3 text-base leading-6 text-gray-500">
              {{ card.node.descr }}
            </p>

          </div>
        </div>
      </div>

    </div>

  </Layout>
</template>

<page-query>
  query {
    allCard {
    edges {
      node {
        id
        name
        url
        cat
        type
        cover
        descr
        name
      }
    }
  }
  }
</page-query>
<script>
import card from "~/components/card.vue";

export default {
  metaInfo: {
    title: "Work & Writings",
  },
  components: {
    card,
  },
};
</script>
