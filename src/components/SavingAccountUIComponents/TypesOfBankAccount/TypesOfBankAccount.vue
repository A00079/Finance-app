<template>
  <div class="container px-5 py-10 mx-auto">
    <div class="text-right mb-4 w-full">
      <h1
        class="sm:text-3xl md:text-3xl font-bold title-font text-indigo-900 mb-2"
      >
        Types Of Bank Account
      </h1>
      <p
        class="text-base leading-relaxed font-semibold text-right mx-auto text-gray-500s"
      >
        Below are some different types of Bank Account.
      </p>
      <div class="flex mt-4 justify-end">
        <div class="w-36 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div class="section-content mx-auto">
      <div class="flex flex-row">
        <div class="w-full mb-10 px-4">
          <div class="rounded-lg h-48 overflow-hidden">
            <lottie
              :options="defaultOptions"
              :height="270"
              :width="270"
              v-on:animCreated="handleAnimation"
            />
          </div>
          <h2
            class="title-font text-1xl font-medium text-center text-indigo-900 mt-3 mb-3"
          >
            Savings account
          </h2>
        </div>
        <div class="w-full mb-10 px-4">
          <div class="rounded-lg h-48 overflow-hidden">
            <lottie
              :options="defaultOptions2"
              :height="200"
              :width="200"
              v-on:animCreated="handleAnimation"
            />
          </div>
          <h2
            class="title-font text-1xl font-medium text-center text-indigo-900 mt-3 mb-3"
          >
            Term account
          </h2>
        </div>
        <div class="w-full mb-10 px-4">
          <div class="rounded-lg h-48 overflow-hidden">
            <lottie
              :options="defaultOptions3"
              :height="170"
              :width="170"
              v-on:animCreated="handleAnimation"
            />
          </div>
          <h2
            class="title-font text-1xl font-medium text-center text-indigo-900 mt-3 mb-3"
          >
            Current account
          </h2>
        </div>
        <div class="w-full mb-10 px-4">
          <div class="rounded-lg h-48 overflow-hidden">
            <lottie
              :options="defaultOptions4"
              :height="170"
              :width="170"
              v-on:animCreated="handleAnimation"
            />
          </div>
          <h2
            class="title-font text-1xl font-medium text-center text-indigo-900 mt-3 mb-3"
          >
            Deposit account
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import animationData from "@/assets/animations/savingaccount.json";
import animationData2 from "@/assets/animations/termaccount.json";
import animationData3 from "@/assets/animations/currentaccount.json";
import animationData4 from "@/assets/animations/depositaccount.json";

export default {
  name: "TypesOfBankAccount",
  data() {
    return {
      defaultOptions: { animationData: animationData, loop: true },
      defaultOptions2: { animationData: animationData2, loop: true },
      defaultOptions3: { animationData: animationData3, loop: true },
      defaultOptions4: { animationData: animationData4, loop: true },
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