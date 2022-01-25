<template>
  <div class="todo-container shadow">
    <input type="text" placeholder="할 일을 입력하시오." />

    <List />
  </div>
</template>

<script>
import List from "./List.vue";

export default {
  name: "TodoContainer",
  components: {
    List,
  },
};
</script>

<style scoped>
.todo-container {
  border-radius: 15px;
  margin: 0 auto;
  width: 600px;
  height: 550px;
  margin-bottom: 40px;
}
input {
  margin: 15px;
  width: 80%;
  padding: 5px;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  outline: none;
  background-color: #eee;
  text-align: center;
}
</style>
