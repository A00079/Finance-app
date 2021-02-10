<template>
  <div>
    <home />
    <credit-score />
    <our-products />
    <div class="hidden md:block lg:block xl:block">
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
