<template>
  <!--  -->
  <div>
    <div>登陆页面</div>
    <button @click="handleRunToPageA">登陆</button>
    <div>{{ num }}</div>
    <button @click="handleClick">click</button>
    <div>子组件内部：{{ num * 10 }}</div>
  </div>
</template>
>
<script>
export default {
  props: ["num"],
  data() {
    return {};
  },
  watch: {},
  mounted() {},
  methods: {
    handleClick() {
      this.$emit("son");
    },

    handleRunToPageA() {
      this.$router.push({
        name: "Home",
        params: {
          id: 1
        }
      });
    }
  }
};
</script>
