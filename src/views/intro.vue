/* eslint-disable */
<template>
  <div id="app">
    <!-- <div data-step="1" data-intro="这里是步骤1!"></div>
    <div data-step="2" data-intro="这里是步骤2!"></div>
    <div data-step="3" data-intro="这里是步骤3!"></div> -->
    <div class="s1" id="one" @click="log">
      这里是第一步
    </div>
    <div class="s2" id="two">
      这里是第二步
    </div>
    <!-- <div class="s3">这里是第三步</div> -->
  </div>
</template>
<script>
import introJs from "intro.js";

export default {
  data() {
    return {};
  },
  computed: {},
  components: {},
  watch: {},
  created() {},
  destroyed() {},
  mounted() {
    this.guide();
  },

  methods: {
    log(e) {
      console.log(e.target.id);
    },
    //访问引导页
    guide() {
      let template = `
        <img src='https://zino-common.oss-cn-beijing.aliyuncs.com/resource/prod/AOaqltFIPUWXZqmZNoSwdQ4QO8GhUdQa.jpg' style='width:240px;height:240px;' id='firstStep'/>
     `;
      let t2 = `<img style='width:240px;height:240px;' src='https://zino-common.oss-cn-beijing.aliyuncs.com/resource/test/wQu9KWN4CGYkvAKNcfaR8q8eVo47ueOU.png'/>`;
      let data = [
        {
          element: "#one",
          intro: template,
          position: "right",
        },
        {
          element: "#two",
          intro: t2,
          position: "right",
        },
      ];
      // introjs-nextbutton
      introJs()
        .setOptions({
          exitOnOverlayClick: false,
          showStepNumbers: false /* 是否显示说明的数据步骤*/,
          disableInteraction: false /* 是否禁止与元素的相互关联 */,
          showBullets: false /* 是否使用点点点显示进度 */,
          steps: data,
          // prevLabel: "上一步",
          // nextLabel: "下一步",
          // skipLabel: "跳过",
          // doneLabel: "结束",
        })
        .oncomplete(function() {
          //点击跳过按钮后执行的事件
        })
        .onexit(function() {
          //点击结束按钮后， 执行的事件
        })
        .start();
      this.$nextTick(() => {
        document.getElementById("firstStep").onclick = () => {
          // 手动触发【下一步按钮】
          document.getElementsByClassName("introjs-nextbutton")[0].click();
        };
      });
    },
  },
};
</script>
<style lang="less">
.s1 {
  width: 300px;
  height: 300px;
  position: fixed;
  border: 1px solid;
  top: 0;
  left: 0;
}
.s2 {
  width: 300px;
  height: 300px;
  position: fixed;
  border: 1px solid red;
  top: 400px;
  left: 200px;
}
.s3 {
  width: 300px;
  height: 300px;
  position: fixed;
  border: 1px solid green;
  top: 700px;
  left: 700px;
}
// 小箭头
.introjs-arrow {
  display: none !important;
}
// 给整个大背景 加一个透明色
.introjs-tooltip {
  background-color: transparent;
  box-shadow: none;
}
// 跳过按钮隐藏
.introjs-skipbutton {
  display: none;
}
.introjs-tooltip-header {
  display: none;
}
.introjs-tooltipbuttons {
  display: none;
}
</style>
