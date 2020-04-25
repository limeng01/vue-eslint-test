<template>
  <div>
    <a-select
      :defaultValue="userList[0].name"
      style="width: 120px"
      @change="handleChange"
    >
      <a-select-option
        v-for="item in computedUserList"
        :value="item.name"
        :disabled="item.disabled"
        :key="item.age"
        >{{ item.name }}</a-select-option
      >
    </a-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [
        { name: "jack", age: 18 },
        { name: "luci", age: 20 },
        { name: "gigi", age: 12 }
      ]
    };
  },
  computed: {
    computedUserList() {
      this.userList.forEach(item => {
        item.age <= 12 ? (item.disabled = true) : (item.disabled = false);
      });
      return this.userList;
    }
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    }
  }
};
</script>
