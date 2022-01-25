<template>
  <div class="fixed">25일</div>
  <div class="container">
    <TodoHeader />
    <TodoContainer />
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoContainer from "./components/TodoContainer.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoContainer,
    TodoFooter,
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
