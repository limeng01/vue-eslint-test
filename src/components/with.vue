<template>
  <div class="hello">
    <h1>测试 with语法</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "With",
  data() {
    return {
      id: 1,
      age: 23,
    };
  },
  props: {
    msg: {
      type: String,
    },
  },
  watch: {
    msg: {
      handler(val) {
        console.log(val, "子组件的值监听到了变化");
      },
      deep: true,
    },
  },
  created() {},
  mounted() {
    // 比如这里请求完了一个接口 返回了 data: {dId: 22,dAge:999}
    // let data = { dId: 22, dAge: 999 };
    // with (this) {
    //   console.log(id);
    //   console.log(age);
    // }
    // console.log(this.id, "->id");
    // console.log(this.age, "->age");
  },

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
