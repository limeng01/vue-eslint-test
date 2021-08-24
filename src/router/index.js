import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: () =>
      import(/* webpackChunkName: "scroll" */ "../views/landingPage"),
  },
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
  // 自己写的滚动加载数据
  {
    path: "/magnifyingGlass",
    name: "MagnifyingGlass",
    component: () => import(/* webpackChunkName: "scroll" */ "../views/放大镜"),
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
  // 测试$bus事件总线
  {
    path: "/bus",
    name: "Bus",
    component: () =>
      import(
        /* webpackChunkName: "scrollelement" */ "../views/bus事件总线测试"
      ),
  },
  {
    path: "/bus",
    name: "Scrollelement",
    component: () =>
      import(
        /* webpackChunkName: "scrollelement" */ "../views/antdesign_scroll"
      ),
  },
  // 测试日历js文件
  {
    path: "/rili",
    name: "Rili",
    component: () =>
      import(/* webpackChunkName: "scrollelement" */ "../views/日历"),
  },
  // swiper
  {
    path: "/swiper",
    name: "Swiper",
    component: () =>
      import(/* webpackChunkName: "scrollelement" */ "../views/swiper.vue"),
  },
  // 测试vuex
  {
    path: "/vuex",
    name: "VuexTest",
    component: () =>
      import(/* webpackChunkName: "scrollelement" */ "../views/vuex.vue"),
  },
  // 测试滚动
  {
    path: "/scroolTest",
    name: "scroolTest",
    component: () =>
      import(/* webpackChunkName: "scrollelement" */ "../views/测试滚动.vue"),
  },
  // 打印pdf
  {
    path: "/PDF",
    name: "PDF",
    component: () =>
      import(
        /* webpackChunkName: "scrollelement" */ "../views/打印PDF/index.vue"
      ),
  },
  // ElementUI测试，这里存放着Element所有的组件测试
  {
    path: "/elementUi",
    name: "ElementUi",
    component: () =>
      import(
        /* webpackChunkName: "scrollelement" */ "../views/elementUi测试.vue"
      ),
  },
  // 父组件给子组件传值测试
  {
    path: "/toSon",
    name: "toSon",
    component: () =>
      import(
        /* webpackChunkName: "scrollelement" */ "../views/父组件给我传值.vue"
      ),
  },
  // vue的extends测试
  {
    path: "/extend",
    name: "extend",
    component: () =>
      import(
        /* webpackChunkName: "scrollelement" */ "../views/vue的extend.vue"
      ),
  },
  // table 表格展示
  {
    path: "/table",
    name: "Table",
    component: () =>
      import(/* webpackChunkName: "scrollelement" */ "../views/table.vue"),
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
    component: () =>
      import(/* webpackChunkName: "fater" */ "../views/viewBindX"),
  },
  // 使用intro.js的使用
  {
    path: "/intro",
    name: "Intro",
    component: () => import(/* webpackChunkName: "intro" */ "../views/intro"),
  },
  // Element Ui - 手风琴
  {
    path: "/collapse",
    name: "collapse",
    component: () =>
      import(/* webpackChunkName: "intro" */ "../views/element/Collapse"),
  },
  // 阿里云分片上传
  {
    path: "/uploadALI",
    name: "uploadALI",
    component: () =>
      import(/* webpackChunkName: "intro" */ "../views/uploadALI"),
  },
  // 测试加入购物车动画
  {
    path: "/animation",
    name: "animation",
    component: () =>
      import(/* webpackChunkName: "intro" */ "../views/animation"),
  },
  // 测试自定义指令使用
  {
    path: "/custom",
    name: "custom",
    component: () =>
      import(/* webpackChunkName: "intro" */ "../views/自定义指令"),
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
        path: "pageA",
        name: "PageA",
        component: () =>
          import(/* webpackChunkName: "pageA" */ "../views/disCrebtin/pageA"),
      },
      {
        path: "pageB",
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
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
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
