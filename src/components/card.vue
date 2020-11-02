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
pt-5
          text-xs
          italic">
      {{ card.descr }}
    </div>
    <div
      v-if="card.twitter"
      class="leading-snug text-xs italic pt-4"
    >
      <a
        :href="`https://twitter.com/${card.twitter}`"
        target="_blank"
        class="text-gray-400 hover:text-gray-500 transition hover:underline ease-in-out duration-150 flex flex-row "
      >
        <span class="sr-only">Twitter</span>
        <svg
          class="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
        <span class="pl-2">{{card.twitter}}</span>
      </a>
    </div>
    <div
      v-if="card.url.length > 0"
      class="mb-4 text-gray-400  hover:text-gray-500 transition ease-in-out duration-150"
    >
      <svg
        xmln="http://wwwz.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class=" w-5 h-5  inline  pr-1"
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
        class="  text-xs hover:underline"
      >
        <span
          v-if="card.urlButton"
          class=""
        >{{ card.urlButton}}</span>
        <span
          v-else
          class=""
        >Visit site</span>
      </a>
    </div>
    <div class="border-b border-gray-300 mb-2 px-4 pb-5"></div>
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
  //     return '~/images/cards/provelo.png'
  //   }
  // },
};
</script>
