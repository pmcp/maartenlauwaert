<template>
  <Layout>
    <h1 class="px-6 sm:px-15 container mx-auto mt-2 mb-6 sm:mb-14 font-extrabold tracking-tight text-gray-900 text-3xl sm:text-5xl leading-snug sm:leading-tight">Work & Writings</h1>

    <div class="container mx-auto px-6 sm:px-15 mb-20">
      <h2 class="text-3xl font-bold text-gray-800 tracking-tight pb-7 capitalize">Tools</h2>
      <div class="grid gap-16 pt-10 lg:gap-x-5 lg:gap-y-12">

        <ul class="flex">
          <li
            class="mr-3"
            v-for="(cat, id) in categories"
            :key="id"
          >
            <button
              @click="toggleCat(id)"
              class="bg-gray-100 group  text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              :class="{'bg-accent': cat.active}"
            >
              <span class="capitalize">{{ id }} <span class="font-medium ">({{cat.total}})</span></span>
            </button>
          </li>

        </ul>
        <div
          v-for="(card, id) in filteredCards()"
          :key="id"
        
        >
                  <div class="flex flex-row  items-center mt-2">

          <h3 class=" text-xl leading-7 font-semibold text-gray-900">
            {{ card.node.name}}
          </h3>
          <div class="ml-5 text-xs bg-gray-100 group  text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <span class="capitalize">{{ card.node.cat}}</span>
            </div>
</div>
          
          <div class="flex  flex-col sm:flex-row ">
            <p class="mt-3  text-base leading-6 text-gray-500 prose prose-base">
              {{ card.node.descr }}
            </p>
            <div class="pl-3 bg-gray-100 rounded p-2 mt-3 md:mt-0" v-if="card.node.twitter || card.node.url">
              <div
                v-if="card.node.twitter"
                class=" text-xs italic pt-4"
              >
                <a
                  :href="`https://twitter.com/${card.node.twitter}`"
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
                  <span class="pl-2">{{card.node.twitter}}</span>
                </a>
              </div>
              <div
                v-if="card.node.url.length > 0"
                class="mb-4 "
              >
                <svg
                  xmln="http://wwwz.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class=" w-5 h-5  inline text-gray-400 pr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <a
                  :href="card.node.url"
                  target="_blank"
                  class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150 text-xs hover:underline"
                >
                  <span
                    v-if="card.node.urlButton"
                    class=""
                  >{{ card.node.urlButton}}</span>
                  <span
                    v-else
                    class=""
                  >Visit site</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    allCard {
    edges {
      node {
        id
        name
        url
        cat
        cover
        descr
        name
        twitter
        urlButton
      }
    }
  }
  }
</page-query>
<script>
import card from "~/components/card.vue";

export default {
  metaInfo: {
    title: "Work & Writings",
  },
  computed: {
    categories() {
      return this.$page.allCard.edges.reduce((acc, item) => {
        if (acc[item.node.cat]) {
          acc[item.node.cat].total++;
        } else {
          acc[item.node.cat] = {
            total: 1,
            active: true,
          };
        }
        return acc;
      }, {});
    },
  },
  methods: {
    filteredCards() {
      return this.$page.allCard.edges.filter((card) => {
        return this.categories[card.node.cat].active;
      });
    },
    toggleCat(id) {
      const cat = this.categories[id];
      const updatedCat = { ...cat, active: !cat["active"] };
      this.$set(this.categories, id, updatedCat);
      this.$forceUpdate(); //TODO: Fix this, seems not ok
    },
  },
  components: {
    card,
  },
};
</script>
