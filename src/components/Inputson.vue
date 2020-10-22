<template>
  <div class="conti" ref="conti" id="list">
    <el-input v-model="ino" :placeholder="placeholder"></el-input>
    <div>我是孙子组件->>>{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "Inputson",
  data() {
    return {
      ino: "",
    };
  },
  props: {
    placeholder: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less"></style>
