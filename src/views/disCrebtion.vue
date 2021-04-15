<template>
  <div>
    <div>{{ msg }}</div>
    <router-link to="/disCrebtion/pageA">去pageA</router-link>
    <router-link to="/disCrebtion/pageB">去pageB</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {},
  props: {
    msg: {
      type: String,
    },
  },
  methods: {},
};
</script>
