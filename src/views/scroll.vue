<template>
  <div class="conti">
    <div v-for="(item,index) in dataList" :key="index" class="list" @click="nav">{{item.title}}</div>
  </div>
</template>

<script>
import { materialData } from "../common/api";
import { reachBottom } from "../common/util";
export default {
  name: "Home",

  data() {
    return {
      show: true,
      dataList: [],
      offset: 0,
      scrollTop: 0
    };
  },
  computed: {},
  mounted() {
    let el = document.querySelector(".conti");

    this.requestMaData();
    reachBottom(el, this.requestMaData, this);
  },
  destroyed() {},
  methods: {
    requestMaData(offset = this.offset || 0) {
      let data = {
        name: "性格养成",
        num: 10,
        tags: [],
        type: "2",
        offset
      };
      materialData(data).then(({ data: { list } }) => {
        if (!list.length) return;
        this.offset = this.offset += 1;
        /**
         * 这个必须加，配合common类中的滚动工具函数，
         * 暂时没有想到解决方法，可以在函数内部处理这个问题，所以只能先拿出来
         * 问题原因就是(工具函数无法调用参数中的函数中的函数)
         * 2020-7-24解决，加入了防抖函数，防止重复触发
         */
        this.times = false;
        //
        this.dataList = [...this.dataList, ...list];
        sessionStorage.setItem("dataList", JSON.stringify(this.dataList));
      });
    },
    nav() {
      //   console.log(x);
      this.$router.push("/login");
    }
  }
};
</script>
<style>
body {
  width: 100%;
}
.conti {
  height: 700px;
  overflow-y: scroll;
  /* padding-left: 100px; */
}
.list {
  /* width: 400px; */
  height: 100px;
  background-color: red;
  margin-bottom: 30px;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
}
</style>
