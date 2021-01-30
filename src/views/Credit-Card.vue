<template>
  <section class="mt-2">
    <div class="container mx-auto">
      <div class="grid grid-cols-2 gap-6">
        <div class="bg-white border-2 border-gray-200 p-4 shadow-xl rounded-xl">
          <h4 class="text-4xl font-semibold mb-2 text-indigo-900">
            The Card That Suits You!
          </h4>
          <h5 class="text-xl font-medium text-gray-500">
            Best Credit Card In India
          </h5>
          <h5 class="text-1xl mt-4 font-medium text-indigo-700">Gender</h5>
          <div class="flex flex-row">
            <div class="p-2 pl-0 pr-4">
              <div
                class="h-12 w-40 flex items-center border-gray-200 border p-4 pl-0 rounded-lg"
              >
                <div class="bg-gray-200 p-1 rounded-lg">
                  <lottie
                    :options="defaultOptions"
                    :height="40"
                    :width="60"
                    v-on:animCreated="handleAnimation"
                  />
                </div>
                <div class="flex-grow">
                  <h2 class="text-indigo-900 title-font font-medium pl-5">
                    Male
                  </h2>
                  <!-- <p class="text-gray-500">UI Designer</p> -->
                </div>
              </div>
            </div>
            <div class="p-2 pr-0 pr-6">
              <div
                class="h-12 w-40 flex items-center border-gray-200 border p-4 pl-0 rounded-lg"
              >
                <div class="bg-gray-200 p-1 rounded-lg">
                  <lottie
                    :options="defaultOptions2"
                    :height="40"
                    :width="60"
                    v-on:animCreated="handleAnimation"
                  />
                </div>
                <div class="flex-grow">
                  <h2 class="text-indigo-900 title-font font-medium pl-5">
                    Female
                  </h2>
                  <!-- <p class="text-gray-500">UI Designer</p> -->
                </div>
              </div>
            </div>
            <div class="p-2 pl-0 pr-0">
              <div
                class="h-12 w-40 flex items-center border-gray-200 border p-4 pl-0 rounded-lg"
              >
                <div class="bg-gray-200 p-1 rounded-lg">
                  <lottie
                    :options="defaultOptions"
                    :height="40"
                    :width="60"
                    v-on:animCreated="handleAnimation"
                  />
                </div>
                <div class="flex-grow">
                  <h2 class="text-indigo-900 title-font font-medium pl-5">
                    Male
                  </h2>
                  <!-- <p class="text-gray-500">UI Designer</p> -->
                </div>
              </div>
            </div>
          </div>
          <div class="flex -mx-3 mt-2">
            <div class="w-1/2 px-3 mb-3">
              <label for="" class="px-1 text-1xl mt-4 font-medium text-indigo-700"
                >First name
              </label>
              <div class="flex">
                <div
                  class="w-10 z-10 pl-1 ml-2 text-center pointer-events-none flex items-center justify-center"
                >
                  <i
                    class="mdi mdi-account-outline  p-3 px-4 text-gray-400 rounded-lg text-2xl"
                  ></i>
                </div>
                <input
                  type="text"
                  class="w-full -ml-10 pl-16 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="John"
                />
              </div>
            </div>
            <div class="w-1/2 px-3 mb-3">
              <label for="" class="px-1 text-1xl mt-4 font-medium text-indigo-700"
                >Last name
              </label>
              <div class="flex">
                <div
                  class="w-10 z-10 pl-1 ml-2 text-center pointer-events-none flex items-center justify-center"
                >
                  <i
                    class="mdi mdi-account-outline  p-3 px-4 text-gray-400 rounded-lg text-2xl"
                  ></i>
                </div>
                <input
                  type="text"
                  class="w-full -ml-10 pl-16 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="Smith"
                />
              </div>
            </div>
          </div>

          <div class="flex -mx-3 mt-0 p-0">
            <div class="w-1/2 px-3 mb-3">
              <label for="" class="px-1 text-1xl mt-4 font-medium text-indigo-700"
                >Contact
              </label>
              <div class="flex">
                <div
                  class="w-10 z-10 pl-1 ml-2 text-center pointer-events-none flex items-center justify-center"
                >
                  <i
                    class="mdi mdi-account-outline  p-3 px-4 text-gray-400 rounded-lg text-2xl"
                  ></i>
                </div>
                <input
                  type="text"
                  class="w-full -ml-10 pl-16 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="Mobile(91+xxxxxxxxxx)"
                />
              </div>
            </div>
            <div class="w-1/2 px-3 mb-3">
              <label for="" class="px-1 text-1xl mt-4 font-medium text-indigo-700"
                >Email
              </label>
              <div class="flex">
                <div
                  class="w-10 z-10 pl-1 ml-2 text-center pointer-events-none flex items-center justify-center"
                >
                  <i
                    class="mdi mdi-email-outline  p-3 px-4 text-gray-400 rounded-lg text-2xl"
                  ></i>
                </div>
                <input
                  type="text"
                  class="w-full -ml-10 pl-16 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="Smith@gmail.com"
                />
              </div>
            </div>
          </div>

          <div class="flex -mx-3 mt-0 p-0">
            <div class="w-1/2 px-3 mb-3">
              <label for="" class="px-1 text-1xl mt-4 font-medium text-indigo-700"
                >Date of Birth
              </label>
              <div class="flex">
                <div
                  class="w-10 z-10 pl-1 ml-2 text-center pointer-events-none flex items-center justify-center"
                >
                  <i
                    class="mdi mdi-account-outline  p-3 px-4 text-gray-400 rounded-lg text-2xl"
                  ></i>
                </div>
                <input
                  type="date"
                  class="w-full -ml-10 text-gray-400 pl-16 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="John"
                />
              </div>
            </div>
          </div>

          <div class="flex justify-left mt-2">
            <button
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 ml-1 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import animationData from "@/assets/animations/man.json";
import animationData2 from "@/assets/animations/female.json";
export default {
  name: "Credit-Card",
  data() {
    return {
      defaultOptions: { animationData: animationData, loop: true },
      defaultOptions2: { animationData: animationData2, loop: true },
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