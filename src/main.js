import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Lottie from "vue-lottie";
import VueTypedJs from "vue-typed-js";
import InfiniteSlideBar from "vue-infinite-slide-bar";
import checkView from "vue-check-view";
import VueScrollReveal from "vue-scroll-reveal";
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
import RadialProgressBar from 'vue-radial-progress'
import CardSlider from '@/components/CardSlider/CardSlider.vue';
import PieChartCardSlider from '@/components/CardSlider/PieChartCardSlider.vue';
import OnlyPieChartCardSlider from '@/components/CardSlider/OnlyPieChartSlider.vue';
import Trend from "vuetrend";
// import { ValidationProvider } from 'vee-validate';
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full';
import './utils/validationsRules/veeValidations.js';
// Register it globally
// main.js or any entry file.
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(Trend)
Vue.component("only-pie-chart-slider", OnlyPieChartCardSlider);
Vue.component("pie-chart-card-slider", PieChartCardSlider);
Vue.component("card-slider", CardSlider);
Vue.component("radial-progress-bar", RadialProgressBar);
Vue.use(Donut);

Vue.use(checkView);
Vue.component("InfiniteSlideBar", InfiniteSlideBar);
Vue.use(VueTypedJs);
Vue.component("lottie", Lottie);
Vue.config.productionTip = false;
Vue.use(VueScrollReveal, {
  class: "v-scroll-reveal", // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 600,
  scale: 1.2,
  distance: "5px",
  mobile: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
