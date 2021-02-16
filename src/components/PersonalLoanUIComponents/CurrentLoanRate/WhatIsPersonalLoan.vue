<template>
  <div>
    <div class="hidden md:block lg:block xl:block">
      <section class="text-gray-600 body-font">
        <div
          class="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center"
        >
          <div class="lg:max-w-lg lg:w-full mt-10 md:w-1/2 w-5/6 mb-10 md:mb-0">
            <lottie
              :options="defaultOptions"
              :height="300"
              :width="350"
              v-on:animCreated="handleAnimation"
            />
          </div>
          <div
            class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
          >
            <h1
              class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            >
              What is a <span class="text-indigo-800">Personal Loan</span>
            </h1>
            <p class="mb-8 leading-relaxed text-sm font-semibold text-gray-600">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
          <!-- <img src="/img/whatcreditcardright.png" class="absolute top-0 -right-20" style="width:1000px;height:500px;" /> -->
        </div>
      </section>
    </div>
    <div class="mobile-whatis-personal md:hidden lg:hidden xl:hidden">
      <div class="container px-5 py-0 mx-auto">
        <div class="flex flex-col text-center w-full mb-7">
          <h2
            class="text-xs text-left text-indigo-500 tracking-widest font-medium title-font mb-1"
          >
            PERSONAL LOAN
          </h2>
          <h1
            class="sm:text-3xl text-left text-2xl font-semibold title-font mb-4 text-gray-900"
          >
            What is a <span class="text-indigo-800">Personal Loan</span>
          </h1>
          <p class="text-left mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
          <div class="flex mt-6 justify-start">
            <div class="w-40 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div class="content-img">
          <section class="text-gray-600 body-font">
            <div
              class="container mx-auto flex px-5 items-center justify-center flex-col"
            >
              <img
                class="w-40 h-40 mb-4 object-cover object-center rounded"
                alt="hero"
                src="/img/personalloan.png"
              />
              <div class="text-center w-full">
                <h1
                  class="title-font sm:text-4xl text-xs mb-4 font-bold text-indigo-700"
                >
                  PERSONAL LOAN
                </h1>
              </div>
            </div>
          </section>
        </div>
        <div class="more-discription mt-5">
          <div class="flex flex-row justify-around space-x-1 w-full">
            <div class="img-content w-1/2">
              <img
                class="w-32 bg-indigo-100 py-3 h-32 mb-4 object-cover object-center rounded-lg"
                alt="hero"
                src="/img/personalloan.png"
              />
            </div>
            <div class="write-content w-1/2">
              <p class="text-center leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import animationData from "@/assets/animations/pagbank-new-features-onboarding.json";

export default {
  name: "WhatIsPersonalLoan",
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