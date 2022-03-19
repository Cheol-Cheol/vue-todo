import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      todoItems: [],
    };
  },
  mutations: {
    getLocalStorageData(state) {
      if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
            state.todoItems.push(
              JSON.parse(localStorage.getItem(localStorage.key(i)))
            );
          }
        }
      }
    },
  },
});

export default store;
