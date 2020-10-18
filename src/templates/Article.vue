<template>
  <Layout>
    <div
      class="container mx-auto pb-8"
      v-scroll="handleScroll"
    >
      <h1
        v-html="$page.article.title"
        class="mt-2 mb-8 text-6xl leading-10 font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-tight"
      >A Bike Renting Platform For Schools </h1>
    </div>
    <div class="container mx-auto flex flex-row mb-8 ">
      <div class="w-1/5">
        <div class="sticky top-5 ">
          <scrollactive active-class="text-gray-800">
            <ul class="sticky top-0 text-sm leading-loose text-gray-400 capitalize pb-8">
              <h3 class="text-xl font-bold text-gray-400 tracking-tight">
                In this article
              </h3>
              <!-- <li v-for="(i,id) in $page.article.toc" :key="id">
                
                <a
                  href="#brief"
                  class="scrollactive-item ">
                  {{ i }}
                </a>
              </li> -->


            </ul>
          </scrollactive>
          <div class="leading-loose">
            <h3 class="text-xl font-bold text-gray-400 tracking-tight ">
              Side info & Glossary
            </h3>
            <div
              v-for="card in $page.article.cards"
              :key="card.id"
            >
              <card
                :content="card"
                :active="card.id == activeInfoId"
              ></card>
            </div>
            <!-- <side-info :activeCard="infoId" ></side-info> -->
          </div>
        </div>
      </div>

      <!-- <div class="flex-grow container mx-auto grid grid-cols-12 gap-8 pl-8 "> -->
        <VueRemarkContent class="flex-grow container mx-auto grid grid-cols-12 gap-8 pl-8 "/>
      <!-- </div> -->

      <!-- 
        <div class="w-1/6 pl-5">
          <div class="sticky top-5">
            <h3 class="text-xl font-bold text-gray-400 tracking-tight">
              Side info & Glossary
            </h3>
            <div v-if="infoId === null">
              <p class="mt-4 mx-auto text-base leading-7 text-gray-400 italic">
                If you hover over an underlined word, the explanation will appear here.
              </p>
            </div>
            <div
              id="id"
              v-if="infoId === 'testId'"
            >
              <p class="mx-auto text-base leading-7 text-gray-400 italic">
                Definition of this term...
              </p>
            </div>
          </div>
        </div>
       -->

    </div>

  </Layout>

</template>

<page-query>
query ($id: ID!) {
  article(id: $id) {
    title
    content
    cards {
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
</page-query>


<script>
// import sideInfo from "~/components/sideInfo.vue";
import card from "~/components/card.vue";
import cardInline from "~/components/cardInline.vue";

import { EventBus } from "~/eventBus.js";

export default {
  metaInfo: {
    title: "Article", // TODO: change name to dynamic
  },
  data() {
    return {
      activeInfoId: null,
      hoveringInfo: false,
      scrollPos: 0,
      scrollTreshold: 150,
    };
  },
  components: {
    card,
    cardInline,
  },
  methods: {
    // setInfoId(id){
    //   console.log(id)
    //   this.infoId = id;
    // },
    handleScroll: function (evt, el) {
      if (this.infoId === null) {
        return;
      }
      if (window.scrollY > this.scrollPos + this.scrollTreshold) {
        this.infoId = null;
        this.scrollPos = window.scrollY;
      }
      return;
    },
  },
  created() {
    EventBus.$on("setInfoId", (data) => {
      console.log("here", data);
      this.infoId = data;
    });
  },
};
</script>
