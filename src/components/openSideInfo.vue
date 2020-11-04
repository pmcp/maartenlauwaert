<template>
  <button
    :id="infoId"
    class=""
    :class="{ ' text-gray-800': infoId == activeId && hoveringInfo }"
    class="underline hover:text-gray-800"
    @mouseover="setInfoId(infoId)"
  >
    <slot></slot>
    <a
      :href="url"
              rel="noopener noreferrer"

      target="_blank"
    >
      <!-- Heroicon name: external-link -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        :class="{ ' text-gray-800': infoId == activeId && hoveringInfo }"
        class="w-5 h-5 pb-1 inline text-gray-500 hover:text-gray-800"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>

    </a></button>
</template>

<script>
import { EventBus } from '~/eventBus.js';
export default {
  props: {
    activeId: {
      type: String,
      default: null,
    },
    infoId: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
   methods: {
      setInfoId(id) {
        EventBus.$emit('setInfoId', id);
      }
    }
};
</script>