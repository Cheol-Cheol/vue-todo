<template>
  <div class="fixed">{{ date() }}일</div>
  <div class="container">
    <TodoHeader :todoItems="todoItems" />
    <TodoContainer
      :todoItems="todoItems"
      @addOneTodo="addOneTodo"
      @editOneTodo="editOneTodo"
      @removeOneTodo="removeOneTodo"
      @toggleOneTodo="toggleOneTodo"
    />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoContainer from "./components/TodoContainer.vue";

export default {
  name: "App",
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    date() {
      const now = new Date();
      return now.getDate();
    },
    addOneTodo(newTodo) {
      const obj = {
        item: newTodo,
        completed: false,
      };
      localStorage.setItem(newTodo, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    editOneTodo(data) {
      // console.log(data);
      const obj = {
        item: data.editedTodo,
        completed: false,
      };
      console.log(obj);
      localStorage.setItem(data.editedTodo, JSON.stringify(obj));
      this.todoItems[data.index].item = data.editedTodo;
    },
    removeOneTodo(data) {
      // console.log(data);
      this.todoItems.splice(data.index, 1);
    },
    toggleOneTodo(data) {
      // console.log(data);
      this.todoItems[data.index].completed =
        !this.todoItems[data.index].completed;
    },
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
  components: {
    TodoHeader,
    TodoContainer,
  },
};
</script>

<style>
body {
  background-color: #333333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #eee;
}
.container {
  text-align: center;
  /* background-color: white; */
}
.fixed {
  position: fixed;
  right: 15px;
  top: 10px;
  font-size: 20px;
}
</style>
