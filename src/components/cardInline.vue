<template>
  <span>
    <span class="inline sm:hidden">
      TEST
    </span>
    <span
      @mouseover="setActiveCardId(id)"
      @mouseleave="setActiveCardId(null)"
      class="text-gray-800 cursor-help hidden sm:inline "
    >
      <span
        class="highlight underline prose prose-base"
        :class="{'highlight--active': active}"
      >
        <slot></slot>
      </span>
      <a
        :href="theCard.url"
        target="_blank"
        v-if="theCard.url.length > 0"
      >
        <!-- Heroicon name: external-link -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          :class="{ ' text-gray-800': active }"
          class="w-5 h-5 pb-1 inline text-gray-500 hover:text-gray-800"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>

      </a>
    </span>
  </span>
</template>



<static-query>
  query {
    cards: allCard {
      edges {
        node {
          id
          name
          descr
          url
          cat
          cover
        }
      }	
    }
  }
</static-query>

<script>
import { EventBus } from "~/eventBus.js";

export default {
  data() {
    return {
      active: false,
    };
  },
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  computed: {
    theCard() {
      return this.$static.cards.edges.filter(
        (card) => this.id === card.node.id
      )[0].node;
    },
    lineHeight() {
      return { marginBottom: "4rem" };
    },
  },
  methods: {
    setActiveCardId(card) {
      if (card == null) {
        this.active = false;
        return;
      }
      this.active = true;
      EventBus.$emit("setActiveCardId", card);
    },
  },
  created() {
    EventBus.$on("setActiveCardIdFromSidebar", (data) => {
      this.active = this.id === data;
    });
  },
};
</script>
