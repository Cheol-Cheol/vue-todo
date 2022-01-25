<template>
  <div class="todo-container shadow container">
    <input type="text" placeholder="할 일을 입력하시오." />
    <List />
    <NavBar />
  </div>
</template>

<script>
import List from "./List.vue";
import NavBar from "./NavBar.vue";

export default {
  name: "TodoContainer",
  components: {
    List,
    NavBar,
  },
};
</script>

<style scoped>
.todo-container {
  border-radius: 15px;
  width: 600px;
  height: 550px;
}
input {
  margin: 15px;
  width: 80%;
  padding: 5px 30px;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  outline: none;
  background-color: #eee;
}
.container {
  padding: 0;
}
</style>
