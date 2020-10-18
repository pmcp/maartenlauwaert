<template>
  <div>
    <div
      @mouseover="hoveringInfo = true"
      @mouseleave="hoveringInfo = false"
    >

      <a
        :href="card.url"
        target="_blank"
      >
        <div class="max-w-sm rounded overflow-hidden shadow-inner p-1 leading-snug group bg-white">
          <img
            class="w-full group-hover:bg-gray-800 hover:shadowtransition duration-500 ease-in-out"
            :src="card.cover"
            alt="A screenshot of the website of the organisation Pro Velo"
            width="200"
          />
          <div class="px-1 py-4">
            <div class="font-bold text-gray-400 text-sm mb-2 group-hover:text-gray-800 transition duration-500 ease-in-out ">Pro Velo</div>
            <p class="text-gray-400 text-sm group-hover:text-gray-800 transition duration-500 ease-in-out">
              {{ card.descr }}
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class=" w-4 h-4  inline text-gray-400 pr-1 group-hover:text-gray-800 transition duration-500 ease-in-out"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <span class="text-gray-400 text-sm underline group-hover:text-gray-800 transition duration-500 ease-in-out">Visit site</span>
          </div>
        </div>
      </a>

    </div>
  </div>
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
export default {
  props: {
    card: {
      type: Object,
      default() {
        return {};
      },
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
