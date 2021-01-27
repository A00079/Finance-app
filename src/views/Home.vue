<template>
  <div class="home">
    <HomeScreen />
    <AfterHomeBanner />
    <GetCreditScore />
    <OurProducts />
  </div>
</template>
<script>
// @ is an alias to /src
import HomeScreen from "@/components/HomeScreen/HomeScreen.vue";
import AfterHomeBanner from "@/components/Banners/AfterHomeBanner/AfterHomeBanner.vue";
import GetCreditScore from "@/components/GetCreditScore/GetCreditScore.vue";
import OurProducts from "@/components/OurProducts/OurProducts.vue";

export default {
  name: 'Home',
  components:{
    HomeScreen,
    AfterHomeBanner,
    GetCreditScore,
    OurProducts
  }
}
</script>
