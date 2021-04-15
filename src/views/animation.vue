<template>
  <div class="about">
    <img
      src="https://static.699pic.com/images/activity/vipStation82-popbg.png"
      alt=""
      id="moveImg"
    />
    <div class="list-conti">
      <div v-for="(item, idx) in list" :key="idx">
        <div style="text-align:center;" @click="handleClick">
          {{ item }}{{ idx }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Dis from "./disCrebtion";
export default {
  data() {
    return {
      list: [
        "加分",
        "加分",
        "加分",
        "加分",
        "加分",
        "加分",
        "加分",
        "加分",
        "加分",
      ],
      interval: "",
    };
  },
  components: {
    Dis,
  },
  methods: {
    handleClick(e) {
      console.log(e);
      let { pageX, pageY } = e;

      this.resetImg();
      this.imgMove(pageX, pageY);
    },
    imgMove(targetLeft, targetTop) {
      let a = -16;
      let b = 10;
      let c = 3;
      let moveImg = document.getElementById("moveImg");
      moveImg.style.transition = "left 0s, top 0s";
      setTimeout(() => {
        moveImg.style.top = targetTop + "px";
        moveImg.style.left = targetLeft + "px";
        moveImg.style.width = 0 + "px";
        moveImg.style.height = 0 + "px";
        moveImg.style.transition =
          "left 1.3s linear, top 1.3s ease-in,width 1.3s linear,height 1.3s linear";
      }, 20);
    },
    resetImg() {
      let moveImg = document.getElementById("moveImg");
      moveImg.style.top = 250 + "px";
      moveImg.style.left = 150 + "px";
      moveImg.style.width = 270 + "px";
      moveImg.style.height = 270 + "px";
    },
  },
};
</script>
<style lang="less">
img {
  width: 270px;
  height: 270px;
  position: fixed;
  left: 150px;
  top: 250px;
  //   box-shadow: -16px 11px 10px 3px red;
}
.list-conti {
  width: 300px;
  height: 800px;
  border: 1px solid black;
  overflow: scroll;
  float: right;
  > div {
    width: 200px;
    height: 220px;
    background-color: red;
    margin-bottom: 40px;
    padding: 40px;
    > div {
      color: yellow;
      cursor: pointer;
    }
  }
}
</style>
