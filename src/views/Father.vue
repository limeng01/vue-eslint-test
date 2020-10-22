<template>
  <!--  -->
  <div>
    <div>父组件</div>
    <component :is="componentid" :msg="msg"></component>
    <el-button @click="change">改变组件</el-button>
  </div>
</template>

<script>
import Cone from "../components/cone";
import Ctwo from "../components/ctwo";
export default {
  data() {
    return {
      componentid: "Ctwo",
      msg: "Ctwo",
    };
  },
  components: {
    Cone,
    Ctwo,
  },

  watch: {
    componentid(newVal) {
      this.msg = newVal;
    },
  },
  mounted() {
    let dom = document.getElementById("mark2");
    console.log(dom);
    dom.innerHTML = "我是父组件修改过的";
  },
  methods: {
    change() {
      this.componentid === "Ctwo"
        ? (this.componentid = "Cone")
        : (this.componentid = "Ctwo");
    },
  },
};
</script>
