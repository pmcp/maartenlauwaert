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
          <scrollactive active-class="animated-underline--active" >
            <h3 class="text-xl font-bold text-gray-400 tracking-tight">
                In this article
              </h3>
            <ul class="sticky top-0 text-sm leading-loose text-gray-400 capitalize pb-8">
              
              <li v-for="(i,id) in $page.article.toc" :key="id">
                <a
                  :href="'#'+i.id"
                  class="scrollactive-item animated-underline">
                  {{ i.name }}
                </a>
              </li>
            </ul>
          </scrollactive>
          <div class="leading-loose" v-if="$page.article.cards.length > 0">
            <h3 class="text-xl font-bold text-gray-400 tracking-tight ">
              Side info & Glossary
            </h3>
            <div
              v-for="(card, id) in $page.article.cards"
              :key="id"
              @mouseover="setActiveCard(card.id)"
              @mouseleave="setActiveCard(null)"
            >
              <card
                :card="card"
                :active="card.id == activeCardId"
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
    toc {
      name
      id
    }
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
import card from "~/components/card.vue";
import cardInline from "~/components/cardInline.vue";
import { EventBus } from "~/eventBus.js";

export default {
  metaInfo: {
    title: "Article", // TODO: change name to dynamic
  },
  data() {
    return {
      activeCardId: null,
      hoveringCard: false,
      scrollPos: 0,
      scrollTreshold: 150,
    };
  },
  components: {
    card,
    cardInline,
  },
  methods: {
    setActiveCard(cardId){
      this.activeCardId = cardId;
      EventBus.$emit("setActiveCardIdFromSidebar", cardId);
    },  
    handleScroll: function (evt, el) {
      if (this.activeCardId === null) {
        return;
      }
      if (window.scrollY > this.scrollPos + this.scrollTreshold) {
        console.log('test')
        this.activeCardId = null;
        this.scrollPos = window.scrollY;
      }
      return;
    },
  },
  created() {
    EventBus.$on("setActiveCardId", (cardId) => {
      this.activeCardId = cardId;
    });
  },
};
</script>
