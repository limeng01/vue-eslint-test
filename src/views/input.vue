<template>
  <!--  -->
  <div>
    <div>《第一页》</div>
    <input
      type="file"
      name="addFile"
      accept=".png,.jpg,.mp3,.wav,.mp4"
      @change="handleUploadFiles"
      multiple
      value="打开文件"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    handleUploadFiles(e) {
      console.log(e);
    },
  },
};
</script>
<style>
.d1 {
  width: 200px;
  height: 200px;
  background-color: red;
  margin-right: 0.2rem;
  display: inline-block;
}
.d2 {
  width: 200px;
  height: 200px;
  background-color: yellow;
  margin-right: 40px;
}
</style>
