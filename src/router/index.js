import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: "这时A页面",
      isLogin: true,
      keepAlive: true,
    },
  },
  // 自己写的滚动加载数据
  {
    path: "/scroll",
    name: "Scroll",
    component: () => import(/* webpackChunkName: "scroll" */ "../views/scroll"),
  },
  // 用框架的滚动加载数据
  {
    path: "/scrollelement",
    name: "Scrollelement",
    component: () =>
      import(
        /* webpackChunkName: "scrollelement" */ "../views/antdesign_scroll"
      ),
  },
  // 测试vuex
  {
    path: "/vuex",
    name: "VuexTest",
    component: () =>
      import(/* webpackChunkName: "scrollelement" */ "../views/vuex.vue"),
  },
  // 测试keep-alive组件缓存
  {
    path: "/keepAlive-first",
    name: "VuexTest",
    meta: {
      keepalive: true,
      showLeftSide: false,
    },
    component: () =>
      import(/* webpackChunkName: "scrollelement" */ "../views/listShow.vue"),
    children: [
      {
        path: "/keepAlive-first/bbb",
        name: "BBB",
        meta: {
          like: "test",
          showLeftSide: true,
        },
        component: () => import(/* webpackChunkName: "pageA" */ "../views/bb"),
      },
    ],
  },
  // 测试input 读取文件
  {
    path: "/input",
    name: "Input",
    meta: {
      showLeftSide: false,
    },
    component: () => import(/* webpackChunkName: "fater" */ "../views/input"),
  },
  // vue高级 测试自定义指令
  {
    path: "/ViewBindX",
    name: "ViewBindX",
    component: () => import(/* webpackChunkName: "fater" */ "../views/viewBindX"),
  },
  // 父组件，用来承接子组件测试vue高级技巧
  {
    path: "/father",
    name: "Father",
    component: () => import(/* webpackChunkName: "fater" */ "../views/Father"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About"),
  },
  {
    path: "/disCrebtion",
    name: "DisCrebtion",
    component: () =>
      import(/* webpackChunkName: "disCrebtion" */ "../views/disCrebtion"),
    children: [
      {
        path: "/pageA",
        name: "PageA",
        component: () =>
          import(/* webpackChunkName: "pageA" */ "../views/disCrebtin/pageA"),
      },
      {
        path: "/pageB",
        name: "PageB",
        meta: {
          showLeftSide: true,
        },
        component: () =>
          import(/* webpackChunkName: "pageB" */ "../views/disCrebtin/pageB"),
      },
    ],
  },
  //
  {
    path: "/pa",
    name: "PA",
    meta: {
      needTap: true,
      keepalive: true,
    },
    component: () =>
      import(/* webpackChunkName: "disCrebtion" */ "../views/pa"),
    children: [
      {
        path: "pason",
        name: "Pason",
        component: () =>
          import(/* webpackChunkName: "pason" */ "../views/pason"),
      },
    ],
    // beforeEnter: (to, from, next) => {
    //   console.log(to, "to");
    //   console.log(from, "from");
    //   next();
    // },
  },
  {
    path: "/pb",
    name: "PB",
    meta: {
      needTap: false,
    },
    component: () =>
      import(/* webpackChunkName: "disCrebtion" */ "../views/pb"),
  },
  // { path: "*", redirect: "/home" },
];

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   console.log(to, "to");
//   console.log(from, "from");
//   next();
// });
// router.afterEach(() => {
//   console.log("跳转完毕");
// });
export default router;
