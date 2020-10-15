<template>
  <transition
    enter-active-class="transition ease-in duration-100"
    leave-active-class="transition ease-in duration-100"
    enter-class="opacity-0 scale-70"
    enter-to-class="opacity-100 scale-100"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-70"
  >

    <div
      v-if="infoId === null"
      key="noInfo"
    >
      <p class="mt-4 mx-auto text-sm leading-normal shadow-inner px-2 py-6  text-gray-300 italic absolute">
        If you hover over an underlined word, the explanation will appear here.
      </p>
    </div>
    <info-link></info-link>
    <div
      id="id"
      v-if="infoId === 'testId'"
    >
      <p class="mx-auto text-base leading-7 text-gray-400 italic">
        Definition of this term...
      </p>
    </div>
    <div
      id="id"
      v-if="infoId === 'provelo'"
      @mouseover="hoveringInfo = true"
      @mouseleave="hoveringInfo = false"
    >
      <a
        href="https://www.provelo.org/en"
        target="_blank"
      >
        <div class="max-w-sm rounded overflow-hidden shadow-inner p-1 leading-snug group bg-white">
          <g-image
            class="w-full group-hover:bg-gray-800 hover:shadowtransition duration-500 ease-in-out"
            src="~/images/velotheek/link_provelo.png"
            alt="A screenshot of the website of the organisation Pro Velo"
            width="200"
          />

          <div class="px-1 py-4">
            <div class="font-bold text-gray-400 text-sm mb-2 group-hover:text-gray-800 transition duration-500 ease-in-out ">Pro Velo</div>
            <p class="text-gray-400 text-sm group-hover:text-gray-800 transition duration-500 ease-in-out">
              Pro Velo promotes bicycling in Brussels.
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

  </transition>
</template>

<script>
export default {
  props: {
    infoId: {
      type: String,
      default: null 
    },
  } 
};
</script>
