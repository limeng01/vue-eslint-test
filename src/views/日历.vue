/* eslint-disable */
<template>
  <div class="app-wrapper">
    <div
      class="item"
      v-for="(item, idx) in data"
      :key="idx"
      @click="handleClickDate(item)"
    >
      {{ item.date.split("-")[2] }}
    </div>
    <div class="test" id="test">test</div>
    <button @click="changeDivSty">改变div颜色</button>
  </div>
</template>
<script>
import { getDates, getViewOfSevenDateList, add } from "../utils/rili";
export default {
  data() {
    return {
      data: getDates().targetMonthDays,
    };
  },
  computed: {},
  components: {},
  watch: {},
  created() {},
  destroyed() {},
  mounted() {
    console.log(getDates());
    add(this);
  },
  methods: {
    handleClickDate(e) {
      console.log(getViewOfSevenDateList(this.data, e.date));
    },
    changeDivSty() {
      document.getElementById("test").classList.toggle("red");
      document.getElementById("test").style.width = "3rem";
    },
  },
};
</script>
<style lang="less">
.app-wrapper {
  display: flex;
}
.item {
  width: 30px;
  height: 30px;
  border: 1px solid;
}
.test {
  width: 1rem;
  height: 1rem;
  background-color: red;
}
.red {
  background-color: blue;
}
</style>
