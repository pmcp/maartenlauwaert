<template>
  <!-- <transition-group
    enter-active-class="transition ease-in duration-100"
    leave-active-class="transition ease-in duration-100"
    enter-class="opacity-0 scale-70"
    enter-to-class="opacity-100 scale-100"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-70"
  > -->
  <div>
    <div
      v-for="(l,id) in $static.cards.edges"
      :key="id"
      id="id"
      @mouseover="hoveringInfo = true"
      @mouseleave="hoveringInfo = false"
    >
    {{ '~/images/cards/'+l.node.cover }}
   <a
           rel="noopener noreferrer"

        :href="l.node.url"
        target="_blank"
      >
        <div class="max-w-sm rounded overflow-hidden shadow-inner p-1 leading-snug group bg-white">
          <img
            class="w-full group-hover:bg-gray-800 hover:shadowtransition duration-500 ease-in-out"
            :src="'~/images/cards/'+l.node.cover"
            alt="A screenshot of the website of the organisation Pro Velo"
            width="200"
          />
          <div class="px-1 py-4">
            <div class="font-bold text-gray-400 text-sm mb-2 group-hover:text-gray-800 transition duration-500 ease-in-out ">Pro Velo</div>
            <p class="text-gray-400 text-sm group-hover:text-gray-800 transition duration-500 ease-in-out">
              {{ l.node.descr }}
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
  <!-- </transition-group> -->
</template>


<static-query>
  query {
    cards: allCard {
      edges {
        node {
          id
          name
          urls
          cover
        }
      }	
    }
  }
</static-query>

<script>
export default {
  props: {
    infoId: {
      type: String,
      default: null 
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
