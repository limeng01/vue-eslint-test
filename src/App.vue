/* eslint-disable */
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
        <el-Button @click="run">跳</el-Button>
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
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("routes", ["routeList"]), // 多模块取值
  },
  components: {},
  watch: {},
  created() {
    // this.$love("我爱你");
    // this.$letMeSay();
  },
  destroyed() {},
  mounted() {
    console.log(process.env, "全局状态");
    document.documentElement.style.fontSize = `${document.documentElement
      .clientWidth / 12.8}px`;
    window.addEventListener("resize", () => {
      document.documentElement.style.fontSize = `${document.documentElement
        .clientWidth / 12.8}px`;
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
  },

  methods: {
    ...mapMutations("routes", ["CHANGE_ROUTE", "JIANSHAO_ROUTE", "POP_ROUTE"]),
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
      this.CHANGE_ROUTE({ name: "列表页面" });
      this.$router.push({
        path: "/ViewBindX",
      });
    },
  },
};
</script>
<style lang="less">
@import url("~@/assets/css/public.less");

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
