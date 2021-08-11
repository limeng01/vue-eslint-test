<template>
  <div id="pdf">
    <div class="app-wrapper" id="target">
      <div class="p1" id="p1">
        <div>
          戒骄戒躁
        </div>
        <img
          src="https://oss.eduxdesign.com/imagelib/28d4a54e4b3f6f316deb4275ebb14a81.png?key=&x-oss-process=image/format,webp/resize,l_1920,h_1080"
          alt=""
        />
      </div>
      <div class="p2" id="p2">
        <!-- 第二部分 -->
        <img
          src="https://oss.eduxdesign.com/imagelib/4d32773978aca0cfd7131e41b2a7b11f.png?key=&x-oss-process=image/format,webp/resize,l_1920,h_1080"
          alt=""
        />
      </div>
    </div>
    <button @click="handleExport">导出</button>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleExport() {
      var doc = new jsPDF("", "pt", "a4");
      html2canvas(document.querySelector(`#p1`), {
        useCORS: true, //看情况选用上面还是下面的，
      }).then(canvas => {
        let contentWidth = canvas.width;
        let contentHeight = canvas.height;
        document.body.appendChild(canvas);
        let pageData = canvas.toDataURL("image/jpeg", 1.0);
        doc.addImage(pageData, "jpeg", 0, 100, contentWidth, contentHeight);
        html2canvas(document.querySelector(`#p2`), {
          useCORS: true, //看情况选用上面还是下面的，
        }).then(canvas => {
          doc.addPage();
          let contentWidth = canvas.width;
          let contentHeight = canvas.height;
          document.body.appendChild(canvas);
          let pageData = canvas.toDataURL("image/jpeg", 1.0);
          doc.addImage(pageData, "jpeg", 0, 100, contentWidth, contentHeight);
          doc.save("Test.pdf");
        });
      });
    },
  },
  components: {},
};
</script>
<style lang="less">
#pdf {
  .app-wrapper {
    width: 700px;
    // height: 100vh;

    color: white;

    font-weight: 600;
    .p1 {
      font-size: 30px;
      text-align: center;
      border: 2px solid black;
      height: 50vh;
      background-color: gold;
      & img {
        width: auto;
        height: 200px;
      }
    }

    .p2 {
      font-size: 30px;
      text-align: center;
      border: 2px solid black;
      height: 50vh;
      background-color: red;
      & img {
        width: auto;
        height: 200px;
      }
    }
  }
  button {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
