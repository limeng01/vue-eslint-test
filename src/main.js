import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import antDesignPackage from "./use";
import infiniteScroll from "vue-infinite-scroll"; // 滚动
import "element-ui/lib/theme-chalk/index.css";
import ToastMySelf from "./common/toastAsVueExtend";
import VuePhotoZoomPro from "vue-photo-zoom-pro"; // 放大镜
import VueDragResize from "vue-drag-resize"; // 拖拽放大缩小

// 利用Vue的extend编写的动态组件
Vue.use(ToastMySelf);
import {
  Tree,
  Input,
  Button,
  Collapse,
  CollapseItem,
  Select,
  Option,
} from "element-ui";
import VueLazyload from "vue-lazyload";
//  全局组件测试
import { componentA } from "@/common/componentA";
Vue.use(componentA);
// vue的vue.use测试(函数)
import { vueWindowFn } from "@/common/vueWindowFn";
Vue.use(vueWindowFn);
// vue的vue.use测试(对象)
import { vueWindowObject } from "@/common/vueWindowObject";
Vue.use(vueWindowObject);
// 测试vue的自定义指令
import freezeDom from "freeze-dom";
Vue.use(freezeDom);
// intro.js
import IntroJs from "intro.js";
import "intro.js/introjs.css";
Vue.use(IntroJs);
// 全局创建BUS监听
Vue.prototype.$EventBus = new Vue();
//
Vue.use(CollapseItem); // 手风琴
Vue.use(Collapse); // 手风琴
Vue.use(Tree);
Vue.use(Input);
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
// vue的轮播 awesome-swiper
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.min.css";
Vue.use(VueAwesomeSwiper);
Vue.component("vue-drag-resize", VueDragResize);
import Swiper2, { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
Swiper2.use([Navigation, Pagination, EffectFade, Autoplay]);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  // loading: require("./assets/logo.png"),
  loading:
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif",
  attempt: 1,
});
Vue.config.productionTip = false;

Vue.directive("inputValue", {
  inserted: function(el, vnode) {
    console.log(vnode);
    el.addEventListener("change", () => {
      console.dir(el.value);
    });
  },
});
// 自定义指令 改变div位置
Vue.directive("domMove", {
  bind(el, bindParmes) {
    const { arg, value } = bindParmes;
    console.log(bindParmes, "bind中的bindParmes");
    el.style[arg] = value + "px";
  },
  update(el, bindParmes) {
    console.log(bindParmes, "update中的bindParmes");
    const { arg, value } = bindParmes;
    el.style[arg] = value + "px";
  },
  // inserted: function(el, vnode) {
  //   console.log(vnode);
  //   el.addEventListener("change", () => {
  //     console.dir(el.value);
  //   });
  // },
});

// 自定义指令，通过点击任何其他位置，关闭当前弹窗
Vue.directive("clickOutSide", {
  bind(el, bindParmes, vNode) {
    console.log(vNode);
    document.documentElement.onclick = e => {
      console.dir(e.target);
      if (e.target === el || e.target.id === "button") return;
      bindParmes.value.ctx._data.showToast = false;
    };
  },
  update(el, bindParmes) {
    console.log(bindParmes, "update中的bindParmes");
  },
});
Vue.use(antDesignPackage);
Vue.use(infiniteScroll);
// 放大镜
Vue.use(VuePhotoZoomPro);
Vue.directive("focus", {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function(el) {
    console.log(el);
    el.style.width = "300px";
    // 聚焦元素
    el.focus();
  },
});
// vue extends

Vue.prototype.Profile = Vue.extend({
  template: "<p>{{firstName}} {{lastName}} aka {{alias}}</p>",
  data: function() {
    return {
      firstName: "Walter",
      lastName: "White",
      alias: "Heisenberg",
    };
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
// Vue.config.errorHandler = function(err, vm, info) {
//   console.log(err, "???");
//   console.log(vm);
//   console.log(info);
// };
