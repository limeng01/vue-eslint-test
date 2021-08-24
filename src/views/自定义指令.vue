/* eslint-disable */
<template>
  <div>
    <div
      class="toast"
      v-show="showToast"
      v-clickOutSide="{ showToast, ctx: this }"
    >
      这是一段测试这是一段测试这是一这是一段测试这是一段测试这是一段测试这是一段测试段测试这是一段测试这是一段测试这是一段测试这是一段测试
    </div>
    <button @click="showToast = true" id="button">展示弹窗</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showToast: false,
    };
  },
  computed: {},
  components: {},
  watch: {},
  created() {},
  destroyed() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less">
.toast {
  width: 200px;
  height: 200px;
  background-color: blueviolet;
  color: gainsboro;
}
</style>
