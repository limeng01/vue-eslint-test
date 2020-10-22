<template>
  <!--  -->
  <div>
    <div>我是输入框</div>
    <!-- <input name="addFile" placeholder="请输入姓名" v-focus /> -->
    <div class="conti" id="conti">
      <el-button class="btn" @click="showToast = !showToast"
        >展示弹窗</el-button
      >
      <div class="outer-item" v-for="item in list" :key="item">
        {{ item }}
      </div>
      <div class="inner-conti" v-show="showToast" v-blockDom:conti>
        {{ str }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4],
      str:
        "生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机生成3-32位随机",
      showToast: false,
    };
  },
  components: {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style type="less">
.conti {
  width: 300px;
  height: 500px;
  border: 1px solid;
  overflow: auto;
  position: relative;
}
.outer-item {
  width: 200px;
  height: 200px;
  background-color: red;
  margin-bottom: 20px;
}
.inner-conti {
  position: absolute;
  width: 250px;
  height: 250px;
  border: 2px blue solid;
  top: 0;
  overflow: auto;
}
.btn {
  background-color: yellow !important;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
