import { createStore } from "vuex";
import { Cart } from "@/mock/mock";

const productCartModule = {
  namespaced: true,
  state() {
    return {
      data: Cart,
    };
  },
  mutations: {
    setCart: (state, payload) => {
      console.log(state, payload);
      state.data?.push(payload);
    },
    deleteCart: (state, payload) => {
      console.log(state, payload);
      // state.data?.push(payload);
      state.data?.splice(state.data?.indexOf(payload), 1);
    },
  },
  actions: {
    setCart: (context, payload) => {
      // commit call mutation
      context.commit("setCart", payload);
    },
    deleteCart: (context, payload) => {
      // commit call mutation
      context.commit("deleteCart", payload);
    },
  },
  getters: {
    getCart: (state) => {
      return state;
    },
  },
};
export default createStore({
  modules: {
    productCart: productCartModule,
  },
});
