<template>
  <div>
    <h1>{{ msg }}</h1>
    <div @click="change">改变BB的内容</div>
    <div v-for="item in imgList" :key="item.id" class="conti">
      <img v-lazy="item.img_url" class="iii" lazy="loaded" />
      <!-- loading="lazy"  -->
    </div>
  </div>
</template>

<script>
import { getImgList } from "@/request/api";
export default {
  data() {
    return {
      msg: "这是BBB页面",
      imgList: [],
    };
  },
  methods: {
    change() {
      this.msg = "改变后";
    },
  },
  mounted() {
    const oData = {
      num: 20,
      offset: 0,
      special_id: "922",
      tags: "",
      type: 5,
      uid: "7aca9fbdef60efe0d2286044363168642d27dbda",
    };
    getImgList(oData).then(({ data: { list } }) => {
      this.imgList = list;
    });
  },
};
</script>
<style>
img {
  width: 200px;
  height: 200px;
  /* display: block; */
}
.conti {
  border: 2px solid red;
  width: 200px;
  height: 200px;
  display: inline-block;
}
</style>
