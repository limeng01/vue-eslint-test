<template>
  <div id="app">
    <router-view to="/login"></router-view>
    <a-breadcrumb>
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">第二页</a></a-breadcrumb-item>
    </a-breadcrumb>
    <!-- <Login :num="num" @son="son" /> -->
    <div @click="handleClick">click</div>
    <TestEimt @colorChangeToFather="fromSonColorChange" :list="list"></TestEimt>
  </div>
</template>
<script>
// import Login from "./views/login";
import TestEimt from "./views/testEimt";
import utils from "./utils/fn.js";
const { debounce } = { ...utils };
// import { setTimeout, clearTimeout } from "timers";

export default {
  components: {
    // Login,
    TestEimt
  },
  data() {
    return {
      name: "test",
      num: 1,
      list: [
        { id: 0, isSelect: true },
        { id: 1, isSelect: false },
        { id: 2, isSelect: false },
        { id: 3, isSelect: false }
      ]
    };
  },
  mounted() {
    console.log("bugger11");
    window.addEventListener(
      "popstate",
      function() {
        console.log("back");
      },
      false
    );
  },
  methods: {
    son() {
      this.num++;
    },
    fromSonColorChange(e) {
      console.log(e);
      let { list } = { ...this };
      list.forEach(item => {
        item.isSelect = false;
        list[e].isSelect = true;
      });
    },
    handleClick: debounce(
      function() {
        console.log(123);
      },
      1000,
      true
    )
  }
};
</script>
<style lang="less"></style>
