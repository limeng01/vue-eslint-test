/* eslint-disable */
<template>
  <div>
    <form>
      姓名：
      <input type="text" name="username" required />
      <br />密码：
      <input type="password" name="password" required />
      <br />
      <select name="two" required>
        <option value>请选择</option>
        <option value="1">蚂蚁部落一</option>
        <option value="2">蚂蚁部落二</option>
        <option value="3">蚂蚁部落三</option>
      </select>

      <select name="one" required>
        <option value="请选择">请选择</option>
        <option value="1">蚂蚁部落一</option>
        <option value="2">蚂蚁部落二</option>
        <option value="3">蚂蚁部落三</option>
      </select>
      <input type="submit" />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="less">
</style>
