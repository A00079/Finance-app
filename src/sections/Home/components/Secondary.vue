<template>
  <section
    class="bg-white md:bg-transparent lg:bg-transparent xl:bg-transparent text-gray-600 body-font rounded-3xl"
  >
    <div
      class="container px-5 py-3 md:py-10 lg:py-10 xl:py-10 md:py-2  lg:py-2 xl:py-2 mt-4 md:mt-8 lg:mt-8 xl:mt-8 mx-auto"
    >
      <div class="flex flex-wrap -m-4 text-center">
        <div
          class="p-2 md:w-1/5 sm:w-1/2 w-1/3 cursor-pointer"
          @click="goTo('credit-card')"
        >
          <div
            class="bg-indigo-50 md:border-2 border-gray-200 lg:border-2 border-gray-200 xl:border-2 border-gray-200 px-0 md:px-4 lg:px-4 xl:px-4 py-2 rounded-lg  md:shadow-xl lg:shadow-xl xl:shadow-xl md:bg-white lg:bg-white xl:bg-white"
          >
            <div class="hidden md:block lg:block xl:block">
              <lottie
                :options="defaultOptions"
                :height="100"
                :width="220"
                v-on:animCreated="handleAnimation"
              />
            </div>
            <div class="md:hidden lg:hidden xl:hidden">
              <img src="/img/credit-card-home.png" class="w-16 h-16 mx-auto" />
            </div>
            <p
              class="md:hidden lg:hidden xl:hidden leading-relaxed font-bold text-gray-900 text-sm"
            >
              Credit Card
            </p>
            <p
              class="hidden md:block lg:block xl:block leading-relaxed font-bold"
            >
              Credit Card
            </p>
          </div>
        </div>
        <div
          class="p-2 md:w-1/5 sm:w-1/2 w-1/3 cursor-pointer"
          @click="goTo('home-loan')"
        >
          <div
            class="bg-indigo-50 md:border-2 border-gray-200 lg:border-2 border-gray-200 xl:border-2 border-gray-200 px-0 md:px-4 lg:px-4 xl:px-4 py-2 rounded-lg bg-white md:shadow-xl lg:shadow-xl xl:shadow-xl md:bg-white lg:bg-white xl:bg-white"
          >
            <div class="hidden md:block lg:block xl:block">
              <lottie
                :options="defaultOptions2"
                :height="100"
                :width="220"
                v-on:animCreated="handleAnimation"
              />
            </div>
            <div class="md:hidden lg:hidden xl:hidden">
              <img src="/img/home-loan-home.png" class="w-16 h-16 mx-auto" />
            </div>
            <p
              class="md:hidden lg:hidden xl:hidden leading-relaxed font-bold text-gray-900 text-sm"
            >
              Home Loan
            </p>
            <p
              class="hidden md:block lg:block xl:block leading-relaxed font-bold"
            >
              Home Loan
            </p>
          </div>
        </div>
        <!-- style="box-shadow: 0 15px 20px rgb(76, 215, 184, 0.3)" -->
        <div
          class="p-2 md:w-1/5 sm:w-1/2 w-1/3 cursor-pointer"
          @click="goTo('personal-loan')"
        >
          <div
            class="bg-indigo-50 md:border-2 border-gray-200 lg:border-2 border-gray-200 xl:border-2 border-gray-200 px-0 md:px-4 lg:px-4 xl:px-4 py-2 rounded-lg bg-white md:shadow-xl lg:shadow-xl xl:shadow-xl md:bg-white lg:bg-white xl:bg-white"
          >
            <div class="hidden md:block lg:block xl:block">
              <lottie
                :options="defaultOptions3"
                :height="100"
                :width="220"
                v-on:animCreated="handleAnimation"
              />
            </div>
            <div class="md:hidden lg:hidden xl:hidden">
              <img src="/img/personalloan.png" class="w-16 h-16 mx-auto" />
            </div>
            <p
              class="md:hidden lg:hidden xl:hidden leading-relaxed font-bold text-gray-900 text-sm"
            >
              Personal Loan
            </p>
            <p
              class="hidden md:block lg:block xl:block leading-relaxed font-bold"
            >
              Personal Loan
            </p>
          </div>
        </div>
        <div
          class="p-2 md:w-1/5 sm:w-1/2 w-1/3 cursor-pointer"
          @click="goTo('demat-account')"
        >
          <div
            class="bg-indigo-50 md:border-2 border-gray-200 lg:border-2 border-gray-200 xl:border-2 border-gray-200 px-0 md:px-4 lg:px-4 xl:px-4 py-2 rounded-lg bg-white md:shadow-xl lg:shadow-xl xl:shadow-xl md:bg-white lg:bg-white xl:bg-white"
          >
            <div class="hidden md:block lg:block xl:block">
              <lottie
                :options="defaultOptions4"
                :height="100"
                :width="220"
                v-on:animCreated="handleAnimation"
              />
            </div>
            <div class="md:hidden lg:hidden xl:hidden">
              <img src="/img/demat-acct-home.png" class="w-16 h-16 mx-auto" />
            </div>
            <p
              class="md:hidden lg:hidden xl:hidden leading-relaxed font-bold text-gray-900 text-sm"
            >
              Demat
            </p>
            <p
              class="hidden md:block lg:block xl:block leading-relaxed font-bold"
            >
              Demat
            </p>
          </div>
        </div>
        <div
          class="p-2 md:w-1/5 sm:w-1/2 w-1/3 cursor-pointer"
          @click="goTo('saving-account')"
        >
          <div
            class="bg-indigo-50 md:border-2 border-gray-200 lg:border-2 border-gray-200 xl:border-2 border-gray-200 px-0 md:px-4 lg:px-4 xl:px-4 py-2 rounded-lg bg-white md:shadow-xl lg:shadow-xl xl:shadow-xl md:bg-white lg:bg-white xl:bg-white"
          >
            <div
              style="z-index: 9999"
              class="hidden md:block lg:block xl:block"
            >
              <lottie
                :options="defaultOptions6"
                :height="100"
                :width="220"
                v-on:animCreated="handleAnimation"
              />
            </div>
            <div style="z-index: 9999" class="md:hidden lg:hidden xl:hidden">
              <img src="/img/savings.png" class="w-16 h-16 mx-auto" />
            </div>
            <p
              class="md:hidden lg:hidden xl:hidden leading-relaxed font-bold text-gray-900 text-sm"
            >
              Saving Acct
            </p>
            <p
              class="hidden md:block lg:block xl:block leading-relaxed font-bold"
            >
              Saving Account
            </p>
          </div>
        </div>
        <div
          class="p-2 md:w-1/5 sm:w-1/2 w-1/3 cursor-pointer"
          @click="goTo('saving-account')"
        >
          <div
            class="md:hidden lg:hidden xl:hidden bg-indigo-50 md:border-2 border-gray-200 lg:border-2 border-gray-200 xl:border-2 border-gray-200 px-0 md:px-4 lg:px-4 xl:px-4 py-2 rounded-lg bg-white md:shadow-xl lg:shadow-xl xl:shadow-xl"
          >
            <div style="z-index: 9999">
              <img src="/img/credit-score.png" class="w-16 h-16 mx-auto" />
            </div>
            <p
              class="leading-relaxed font-bold text-gray-900 text-sm"
            >
              Credit Score
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import animationData from "@/assets/animations/cards-payment.json";
import animationData2 from "@/assets/animations/home2.json";
import animationData3 from "@/assets/animations/money.json";
import animationData4 from "@/assets/animations/office-boy-and-girl.json";
import animationData6 from "@/assets/animations/latest-mobile-plus-website-savings.json";
export default {
  name: "Secondary",
  data() {
    return {
      defaultOptions: { animationData: animationData, loop: true },
      defaultOptions2: { animationData: animationData2, loop: true },
      defaultOptions3: { animationData: animationData3, loop: true },
      defaultOptions4: { animationData: animationData4, loop: true },
      defaultOptions6: { animationData: animationData6, loop: true },
      animationSpeed: 1,
    };
  },
  methods: {
    goTo(routeLink) {
      this.$router.push({ path: routeLink });
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
<style scoped>
</style>