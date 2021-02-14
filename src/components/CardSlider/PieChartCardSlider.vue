<template>
  <div class="swiper-container copy-swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide bg-yellow-300"
        :class="!!cardRoundClass ? cardRoundClass : 'rounded-xl'"
        v-for="(item, index) in cardData"
        :key="index + 'card'"
        :style="{
          width: cardwidth,
          height: cardheight + 'px',
          background: cardbackground + ' !important',
        }"
      >
        <div class="p-1 w-full">
          <div class="h-full flex items-center p-1 rounded-lg">
            <vc-donut
              class="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-2"
              background="white"
              foreground="#EFEFEF"
              :size="50"
              unit="px"
              :thickness="30"
              :has-legend="false"
              legend-placement="top"
              :sections="[{ value: item.avg_apr, color: '#FE0250' }]"
              :total="100"
              :start-angle="0"
              :auto-adjust-text-size="true"
            >
              <h1 class="text-xs font-extrabold text-gray-500">{{item.avg_apr}}</h1>
            </vc-donut>
            <!-- <img
              alt="team"
              class="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-2"
              src="https://dummyimage.com/80x80"
            /> -->
            <div class="flex-grow">
              <h2 class="text-gray-400 text-sm title-font font-semibold">
                {{ item.name }}
              </h2>
              <p class="text-gray-900 text-md font-extrabold">
                {{ item.avg_apr + "%" }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
export default {
  name: "CardSlider",
  props: [
    "cardcount",
    "cardRoundClass",
    "cardwidth",
    "cardbackground",
    "cardheight",
    "hidePagination",
    "cardData",
    "slidesPerView",
    "spaceBetween",
    "showsPagination",
    "centeredSlides",
    "allowTouchMove",
    "containerModifierClass",
  ],
  data() {
    return {};
  },
  mounted() {
    new Swiper(".copy-swiper-container", {
      containerModifierClass: this.containerModifierClass,
      slidesPerView: this.slidesPerView,
      spaceBetween: this.spaceBetween,
      showsPagination: this.showsPagination,
      centeredSlides: this.centeredSlides,
      allowTouchMove: this.allowTouchMove,
    });
  },
};
</script>
<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide[data-v-2b606c7e] {
  width: 160px !important;
  height: 110px;
}
</style>