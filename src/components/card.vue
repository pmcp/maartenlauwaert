<template>
  <details :open="active">
    <summary>
      <span
        class="text-sm highlight cursor-pointer underline "
        :class="{'highlight--active ': active,}"
      >{{card.name}}</span>
    </summary>
    <div class="
    leading-snug
          
          text-xs
          italic">
      {{ card.descr }}
    </div>
    
    <div
      v-if="card.url.length > 0"
      class="mb-4 "
    >
      <svg
        xmlns="http://wwwz.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class=" w-4 h-4  inline text-gray-400 pr-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
      <a
        :href="card.url"
        target="_blank"
      >
        <span class="text-xs underline">Visit site</span>
      </a>
    </div>
    <div class="border-b border-gray-300 mb-2 px-4"></div>
  </details>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default() {
        return {};
      },
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  // computed: {
  //   active() {
  //     if(this.infoId === null) return;
  //     const active = this.$static.links.edges.filter(link => this.infoId === link.node.id)
  //     return active[0]
  //   },
  //   img(){
  //     if(this.active === null) return;
  //     return '~/images/links/provelo.png'
  //   }
  // },
};
</script>
