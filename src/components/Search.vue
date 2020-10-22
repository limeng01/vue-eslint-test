<template>
  <div class="hello">
    <input v-model="searchValue" />
    <span @click="serachList.push(searchValue)">搜索</span>
    <div @click="$emit('to-father', searchValue)">添加</div>
    <div v-for="(item, index) in serachList" :key="index">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: "He",
  props: {},
  data() {
    return {
      searchValue: "",
      serachList: [],
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
input {
  width: 200px;
  height: 20px;
  border: 1px solid red;
}
</style>
