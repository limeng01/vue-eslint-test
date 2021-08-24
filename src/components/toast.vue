<template>
  <div class="app-wrapper" :style="[{ opacity: show ? 1 : 0 }]" id="toast">
    <div class="toast">{{ text }}</div>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="less" scoped>
.toast {
  width: 200px;
  height: 100px;
  background: blueviolet;
  color: white;
  border-radius: 15px;
  line-height: 100px;
  text-align: center;
  font-size: 20px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>
