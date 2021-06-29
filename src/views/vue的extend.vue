<template>
  <div class="app-wrapper">
    <button @click="rouseToast">点击唤醒弹窗</button>
    <button @click="changToast">更改弹窗内容</button>
  </div>
</template>

<script>
import Toast from "../components/toast";
export default {
  mounted() {},
  components: { Toast },
  methods: {
    rouseToast() {
      this.$toast("你好", 2000);
    },
    changToast() {
      this.$toast("更改后的内容", 2000);
    },
  },
};
</script>

<style lang="less" scoped></style>
