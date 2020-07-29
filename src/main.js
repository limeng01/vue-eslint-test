import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import antDesignPackage from "./use";
import infiniteScroll from "vue-infinite-scroll"; // 滚动
Vue.config.productionTip = false;

Vue.use(antDesignPackage);
Vue.use(infiniteScroll);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
// Vue.config.errorHandler = function(err, vm, info) {
//   console.log(err, "???");
//   console.log(vm);
//   console.log(info);
// };
