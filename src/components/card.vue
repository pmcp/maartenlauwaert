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
        <card-inner :card="card" :active="active"></card-inner>
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
          url
          type
          cover
        }
      }	
    }
  }
</static-query>

<script>
import cardInner from "@/components/card__inner.vue";
export default {
  components: {
    cardInner,
  },
  props: {
    card: {
      type: Object,
      default() {
        return {};
      },
    },
    active: {
      type: Boolean,
      default: false
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
