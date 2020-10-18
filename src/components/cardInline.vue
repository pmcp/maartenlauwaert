<template>
  <button
    :class="{ ' text-gray-800': isCardActive }"
    class="underline hover:text-gray-800"
    @mouseover="setActiveId()"
  >
    <slot></slot>
    <a
      :href="card.url"
      target="_blank"
    >
      <!-- Heroicon name: external-link -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        :class="{ ' text-gray-800': isCardActive }"
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
  </button>
</template>

<script>
export default {
  props: {
    activeId: {
      type: Number,
      default: null
    },
    cardId: {
      type: Number,
      default: null
    },
    card: {
      type: Object,
      default() {
        return {};
      },
    },
    hoveringInfo: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isCardActive() {
      if(this.activeId === null) return;
      if(this.activeId === this.cardId && this.hoveringInfo) return true;
    }
  },
  methods: {
    setActiveId() {
      console.log(`setting active Id on mouseover with id ${this.cardId}`)
    }
  },
};
</script>
