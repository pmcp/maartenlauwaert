<template>
  <Layout>
    <div
      
      v-scroll="handleScroll"
    >
      <h1
        v-html="$page.article.title"
        class="px-4 container mx-auto mt-2 mb-6 sm:mb-14 font-extrabold tracking-tight text-gray-900 text-3xl sm:text-5xl leading-snug sm:leading-tight"
      ></h1>

      <div class="px-4  flex flex-col sm:flex-row sm:pb-8 container mx-auto">
        <div class="w-full lg:w-1/4 mb-4 sm:mb-0  ">
          <div class="sticky top-5 ">
            <div class="h-full overflow-y-scroll">
            <scrollactive active-class="animated-underline--active">
              <h3 class="text-2xl sm:text-xl font-bold text-gray-800 sm:text-gray-500 tracking-tight pb-5 sm:pb-0">
                Chapters
              </h3>
              <ul class="sticky top-0 text-sm leading-loose text-gray-400 capitalize pb-8 list-disc sm:list-none px-4 sm:px-0 ">

                <li
                  v-for="(i,id) in $page.article.toc"
                  :key="id"
                >
                  <a
                    :href="'#'+i.id"
                    class="scrollactive-item animated-underline"
                  >
                    {{ i.name }}
                  </a>
                </li>
              </ul>
            </scrollactive>
            <div
              class="leading-loose hidden sm:block"
              v-if="$page.article.cards.length > 0"
            >
              <h3 class="text-xl font-bold text-gray-500 tracking-tight ">
                Glossary
              </h3>
              <div
                v-for="(card, id) in $page.article.cards"
                :key="id"
              >
                <card
                  class="text-gray-400"
                  :card="card"
                  :active="card.id == activeCardId"
                ></card>
              </div>
              <!-- <side-info :activeCard="infoId" ></side-info> -->
            </div>
            </div>    
          </div>
        </div>

        <!-- <div class="flex-grow container mx-auto grid grid-cols-12 gap-8 pl-8 "> -->
        <VueRemarkContent class="flex-grow grid grid-cols-12 gap-8 " />

        <div
          class="leading-loose sm:hidden pl-4 mt-9 py-4 bg-gray-100"
          v-if="$page.article.cards.length > 0"
        >
          <h3 class="text-xl font-bold text-gray-800 tracking-tight ">
            Glossary
          </h3>
          <div
            v-for="(card, id) in $page.article.cards"
            :key="id"
          >
            <card
              class="text-gray-800"
              :card="card"
            ></card>
          </div>
        </div>
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
    setActiveCard(cardId) {
      this.activeCardId = cardId;
      EventBus.$emit("setActiveCardIdFromSidebar", cardId);
    },
    handleScroll: function (evt, el) {
      if (this.activeCardId === null) {
        return;
      }
      if (window.scrollY > this.scrollPos + this.scrollTreshold) {
        console.log("test");
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
