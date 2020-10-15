<template>
  <Layout>
    <div
      class="container mx-auto pb-8"
      v-scroll="handleScroll"
    >
      <h1 class="mt-2 mb-8 text-6xl leading-10 font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-tight">A Bike Renting Platform For Schools </h1>
    </div>
    <div class="container mx-auto flex flex-row mb-8 ">
      <div class="w-1/5">
        <div class="sticky top-5 ">
          <scrollactive active-class="text-gray-800">
            <ul class="sticky top-0 text-sm leading-loose text-gray-400 capitalize pb-8">
              <h3 class="text-xl font-bold text-gray-400 tracking-tight">
                In this article
              </h3>
              <li>
                <a
                  href="#brief"
                  class="scrollactive-item "
                >The Brief</a>
              </li>
              <li>
                <a
                  href="#step1"
                  class="scrollactive-item"
                >Step 1: Research</a>
              </li>
              <li>
                <a
                  href="#step2"
                  class="scrollactive-item"
                >Step 2: Decision Tree</a>
              </li>
              <li>
                <a
                  href="#step3"
                  class="scrollactive-item"
                >Step 3: Wireframing</a>
              </li>
            </ul>
          </scrollactive>
          <div class="leading-loose">
            <h3 class="text-xl font-bold text-gray-400 tracking-tight ">
              Side info & Glossary
            </h3>

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
                      <span class="text-gray-400 text-sm underline group-hover:text-gray-800 transition duration-500 ease-in-out" >Visit site</span>

                    </div>

                  </div>
                </a>

              </div>

            </transition>
          </div>
        </div>
      </div>

      <div class="flex-grow container mx-auto grid grid-cols-12 gap-8 pl-8 ">
        <div
          id="brief"
          class="prose prose-base  text-gray-500 col-start-2 col-end-12"
        >
          <h2>The brief</h2>
          <p>When taking their students on excursion, the primary and secondary schools in the city of Brussels regularly have a shortage of bikes. This makes organizing an outing cumbersome. Not all city kids have bikes, because they are too expensive, or because they get stolen too often, etc.</p>
          <p><button
              id="provelo"
              class=""
              :class="{ ' text-gray-800': infoId == 'provelo' && hoveringInfo }"
  class="underline hover:text-gray-800"
              @mouseover="infoId = 'provelo'"
              
            >
              Pro Velo<a
              
                href="https://www.provelo.org/en"
                target="_blank"
              >
                <!-- Heroicon name: external-link -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  :class="{ ' text-gray-800': infoId == 'provelo' && hoveringInfo }"
                  class="w-5 h-5 pb-1 inline text-gray-500 hover:text-gray-800"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>

              </a></button>, an organization who promotes biking in the city arranged a container full of bikes to be made available for the schools of Saint-Gilles, one of the communes of Brussels. At the same time, another commune also had the same problems, and a comparable solution. Teachers could reserve bikes for one or more days, pick them up, and return them themselves. They called it "Velotheek" (which translates to "bike library").</p>
          <p>But both communes realized quickly that the reservations of the <button
              id="testId"
              class="underline"
              @mouseover="infoId = 'testId'"
            >bikes would become complicated</button> and time consuming for the people in charge. So they turned to me to come up with a more streamlined process.</p>
          <h2 id="step1">Step 1: Research</h2>
          <figure>
            <g-image
              class="w-auto"
              src="~/images/velotheek/velotheek_excalidraw_step1.png"
              alt="An scheme showing the timeline of the project. Highlighted is step 1: Research"
            />
            <!-- <figcaption>Step 1: Research</figcaption> -->
          </figure>
          <div class="italic leading-0 mt-0"><span class="font-semibold">Tools:</span> user talks, personas, desk research</div>
          <div class="italic leading-0 m-0"><span class="font-semibold">Duration:</span> 2 weeks</div>
          <p>I visited both Velotheek locations, and talked with all the people involved. Although the premise is comparable at the different communes, there were a lot of differences in the booking flow. The two biggest differences were:</p>
          <ul>
            <li>At Velotheek 1, a padlock opened the door of the Velotheek, and could be opened by anyone who had the access code. At Velotheek 2, they used a key, so the user had to check in with someone from the organisation to open up the Velotheek.</li>
            <li>In Velotheek 1, you could only book bikes for one day, not multiple days. At Velotheek 2, multiple days were possible, but not more than 10.</li>
          </ul>
          <p>These two differences seemed to have a big impact on the flow of the application, and how the user would interact with it. To map out all the different user flows, I started working on persona’s and corresponding jobs to be done.</p>
          <p>After the research I defined these persona's:</p>
          <ul>
            <li>The teacher</li>
            <li>The responsible for administration in the school</li>
            <li>The Bike Fixer (someone of Pro Velo)</li>
            <li>The Administrator (someone of the commune)</li>
          </ul>
          <p>
            Every "persona" gets it's own "jobs to be done", mapping of needs and potential risks involved. From that list I defined what jobs we needed to tackle in the first iteration of the project. In this phase I also performed desk research, looking into existing applications, or comparable sharing platforms.
          </p>

        </div>
        <div class="prose prose-base text-gray-500 col-start-2 col-end-12">
          <h2 id="step2">Step 2: Decision Tree</h2>
          <figure>
            <g-image
              class="w-auto"
              src="~/images/velotheek/velotheek_excalidraw_step2.png"
              alt="An scheme showing the timeline of the project. Highlighted is step 2: Decision Tree"
            />
            <!-- <figcaption>Step 1: Research</figcaption> -->
          </figure>

        </div>
        <div class="prose prose-base text-gray-500 col-start-2 col-end-8 ">
          <div class="italic leading-0 mt-0"><span class="font-semibold">Tools:</span> Figma</div>
          <div class="italic leading-0 m-0"><span class="font-semibold">Duration:</span> 1 week</div>
          <p>I don't actually know what this exercise is called, but either way, it's a very helpful one. I map out all the steps a user needs to take to get the job done. Every screen has three sections: </p>
          <ol>
            <li>The module: This is not really necessary, but already sets up how I will think about the app when I start coding. It helps to build the app in my mind palace.</li>
            <li>The view: What the user will see.</li>
            <li>The actions: What the user can do on this page.</li>
          </ol>
          <p>This very low fidelity prototype gets shared with the the smallest group of stakeholders (in this case just the product owners and one teacher). It's not a real usability test, but will quickly uncover missing basic features or steps in the flow.</p>
        </div>
        <div class="prose prose-base text-gray-500 relative mb-8 lg:mb-0 col-start-9 col-end-13">
          <figure>
            <g-image
              class="rounded-lg shadow-lg object-contain object-center w-full h-full lg:static lg:h-auto"
              src="~/images/velotheek/velotheek2.gif"
              alt="An animated image of an early prototype flow of the application"
            />
            <figcaption class="flex mt-3 text-sm text-gray-500">
              <!-- Heroicon name: camera -->
              <svg
                class="flex-none w-5 h-5 mr-2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
              Animation recorded from interactive Figma Prototype
            </figcaption>
          </figure>
        </div>
        <div class="text-gray-500 col-start-1 col-end-13 ">
          <figure>
            <g-image
              class="w-auto rounded-lg shadow-lg"
              src="~/images/velotheek/velotheek4.png"
              alt="A screenshot of the application: Figma, showing the low fidelity prototype."
            />
            <figcaption class="flex mt-3 text-sm text-gray-500">
              <!-- Heroicon name: camera -->
              <svg
                class="flex-none w-5 h-5 mr-2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
              The overview of all "decision branches"
            </figcaption>

          </figure>
        </div>
        <div class="prose prose-base text-gray-500 col-start-2 col-end-12">
          <h2 id="step3">Step 3: Wireframing</h2>
          <figure>
            <g-image
              class="w-auto"
              src="~/images/velotheek/velotheek_excalidraw_step3.png"
              alt="An scheme showing the timeline of the project. Highlighted is step 3: Wireframing"
            />
            <!-- <figcaption>Step 1: Research</figcaption> -->
          </figure>
          <div class="prose prose-base italic leading-0 mt-0"><span class="font-semibold">Tools:</span> user talks, personas, desk research</div>
          <div class="prose prose-base italic leading-0 m-0"><span class="font-semibold">Duration:</span> 2 weeks</div>
          <div class="prose prose-base">
            <p>I visited both Velotheek locations, and talked with all the people involved. Although the premise is comparable at the different communes, there were a lot of differences in the booking flow. The two biggest differences were:</p>
            <ul>
              <li>At Velotheek 1, a padlock opened the door of the Velotheek, and could be opened by anyone who had the access code. At Velotheek 2, they used a key, so the user had to check in with someone from the organisation to open up the Velotheek.</li>
              <li>In Velotheek 1, you could only book bikes for one day, not multiple days. At Velotheek 2, multiple days were possible, but not more than 10.</li>
            </ul>
            <p>These two differences seemed to have a big impact on the flow of the application, and how the user would interact with it. To map out all the different user flows, I started working on persona’s and corresponding jobs to be done.</p>
            <p>After the research I defined these persona's:</p>
            <ul>
              <li>The teacher</li>
              <li>The responsible for administration in the school</li>
              <li>The Bike Fixer (someone of Pro Velo)</li>
              <li>The Administrator (someone of the commune)</li>
            </ul>
            <p>
              Every "persona" gets it's own "jobs to be done", mapping of needs and potential risks involved. From that list I defined what jobs we needed to tackle in the first iteration of the project. In this phase I also performed desk research, looking into existing applications, or comparable sharing platforms.
            </p>
          </div>
        </div>
      </div>
      <!-- 
        <div class="w-1/6 pl-5">
          <div class="sticky top-5">
            <h3 class="text-xl font-bold text-gray-400 tracking-tight">
              Side info & Glossary
            </h3>
            <div v-if="infoId === null">
              <p class="mt-4 mx-auto text-base leading-7 text-gray-400 italic">
                If you hover over an underlined word, the explanation will appear here.
              </p>
            </div>
            <div
              id="id"
              v-if="infoId === 'testId'"
            >
              <p class="mx-auto text-base leading-7 text-gray-400 italic">
                Definition of this term...
              </p>
            </div>
          </div>
        </div>
       -->

    </div>

  </Layout>
</template>

<script>
// import VueScrollactive from 'vue-scrollactive';
export default {
  metaInfo: {
    title: "About us",
  },
  data() {
    return {
      infoId: null,
      hoveringInfo: false,
      scrollPos: 0,
      scrollTreshold: 150,
    };
  },
  methods: {
    handleScroll: function (evt, el) {
      if (this.infoId === null) {
        return;
      }
      if (window.scrollY > this.scrollPos + this.scrollTreshold) {
        this.infoId = null;
        this.scrollPos = window.scrollY;
      }
      return;
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>