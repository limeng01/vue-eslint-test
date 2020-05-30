import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: "这时A页面",
      isLogin: true,
      keepAlive: true
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About")
  },
  {
    path: "/disCrebtion",
    name: "DisCrebtion",
    component: () =>
      import(/* webpackChunkName: "disCrebtion" */ "../views/disCrebtion"),
    children: [
      {
        path: "/disCrebtion/pageA",
        name: "PageA",
        component: () =>
          import(/* webpackChunkName: "pageA" */ "../views/disCrebtin/pageA")
      },
      {
        path: "/disCrebtion/pageB",
        name: "PageB",
        component: () =>
          import(/* webpackChunkName: "pageB" */ "../views/disCrebtin/pageB")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
