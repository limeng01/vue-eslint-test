<template>
  <div class="conti" ref="conti">
    <h1 @click="click" ref="item">我是list页面1</h1>
    <h1>我是list页面2</h1>
    <h1>我是list页面3</h1>
    <h1>我是list页面4</h1>
    <h1>我是list页面5</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      scroll: 0
    };
  },
  computed: {},
  methods: {
    click() {
      this.$refs.item.style.color = "green";
    }
  },
  created() {},
  mounted() {
    this.$refs.conti.addEventListener(
      "scroll",
      () => {
        this.scroll = this.$refs.conti.scrollTop;
      },
      false
    );
  },
  activated() {
    console.log("我是缓存的组件");
    this.$refs.conti.scrollTo({
      top: this.scroll,
      left: 0
      // behavior: "smooth"
    });
  },
  deactivated() {
    console.log("组件隐藏");
  }
};
</script>
<style lang="less">
.conti {
  width: 200px;
  height: 100px;
  background-color: red;
  overflow-y: scroll;
}
</style>
