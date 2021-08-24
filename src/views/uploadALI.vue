<template>
  <div>
    <div>上传阿里云分片</div>
    <input type="file" @change="handleUploadFiles" />
    <button @click="getUserToken">获取userToke</button>
  </div>
</template>

<script>
import { getOSStoken } from "../request/api";
const OSS = require("ali-oss");
export default {
  data() {
    return {
      fileData: {},
    };
  },
  mounted() {},
  methods: {
    handleUploadFiles(e) {
      console.log(e.target.files, "?");
      this.fileData = e.target.files[0];
    },
    getUserToken() {
      getOSStoken().then(res => {
        console.log(res);
        let { accessKeyId, accessKeySecret, securityToken } = res.data;
        let client = new OSS({
          // region以杭州为例（oss-cn-hangzhou），其他region按实际情况填写。
          region: "oss-cn-beijing",
          secure: true,
          // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录RAM控制台创建RAM账号。
          accessKeyId,
          accessKeySecret,
          stsToken: securityToken,
          bucket: "zino-common",
        });
        let path = this.getNum();
        client.multipartUpload(path + ".jpg", this.fileData).then(results => {
          console.log(results);
        });
      });
    },
    onMultipartUploadProgress(progress, checkpoint) {
      console.log(`${checkpoint.file.name} 上传进度 ${progress}`);
    },
    getNum() {
      let chars = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      let nums = "";
      for (let i = 0; i < 32; i++) {
        let id = parseInt(Math.random() * 61);
        nums += chars[id];
      }
      return nums;
    },
  },
};
</script>
