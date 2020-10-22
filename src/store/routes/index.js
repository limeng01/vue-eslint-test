import { CHANGE_ROUTE,JIANSHAO_ROUTE,POP_ROUTE } from "../mutaion-types";
export default {
    namespaced: true,
    state: {
     routeList:[{name:'首页'}]
    },
    mutations: {
        [CHANGE_ROUTE](state, e) {
            state.routeList.push(e)
          },
          [JIANSHAO_ROUTE](state, e) {
            state.routeList.splice(e)
          },
          [POP_ROUTE](state) {
            if(state.routeList.length === 1) return
            state.routeList.pop()
          },
    },
    actions: {

    },
    getters: {

    },
  };
