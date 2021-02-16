<template>
  <section class="relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2
          class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
        >
          Benefits of applying for personal loan
        </h2>
        <h1
          class="sm:text-3xl md:text-3xl font-medium title-font mb-4 text-indigo-900"
        >
          Benefits of applying for personal loan online
        </h1>
        <p
          class="lg:w-2/3 mx-auto leading-relaxed text-xm font-semibold z-50 text-gray-500"
        >
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom prism food truck
          ugh squid celiac humblebrag.
        </p>
      </div>
      <div class="content-section">
        <div class="flex flex-row">
          <div>
            <div class="animation section">
              <img
                src="/img/benefitswave.png"
                class="absolute top-56 right-0"
                style="width: 600px; height: 500px"
              />
            </div>
            <div class="wirte-content">
              <div class="flex flex-col absolute top-72 right-0">
                <div class="p-2 md:w-full flex">
                  <div class="flex-grow pl-6">
                    <div class="flex flex-row mb-1" style="width: 32rem">
                      <span class="text-xl text-white mt-0 mr-3">
                        &#8226;
                      </span>
                      <div
                        class="leading-relaxed text-sm text-gray-100 font-bold"
                      >
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine, ramps
                        microdosing banh mi pug
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-2 md:w-full flex">
                  <div class="flex-grow pl-6">
                    <div class="flex flex-row mb-1" style="width: 32rem">
                      <span class="text-xl text-white mt-0 mr-3">
                        &#8226;
                      </span>
                      <div
                        class="leading-relaxed text-sm text-gray-100 font-bold"
                      >
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-2 md:w-full flex">
                  <div class="flex-grow pl-6">
                    <div class="flex flex-row mb-1 w-96">
                      <span class="text-xl text-white mt-0 mr-3">
                        &#8226;
                      </span>
                      <div
                        class="leading-relaxed text-sm text-gray-100 font-bold"
                      >
                        Blue bottle crucifix vinyl post-ironic four dollar.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-2 md:w-full flex">
                  <div class="flex-grow pl-6">
                    <div class="flex flex-row mb-1 w-96">
                      <span class="text-xl text-white mt-0 mr-3">
                        &#8226;
                      </span>
                      <div
                        class="leading-relaxed text-sm text-gray-100 font-bold"
                      >
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine ramps.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-2 md:w-full flex">
                  <div class="flex-grow pl-6">
                    <div class="flex flex-row mb-1 w-96">
                      <span class="text-xl text-white mt-0 mr-3">
                        &#8226;
                      </span>
                      <div
                        class="leading-relaxed text-sm text-gray-100 font-bold"
                      >
                        Blue bottle crucifix vinyl bottle crucifix vinyl
                        post-ironic.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="og-animation absolute top-60 left-40">
            <lottie
              :options="defaultOptions"
              :height="450"
              :width="450"
              v-on:animCreated="handleAnimation"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import animationData from "@/assets/animations/human-resources-approval-animation.json";

export default {
  name: "EligibilityCriteria",
  data() {
    return {
      defaultOptions: { animationData: animationData, loop: true },
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    stop: function () {
      this.anim.stop();
    },
    play: function () {
      this.anim.play();
    },
    pause: function () {
      this.anim.pause();
    },
    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed);
    },
  },
};
</script>
<style scoped>
</style>