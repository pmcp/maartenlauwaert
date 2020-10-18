<template>
  <span @mouseover="setActiveCardId(card)" @mouseleave="setActiveCardId(null)" class="text-gray-800">
    <span class="highlight" :class="{'highlighted': active}">
      <slot></slot>
    </span>
    <a  
      :href="theCard.url"
      target="_blank"
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
</template>



<static-query>
  query {
    cards: allCard {
      edges {
        node {
          id
          name
          url
          type
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
    card: {
      type: Number,
      default: null,
    },
  },
  computed: {
    theCard() {
      return this.$static.cards.edges[this.card];
    },
  },
  methods: {
    setActiveCardId(card) {
      if(card == null) {
        this.active = false
        return;
      }

      this.active = true;
      EventBus.$emit("setActiveCardId", this.card);
    },
  },
  created() {
    EventBus.$on("setActiveCardIdFromSidebar", (data) => {
      console.log(data, this.active, this.card)
      this.active = this.card === data;
    });
  },
};
</script>
