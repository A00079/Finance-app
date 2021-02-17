<template>
  <div>
    <div class="hidden md:block lg:block xl:block">
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
    </div>
    <div class="md:hidden lg:hidden xl:hidden mt-28">
      <div class="container px-5 py-2 mx-auto">
        <div class="flex flex-col text-center w-full">
          <h2
            class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
          >
            BANK ACCOUNTS
          </h2>
          <h1
            class="text-2xl md:text-3xl font-semibold title-font mb-4 text-indigo-800"
          >
            TYPES OF SAVING ACCOUNTS.
          </h1>
          <p
            class="lg:w-2/3 mx-auto leading-relaxed font-semibold text-sm text-gray-500"
          >
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div class="box-list mt-6">
          <div class="flex flex-row flex-wrap justify-center mx-auto space-x-3">
            <div class="flex flex-col">
              <img
                src="/img/savings.png"
                class="bg-indigo-50 py-2 px-2 rounded-xl w-24 h-24 mx-auto"
              />
              <p class="text-sm text-indigo-700 font-bold text-center">key 1</p>
            </div>
            <div class="flex flex-col">
              <img
                src="/img/savings.png"
                class="bg-indigo-50 py-2 px-2 rounded-xl w-24 h-24 mx-auto"
              />
              <p class="text-sm text-indigo-700 font-bold text-center">key 1</p>
            </div>
            <div class="flex flex-col">
              <img
                src="/img/savings.png"
                class="bg-indigo-50 py-2 px-2 rounded-xl w-24 h-24 mx-auto"
              />
              <p class="text-sm text-indigo-700 font-bold text-center">key 1</p>
            </div>
            <div class="flex flex-col">
              <img
                src="/img/savings.png"
                class="bg-indigo-50 py-2 px-2 rounded-xl w-24 h-24 mx-auto"
              />
              <p class="text-sm text-indigo-700 font-bold text-center">key 1</p>
            </div>
          </div>
        </div>
        <div class="grid-list mt-5">
          <div class="flex flex-col">
            <div class="w-full">
              <div class="h-full flex items-center p-2 rounded-lg">
                <img
                  style="background: #fff3c1"
                  alt="team"
                  class="w-16 h-16 py-3 px-3 bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div
                  class="flex-grow py-2 px-2 rounded-lg"
                  style="background: #fff3c1"
                >
                  <h2 class="text-gray-900 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p class="text-gray-500">UI Designer</p>
                </div>
                <img
                  style="background: #fff3c1"
                  alt="team"
                  class="w-16 h-16 py-3 px-3 bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl ml-4"
                  src="https://dummyimage.com/80x80"
                />
              </div>
            </div>
            <div class="w-full">
              <div class="h-full flex items-center p-2 rounded-lg">
                <img
                  style="background: #d1ffd8"
                  alt="team"
                  class="w-16 h-16 py-3 px-3 bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div
                  class="flex-grow py-2 px-2 rounded-lg"
                  style="background: #d1ffd8"
                >
                  <h2 class="text-gray-900 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p class="text-gray-500">UI Designer</p>
                </div>
                <img
                  style="background: #d1ffd8"
                  alt="team"
                  class="w-16 h-16 py-3 px-3 bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl ml-4"
                  src="https://dummyimage.com/80x80"
                />
              </div>
            </div>
            <div class="w-full">
              <div class="h-full flex items-center p-2 rounded-lg">
                <img
                  style="background: #DCF4FF"
                  alt="team"
                  class="w-16 h-16 py-3 px-3 bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div
                  class="flex-grow py-2 px-2 rounded-lg"
                  style="background: #DCF4FF"
                >
                  <h2 class="text-gray-900 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p class="text-gray-500">UI Designer</p>
                </div>
                <img
                  style="background: #DCF4FF"
                  alt="team"
                  class="w-16 h-16 py-3 px-3 bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl ml-4"
                  src="https://dummyimage.com/80x80"
                />
              </div>
            </div>
            <div class="w-full">
              <div class="h-full flex items-center p-2 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 py-3 px-3 bg-pink-100 object-cover object-center flex-shrink-0 rounded-xl mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div
                  class="flex-grow py-2 px-2 rounded-lg bg-pink-100"
                >
                  <h2 class="text-gray-900 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p class="text-gray-500">UI Designer</p>
                </div>
                <img
                  alt="team"
                  class="bg-pink-100 w-16 h-16 py-3 px-3 bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl ml-4"
                  src="https://dummyimage.com/80x80"
                />
              </div>
            </div>
          </div>
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