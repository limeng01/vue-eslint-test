/* eslint-disable */
<template>
  <div id="pa">
    <div>我是a页面</div>
    <div @click="handleNav">跳转到我的子页面</div>
    <el-button>我是pa--->{{ id }}</el-button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.query.id,
    };
  },
  // beforeRouteEnter(to, from, next) {
  //   window.document.title = "欢迎";
  //   console.log(to, "to1");
  //   console.log(from, "from1");
  //   next();
  // },
  // //路由修改时调用
  // beforeRouteUpdate(to, from, next) {
  //   console.log(to, "to2");
  //   console.log(from, "from2");
  //   console.log(this.name);
  //   next();
  // },
  // //   //路由离开时调用
  // beforeRouteLeave(to, from, next) {
  //   console.log(to, "to3");
  //   console.log(from, "from3");
  //   console.log(this.name);
  //   next();
  // },
  computed: {},
  components: {},
  watch: {},
  beforeRouteLeave(to, from, next) {
    console.log(this.$vnode, "this");
    if (to.name === "PA") {
      from.meta.keepAlive = true;
    } else {
      // 想法：想从自身找到父组件实例，先拿到父组件实例的id，然后再从父组件实例中找到父组件(即当前组件的爷爷实例)
      // 通过父组件的id删除父组件的id即dom信息，但是只能找到当前组件的父组件，找不到父组件的父组件，所以行不通
      // ps: 反正我是没找到..不知道别人...
      // let fatherid = this.$vnode.parent.componentOptions.Ctr.cid; // 20
      // let grandPaData = this.$vnode.parent.componentInstance.$vnode.parent;
      // from.meta.keepAlive = false;
      console.log(this.$vnode, "this");
      //动态清除缓存
      // var key = String(this.$vnode.componentOptions.Ctor.cid);
      // let { cache, keys } = this.$vnode.parent.componentInstance;
      // // cach是一个大对象，键是一个缓存组件的key，值是缓存组件的内容
      // // keys是一个list，保存着很多的key，并和cache中的键值对应
      // if (cache[key]) {
      //   if (keys.length) {
      //     if (keys.indexOf(key) > -1) {
      //       keys.splice(keys.indexOf(key), 1); // 删除keys中的缓存组件的key
      //     }
      //   }
      //   delete cache[key]; // 删除cache中的key对应的组件的dom所有信息
      // }
    }
    next();
  },
  created() {},
  destroyed() {},
  mounted() {},
  methods: {
    handleNav() {
      this.$router.push({
        path: "pa/pason",
      });
    },
  },
  activated() {
    console.log(this);
  },
};
</script>
<style lang="less">
#pa {
  .el-button {
    background-color: yellow;
  }
}
</style>
