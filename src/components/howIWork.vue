<template>
  <div class="container mx-auto p-6 sm:p-15 overflow-hidden sm:overflow-visible">
    <h2 class="text-3xl font-bold text-gray-800 tracking-tight pb-7 capitalize">How I work</h2>
    <div class="flex flex-row ">
      <div class="mx-auto container  flex-grow ">
        <div class="relative pb-8 pt-6 mt-4 mx-auto text-sm leading-7 text-gray-500">
          <h3 class="text-2xl font-bold text-gray-800 tracking-tight">
            Confidently decide what to do next
          </h3>

          <blockquote class="mt-8 md:flex-grow md:flex md:flex-col pl-3 ">
            <div class="relative md:flex-grow">
              <svg
                class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p class="relative text-gray-500 ">
                Focus is a matter of deciding what things you’re not going to do.
              </p>
            </div>
          </blockquote>
          <div class=" italic text-gray-400 pl-3">-<card-inline
              id="johnCarmack"
              :url-inline="false"
            >John Carmack</card-inline>
          </div>
          <p class="pt-5 ">
            When building applications / products / content / ... you start from a set of assumptions. “Our users will not like A, because of B”. Or “our users will want to do X because of Y”. But what if this is wrong? Or only right for some specific users. I help you uncover uncertainties, and measure if we can actually build on these assumptions.
          </p>
        </div>

        <div class="relative pb-8 pt-6 mt-4 mx-auto text-sm leading-7 text-gray-500">
          <h3 class="text-2xl font-bold text-gray-800 tracking-tight">
            From no-code to high fidelity
          </h3>
          <p class="pt-5 ">
            You don't need a fully working app to test what works or doesn't. I turn ideas into something you can put in front of real people. This can be a simple clickable design, a working application or a small tweak to an existing product. I try to minimize effort and maximize learnings.
          </p>
        </div>

        <div class="relative pb-8 pt-6 mt-4 mx-auto text-sm leading-7 text-gray-500">
          <h3 class="text-2xl font-bold text-gray-800 tracking-tight">
            Knowledge speaks, wisdom listens
          </h3>
          <p class="pt-5 ">
            Once we’ve got something to test, let's start the conversation with our users. By truly listening to our users, magic happens: we get actionable feedback. I love to find out what doesn’t click, and then iterate and improve upon that. A “Meh” we got, let’s turn that into a “Wow”.
          </p>
        </div>

        <div class="relative pb-8 pt-6 mt-4 mx-auto text-sm leading-7 text-gray-500">
          <h3 class="text-2xl font-bold text-gray-800 tracking-tight">
            I make mistakes, so you don’t have to
          </h3>
          <p class="pt-5 ">
            “Move fast, break things” was the big mantra of the 2010’s. But then some companies actually broke more than they could fix. I help your organization incorporate a “learn fast “-mindset, without the public failing, so you can break stuff in a controlled environment. </p>
        </div>

      </div>

      <div class="h-screen w-3/5 hidden sm:block">
        <div class="leading-loose bg-gray-100 rounded p-2 pb-5 shadow sticky top-5 ml-10 sm:ml-20 pl-5">

          <h3 class="text-xl font-bold text-gray-500 tracking-tight ">
            Glossary
          </h3>

          <div
            v-for="(card, id) in $static.allCard.edges"
            :key="id"
          >
            <card
              class="text-gray-500"
              :card="card.node"
              :active="card.node.id == activeCardId"
            ></card>
          </div>
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
        urlButton
        twitter
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
