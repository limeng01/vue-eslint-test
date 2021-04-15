import { getOSStoken } from "@/request/api";
const OSS = require("ali-oss");

//   suffixName(文件后缀名)
//  fileData 文件流(支持file对象 Blob对象 及buffer)
// ossFolder文件储存的路径
const uploadSource = function(suffixName, fileData, ossFolder) {
  return new Promise((resolve, rej) => {
    getOSStoken().then(({ data }) => {
      const { accessKeyId, accessKeySecret, securityToken } = data;

      let client = new OSS({
        // region以杭州为例（oss-cn-hangzhou），其他region按实际情况填写。
        region: "oss-cn-beijing",
        secure: true,
        // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录RAM控制台创建RAM账号。
        accessKeyId,
        accessKeySecret,
        stsToken: securityToken,
        bucket: "zino-common"
      });
      let fileDatalength = fileData.length
      let uploadFileIndex = 0
      let responseStatuList = []
      async function putObject() {
        try {
          // object-key可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
          let result = await client.put(
            `${ossFolder}${getNum()}${fileData[uploadFileIndex].suffixName}`,
            fileData[uploadFileIndex]
          );
          responseStatuList.push(result)
          uploadFileIndex++
          if(uploadFileIndex > fileDatalength - 1){
            resolve(responseStatuList);
          }else{
            putObject()
          }

        } catch (e) {
          console.log(e);
          rej(e);
        }
      }
      putObject();
    });
  });
};

function getNum() {
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
    "z"
  ];
  let nums = "";
  for (let i = 0; i < 32; i++) {
    let id = parseInt(Math.random() * 61);
    nums += chars[id];
  }
  return nums;
}
export default uploadSource;
