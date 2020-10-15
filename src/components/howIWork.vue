<template>
<div class="container mx-auto m-15 relative">
  <h2 class="text-3xl font-bold text-gray-800 tracking-tight pb-7 capitalize">How I work</h2>
  <div class="grid grid-cols-6 gap-8 ">
    <div class="col-span-3">      
      <div class="relative pb-8 pt-6" v-for="i in 4" :key="i">
        <h3 class="text-2xl font-bold text-gray-800 tracking-tight">
          Confidently decide what to do next
        </h3>
        <p class="mt-4  mx-auto text-base leading-7 text-gray-500">
          You don't need a fully working app to test what works or doesn't. I turn ideas into something you can put in front of real people. This can be a <button id="testId" class="underline" @mouseover="defId = 'testId'">simple clickable design</button>, a working application or a small tweak to an existing product. I try to minimize effort and maximize learnings.
        </p>
      </div>      
    </div>
    <div class="col-span-2 col-start-5 sticky top-0">
      <div class="sticky top-0">
        <h3 class="textxl pt-8 font-bold text-gray-400 tracking-tight ">
          Definition
        </h3>
        <div v-if="defId === null">
          <p class="mt-4 mx-auto text-base leading-7 text-gray-400 italic">
          If you hover over an underlined word, the explanation will appear here.
          </p>
        </div>
        <div id="id" v-if="defId === 'testId'">
          <p class="mt-4  mx-auto text-base leading-7 text-gray-400 italic">
            You don't need a fully working app to test what works or doesn't. I turn ideas into something you can put in front of real people.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      defId: null
    }
  },
}
</script>
