<template>
  <div class="home">
    <HomeScreen />
    <AfterHomeBanner />
    <GetCreditScore />
    <products />
    <OurProducts />
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import HomeScreen from "@/components/HomeScreen/HomeScreen.vue";
import AfterHomeBanner from "@/components/Banners/AfterHomeBanner/AfterHomeBanner.vue";
import GetCreditScore from "@/components/GetCreditScore/GetCreditScore.vue";
import OurProducts from "@/components/OurProducts/OurProducts.vue";
import Footer from '../components/Footer/Footer.vue';
import Products from '../components/OurProducts/Products.vue';

export default {
  name: "Home",
  components: {
    HomeScreen,
    AfterHomeBanner,
    GetCreditScore,
    OurProducts,
    Footer,
    Products,
  },
};
</script>
