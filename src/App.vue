<template>
  <div class="fixed">{{ date() }}일</div>
  <div class="container">
    <TodoHeader :todoItems="todoItems" />
    <TodoContainer :todoItems="todoItems" />
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
  },
  created() {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
        this.todoItems.push(localStorage.key(i));
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
