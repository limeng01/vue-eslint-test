/* eslint-disable */
<template>
  <div class="app-wrapper">
    <div class="conti">
      <div v-for="(item, idx) in arr" :key="idx" class="item">
        <div :id="item.id" :data-age="item.age">
          {{ item.name }}-{{ item.id }}
        </div>
      </div>
    </div>
    <button>{{ target }}</button>
  </div>
</template>
<script>
var cc = [
  { age: 1, name: "jack" },
  { age: 1, name: "jack" },
  { age: 1, name: "jack" },
  { age: 1, name: "jack" },
  { age: 1, name: "jack" },
  { age: 1, name: "jack" },
  { age: 1, name: "jack" },
  { age: 1, name: "jack" },
  { age: 1, name: "jack" },
  { age: 1, name: "jack" },
  { age: 1, name: "jack" },
  { age: 1, name: "jack" },
  { age: 1, name: "jack" },
  { age: 2, name: "time" },
  { age: 2, name: "time" },
  { age: 2, name: "time" },
  { age: 2, name: "time" },
  { age: 2, name: "time" },
  { age: 2, name: "time" },
  { age: 2, name: "time" },
  { age: 2, name: "time" },
  { age: 2, name: "time" },
  { age: 2, name: "time" },
  { age: 2, name: "time" },
  { age: 2, name: "time" },
  { age: 3, name: "lili" },
  { age: 3, name: "lili" },
  { age: 3, name: "lili" },
  { age: 3, name: "lili" },
  { age: 3, name: "lili" },
  { age: 3, name: "lili" },
  { age: 3, name: "lili" },
  { age: 3, name: "lili" },
  { age: 3, name: "lili" },
  { age: 3, name: "lili" },
  { age: 3, name: "lili" },
];

export default {
  data() {
    return {
      arr: [],
      target: "",
    };
  },
  mounted() {
    cc.forEach((item, idx) => (item.id = idx));
    this.arr = cc;
    this.$nextTick(() => {
      const io = new IntersectionObserver(e => {
        console.log(e, "|");
        if (e[0].intersectionRatio > 0) {
          //   console.log(e[0]);
          this.target = e[0].target.dataset.age;
        }
      });
      this.arr.forEach((item, idx) => {
        io.observe(document.getElementById(idx));
      });
    });
  },
  methods: {},
};
</script>
<style lang="less">
.conti {
  width: 400px;
  height: 400px;
  border: 2px solid;
  display: flex;
  overflow: scroll;
  padding-top: 200px;
}
.item {
  margin-right: 20px;
  height: 40px;
  border: 2px solid red;
}

.nav {
  position: sticky;
  left: 0;
  position: -webkit-sticky;
  background-color: red;
}
</style>
