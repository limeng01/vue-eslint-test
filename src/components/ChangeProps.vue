<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <div @click="changeSmth">退出</div>
  </div>
</template>

<script>
export default {
  name: "He",
  props: {
    msg: {
      type: String()
    }
  },
  created() {},
  mounted() {},
  data() {
    return {};
  },
  methods: {
    changeSmth() {
      this.$emit("update:msg", "再见");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
