<template>
  <section class="text-gray-600 body-font">
    <div class="hidden md:block lg:block xl:block">
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
          <p class="mb-8 leading-relaxed text-sm font-semibold text-gray-600">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
        </div>
        <!-- <img src="/img/whatcreditcardright.png" class="absolute top-0 -right-20" style="width:1000px;height:500px;" /> -->
      </div>
    </div>
    <div
      class="mobile-whatis-credit-card md:hidden lg:hidden xl:hidden mt-10 -mx-5"
    >
      <div
        class="bg-white px-4 rounded-t-3xl"
      >
        <p class="text-sm text-indigo-700 text-left font-extrabold pt-4">
          What is Credit Card?
        </p>
        <div class="p-2 pl-0 w-full">
          <div class="h-full flex items-center p-2 pl-0 rounded-lg">
            <img
              alt="team"
              class="w-20 h-20 object-cover object-center flex-shrink-0 mr-4"
              src="/img/credit-card.png"
            />
            <div class="flex-grow">
              <p class="text-gray-600 font-demibold">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag.
              </p>
            </div>
          </div>
        </div>
        <p class="text-sm text-indigo-700 text-left font-extrabold pt-6">
          Credit Card Interest Rates
        </p>
        <div class="credit-rates mt-2">
          <div class="flex flex-col w-full">
            <div class="p-2 pl-0 w-full">
              <div
                class="h-full flex items-center p-2 pl-0 rounded-lg border-b-2 border-gray-300 border-dashed"
              >
                <div
                  class="w-10 h-10 bg-yellow-300 object-cover object-center flex-shrink-0 rounded-xl mr-4"
                ></div>
                <div class="flex flex-row space-x-7">
                  <div class="flex-grow mt-1">
                    <h2 class="text-gray-900 text-sm title-font font-bold">
                      HDFC Bank
                    </h2>
                    <p class="text-gray-500 text-sm">Credit Rate</p>
                  </div>
                  <div class="flex-grow mt-1">
                    <h2 class="text-gray-900 text-xs title-font font-bold">
                      (MPR)%
                    </h2>
                    <p class="text-green-800 text-semibold text-xs mt-1">
                      1.99% to 3.49%
                    </p>
                  </div>
                  <div class="flex-grow mt-1">
                    <h2 class="text-gray-900 text-xs title-font font-bold">
                      (APR)%
                    </h2>
                    <p class="text-indigo-800 text-semibold text-xs mt-1">
                      1.99% to 3.49%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2 pt-0 pl-0 w-full">
              <div
                class="h-full flex items-center p-2 pl-0 rounded-lg border-b-2 border-gray-300 border-dashed"
              >
                <div
                  class="w-10 h-10 bg-indigo-300 object-cover object-center flex-shrink-0 rounded-xl mr-4"
                ></div>
                <div class="flex flex-row space-x-7">
                  <div class="flex-grow mt-1">
                    <h2 class="text-gray-900 text-sm title-font font-bold">
                      HDFC Bank
                    </h2>
                    <p class="text-gray-500 text-sm">Credit Rate</p>
                  </div>
                  <div class="flex-grow mt-1">
                    <h2 class="text-gray-900 text-xs title-font font-bold">
                      (MPR)%
                    </h2>
                    <p class="text-green-800 text-semibold text-xs mt-1">
                      1.99% to 3.49%
                    </p>
                  </div>
                  <div class="flex-grow mt-1">
                    <h2 class="text-gray-900 text-xs title-font font-bold">
                      (APR)%
                    </h2>
                    <p class="text-indigo-800 text-semibold text-xs mt-1">
                      1.99% to 3.49%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2 pt-0 pl-0 w-full">
              <div
                class="h-full flex items-center p-2 pl-0 rounded-lg border-b-2 border-gray-300 border-dashed"
              >
                <div
                  class="w-10 h-10 bg-green-400 object-cover object-center flex-shrink-0 rounded-xl mr-4"
                ></div>
                <div class="flex flex-row space-x-7">
                  <div class="flex-grow mt-1">
                    <h2 class="text-gray-900 text-sm title-font font-bold">
                      HDFC Bank
                    </h2>
                    <p class="text-gray-500 text-sm">Credit Rate</p>
                  </div>
                  <div class="flex-grow mt-1">
                    <h2 class="text-gray-900 text-xs title-font font-bold">
                      (MPR)%
                    </h2>
                    <p class="text-green-800 text-semibold text-xs mt-1">
                      1.99% to 3.49%
                    </p>
                  </div>
                  <div class="flex-grow mt-1">
                    <h2 class="text-gray-900 text-xs title-font font-bold">
                      (APR)%
                    </h2>
                    <p class="text-indigo-800 text-semibold text-xs mt-1">
                      1.99% to 3.49%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2 pt-0 pl-0 w-full">
              <div
                class="h-full flex items-center p-2 pl-0 rounded-lg border-b-2 border-gray-300 border-dashed"
              >
                <div
                  class="w-10 h-10 bg-yellow-600 object-cover object-center flex-shrink-0 rounded-xl mr-4"
                ></div>
                <div class="flex flex-row space-x-7">
                  <div class="flex-grow mt-1">
                    <h2 class="text-gray-900 text-sm title-font font-bold">
                      HDFC Bank
                    </h2>
                    <p class="text-gray-500 text-sm">Credit Rate</p>
                  </div>
                  <div class="flex-grow mt-1">
                    <h2 class="text-gray-900 text-xs title-font font-bold">
                      (MPR)%
                    </h2>
                    <p class="text-green-800 text-semibold text-xs mt-1">
                      1.99% to 3.49%
                    </p>
                  </div>
                  <div class="flex-grow mt-1">
                    <h2 class="text-gray-900 text-xs title-font font-bold">
                      (APR)%
                    </h2>
                    <p class="text-indigo-800 text-semibold text-xs mt-1">
                      1.99% to 3.49%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2 pt-0 pl-0 w-full">
              <div class="h-full flex items-center p-2 pl-0 rounded-lg">
                <div
                  class="w-10 h-10 bg-yellow-600 object-cover object-center flex-shrink-0 rounded-xl mr-4"
                ></div>
                <div class="flex flex-row space-x-7">
                  <div class="flex-grow mt-1">
                    <h2 class="text-gray-900 text-sm title-font font-bold">
                      HDFC Bank
                    </h2>
                    <p class="text-gray-500 text-sm">Credit Rate</p>
                  </div>
                  <div class="flex-grow mt-1">
                    <h2 class="text-gray-900 text-xs title-font font-bold">
                      (MPR)%
                    </h2>
                    <p class="text-green-800 text-semibold text-xs mt-1">
                      1.99% to 3.49%
                    </p>
                  </div>
                  <div class="flex-grow mt-1">
                    <h2 class="text-gray-900 text-xs title-font font-bold">
                      (APR)%
                    </h2>
                    <p class="text-indigo-800 text-semibold text-xs mt-1">
                      1.99% to 3.49%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CreditOnlineDocuments />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import animationData from "@/assets/animations/pagbank-new-features-onboarding.json";
import CreditOnlineDocuments from "@/components/CreditOnlineDocuments/CreditOnlineDocuments.vue";

export default {
  name: "WhatIsCreditCard",
  data() {
    return {
      defaultOptions: { animationData: animationData, loop: true },
    };
  },
  components: {
    CreditOnlineDocuments,
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