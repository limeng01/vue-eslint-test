<template>
  <div class="about">
    <h1>页面B</h1>
    <button @click="run">run</button>
  </div>
</template>
<script>
export default {
  methods: {
    run() {
      let m = Number(Math.random().toFixed(1)) * 10,
        name;
      m > 5 ? (name = "PageA") : (name = "PageB");
      this.$router.push({
        name: name
      });
    }
  }
};
</script>
