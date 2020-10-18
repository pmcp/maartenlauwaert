<template>
  <div class="max-w-sm rounded overflow-hidden shadow-inner p-1 leading-snug group bg-white">

    <img
      class="w-full group-hover:bg-gray-800 hover:shadowtransition duration-500 ease-in-out "
      :src="card.cover"
      alt="A screenshot of the website of the organisation Pro Velo"
      width="200"
      v-if="active"
    />
    <div class="px-1 py-4">
      <div class="font-bold text-gray-400 text-sm mb-2 group-hover:text-gray-800 transition duration-500 ease-in-out ">{{card.name}}</div>
      <p class="text-gray-400 text-sm group-hover:text-gray-800 transition duration-500 ease-in-out" v-if="active">
        {{ card.descr }}
      </p>
      <div v-if="card.type == 'link' && active">
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
  </div>
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
      default: false
    }
  },
};
</script>
