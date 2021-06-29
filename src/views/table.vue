<template>
  <div class="table">
    <table width="600">
      <tr v-for="(weekItem, idx) in oData.weekImport" :key="idx">
        <td :rowspan="oData.weekImport.length" v-if="weekItem.tit">
          {{ weekItem.tit }}
        </td>
        <td colspan="6" class="text-align-left padding">
          <textarea
            :value="weekItem.info"
            @keydown="textAreaKeyDown"
          ></textarea>
        </td>
      </tr>
      <tbody>
        <tr>
          <td v-for="(oWeekTit, idx) in oData.noon.weekTit" :key="idx">
            {{ oWeekTit }}
          </td>
        </tr>
        <tr v-for="(oDetail, idx) in oData.noon.detail" :key="idx">
          <td
            v-for="(oClass, oidx) in oDetail.class"
            :key="oidx"
            :rowspan="idx === 0 && oidx === 0 ? oData.noon.detail.length : 1"
          >
            <div v-for="(oItem, oIdex) in oClass.name" :key="oIdex">
              <input
                :value="oItem"
                @input="checkInput($event, idx, oidx, oIdex)"
              />
            </div>
          </td>
        </tr>
      </tbody>
      <tr>
        <td colspan="7">午睡</td>
      </tr>
      <tbody>
        <tr v-for="(oDetail, idx) in oData.afternoon.detail" :key="idx">
          <td
            v-for="(oClass, oidx) in oDetail.class"
            :key="oidx"
            :rowspan="idx === 0 && oidx === 0 ? oData.noon.detail.length : 1"
          >
            <div v-for="(oItem, oIdex) in oClass.name" :key="oIdex">
              {{ oItem }}
            </div>
          </td>
        </tr>
      </tbody>
      <!-- :key='cIdx' 单独写会报错 -->
      <tbody v-for="(oWeekItem, cIdx) in oData.another" :key="oWeekItem + cIdx">
        <tr v-for="(weekItem, widx) in oWeekItem.list" :key="widx">
          <td :rowspan="oWeekItem.list.length" v-if="weekItem.tit">
            {{ weekItem.tit }}
          </td>
          <td colspan="6" class="text-align-left padding">
            <textarea
              :value="weekItem.info"
              @keydown="textAreaKeyDown"
            ></textarea>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oData: {
        weekImport: [
          {
            tit: "周重点",
            info: "教育教学：按计划完成五大领域的课程",
          },
          {
            info: "生活常规：熟悉一日生活的不同要求，完成相应的活动",
          },
          {
            info: "体育保健：吃完自己爱吃的食物",
          },
        ],
        noon: {
          weekTit: [
            "时间",
            "内容",
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
          ],
          detail: [
            {
              class: [
                { name: ["上午"] },
                { name: ["魅力学习"] },
                { name: ["早操", "双人舞"] },
                { name: ["早操", "双人舞"] },
                { name: ["喝啤酒", "双人舞"] },
                { name: ["早操"] },
                { name: ["早操"] },
              ],
            },
            {
              class: [
                { name: ["晨间活动"] },
                { name: ["早操", "双人舞"] },
                { name: ["早操", "双人舞"] },
                { name: ["喝啤酒", "双人舞"] },
                { name: ["早操"] },
                { name: ["早操"] },
              ],
            },
            {
              class: [
                { name: ["晨间活动"] },
                { name: ["早操", "双人舞"] },
                { name: ["早操", "双人舞"] },
                { name: ["喝啤酒", "双人舞"] },
                { name: ["早操"] },
                { name: ["早操"] },
              ],
            },
            {
              class: [
                { name: ["晨间活动"] },
                { name: ["早操", "双人舞"] },
                { name: ["早操", "双人舞"] },
                { name: ["喝啤酒", "双人舞"] },
                { name: ["早操"] },
                { name: ["早操"] },
              ],
            },
            {
              class: [
                { name: ["晨间活动"] },
                { name: ["早操", "双人舞"] },
                { name: ["早操", "双人舞"] },
                { name: ["喝啤酒", "双人舞"] },
                { name: ["早操"] },
                { name: ["早操"] },
              ],
            },
          ],
        },
        afternoon: {
          detail: [
            {
              class: [
                { name: ["下午"] },
                { name: ["晨间活动"] },
                { name: ["早操", "双人舞"] },
                { name: ["早操", "双人舞"] },
                { name: ["喝啤酒", "双人舞"] },
                { name: ["早操"] },
                { name: ["早操"] },
              ],
            },
            {
              class: [
                { name: ["晨间活动"] },
                { name: ["早操", "双人舞"] },
                { name: ["早操", "双人舞"] },
                { name: ["喝啤酒", "双人舞"] },
                { name: ["早操"] },
                { name: ["早操"] },
              ],
            },
          ],
        },
        another: [
          {
            list: [
              {
                tit: "家园共育",
                info: "1.请家长鞋带上宝宝一起出去春游吧",
              },
              {
                info: "2.向宝贝介绍食物的各种使用方式",
              },
              {
                info: "3.多关注孩子在园内的生活",
              },
            ],
          },
          {
            list: [
              {
                tit: "环境创设",
                info: "1.请宝贝用自己喜欢的颜色，将自己的食物染上色吧",
              },
              {
                info: "2.吃饭的时候，给宝贝拍照，将宝宝的照片发到家园共育吧",
              },
            ],
          },
        ],
      },
    };
  },
  components: {},
  methods: {
    //   检查input输入框没有文字后，div消失
    checkInput(e, i, idx, iidx) {
      console.log(e.target.value);
      console.log(i);
      console.log(idx);
      console.log(iidx);
      this.oData.noon.detail[i].class[idx].name[iidx] = e.target.value;
      console.log(this.oData.noon);
      //   if (e.target.value === "") e.target.parentNode.style.display = "none";
    },
    textAreaKeyDown(e) {
      //   console.log(e.code === 'Enter');
    },
  },
};
</script>
<style lang="less">
.table {
  background-color: whitesmoke;
  margin: 0 auto;
}
table {
  margin: 0 auto;
  border-collapse: collapse;
}
table tr td {
  border: 1px solid red;
}
tr td {
  text-align: center;
  width: 100px;
}
.text-align-left {
  text-align: left;
}
textarea {
  border: none;
  resize: none;
  background-color: whitesmoke;
  width: 100%;
  display: flex;
  align-items: center;
}
input {
  border: none;
  text-align: center;
  background-color: whitesmoke;
}
.padding {
  padding-top: 20px;
  padding-bottom: 10px;
}
</style>
