<template>
  <div>
    响应式
    {{ this.getMap }}
    <button @click="click">点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      userName: "用户姓名",
    };
  },
  inject: ["getMap"],
  created() {
    // console.log("created");
  },
  mounted() {
    console.log(this.getMap, "mounted");
  },
  computed: {
    newName() {
      //   console.log("computed");
      return (this.userName += "你好");
    },
  },
  watch: {},
  methods: {
    click() {
      this.getMap = "修改值";
    },
  },
};
</script>
<style></style>
