<template>
  <div class="container px-5 py-16 mx-auto">
    <div class="text-right mb-10 w-full">
      <h1
        class="sm:text-3xl md:text-3xl font-bold title-font text-indigo-900 mb-2"
      >
        Types Of Credit Cards
      </h1>
      <p
        class="text-base leading-relaxed font-semibold text-right mx-auto text-gray-500s"
      >
        Below are some different types of credit cards.
      </p>
      <div class="flex mt-4 justify-end">
        <div class="w-36 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div class="types-of-credit-card">
      <div class="flex flex-row justify-between">
        <div class="flex flex-col">
          <div class="p-4 flex flex-col text-center items-center">
            <div
              class="w-14 h-14 inline-flex items-center justify-center rounded-md bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0"
            >
              <img src="/img/credit-card.png" class="w-10 h-10" />
            </div>
            <div class="flex-grow">
              <h2 class="text-indigo-900 text-lg title-font font-bold mb-1">
                Standard CREDIT CARD
              </h2>
              <small class="leading-relaxed text-xm text-gray-500 font-bold">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </small>
            </div>
          </div>
          <div class="p-4 flex flex-col text-center items-center">
            <div
              class="w-12 h-12 inline-flex items-center justify-center rounded-md bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0"
            >
              <img src="/img/travelling.png" class="w-10 h-10" />
            </div>
            <div class="flex-grow">
              <h2 class="text-indigo-900 text-lg title-font font-bold mb-1">
                Travel CREDIT CARD
              </h2>
              <small class="leading-relaxed text-xm text-gray-500 font-bold">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </small>
            </div>
          </div>
          <div class="p-4 flex flex-col text-center items-center">
            <div
              class="w-12 h-12 inline-flex items-center justify-center rounded-md bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0"
            >
              <img src="/img/cashback.png" class="w-10 h-10" />
            </div>
            <div class="flex-grow">
              <h2 class="text-indigo-900 text-lg title-font font-bold mb-1">
                CashBack CREDIT CARD
              </h2>
              <small class="leading-relaxed text-xm text-gray-500 font-bold">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </small>
            </div>
          </div>
        </div>
        <div class="mt-24">
          <lottie
            :options="defaultOptions"
            :height="350"
            :width="350"
            v-on:animCreated="handleAnimation"
          />
        </div>
        <div>
          <div class="p-4 flex flex-col text-center items-center">
            <div
              class="w-12 h-12 inline-flex items-center justify-center rounded-md bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0"
            >
              <img src="/img/gas-pump.png" class="w-10 h-10" />
            </div>
            <div class="flex-grow">
              <h2 class="text-indigo-900 text-lg title-font font-bold mb-1">
                Fuel CREDIT CARD
              </h2>
              <small class="leading-relaxed text-xm text-gray-500 font-bold">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </small>
            </div>
          </div>
          <div class="p-4 flex flex-col text-center items-center">
            <div
              class="w-12 h-12 inline-flex items-center justify-center rounded-md bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0"
            >
              <img src="/img/trophy.png" class="w-10 h-10" />
            </div>
            <div class="flex-grow">
              <h2 class="text-indigo-900 text-lg title-font font-medium mb-1">
                Reward CREDIT CARD
              </h2>
              <small class="leading-relaxed text-xm text-gray-500 font-bold">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </small>
            </div>
          </div>
          <div class="p-4 flex flex-col text-center items-center">
            <div
              class="w-12 h-12 inline-flex items-center justify-center rounded-md bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0"
            >
              <img src="/img/brand.png" class="w-10 h-10" />
            </div>
            <div class="flex-grow">
              <h2 class="text-indigo-900 text-lg title-font font-medium mb-1">
                Co-Branded CREDIT CARD
              </h2>
              <small class="leading-relaxed text-xm text-gray-500 font-bold">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import animationData from "@/assets/animations/typesofcreditcard.json";

export default {
  name: "TypesOfCreditCard",
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