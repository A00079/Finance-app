<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide bg-yellow-300"
        :class="!!cardRoundClass?cardRoundClass:'rounded-xl'"
        v-for="(item, index) in cardData"
        :key="index + 'card'"
        :style="{ width: cardwidth + 'px !important', height: cardheight + 'px', background: cardbackground +' !important' }"
      >
        <div class="container px-2 mx-auto">
          <div class="flex flex-col">
            <p class="text-left text-white font-semibold py-1">{{ item.title }}</p>
            <img :src="'/img/' + item.img" class="w-20 h-20 mx-auto" />
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
  props: ["cardcount","cardRoundClass", "cardwidth","cardbackground", "cardheight", "hidePagination", "cardData","slidesPerView","spaceBetween","showsPagination","centeredSlides","allowTouchMove","containerModifierClass"],
  data() {
    return {};
  },
  mounted() {
    new Swiper(".swiper-container", {
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
.swiper-slide {
  /* width: 160px !important; */
  height: 110px;
}
</style>