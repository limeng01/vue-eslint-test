<template>
  <div class="conti" ref="conti" id="list">
    <Inputson v-bind="$attrs" :name="name" />
    <div>{{ name }}</div>
  </div>
</template>

<script>
import Inputson from "./Inputson";
export default {
  name: "Input",
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
    },
  },
  components: {
    Inputson,
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less"></style>
