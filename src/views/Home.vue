<template>
  <div class="home">
    <h1>页面A{{ id }}</h1>
    <router-link to="/about">跳转</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>
