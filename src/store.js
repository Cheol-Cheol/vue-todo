import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      todoItems: [],
      newTodoItem: "",
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
    addTodoItem(state) {
      if (state.newTodoItem !== "") {
        const obj = {
          item: state.newTodoItem,
          completed: false,
        };
        localStorage.setItem(state.newTodoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
        state.newTodoItem = "";
      } else {
        this.showModal = true;
      }
    },
  },
});

export default store;
