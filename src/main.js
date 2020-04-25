import Vue from "vue";
import { Button, Select, Breadcrumb } from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.less";
Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Select);
Vue.use(Breadcrumb);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
