<template>
  <!--  -->
  <div>
    <div>登陆页面</div>
    <button @click="handleRunToPageA">登陆</button>
    <div>{{ num }}</div>
    <button @click="handleClick">click</button>
    <div>子组件内部：{{ num * 10 }}</div>
  </div>
</template>
>
<script>
const routerLeaveFn = (...arg) => {
  console.log(arg, "this");
  // console.log(arg);
  const [to, from, next, { context, routeName, say }] = arg;
  console.log(to, "to");
  console.log(from, "from");
  console.log(routeName, "routeName");
  console.log(context.id, "上下文");

  next();
  say();
};

export default {
  props: ["num"],
  data() {
    return {
      id: 1,
    };
  },
  // beforeRouteLeave: routerLeaveFn.bind(this, {
  //   routeName: ["lala", "jack"],
  //   callBack: say,
  // }),
  beforeRouteLeave(to, from, next) {
    routerLeaveFn(to, from, next, {
      context: this,
      routeName: "你好骚",
      say: this.say,
    });
  },
  // beforeRouteLeave(){},

  mounted() {},
  methods: {
    handleClick() {
      this.$emit("son");
    },
    say() {
      console.log("我是个垃圾");
    },
    handleRunToPageA() {
      this.$router.push({
        name: "Home",
        params: {
          id: 1,
        },
      });
    },
  },
};
</script>
