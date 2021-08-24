<template>
  <!--  -->
  <div>
    <div>《第一页》</div>
    <input
      type="file"
      name="addFile"
      accept=".png,.jpg,.mp3,.wav,.mp4,.ppt,.pptx"
      @change="handleUploadFiles"
      multiple
      value="打开文件"
    />
    <div v-for="(item, index) in showViewDataList" :key="index">
      <div>名称:{{ item.fileName }}</div>
      <input v-model="item.label" placeholder="我是标签" />
      <input v-model="item.intro" placeholder="我是简介" />
    </div>
    <el-button @click="check">看下编辑的结果</el-button>
    <el-button @click="upload">上传</el-button>
  </div>
</template>

<script>
import uploadOss from "@/common/uploadOSS";
let ossFolder = "resource/test/";
export default {
  data() {
    return {
      suffixName: "", // 后缀名
      fileDataList: "", // 用来资源上传
      showViewDataList: [], // 用来页面显示
      // 当用户删除某个素材时，两个list都删除对应选项
    };
  },
  components: {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    handleUploadFiles(e) {
      if (
        e.target.files.length > 5 ||
        this.showViewDataList.length + e.target.files.length > 5
      ) {
        alert("最多上传五个哦");
        return;
      }
      e.target.files.forEach(item => {
        item.suffixName = item.name.substring(item.name.lastIndexOf("."));
      });

      this.fileDataList = e.target.files;
      this.fileDataList.forEach(item => {
        this.showViewDataList.push({
          type: this.checkSourceType(item.type.split("/")[0]),
          fileName: item.name,
          label: "",
          intro: "",
        });
      });

      console.log(this.fileDataList, "fileDataList");
    },
    checkSourceType(keyword) {
      console.log(keyword, "?");
      let list = ["video", "audio", "", "application", "image"];
      let inx = list.findIndex(item => item === keyword);
      return inx;
    },
    upload() {
      uploadOss(this.suffixName, this.fileDataList, ossFolder).then(res => {
        console.log(res, "???/");
      });
    },
    check() {
      console.log(this.showViewDataList, "showViewDataList2");
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
