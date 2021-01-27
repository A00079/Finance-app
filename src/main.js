import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Lottie from "vue-lottie";
import VueTypedJs from 'vue-typed-js';
import InfiniteSlideBar from 'vue-infinite-slide-bar'
import checkView from 'vue-check-view'

Vue.use(checkView)
Vue.component('InfiniteSlideBar', InfiniteSlideBar)
Vue.use(VueTypedJs)
Vue.component("lottie", Lottie);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
