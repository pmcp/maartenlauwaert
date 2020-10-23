<template>
  <Layout>
    <h1 class="px-4 sm:px-0 container mx-auto mt-2 mb-6 sm:mb-14 font-extrabold tracking-tight text-gray-900 text-3xl sm:text-5xl leading-snug sm:leading-tight">Work & Writings</h1>

    <div class="container mx-auto m-15 ">
      <h2 class="text-3xl font-bold text-gray-800 tracking-tight pb-7 capitalize">Tools</h2>
      <div class="grid gap-16 pt-10 lg:gap-x-5 lg:gap-y-12">

  


<ul class="flex">
  <li class="mr-3" v-for="(cat, id) in categories" :key="id" >
    <button @click="toggleCat(id)" class="bg-gray-100 group  text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" :class="{'bg-accent': cat.active}">
       <span class="capitalize">{{ id }} <span class="font-medium ">({{cat.total}})</span> {{cat.active}}</span>
        </button>
  </li>
  
</ul>
        <div
          v-for="(card, id) in filteredCards()"
          :key="id"
        >

          <div>
            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {{ card.node.name}}
            </h3>
            <p class="mt-3 text-base leading-6 text-gray-500 ">
              {{ card.node.descr }}
            </p>
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
          acc[item.node.cat].total ++;
        } else {
          acc[item.node.cat] = {
            total:1,
            active: true
          }
        }
        return acc;
      }, {});
    }
  },
  methods: {
    filteredCards(){
      return this.$page.allCard.edges.filter(card => {        
        return this.categories[card.node.cat].active
      })
    },
    toggleCat(id) {
      
      // console.log(this.categories)
      const cat = this.categories[id]
      // console.log(cat)
      const updatedCat = {...cat, 'active': !cat['active']}
      this.$set(this.categories, id, updatedCat);
      this.$forceUpdate() //TODO: Fix this, seems not ok


    }
  },
  components: {
    card,
  }
};
</script>
