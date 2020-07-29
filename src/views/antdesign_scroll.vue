<template>
  <div
    class="conti"
    v-infinite-scroll="getPageData"
    infinite-scroll-disabled="true"
    infinite-scroll-distance="20"
  >
    <div v-for="(item, index) in dataList" :key="index" class="list">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// first install npm package
// cnpm install vue-infinite-scroll --save
import { materialData } from "../common/api";
export default {
  data() {
    return {
      dataList: [],
      offset: 0,
    };
  },
  mounted() {},
  methods: {
    getPageData(offset = this.offset || 0) {
      let data = {
        name: "性格养成",
        num: 10,
        tags: [],
        type: "2",
        offset,
      };
      materialData(data).then(({ data: { list } }) => {
        console.log(123);

        if (!list.length) return;
        this.offset = this.offset += 1;
        this.dataList = [...this.dataList, ...list];
      });
    },
  },
};
</script>
<style lang="less" scoped>
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
