<template>
  <div class="hello">
    <!-- 默认插槽 -->
    <slot></slot>
    <!--具名插槽  -->
    <slot name="slotA"></slot>
    {{msg}}
    <!--具名插槽  -->
    <slot name="slotB"></slot>
    <!-- 作用域插槽 -->
    <slot name="slotC" :data="data" :tt="sonFnClick"></slot>
  </div>
</template>

<script>
export default {
  name: "He",
  props: {},
  data() {
    return {
      msg: "我是子页面",
      data: {
        id: 1,
        name: "jack"
      }
    };
  },
  created() {
    console.log("我是sconde页面");
  },
  mounted() {
    console.log("我是sconde页面");
  },
  methods: {
    sonFnClick() {
      alert(123);
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
