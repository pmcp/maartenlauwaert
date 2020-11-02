<template>
  <Layout>
    <h1 class="px-6 sm:px-15 container mx-auto mt-2 mb-6 sm:mb-14 font-extrabold tracking-tight text-gray-900 text-3xl sm:text-5xl leading-snug sm:leading-tight">Work & Writings</h1>

    <div class="container mx-auto px-6 sm:px-15 ">
      <h2 class="text-3xl font-bold text-gray-800 tracking-tight pb-7 capitalize">Case studies</h2>
      <div class="grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
        <div
          v-for="(i, id) in $page.allArticle.edges"
          :key="id"
          class="shadow p-6"
        >
          <case-link :content="i.node"></case-link>
        </div>

      </div>
    </div>

  </Layout>
</template>

<page-query>
  query {
    allArticle(filter: { type: { eq: "case" }}) {
    edges {
      node {
        meta {
          slug
          button
          summary
        }
        title
      }
    }
  }
  }
</page-query>
<script>
import caseLink from '@/components/caseLink.vue';
export default {
  metaInfo: {
    title: "Work & Writings",
  },
  components: {
    caseLink,
  },
};
</script>
