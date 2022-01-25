<template>
  <div class="todo-container shadow container">
    <input
      v-model="newTodoItem"
      @keyup.enter="addTodo"
      type="text"
      placeholder="할 일을 입력하시오."
    />
    <List />
    <NavBar />

    <!-- 버튼 -->
    <span @click="addTodo" class="addBtn shadow">
      <i class="fas fa-plus"></i>
    </span>

    <Modal :showModal="showModal" @closeModal="showModal = false" />
  </div>
</template>

<script>
import List from "./List.vue";
import NavBar from "./NavBar.vue";
import Modal from "./common/Modal.vue";

export default {
  name: "TodoContainer",
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        localStorage.setItem(this.newTodoItem, this.newTodoItem);
        this.newTodoItem = "";
      } else {
        // 모달창
        this.showModal = true;
      }
    },
  },
  components: {
    List,
    NavBar,
    Modal,
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
.addBtn {
  background-color: #584e8b;
  border-radius: 25px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 83px;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  padding: 20px 0;
}
.addBtn:hover {
  background: black;
}
.addBtn i {
  font-size: 26px;
  vertical-align: middle;
  color: wheat;
}
</style>
