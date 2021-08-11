<template>
  <div>
    <div v-if="show" id="first">{{ new Date().getTime() }}---、</div>
    <div id="second">{{ new Date().getTime() }}---</div>

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

  mounted() {},
  watch: {
    // show(newVal) {
    //   console.log(newVal, "改变");
    //   setTimeout(() => {
    //     console.log("延迟");
    //   }, 0);
    // },
  },
  methods: {
    click() {
      this.show = !this.show;
    },
    // getNum(id) {
    //   console.log(id, "获取数据");
    //   console.log(document.getElementById(id), "获取元素");
    //   return "w";
    // },
  },
};
</script>
<style></style>
