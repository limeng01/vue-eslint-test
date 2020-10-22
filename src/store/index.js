import Vue from "vue";
import Vuex from "vuex";
import modulesA from "./modulesA/index";
import modulesB from "./modulesB/index";
import routes from "./routes/index";

Vue.use(Vuex);
const modules = {
  modulesA,
  modulesB,
  routes
};
export default new Vuex.Store({
  state: {
    name: "丽丽",
  },
  mutations: {},
  actions: {},
  getters: {},
  modules,
});
