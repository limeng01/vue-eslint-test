<template>
  <div class="conti">
    <VueDragResize
      :isActive="true"
      :preventActiveBehavior="true"
      :isDraggable="false"
      v-on:resizing="resize"
      v-on:dragging="resize"
      id="app-wrapper"
      :w="400"
      :h="400"
      style="z-index:3"
    >
      <h3>Hello World!</h3>
      <p>{{ top }} х {{ left }}</p>
      <p>{{ width }} х {{ height }}</p>
      <canvas id="drawing-board"></canvas>
    </VueDragResize>
    <img
      src="https://zino-common.oss-cn-beijing.aliyuncs.com/resource/prod/594iZVCUp8WqdUXoP8gvaSaOG9a2LvoL.jpeg?key=&x-oss-process=image/resize,p_40"
      alt=""
    />
  </div>
</template>

<script>
import VueDragResize from "vue-drag-resize";

export default {
  name: "app",

  components: {
    VueDragResize,
  },
  mounted() {
    setTimeout(() => {
      let canvas = document.getElementById("drawing-board");
      let ctx = canvas.getContext("2d");
      let pageWidth = document.getElementById("app-wrapper").clientWidth;
      let pageHeight = document.getElementById("app-wrapper").clientHeight;
      canvas.width = pageWidth;
      canvas.height = pageHeight;
      // var imgObj = new Image();
      //   imgObj.src = "http://images.cnblogs.com/cnblogs_com/html5test/359114/r_test.jpg";
      //   imgObj.onload = function(){
      //           var ctx = cvs.getContext('2d');
      //           ctx.drawImage(this, 0, 0);//this即是imgObj,保持图片的原始大小：470*480
      //           //ctx.drawImage(this, 0, 0,1024,768);//改变图片的大小到1024*768
      //       }
      // return;
      let painting = false;
      let lastPoint = { x: undefined, y: undefined };
      ctx.strokeStyle = "red";
      //鼠标按下事件
      canvas.onmousedown = function(e) {
        painting = true;
        let x = e.clientX;
        let y = e.clientY;
        lastPoint = { x: x, y: y };
        drawCircle(x, y, 0);
      };

      //鼠标移动事件
      canvas.onmousemove = function(e) {
        if (painting) {
          let x = e.clientX;
          let y = e.clientY;
          let newPoint = { x: x, y: y };
          drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
          lastPoint = newPoint;
        }
      };

      //鼠标松开事件
      canvas.onmouseup = function() {
        painting = false;
      };

      // 画点函数
      function drawCircle(x, y, radius) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 划线函数
      function drawLine(x1, y1, x2, y2) {
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
      }
    }, 0);
  },
  data() {
    return {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
    };
  },

  methods: {
    resize(newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    },
  },
};
</script>
<style>
.conti {
  position: relative;
  width: 400px;
  height: 400px;
}
canvas {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
img {
  width: 200px;
  height: 200px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
}
</style>
