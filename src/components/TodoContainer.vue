<template>
  <div class="todo-container shadow container">
    <input
      v-model="newTodoItem"
      @keyup.enter="addTodo"
      type="text"
      placeholder="할 일을 입력하시오."
    />

    <router-view
      :todoItems="todoItems"
      :completedItems="completedItems"
      @editOneTodo="editPassApp"
      @removeOneTodo="removePassApp"
      @toggleCompleted="togglePassApp"
    ></router-view>

    <!-- <router-link></router-link> -->
    <!-- NavBar -->
    <nav class="d-flex justify-content-around">
      <span @click="$router.push('/')" class="active">할 일 목록</span>
      <span @click="$router.push('/completed')">완료된 목록</span>
    </nav>

    <!-- 버튼 -->
    <span @click="addTodo" class="addBtn shadow">
      <i class="fas fa-plus"></i>
    </span>

    <Modal v-if="showModal == true" @closeModal="showModal = $event" />
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  name: "TodoContainer",
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  props: {
    todoItems: Array,
    completedItems: Array,
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        // 데이터의 조작은 app.vue에서만
        this.$emit("addOneTodo", this.newTodoItem);
        this.newTodoItem = "";
      } else {
        // 모달창
        this.showModal = true;
      }
    },
    editPassApp(data) {
      this.$emit("editOneTodo", data);
    },
    removePassApp(data) {
      this.$emit("removeOneTodo", data);
    },
    togglePassApp(data) {
      this.$emit("toggleOneTodo", data);
    },
  },
  components: {
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
  margin-right: 1px;
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

/* addBtn */
.addBtn {
  background-color: #584e8b;
  border-radius: 25px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 55px;
  margin-left: auto;
  margin-right: auto;
  width: 70px;
  border-radius: 50%;
  padding: 20px 0;
  cursor: pointer;
}

.addBtn i {
  font-size: 26px;
  vertical-align: middle;
  color: wheat;
}

/* NavBar */
nav {
  background: #82b440;
  height: 42px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  font-size: 20px;
  line-height: 42px;
  font-weight: 500;
  letter-spacing: 3px;
}
nav span {
  width: 50%;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
.active {
  background: #4b6726;
}
</style>
