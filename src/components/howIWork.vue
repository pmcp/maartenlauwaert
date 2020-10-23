<template>
  <div class="px-3 sm:px-0 container mx-auto m-15 relative">
    <h2 class="text-3xl font-bold text-gray-800 tracking-tight pb-7 capitalize">How I work</h2>
    <div class="grid grid-cols-6 gap-8 ">
      <div class="col-span-full mx-auto container sm:col-span-3">
        <div
          class="relative pb-8 pt-6 mt-4 mx-auto text-base leading-7 text-gray-500"
          v-for="i in 4"
          :key="i"
        >
          <h3 class="text-2xl font-bold text-gray-800 tracking-tight">
            Confidently decide what to do next
          </h3>
          <p class="contents ">
            You don't
            <card-inline id="provelo">Pro Velo</card-inline> need a fully working app to test what works or doesn't. I turn ideas into something you can put in
            <card-inline id="test">Test</card-inline> front of real people. This can be a <button
              id="testId"
              class="underline"
              @mouseover="defId = 'testId'"
            >simple clickable design</button>, a working application or a small tweak to an existing product. I try to minimize effort and maximize learnings.
          </p>
        </div>
      </div>
      <div class="col-span-2 col-start-5 hidden sm:block ">
        <div class="leading-loose sticky top-0 ">
          <h3 class="text-xl font-bold text-gray-500 tracking-tight ">
            Glossary
          </h3>

          <div
            v-for="(card, id) in $static.allCard.edges"
            :key="id"
          >
            <card
              class="text-gray-400"
              :card="card.node"
              :active="card.node.id == activeCardId"
            ></card>
          </div>
          <!-- <side-info :activeCard="infoId" ></side-info> -->
        </div>
      </div>
    </div>
  </div>
</template>


<static-query>
  query {
   allCard {
    edges {
      node {
        id
        name
        url
        cat
        cover
        descr
        name
      }
    }
  }
  }
</static-query>

<script>
import card from "~/components/card.vue";
// import cardInline from "~/components/cardInline.vue";
import { EventBus } from "~/eventBus.js";

export default {
  data() {
    return {
      activeCardId: null,
    };
  },
  components: {
    card,
    // cardInline,
  },
  methods: {
    // handleScroll: function (evt, el) {
    //   console.log('here')
    //   if (this.activeCardId === null) {
    //     return;
    //   }
    //   if (window.scrollY > this.scrollPos + this.scrollTreshold) {
    
    //     this.activeCardId = null;
    //     this.scrollPos = window.scrollY;
    //   }
    //   return;
    // },
  },
  created() {
    // if (this.isCardsActive && process.isClient)
    //   window.addEventListener("scroll", this.handleScroll);

    EventBus.$on("setActiveCardId", (cardId) => {
      this.activeCardId = cardId;
    });
  },
};
</script>
