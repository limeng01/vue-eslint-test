<template>
  <div class="conti" ref="conti" id="list">
    <div id="mark1">1</div>
    <div>我是{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "c1",
  data() {
    return {};
  },
  props: {
    msg: {
      type: String,
    },
  },
  components: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less"></style>
