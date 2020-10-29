<template>
  <span>
    <span class="inline sm:hidden relative">
      <button @click="toggleCard" ref="cardButton" :style="lineHeight" class="transition-all duration-300 ease-in-out">
        <span class="text-gray-800 cursor-help highlight underline prose prose-base" ><slot></slot></span>
      </button>
        <div
          class=" left-0 shadow-inner w-screen bg-gray-100 px-4 py-6 absolute transition-opacity duration-300 ease-in-out"
          ref="cardOpened"
          :style="styleCard"
        >
        
          <span class="mt-0 mb-0">{{theCard.descr}}</span>
          <a
            :href="theCard.url"
            target="_blank"
            v-if="theCard.url.length > 0"
          >
            {{ theCard.url }}
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
        </div>
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
      offset: 0,
      zIndex: -1,
      opacity: 0,
      height: 0,
      top: 0
    };
  },
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  computed: {
    styleCard(){
      // console.log(this.positionX,  -this.positionX + 'px')
      return {
        opacity: this.opacity,
        zIndex: this.zIndex,
        left: -this.offset+18+ 'px',
        top: this.top+'rem'
      }
    },
    theCard() {
      return this.$static.cards.edges.filter(
        (card) => this.id === card.node.id
      )[0].node;
    },
    lineHeight() {
      console.log(this.height)
      // console.log(this.height)
      return { marginBottom: this.height+'px'};
    },
  },
  methods: {
    toggleCard(event) {
    // console.log(this.$refs.cardOpened.clientHeight)
      this.active = !this.active;
      if(this.active) {
        this.opacity = 1;
        this.offset = event.x;
        this.zIndex = 1;
        this.top = 1.5;
        this.height = this.$refs.cardOpened.clientHeight;

      } else {
        this.opacity = 0;
        this.top = 0;
        this.offset = event.x;
        this.zIndex = -1;
        this.height = 0;
      }
      
    },
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
