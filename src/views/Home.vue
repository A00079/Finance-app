<template>
  <div>
    <home />
    <credit-score />
    <our-products />
    <big-adsBanner />
    <why-us />
    <about-us />
  </div>
</template>
<script>
// @ is an alias to /src
import {
  Home,
  CreditScore,
  OurProducts,
  WhyUs,
  AboutUs,
  Testimonials,
  BigAdsBanner
} from "../sections";

export default {
  name: "Home",
  components: {
    home: Home,
    CreditScore: CreditScore,
    OurProducts: OurProducts,
    WhyUs: WhyUs,
    AboutUs: AboutUs,
    Testimonials: Testimonials,
    BigAdsBanner:BigAdsBanner
  },
};
</script>
,
