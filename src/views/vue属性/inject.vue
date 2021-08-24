<template>
  <div>
    inject 注入
    <Vmodel />
  </div>
</template>

<script>
import Vmodel from "./vue响应式.vue";
export default {
  data() {
    return {
      show: true,
      userName: "用户姓名",
    };
  },
  components: { Vmodel },
  provide: function() {
    return {
      getMap: "我是爸爸",
    };
  },
  created() {
    // console.log("created");
  },

  mounted() {},
  computed: {},
  watch: {},
  methods: {},
};
</script>
<style></style>
