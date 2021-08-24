<template>
  <div class="conti" ref="conti" id="list">
    <div id="mark1">1</div>
    <div>我是{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "c1",
  data() {
    return {};
  },
  props: {
    msg: {
      type: String,
      default: "一个帅哥", // 当调用该子组件当父组件不传递msg值的时候，子组件会取默认值
    },
  },
  components: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    console.log(this.msg, "????");
  },
};
</script>
<style lang="less"></style>
