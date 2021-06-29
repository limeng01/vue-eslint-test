<template>
  <div id="app">
    <div class="container">
      <div v-show="$route.path === '/' || $route.meta.showLeftSide">
        <span
          v-for="(item, index) in routeList"
          :key="index"
          @click="nav(index)"
          >{{ item.name }}</span
        >
        <button @click="run">run</button>
      </div>

      <!-- <base-component-a /> -->
      <keep-alive>
        <router-view v-if="$route.meta.keepalive">
          <!-- 所有路径匹配到的视图组件都会被缓存！ -->
        </router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepalive">
        <!-- 所有路径匹配到的视图组件都会被缓存！ -->
      </router-view>
    </div>
  </div>
</template>
<script>
// import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { mapState, mapMutations } from "vuex";
import ListSHow from "./views/listShow";
import { say } from "@/utils/test.js";
import Son from "./views/父组件给我传值";
import Vue from "vue";
export default {
  data() {
    return {
      age: 13,
      message: "你好",
    };
  },
  computed: {
    ...mapState("routes", ["routeList"]), // 多模块取值
  },
  components: { Son, ListSHow },
  watch: {},
  created() {
    let fn = say.bind(this);
    fn();
  },
  destroyed() {},
  mounted() {
    // console.log(process.env, "全局状态");
    document.documentElement.style.fontSize = `${document.documentElement
      .clientWidth / 17.92}px`;
    window.addEventListener("resize", () => {
      document.documentElement.style.fontSize = `${document.documentElement
        .clientWidth / 17.92}px`;
    });

    // 监听页面返回
    window.addEventListener(
      "popstate",
      () => {
        this.POP_ROUTE();
        // console.log(this.routeList);
      },
      false,
    );
    // 事件监听
    function Subject() {
      this.observerList = [];
      this.add = cb => this.observerList.push(cb);
      this.notify = () => this.observerList.forEach(item => item());
    }
    Vue.prototype.subs = new Subject();
    setTimeout(() => {
      Vue.prototype.subs.notify();
    }, 5000);
  },

  methods: {
    ...mapMutations("routes", ["CHANGE_ROUTE", "JIANSHAO_ROUTE", "POP_ROUTE"]),
    mountedHooks() {
      console.log("我是父组件的mountedHook", this);
    },
    nav(idx) {
      if (idx == this.routeList.length - 1) return;
      this.JIANSHAO_ROUTE(idx + 1);
      if (idx == 0) {
        // console.log(this.$vnode.componentInstance, "我被激活了");
        this.$router.push({
          path: "/",
        });
      } else {
        this.$router.push({
          path: "/keepAlive-first",
        });
      }
    },
    run() {
      this.$router.push({
        path: "/magnifyingGlass",
      });
    },
  },
};
</script>
<style lang="less">
@import url("~@/assets/css/public.less");

#app {
  // height: 2000px;
}
.conti {
  position: relative;
  width: 42px;
  height: 42px;
}
.half {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: yellow;
  margin: 0 auto;
  line-height: 40px;
  text-align: center;
  z-index: 2;
  position: relative;
}
.addborder {
  position: absolute;
  width: 26px;
  height: 42px;
  border-radius: 0 100px 100px 0px;
  background-color: red;
  right: -0.4px;
  z-index: 1;
  top: -1px;
}
// .half::after {
//   content: " ";
//   width: 102%;
//   height: 102%;
//   position: absolute;
//   background-color: red;
//   border-radius: 50%;
//   z-index: 1;
// }
img[lazy="loading"] {
  opacity: 0; /*初始不透明度为0，图片都看不见*/
  // transition: opacity 1s linear; /*--重点--定义一个关于透明度的transition*/
}

img[lazy="loaded"] {
  opacity: 1; /*初始不透明度为0，图片都看不见*/
  transition: opacity 0.2s linear; /*--重点--定义一个关于透明度的transition*/
}

// img[class="iii"] {
//   opacity: 1 !important; /*初始不透明度为0，图片都看不见*/
//   transition: opacity 2s linear !important; /*--重点--定义一个关于透明度的transition*/
//   transform: scale(2);
// }
</style>
