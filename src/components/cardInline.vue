<template>
  <span>
    <span class="inline sm:hidden relative" v-if="theCard !== null">
      <button @click="toggleCard" ref="cardButton" :style="lineHeight" class="transition-all duration-300 ease-in-out">
        <span class="text-gray-800 cursor-help highlight underline "><slot></slot></span>
      </button>
        <div
          class="   left-0 shadow-inner w-screen bg-gray-100  px-4 py-6 absolute transition-opacity duration-300 ease-in-out"
          ref="cardOpened"
          :style="styleCard"
        >
        
          <span class="mt-0 mb-0">{{theCard.descr}}</span>
       
          <a
        rel="noopener noreferrer"

            :href="theCard.url"
            target="_blank"
            v-if="theCard.url.length > 0 && urlInline"
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
    v-if="theCard !== null"
      @mouseover="setActiveCardId(id)"
      @mouseleave="setActiveCardId(null)"
      class="text-gray-800 cursor-help hidden sm:inline "
    >
      <span
        class="highlight underline "
        :class="{'highlight--active': active}"
      >
        <slot></slot>
      </span>
      <a
        rel="noopener noreferrer"
        :href="theCard.url"
        target="_blank"
        v-if="theCard.url.length > 0 && urlInline"
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
      top: 1.5,
      left: 1000,
      width: 0,
    };
  },
  props: {
    id: {
      type: String,
      default: null,
    },
    urlInline: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    styleCard(){
      // console.log(this.positionX,  -this.positionX + 'px')
      return {
        // width: this.width+'vw',
        opacity: this.opacity,
        zIndex: this.zIndex,
        left: -this.offset  + 'px',
        top: this.top+'rem'
      }
    },
    theCard() {
      const card = this.$static.cards.edges.filter(
        (card) => this.id === card.node.id
      )[0];
      if(card == undefined) return null;
      
      return card.node;
    },
    lineHeight() {
      return { marginBottom: this.height+'px'};
    },
  },
  methods: {
    toggleCard(event) {
      console.log(event.target.getBoundingClientRect().top);

    // console.log(this.$refs.cardOpened.clientHeight)
      this.active = !this.active;
      if(this.active) {
        this.opacity = 1;
        this.offset = event.target.getBoundingClientRect().left;
        this.zIndex = 1;
        this.width = 100
        this.height = this.$refs.cardOpened.clientHeight;

      } else {
        this.opacity = 0;
        this.offset = event.x;
        this.zIndex = -1;
        this.height = 0;
        this.width = 0;
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
