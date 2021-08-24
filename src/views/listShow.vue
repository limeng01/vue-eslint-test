<template>
  <div>
    <div v-for="(item, idx) in forMatList" :key="idx" class="item">
      {{ item.id }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
    };
  },
  components: {},
  computed: {
    forMatList() {
      return this.list.filter(item => item.id > 1);
    },
  },
  watch: {},
};
</script>
<style>
.item {
  width: 400px;
  height: 100px;
  margin-bottom: 20px;
  background-color: yellow;
}
.d1 {
  width: 200px;
  height: 200px;
  background-color: red;
  margin-right: 0.2rem;
  display: inline-block;
}
.d2 {
  width: 200px;
  height: 200px;
  background-color: yellow;
  margin-right: 40px;
}
</style>
