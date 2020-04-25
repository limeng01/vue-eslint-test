<template>
  <div>
    <!-- <div>{{ count }}</div> -->
    <button @click="handleChangeCount">click</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    // 加了命名空间
    ...mapActions({
      call: "ma/getMutation"
    }),
    // 没有加命名空间
    // ...mapActions(["getMutation"]),
    handleChangeCount() {
      // 加了命名空间
      this.call();
      // 没有加命名空间
      // this.getMutation();
    }
  }
};
</script>
