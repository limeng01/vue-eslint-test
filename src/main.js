import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import antDesignPackage from "./use";
import infiniteScroll from "vue-infinite-scroll"; // 滚动
import "element-ui/lib/theme-chalk/index.css";
import { Tree, Input, Button } from "element-ui";
import VueLazyload from "vue-lazyload";
//  全局组件测试
import { componentA } from '@/common/componentA'
Vue.use(componentA)
// vue的vue.use测试(函数)
import { vueWindowFn } from '@/common/vueWindowFn'
Vue.use(vueWindowFn)
// vue的vue.use测试(对象)
import { vueWindowObject } from '@/common/vueWindowObject'
Vue.use(vueWindowObject)
Vue.use(Tree);
Vue.use(Input);
Vue.use(Button);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // loading: require("./assets/logo.png"),
  loading:
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif",
  attempt: 1,
});
Vue.config.productionTip = false;

Vue.use(antDesignPackage);
Vue.use(infiniteScroll);
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    console.log(el)
    el.style.width = '300px'
    // 聚焦元素
    el.focus()
  }
})
Vue.directive('blockDom', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el,binding) {
    console.log(el,'el')
    console.log(binding.arg,'binding')
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function(mutationsList) {
      // Use traditional 'for loops' for IE 11
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          console.log("A child node has been added or removed.");
        } else if (mutation.type === "attributes") {
          const targetDom = document.getElementById(binding.arg)
          let targetDomStyle =
          window.getComputedStyle(targetDom,null).getPropertyValue("overflow")
          if(targetDomStyle !== 'hidden'){
            targetDom.style.overflow = 'hidden'
            el.scrollTop = 0
          }else{
            targetDom.style.overflow = 'auto'
          }
          console.log(targetDomStyle)
          // http://menvscode.com/detail/5d5e3c44df885f4704d85f76
          // 测试下不同分支问题
        }
      }
    };
    // 创建一个观察器实例并传入回调函数
    var observer = new MutationObserver(callback);
    // 以上述配置开始观察目标节点
    observer.observe(el, config);
  }
})


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
