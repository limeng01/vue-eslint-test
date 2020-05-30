<template>
  <div>
    <div
      class="home"
      v-for="item in list"
      :key="item.id"
      :style="[{ backgroundColor: item.isSelect === true ? 'red' : '' }]"
      @click="$emit('colorChangeToFather', item.id)"
    >
      /* eslint-disable */
      {{ item.id }}
    </div>
    <div class="pr"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    list: {
      type: Array
    }
  },
  data() {
    return {
      styleObj: {
        backgroundColor: "red",
        border: "2px solid green"
      }
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style>
.home {
  width: 200px;
  /* height: 100px; */
  border: 1px solid red;
}
</style>
