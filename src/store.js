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
    editTodoItem(state, index) {
      const editedTodo = prompt(
        "변경할 내용을 입력하시오.",
        state.todoItems[index].item
      );
      if (editedTodo !== "") {
        localStorage.removeItem(state.todoItems[index].item);
        const obj = {
          item: editedTodo,
          completed: false,
        };
        localStorage.setItem(editedTodo, JSON.stringify(obj));
        state.todoItems[index].item = editedTodo;
      } else {
        alert("내용은 입력하세요");
      }
      // TODO: prompt에서 취소를 눌렀을 경우
    },
    removeTodoItem(state, index) {
      if (confirm("해당 todo를 삭제하시겠습니까?")) {
        localStorage.removeItem(state.todoItems[index].item);
        state.todoItems.splice(index, 1);
      }
    },
    toggleCompleteItem(state, index) {
      const completedTodo = JSON.parse(
        localStorage.getItem(state.todoItems[index].item)
      );
      completedTodo.completed = !completedTodo.completed;
      localStorage.setItem(completedTodo.item, JSON.stringify(completedTodo));
      // this.$emit("toggleCompleted", { data, index });
      if (state.todoItems[index].completed) {
        state.todoItems[index].completed = false;
      } else {
        state.todoItems[index].completed = true;
      }
    },
  },
});

export default store;
