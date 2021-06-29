/* eslint-disable */
<template>
  <div class="app-wrapper">
    $bus测试
    <button @click="getMessage">接收信息</button>
    <div>{{ name }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "我是个🍉",
    };
  },
  props: {},
  watch: {},
  mounted() {
    this.$EventBus.$on("sendMessage", e => {
      console.log(e);
      this.name = e;
    });
  },
  methods: {
    getMessage() {
      console.log("||");
      this.$EventBus.$on("sendMessage", e => {
        console.log(e);
      });
    },
  },
  destroyed() {
    this.$EventBus.$off("sendMessage");
  },
};
</script>
<style lang="less"></style>
