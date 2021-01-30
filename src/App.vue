<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <SubNavBanner />
    </div>
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import SubNavBanner from "@/components/Navbar/SubNavBanner.vue";
import Footer from "./components/Footer/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    SubNavBanner,
    Footer,
  },
};
</script>
<style>
body::-webkit-scrollbar {
  display: none;
}
</style>
