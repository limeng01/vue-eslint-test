/* eslint-disable */
<template>
  <div>
    <div>我是vuex页面</div>
    <div @click="changVuexNum">add Num ++</div>
    <div @click="getList">获取列表</div>
    <div v-for="(item, index) in list" :key="index">{{ item.title }}</div>
    <Son />
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import Son from "./pason";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("modulesA", ["count", "list"]), // 多模块取值
    ...mapState("modulesB", ["name", "like"]), // 多模块取多个值

    ...mapGetters("modulesA", ["getStateCount"]),
  },
  components: {
    Son,
  },
  watch: {
    // getStateCount() {
    //   console.log("改变了");
    // },
  },
  created() {
    console.log(this.list, "created");
    console.log(this.like, "created");

    console.log(this.getStateCount, "created");
    // this.getData();
  },
  destroyed() {},
  mounted() {
    // this.getData();
  },
  methods: {
    ...mapActions("modulesA", ["getData"]),
    ...mapMutations("modulesA", ["ADD_COUNT_NUM"]),
    changVuexNum() {
      //   方法二
      this.ADD_COUNT_NUM({ extraCountNum: 10 });
      console.log(this.count, "methods");
      //   方法一
      //   this.$store.commit("modulesA/ADD_COUNT_NUM", {
      //     extraCountNum: 10,
      //   });
    },
    getList() {
      this.getData().then(() => {
        console.log(this.list);
      });
    },
  },
};
</script>
<style lang="less"></style>
