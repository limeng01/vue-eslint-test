<template>
  <div class="app-wrapper">
    <el-select v-model="result" @change="changeOptVal">
      <el-option
        v-for="item in data"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { value: "a", label: "我是A" },
        { value: "b", label: "我是B" },
        { value: "c", label: "我是C" },
      ],
      result: "c",
    };
  },
  methods: {
    changeOptVal() {
      console.log(this.result);
    },
  },
};
</script>
<style lang="less" scoped>
.app-wrapper {
  width: 800px;
  height: 500px;
  border: 2px solid;
  .form-tit {
    width: 100%;
    height: 100px;
    display: flex;
    border: 1px solid red;
    > div {
      width: 200px;
      line-height: 100px;
      text-align: center;
      font-weight: 700;
      border-right: 1px solid yellow;
    }
  }
  .form-item {
    display: flex;

    .form-item-default {
      width: 200px;
      border: 1px solid;
    }
  }
  .bottom-line {
    width: 100%;
    height: 4px;
    background-color: red;
  }
}
</style>
