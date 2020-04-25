<template>
  <div>
    <input v-model="inputValue" ref="my" />
    <span @click="handleAddClick">add</span>
    <div v-for="(item, index) in valueList" :key="index">
      {{ item }}/<span @click="handleDeleteClick(index)">delete</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
      valueList: []
    };
  },
  methods: {
    handleAddClick() {
      this.valueList.push(this.inputValue);
      this.inputValue = "";
    },
    handleDeleteClick(e) {
      this.valueList.splice(e, 1);
    },
    handleGetFoucs() {
      this.$refs.my.focus();
    }
  },
  mounted() {}
};
</script>
