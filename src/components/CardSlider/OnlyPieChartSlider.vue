<template>
  <section>
    <div class="swiper-container copy-swiper-container-onlypiechart">
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
          <div class="h-full flex items-center p-1 rounded-lg">
            <vc-donut
              class="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-2"
              background="white"
              foreground="#EFEFEF"
              :size="100"
              unit="px"
              :thickness="25"
              :has-legend="false"
              legend-placement="top"
              :sections="[{ value: item.process_fee_num, color: '#FE0250' }]"
              :total="100"
              :start-angle="0"
              :auto-adjust-text-size="true"
            >
              <h1 class="text-xl font-bold text-gray-800">
                {{ item.process_fee_num }}
              </h1>
            </vc-donut>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>
<script>
export default {
  name: "OnlyPieChartSlider",
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
    new Swiper(".copy-swiper-container-onlypiechart", {
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
  width: auto !important;
  height: 110px;
}
</style>