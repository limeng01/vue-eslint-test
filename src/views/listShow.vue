<template>
  <!--  -->
  <div>
    <div>《第一页》</div>
    <div
      v-for="item in list"
      :key="item.id"
      :style="[{ color: target === item.id ? 'red' : '' }]"
      @click="navToDetail(item.id)"
    >
      {{ item.title }}
    </div>
    <!-- <router-view></router-view> -->
    <div class="d1" id="d1"></div>
    <div class="d2"></div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      list: [
        { title: "产品一", id: 0 },
        { title: "产品二", id: 1 },
        { title: "产品三", id: 2 },
      ],
      target: +this.$route.query.target || 0,
    };
  },
  components: {},
  computed: {
    ...mapState("routes", ["routeList"]), // 多模块取值
  },
  watch: {
    routeList(val, newVal) {
      console.log("我变啦val", val);
      console.log("我变啦newVal", newVal);
      console.log(this, "???");
      // this.$once("hook:beforeRouteLeave", (to, from) => {
      //   console.log(to, "to|||");
      //   console.log(from, "from|||");
      // });
    },
  },
  mounted() {
    // const dom = document.getElementById("d1");
    // console.dir(dom, "??");
    // console.log(getComputedStyle(dom).marginRight);
  },
  methods: {
    ...mapMutations("routes", ["CHANGE_ROUTE"]),
    navToDetail(e) {
      this.target = e;
      this.CHANGE_ROUTE({ name: "详情页面" });
      this.$router.push({
        path: `/pa?id=${e}`,
      });
    },
  },
  // beforeRouteLeave(to, from, next) {
  //   if (to.name === "PA") {
  //     from.meta.keepAlive = true;
  //   } else {
  //     from.meta.keepAlive = false;
  //     console.log(this.$vnode, "this");
  //     //动态清除缓存
  //     var key = String(this.$vnode.componentOptions.Ctor.cid);
  //     let { cache, keys } = this.$vnode.parent.componentInstance;
  //     // cach是一个大对象，键是一个缓存组件的key，值是缓存组件的内容
  //     // keys是一个list，保存着很多的key，并和cache中的键值对应
  //     if (cache[key]) {
  //       if (keys.length) {
  //         if (keys.indexOf(key) > -1) {
  //           keys.splice(keys.indexOf(key), 1); // 删除keys中的缓存组件的key
  //         }
  //       }
  //       delete cache[key]; // 删除cache中的key对应的组件的dom所有信息
  //     }
  //   }
  //   next();
  // },
  // activated() {
  //   console.log(this.$vnode, "我被激活了");
  // },
};
</script>
<style>
.d1 {
  width: 200px;
  height: 200px;
  background-color: red;
  margin-right: 0.2rem;
  display: inline-block;
}
.d2 {
  width: 200px;
  height: 200px;
  background-color: yellow;
  margin-right: 40px;
}
</style>
