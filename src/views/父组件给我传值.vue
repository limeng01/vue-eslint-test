/* eslint-disable */
<template>
  <div class="app-wrapper">
    子组件
  </div>
</template>
<script>
export default {
  data() {
    return {
      dddd: 23,
    };
  },
  props: {
    obj: {
      type: Object,
    },
  },
  watch: {},
  mounted() {
    console.log("我是子组件");
  },
  methods: {},
};
</script>
<style lang="less"></style>
