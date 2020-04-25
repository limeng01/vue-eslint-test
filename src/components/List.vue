<template>
  <div>
    <div
      v-for="item in newList"
      :key="item.age"
      @click="handleClickItem(item.name)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "jack", age: 14 },
        { name: "lili", age: 18 },
        { name: "hanmeimei", age: 20 },
        { name: "likai", age: 23 }
      ]
    };
  },
  computed: {
    newList() {
      return this.list.filter(item => item.age > 18);
    }
  },
  methods: {
    handleClickItem(e) {
      console.log(e);
      e === "likai" ? console.log("yes") : console.log("no");
    }
  }
};
</script>
