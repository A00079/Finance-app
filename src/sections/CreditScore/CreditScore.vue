<template>
  <div>
    <section
      class="text-gray-600 body-font static md:h-screen lg:h-screen xl:h-screen md:relative lg:relative xl:relative"
      v-view.once="onceHandler"
    >
      <div
        class="container px-4 md:px-24 lg:px-24 xl:px-24 py-16 mx-auto"
        :key="rerender"
      >
        <div
          class="flex flex-col text-center w-full mb-16 md:mb-20 lg:mb-20 xl:mb-20"
        >
          <h1
            class="text-2xl md:text-4xl font-medium title-font mb-4 text-indigo-900"
          >
            Get your latest Credit Score, FREE
          </h1>
          <p
            class="lg:w-2/3 px-12 md:px-0 lg:px-04 xl:px-0 font-bold mx-auto leading-relaxed text-base"
          >
            One powerful number that puts you in control
          </p>
        </div>
        <div class="flex flex-wrap -m-4 text-center cursor-pointer px-3">
          <div
            class="p-2 md:w-1/5 w-1/2 border-2 bg-white border-gray-200 shadow-xl rounded-lg"
            v-show="firstIconFlag"
          >
            <div class="px-2 py-6 rounded-lg">
              <div class="hidden md:block lg:block xl:block">
                <lottie
                  :options="defaultOptions2"
                  :height="150"
                  :width="150"
                  v-on:animCreated="handleAnimation"
                />
              </div>
              <div class="md:hidden lg:hidden xl:hidden">
                <lottie
                  :options="defaultOptions2"
                  :height="120"
                  :width="120"
                  v-on:animCreated="handleAnimation"
                />
              </div>
              <p class="leading-relaxed text-md font-medium">
                Check Your Credit Score At Your Home Confort.
              </p>
            </div>
          </div>
          <div
            class="p-2 md:w-1/5 w-1/2 border-2 bg-white border-gray-200 shadow-xl rounded-lg"
            v-show="secondIconFlag"
          >
            <div class="px-2 py-6 rounded-lg">
              <div class="hidden md:block lg:block xl:block">
                <lottie
                  :options="defaultOptions3"
                  :height="150"
                  :width="150"
                  v-on:animCreated="handleAnimation"
                />
              </div>
              <div class="md:hidden lg:hidden xl:hidden">
                <lottie
                  :options="defaultOptions3"
                  :height="120"
                  :width="120"
                  v-on:animCreated="handleAnimation"
                />
              </div>
              <p class="leading-relaxed text-md font-medium">
                Increase chances of application approval.
              </p>
            </div>
          </div>
          <div
            class="hidden md:block lg:block xl:block p-2 md:w-1/5 w-1/2 border-2 bg-white border-gray-200 shadow-xl rounded-lg"
            v-show="thirdIconFlag"
          >
            <div class="px-2 py-6 rounded-lg">
              <div class="hidden md:block lg:block xl:block">
                <lottie
                  :options="defaultOptions4"
                  :height="150"
                  :width="150"
                  v-on:animCreated="handleAnimation"
                />
              </div>
              <div class="md:hidden lg:hidden xl:hidden">
                <lottie
                  :options="defaultOptions4"
                  :height="120"
                  :width="120"
                  v-on:animCreated="handleAnimation"
                />
              </div>
              <p class="leading-relaxed text-md font-medium">
                Take charge of your finances.
              </p>
            </div>
          </div>
          <div
            class="p-2 md:w-1/5 w-1/2 border-2 bg-white border-gray-200 shadow-xl rounded-lg"
            v-show="fourIconFlag"
          >
            <div class="px-2 py-6 rounded-lg">
              <div class="hidden md:block lg:block xl:block">
                <lottie
                  :options="defaultOptions5"
                  :height="150"
                  :width="150"
                  v-on:animCreated="handleAnimation"
                />
              </div>
              <div class="md:hidden lg:hidden xl:hidden">
                <lottie
                  :options="defaultOptions5"
                  :height="120"
                  :width="120"
                  v-on:animCreated="handleAnimation"
                />
              </div>
              <p class="leading-relaxed text-md font-medium">
                Get The Best Offers For You.
              </p>
            </div>
          </div>
          <div
            class="p-2 md:w-1/5 w-1/2 border-2 bg-white border-gray-200 shadow-xl rounded-lg"
            v-show="fiveIconFlag"
          >
            <div class="px-2 py-6 rounded-lg">
              <div class="hidden md:block lg:block xl:block">
                <lottie
                  :options="defaultOptions6"
                  :height="150"
                  :width="150"
                  v-on:animCreated="handleAnimation"
                />
              </div>
              <div class="md:hidden lg:hidden xl:hidden">
                <lottie
                  :options="defaultOptions6"
                  :height="120"
                  :width="120"
                  v-on:animCreated="handleAnimation"
                />
              </div>
              <p class="leading-relaxed text-md font-medium">
                Get Your Score Now.
              </p>
              <button
                class="inline-flex text-white mt-2 bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Check Now
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:block lg:block xl:block">
          <div
            class="absolute top-52 left-0 w-full transition duration-500 ease-in-out"
            :key="rerender + 1"
            v-show="showanimation"
          >
            <infinite-slide-bar direction="reverse">
              <lottie
                style="margin: 0px !important; margin-left: -194px !important"
                :options="defaultOptions"
                :height="270"
                :width="270"
                v-on:animCreated="handleAnimation"
              />
            </infinite-slide-bar>
          </div>
        </div>
      </div>
      <img
        style="z-index: -1"
        src="/img/leftwave.png"
        class="absolute top-0 -left-10 hidden md:block lg:block xl:block"
      />
    </section>
  </div>
</template>
<script>
import animationData from "@/assets/animations/lf30_editor_njww9vij.json";
import animationData2 from "@/assets/animations/web-specialist.json";
import animationData3 from "@/assets/animations/human-resources-approval-animation.json";
import animationData4 from "@/assets/animations/teaching-or-instructing.json";
import animationData5 from "@/assets/animations/sending-email.json";
import animationData6 from "@/assets/animations/dance-party.json";
export default {
  name: "CreditScore",
  data() {
    return {
      rerender: 0,
      showanimation: true,
      defaultOptions: { animationData: animationData, loop: true },
      defaultOptions2: { animationData: animationData2, loop: true },
      defaultOptions3: { animationData: animationData3, loop: true },
      defaultOptions4: { animationData: animationData4, loop: true },
      defaultOptions5: { animationData: animationData5, loop: true },
      defaultOptions6: { animationData: animationData6, loop: true },
      animationSpeed: 1,
      firstIconFlag: false,
      secondIconFlag: false,
      thirdIconFlag: false,
      fourIconFlag: false,
      fiveIconFlag: false,
    };
  },
  methods: {
    onceHandler() {
      console.log("Hello...");
      this.rerender += 1;
      setTimeout(() => {
        this.firstIconFlag = true;
      }, 4000);
      setTimeout(() => {
        this.secondIconFlag = true;
      }, 6000);
      setTimeout(() => {
        this.thirdIconFlag = true;
      }, 8000);
      setTimeout(() => {
        this.fourIconFlag = true;
      }, 10000);
      setTimeout(() => {
        this.fiveIconFlag = true;
      }, 12000);
      setTimeout(() => {
        this.showanimation = false;
        // this.firstIconFlag = true;
      }, 12000);
    },
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
<style scoped></style>
