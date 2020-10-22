/* eslint-disable */
<template>
  <div>
    <div>我是a页面的子页面</div>
    <div>子页面的{{ count }}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("modulesA", ["count"]), // 多模块取值
  },
  components: {},
  watch: {},
  created() {},
  destroyed() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less">
.list {
  float: left;
  .item {
    margin-bottom: 40px;
  }
}
.rightSide {
  width: 400px;
  height: 400px;
  float: left;
  border: 1px solid red;
  overflow-y: scroll;
}
.infoItem {
  font-size: 30px;
  line-height: 30px;
  border: 1px solid black;
}
</style>
