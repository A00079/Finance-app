<template>
  <div>
    <home />
    <div class="hidden md:block lg:block xl:block">
      <credit-score />
      <our-products />
      <why-us />
      <about-us />
    </div>
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
  },
};
</script>
,
