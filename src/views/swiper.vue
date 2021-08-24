<template>
  <div class="app-wrapper">
    <swiper class="swiper" :options="swiperOptions">
      <swiper-slide class="s1">
        <img
          src="https://zino-common.oss-cn-beijing.aliyuncs.com/resource/prod/p170g5o6mUvukF6fvDpT6BNFSGGT0KyA.jpeg?key=&x-oss-process=image/resize,p_40"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="s2">
        <img
          src="https://zino-common.oss-cn-beijing.aliyuncs.com/resource/prod/8rBbClA2ru1Co1I2TXYGdNRHcDNW350W.jpeg?key=&x-oss-process=image/resize,p_40"
          alt=""
        />
      </swiper-slide>
      <!-- <swiper-slide class="s1">
        <img
          src="https://zino-common.oss-cn-beijing.aliyuncs.com/resource/prod/p170g5o6mUvukF6fvDpT6BNFSGGT0KyA.jpeg?key=&x-oss-process=image/resize,p_40"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="s2">
        <img
          src="https://zino-common.oss-cn-beijing.aliyuncs.com/resource/prod/8rBbClA2ru1Co1I2TXYGdNRHcDNW350W.jpeg?key=&x-oss-process=image/resize,p_40"
          alt=""
        />
      </swiper-slide> -->
    </swiper>
    <div class="swiper-button-next"></div>
    //下一项
    <div class="swiper-button-prev"></div>
    //上一项

    <!-- <div class="text">这里是文字</div> -->
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      swiperOptions: {
        // autoplay: { delay: 2000 },
        // effect: "fade",
        // autoplay: {
        //   disableOnInteraction: false, //用户操作后是否禁止自动循环
        //   delay: 300, //自自动循环时间
        // }, //可选选项，自动滑动
        // loop: true, //循环切换
        slidesPerView: 2,
        spaceBetween: 30,
        // grabCursor: true,
        // speed: 1000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
        navigation: {
          nextEl: ".swiper-button-next", //前进按钮的css选择器或HTML元素。
          prevEl: ".swiper-button-prev", //后退按钮的css选择器或HTML元素。
          hideOnClick: true, //点击slide时显示/隐藏按钮
          disabledClass: "my-button-disabled", //前进后退按钮不可用时的类名。
          hiddenClass: "my-button-hidden", //按钮隐藏时的Class
        },
        on: {
          click(e) {
            console.log(e);
          },
        },
      },
    };
  },
  components: {},
  computed: {},
  created() {
    function Observe(name) {
      this.name = name;
      this.cb = () => console.log(`我是${name},我被触发了`);
    }
    let o1 = new Observe("第一名");
    let o2 = new Observe("第二名");
    Vue.prototype.subs.add(o1.cb);
    Vue.prototype.subs.add(o2.cb);
  },
  watch: {},
  methods: {},
};
</script>
<style lang="less" scoped>
.app-wrapper {
  position: relative;
  .swiper {
    width: 900px;
    height: 200px;

    .s1 {
      background-color: yellow;

      & img {
        width: 300px;
        height: 200px;
        margin-right: 20px;
      }
    }

    .s2 {
      background-color: green;

      & img {
        width: 300px;
        height: 200px;
        margin-right: 20px;
      }
    }
  }
  .text {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: red;
    z-index: 2;
  }
  .my-button-disabled {
    background-color: red;
  }
}
</style>
