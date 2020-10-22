<template>
  <div class="home">
    <h1>页面A{{ id }}</h1>
    <router-link to="/about">跳转</router-link>
    <div>{{ obj.name }}</div>
    <div class="test" data-id="100">{{ obj.id }}</div>
    <div @click="handleChangeStyle">addClass</div>
    <div @click="handleRemoveStyle">removeClass</div>
    <div @click="handleGetData">getData</div>
    <div @click="handleJoinParams">joinUrlParams</div>
    <div @click="handleRequest">test request</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { addClass, removeClass, getData, joinUrlParams } from "@/common/util";
import { test } from "@/request/api";
export default {
  data() {
    return {
      id: this.$route.params.id,
      obj: {
        name: "jack",
        // id: ""
      },
    };
  },
  mounted() {
    this.$set(this.obj, "id", 2);
  },
  watch: {},
  methods: {
    handleChangeStyle() {
      addClass(document.querySelector(".test"), "on");
    },
    handleRemoveStyle() {
      removeClass(document.querySelector(".test"), "on");
    },
    handleGetData() {
      let data = getData(document.querySelector(".test"), "id");
      console.log(data);
    },
    handleJoinParams() {
      let url = joinUrlParams("www.baidu.com?age=12", { id: 2, name: "jack" });
      console.log(url);
    },
    async handleRequest() {
      let data = await test();
      console.log(data);
    },
  },
};
</script>
<style lang="less" scoped>
.on {
  color: red;
}
</style>
