<template>
  <div>
    <div class="hidden md:block lg:block xl:block">
      <section class="p-2 relative">
        <div class="">
          <div class="grid grid-cols-7 gap-8">
            <div
              class="bg-white border-2 col-span-3 border-gray-200 p-2 shadow-xl rounded-xl"
            >
              <h4 class="text-2xl ml-3 font-semibold mb-0 text-indigo-900">
                Find The Best Suited!
              </h4>
              <h5 class="text-lg ml-3 font-medium text-gray-500">
                Saving Account For You!
              </h5>
              <div class="space-y-3">
                <div class="flex justify-between px-2 pt-4">
                  <div>
                    <div class="text-indigo-900 capitalize font-semibold">
                      first name
                    </div>
                    <div class="flex">
                      <div
                        class="w-10 z-10 ml-2 text-center pointer-events-none flex items-center justify-center"
                      >
                        <i
                          class="mdi mdi-account-outline text-gray-400 rounded-md text-2xl"
                        ></i>
                      </div>
                      <input
                        id="firstname"
                        type="text"
                        class="w-60 -ml-12 pl-16 pr-3 py-2 rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="text-indigo-900 capitalize font-semibold">
                      last name
                    </div>
                    <div class="flex">
                      <div
                        class="w-10 z-10 ml-2 text-center pointer-events-none flex items-center justify-center"
                      >
                        <i
                          class="mdi mdi-account-outline text-gray-400 rounded-md text-2xl"
                        ></i>
                      </div>
                      <input
                        type="text"
                        class="w-60 -ml-12 pl-16 pr-3 py-2 rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex justify-between px-2">
                  <div>
                    <div class="text-indigo-900 capitalize font-semibold">
                      Contact
                    </div>
                    <div class="flex">
                      <div
                        class="w-10 z-10 ml-2 text-center pointer-events-none flex items-center justify-center"
                      >
                        <i
                          class="mdi mdi-account-outline text-gray-400 rounded-md text-2xl"
                        ></i>
                      </div>
                      <input
                        type="text"
                        class="w-60 -ml-12 pl-16 pr-3 py-2 rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Mobile(91+xxxxxxxxxx)"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="text-indigo-900 capitalize font-semibold">
                      Email
                    </div>
                    <div class="flex">
                      <div
                        class="w-10 z-10 ml-2 text-center pointer-events-none flex items-center justify-center"
                      >
                        <i
                          class="mdi mdi-account-outline text-gray-400 rounded-md text-2xl"
                        ></i>
                      </div>
                      <input
                        type="text"
                        class="w-60 -ml-12 pl-16 pr-3 py-2 rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnDoe@gmail.com"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex justify-between px-2">
                  <div>
                    <div class="text-indigo-900 capitalize font-semibold">
                      Birth Date
                    </div>
                    <div class="flex">
                      <div
                        class="w-10 z-10 ml-2 text-center pointer-events-none flex items-center justify-center"
                      >
                        <i
                          class="mdi mdi-account-outline text-gray-400 rounded-md text-2xl"
                        ></i>
                      </div>
                      <input
                        type="date"
                        class="w-60 -ml-12 pl-16 pr-3 py-2 rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="text-indigo-900 capitalize font-semibold">
                      Average Annual Income
                    </div>
                    <div class="flex">
                      <div
                        class="w-10 z-10 ml-2 text-center pointer-events-none flex items-center justify-center"
                      >
                        <i
                          class="mdi mdi-account-outline text-gray-400 rounded-md text-2xl"
                        ></i>
                      </div>
                      <input
                        type="text"
                        class="w-60 -ml-12 pl-16 pr-3 py-2 rounded-md border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="12,000,00"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex mt-2 ml-2">
                <div class="w-1/2 mb-2">
                  <label
                    for=""
                    class="px-1 text-md mt-2 font-medium text-indigo-700"
                    >Gender
                  </label>
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
                          <h2
                            class="text-indigo-900 title-font font-medium pl-5"
                          >
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
                          <h2
                            class="text-indigo-900 title-font font-medium pl-5"
                          >
                            Female
                          </h2>
                          <!-- <p class="text-gray-500">UI Designer</p> -->
                        </div>
                      </div>
                    </div>
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
            <div class="flex flex-col col-span-4">
              <div class="flex flex-col">
                <div class="flex flex-row">
                  <div
                    class="bg-indigo-700 mr-1 rounded-md border-2 border-gray-200 shadow-sm flex p-1 px-2 h-full items-center"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-indigo-500 p-1 w-8 bg-green-200 h-8 flex-shrink-0 mr-4 rounded-3xl"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <div class="flex flex-col">
                      <span class="title-font text-sm font-bold text-white"
                        >Personal Loan</span
                      >
                      <small class="text-xm font-medium text-white"
                        >Blue bottle crucifix gartics.</small
                      >
                    </div>
                  </div>
                  <div
                    class="bg-white mr-1 rounded-md border-2 border-gray-200 shadow-sm flex p-1 px-2 h-full items-center"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-indigo-500 p-1 w-8 bg-green-200 h-8 flex-shrink-0 mr-4 rounded-3xl"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <div class="flex flex-col">
                      <span class="title-font text-sm font-medium"
                        >Authentic</span
                      >
                      <span class="text-sm font-medium"
                        >Blue bottle crucifix.</span
                      >
                    </div>
                  </div>
                  <div
                    class="bg-indigo-700 mr-1 rounded-md border-2 border-gray-200 shadow-sm flex p-1 px-2 h-full items-center"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-indigo-500 p-1 w-8 bg-green-200 h-8 flex-shrink-0 mr-4 rounded-3xl"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <div class="flex flex-col">
                      <span class="title-font text-sm font-bold text-white"
                        >Authentic</span
                      >
                      <small class="text-xm font-medium text-white"
                        >Blue bottle crucifix gartics.</small
                      >
                    </div>
                  </div>
                  <div
                    class="bg-white mr-1 rounded-md border-2 border-gray-200 shadow-sm flex p-1 px-2 h-full items-center"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-indigo-500 p-1 w-8 bg-green-200 h-8 flex-shrink-0 mr-4 rounded-3xl"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <div class="flex flex-col">
                      <span class="title-font text-sm font-medium"
                        >Authentic</span
                      >
                      <span class="text-sm font-medium"
                        >Blue bottle crucifix.</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <lottie
                  :options="defaultOptions3"
                  :height="350"
                  :width="450"
                  v-on:animCreated="handleAnimation"
                />
              </div>
            </div>
          </div>
          <img
            src="/img/wave.png"
            class="absolute top-0 right-0"
            style="width: 300px; height: 600px; z-index: -1"
          />
        </div>
      </section>
      <SavingAccountCharges />
      <WhatIsSavingAccount />
      <SavingKeyFeatures />
      <TypesOfBankAccount />
      <TypesOfSavingAccount />
    </div>
    <div class="md:hidden lg:hidden xl:hidden">
      <div>
        <section class="text-gray-600 body-font">
          <div
            class="container mx-auto flex px-5 py-0 items-center justify-center flex-col"
          >
            <img
              class="w-48 mb-0 h-48"
              alt="hero"
              src="/img/mobilehomeloan.png"
            />
            <div class="text-center w-full">
              <h1
                class="title-font text-2xl mb-0 text-left font-bold text-indigo-700"
              >
                Find the best Suited
              </h1>
              <p class="mb-2 text-lg font-semibold leading-relaxed text-left">
                Saving Account For You!
              </p>
            </div>
            <div class="flex flex-wrap">
              <div class="p-2 w-1/2">
                <input
                  type="text"
                  id="firstname"
                  name="name"
                  placeholder="First Name"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="p-2 w-1/2">
                <input
                  type="text"
                  id="latname"
                  name="lastname"
                  placeholder="Last Name"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="p-2 w-1/2">
                <input
                  type="text"
                  id="contact"
                  name="lastname"
                  placeholder="91+xxxxxxxxxx"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="p-2 w-1/2">
                <input
                  type="text"
                  id="email"
                  name="lastname"
                  placeholder="Email"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="p-2 w-1/2">
                <input
                  type="email"
                  id="birthdate"
                  name="email"
                  placeholder="Birth Date"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="p-2 w-1/2">
                <input
                  type="text"
                  id="avgannual"
                  name="lastname"
                  placeholder="Average Annual Inc"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="flex mt-2 ml-2">
                <div class="w-1/2 mb-2">
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
                          <h2
                            class="text-indigo-900 title-font font-medium pl-5"
                          >
                            Male
                          </h2>
                          <!-- <p class="text-gray-500">UI Designer</p> -->
                        </div>
                      </div>
                    </div>
                    <div class="p-2 pr-0 pr-2">
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
                          <h2
                            class="text-indigo-900 title-font font-medium pl-2"
                          >
                            Female
                          </h2>
                          <!-- <p class="text-gray-500">UI Designer</p> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-left mt-2">
                <button
                  class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 ml-1 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
        <SavingAccountCharges />
        <WhatIsSavingAccount />
        <!-- <SavingKeyFeatures /> -->
        <!-- <TypesOfBankAccount /> -->
        <TypesOfSavingAccount />
      </div>
    </div>
  </div>
</template>
<script>
import SavingAccountCharges from "@/components/SavingAccountUIComponents/SavingAccountCharges/SavingAccountCharges.vue";
import WhatIsSavingAccount from "@/components/SavingAccountUIComponents/WhatIsSavingAccount/WhatIsSavingAccount.vue";
import SavingKeyFeatures from "@/components/SavingAccountUIComponents/SavingKeyFeatures/SavingKeyFeatures.vue";
import TypesOfBankAccount from "@/components/SavingAccountUIComponents/TypesOfBankAccount/TypesOfBankAccount.vue";
import TypesOfSavingAccount from "@/components/SavingAccountUIComponents/TypesOfSavingAccount/TypesOfSavingAccount.vue";
import animationData from "@/assets/animations/man.json";
import animationData2 from "@/assets/animations/female.json";
import animationData3 from "@/assets/animations/latest-mobile-plus-website-savings.json";

export default {
  name: "Home-Loan",
  data() {
    return {
      defaultOptions: { animationData: animationData, loop: true },
      defaultOptions2: { animationData: animationData2, loop: true },
      defaultOptions3: { animationData: animationData3, loop: true },
    };
  },
  components: {
    SavingAccountCharges,
    WhatIsSavingAccount,
    SavingKeyFeatures,
    TypesOfBankAccount,
    TypesOfSavingAccount,
  },
  mounted() {
    document.getElementById("firstname").focus();
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
<style scoped></style>
s