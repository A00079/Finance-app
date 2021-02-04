<template>
  <section class="text-gray-600 body-font">
    <div class="container px-10 py-24 mx-auto flex flex-wrap">
      <div class="flex flex-col text-center w-full mb-14">
        <h2
          class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
        >
          ROOF PARTY POLAROID
        </h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-indigo-900">
          A Good Credit Score Range
        </h1>
      </div>
      <div class="flex flex-row -m-4">
        <div class="p-0 w-full">
          <div class="flex p-2 sm:flex-row flex-col">
            <div
              class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0"
            >
              <vc-donut
                class="mt-10"
                background="white"
                foreground="grey"
                :size="100"
                unit="px"
                :thickness="30"
                :has-legend="false"
                legend-placement="top"
                :sections="[{ value: 25, color: '#F15A24' }]"
                :total="100"
                :start-angle="270"
                :auto-adjust-text-size="true"
                @section-click="handleSectionClick"
              >
                <h1 class="text-sm font-bold text-red-500">300-629</h1>
              </vc-donut>
            </div>
            <div class="flex-grow pr-10">
              <h2 class="text-red-500 text-lg title-font font-medium mb-3">
                Bad
              </h2>
              <p class="leading-relaxed text-sm text-gray-600 font-medium">
                Blue bottle crucifix vinyl post-ironic four dollar.
              </p>
            </div>
          </div>
        </div>
        <div class="p-0 w-full">
          <div class="flex p-2 sm:flex-row flex-col">
            <div
              class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0"
            >
              <vc-donut
                class="mt-10"
                background="white"
                foreground="grey"
                :size="100"
                unit="px"
                :thickness="30"
                :has-legend="false"
                legend-placement="top"
                :sections="[{ value: 50, color: '#F7931E' }]"
                :total="100"
                :start-angle="180"
                :auto-adjust-text-size="true"
                @section-click="handleSectionClick"
              >
                <h1 class="text-sm font-bold text-yellow-500">630-639</h1>
              </vc-donut>
            </div>
            <div class="flex-grow pr-10">
              <h2 class="text-yellow-500 text-lg title-font font-medium mb-3">
                Fair
              </h2>
              <p class="leading-relaxed text-sm text-gray-600 font-medium">
                Blue bottle crucifix vinyl post-ironic four dollar.
              </p>
            </div>
          </div>
        </div>
        <div class="p-0 w-full">
          <div class="flex p-2 sm:flex-row flex-col">
            <div
              class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0"
            >
              <vc-donut
                class="mt-10"
                background="white"
                foreground="grey"
                :size="100"
                unit="px"
                :thickness="30"
                :has-legend="false"
                legend-placement="top"
                :sections="[{ value: 75, color: '#FCEE21' }]"
                :total="100"
                :start-angle="90"
                :auto-adjust-text-size="true"
                @section-click="handleSectionClick"
              >
                <h1 class="text-sm font-bold text-green-500">690-719</h1>
              </vc-donut>
            </div>
            <div class="flex-grow pr-10">
              <h2 class="text-green-500 text-lg title-font font-medium mb-3">
                Good
              </h2>
              <p class="leading-relaxed text-sm text-gray-600 font-medium">
                Blue bottle crucifix vinyl post-ironic four dollar.
              </p>
            </div>
          </div>
        </div>
        <div class="p-0 w-full">
          <div class="flex p-2 sm:flex-row flex-col">
            <div
              class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0"
            >
              <vc-donut
                class="mt-10"
                background="white"
                foreground="grey"
                :size="100"
                unit="px"
                :thickness="30"
                :has-legend="false"
                legend-placement="top"
                :sections="[{ value: 100, color: '#8CC63F' }]"
                :total="100"
                :start-angle="0"
                :auto-adjust-text-size="true"
                @section-click="handleSectionClick"
              >
                <h1 class="text-sm font-bold text-green-900">720-850</h1>
              </vc-donut>
            </div>
            <div class="flex-grow pr-10">
              <h2 class="text-green-900 text-lg title-font font-medium mb-3">
                Excellent
              </h2>
              <p class="leading-relaxed text-sm text-gray-600 font-medium">
                Blue bottle crucifix vinyl post-ironic four dollar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhatIsCreditCard />
    </div>
  </section>
</template>
<script>
import WhatIsCreditCard from "./WhatIsCreditCard.vue";
export default {
  name: "CreditScore",
  data() {
    return {};
  },
  components: {
    WhatIsCreditCard,
  },
};
</script>
<style scoped>
</style>