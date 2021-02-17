<template>
  <section class="mt-32">
    <div class="hidden md:block lg:block xl:block">PC</div>
    <div class="md:hidden lg:hidden xl:hidden">
      <div class="container mx-auto">
        <div class="px-4">
          <h2
            class="text-xs text-indigo-800 text-left tracking-widest font-medium title-font mb-1"
          >
            CARDS FOR YOU
          </h2>
          <h1
            class="text-2xl font-semibold text-left title-font mb-4 text-indigo-800"
          >
            We Found 9 Credit Cards For You
          </h1>
          <div class="flex mt-4 justify-start">
            <div class="w-36 h-1 rounded-full bg-indigo-700 inline-flex"></div>
          </div>
        </div>
        <div class="dynamicd-list-data container">
          <div class="p-2 w-full mt-3">
            <div class="h-full flex items-center p-2 rounded-lg">
              <img
                alt="team"
                class="w-28 mt-2 h-20 bg-indigo-50 p-1 border-2 border-indigo-400 mx-auto text-center rounded-md mr-4"
                src="/img/creditcarddynamic_copy.png"
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Citibank Cashback Credit Card
                </h2>
                <p class="text-gray-500">Credit Card</p>
              </div>
            </div>
            <h1 class="text-lg text-gray-600 font-semibold p-2 text-left">
              Eligibility
            </h1>
            <div class="flex flex-row p-2 pt-0">
              <svg
                class="w-7 h-7 text-left"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <h1 class="text-xl text-gray-800 font-bold p-2 pt-0 text-left">
                4 Lakhs Onward
              </h1>
            </div>
            <div class="card-type">
              <div class="flex flex-row space-x-20">
                <h1 class="text-lg text-gray-600 font-semibold pl-2 text-left">
                  Card Type
                </h1>
                <div
                  class="bg-indigo-700 text-xs py-1 rounded-md px-2 text-white font-semibold"
                >
                  CashBack
                </div>
              </div>
            </div>
            <div class="graph-center p-0 mt-6">
              <div class="flex flex-row w-full space-x-2 justify-between mx-auto px-2">
                <div
                  class="graph-content bg-white shadow-xl border-2 border-gray-300 rounded-xl w-44 h-full"
                >
                  <div class="flex flex-col w-full space-y-4">
                    <div class="py-4 space-y-4 bg-indigo-50">
                      <vc-donut
                        class="w-full h-12 text-center mx-auto object-cover object-center rounded-full mr-2"
                        background="white"
                        foreground="#EFEFEF"
                        :size="70"
                        unit="px"
                        :thickness="25"
                        :has-legend="false"
                        legend-placement="top"
                        :sections="[{ value: 60, color: '#FE0250' }]"
                        :total="100"
                        :start-angle="0"
                        :auto-adjust-text-size="true"
                      >
                        <h1 class="text-xl font-bold text-gray-800">60</h1>
                      </vc-donut>
                      <p
                        class="text-md text-gray-800 w-16 mx-auto text-center font-bold text-center"
                      >
                        1st Year Fee:<span class="text-gray-500"> 500</span>
                      </p>
                    </div>
                    <div class="space-y-4">
                      <vc-donut
                        class="w-full h-12 text-center mx-auto object-cover object-center rounded-full mr-2"
                        background="white"
                        foreground="#EFEFEF"
                        :size="70"
                        unit="px"
                        :thickness="25"
                        :has-legend="false"
                        legend-placement="top"
                        :sections="[{ value: 60, color: '#FE0250' }]"
                        :total="100"
                        :start-angle="0"
                        :auto-adjust-text-size="true"
                      >
                        <h1 class="text-xl font-bold text-gray-800">60</h1>
                      </vc-donut>
                      <p
                        class="text-md text-gray-800 w-16 mx-auto text-center font-bold text-center"
                      >
                        1st Year Fee:<span class="text-gray-500"> 500</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="data-content w-44">
                  <div class="flex flex-col space-y-2">
                    <div
                      class="flex flex-col bg-white shadow-xl rounded-xl border-2 py-9 px-2 border-gray-300"
                    >
                      <p class="text-lg text-gray-500 font-bold">
                        1st Year Fee
                      </p>
                      <p class="text-green-500 text-md font-extrabold">500</p>
                    </div>
                    <div
                      class="flex flex-col bg-white shadow-xl space-y-3 rounded-xl border-2 py-5 px-2 border-gray-300"
                    >
                      <svg
                        class="w-7 h-7 bg-white text-green-500 shadow-xl"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div>
                        <p class="text-lg text-gray-500 font-bold">
                          1st Year Fee
                        </p>
                        <p class="text-green-500 text-md font-extrabold">500</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "DynamicDataListing",
};
</script>
<style scoped>
</style>