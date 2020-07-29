import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const modulesA = {
  namespaced: true,
  state: {
    count: 1,
  },
  mutations: {
    change(state) {
      state.count + 1;
    },
  },
  actions: {
    // 根节点,可访问根节点的state
    getMutation({ state, rootState }) {
      console.log(state);
      console.log(rootState);
    },
  },
  getters: {
    // 根节点,可访问根节点的state
    getCount(state, getters, rootState) {
      console.log(rootState);
    },
  },
};

export default new Vuex.Store({
  state: {
    count: 100,
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    ma: modulesA,
  },
});
