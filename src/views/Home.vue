<template>
  <div class="home">
    <HomeScreen />
    <AfterHomeBanner />
    <GetCreditScore />
    <products />
    <!-- <OurProducts /> -->
    <WhyChooseUs />
    <AboutUs />
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import HomeScreen from "@/components/HomeScreen/HomeScreen.vue";
import AfterHomeBanner from "@/components/Banners/AfterHomeBanner/AfterHomeBanner.vue";
import GetCreditScore from "@/components/GetCreditScore/GetCreditScore.vue";
import OurProducts from "@/components/OurProducts/OurProducts.vue";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs.vue";
import Footer from '../components/Footer/Footer.vue';
import Products from '../components/OurProducts/Products.vue';
import AboutUs from '../components/AboutUs/AboutUs.vue';

export default {
  name: "Home",
  components: {
    HomeScreen,
    AfterHomeBanner,
    GetCreditScore,
    OurProducts,
    WhyChooseUs,
    Footer,
    Products,
    AboutUs
  },
};
</script>
