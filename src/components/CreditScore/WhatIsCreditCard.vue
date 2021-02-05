<template>
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
          What is a <span class="text-indigo-800">Credit Card</span>
        </h1>
        <p class="mb-8 leading-relaxed text-sm font-semibold text-gray-600 ">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park
          mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
          try-hard chambray.
        </p>
      </div>
      <!-- <img src="/img/whatcreditcardright.png" class="absolute top-0 -right-20" style="width:1000px;height:500px;" /> -->
    </div>
  </section>
</template>
<script>
import animationData from "@/assets/animations/pagbank-new-features-onboarding.json";

export default {
  name: "WhatIsCreditCard",
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