import { ADD_COUNT_NUM, GET_LIST_DATA } from "../mutaion-types";
import { getListData } from "../../request/api";

export default {
  namespaced: true,
  state: {
    count: 1,
    list: [],
    age: 24,
  },
  // 只支持同步事务，不支持异步如timeout，axios，fetch，requet
  // mutations用来修改state中的值，例如组件中的事件修改data中的值
  mutations: {
    [ADD_COUNT_NUM](state, e) {
      state.count += e.extraCountNum;
    },
    [GET_LIST_DATA](state, e) {
      state.list = e;
    },
  },
  actions: {
    async getData({ commit, rootState }) {
      console.log(rootState, "可以拿到根节点的数据");
      const { data } = await getListData();
      return new Promise(relsove => {
        commit("GET_LIST_DATA", data);
        relsove();
      });
    },
  },
  getters: {
    getStateCount: (state, x, rootState) => {
      console.log(rootState, "可以拿到根节点的数据");

      return state.count * 3;
    },
  },
};
