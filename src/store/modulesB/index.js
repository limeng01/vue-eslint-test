export default {
  namespaced: true,
  state: {
    name: "我是B模块",
    like: "我喜欢编程",
  },
  mutations: {},
  actions: {
    // 根节点,可访问根节点的state
    // getMutation({ state, rootState }) {
    //   console.log(state);
    //   console.log(rootState);
    // },
  },
  getters: {
    // // 根节点,可访问根节点的state
    // getCount(state, getters, rootState) {
    //   console.log(rootState);
    // },
  },
};
