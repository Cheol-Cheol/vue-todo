<template>
  <div class="todo-container shadow container">
    <input
      v-model="$store.state.newTodoItem"
      @keyup.enter="$store.commit('addTodoItem')"
      type="text"
      placeholder="할 일을
    입력하시오."
    />

    <List />

    <!-- NavBar -->
    <nav class="d-flex justify-content-around">
      <span @click="$router.push('/')" class="active">할 일 목록</span>
      <span @click="$router.push('/completed')">완료된 목록</span>
    </nav>

    <!-- 버튼 -->
    <span @click="$store.commit('addTodoItem')" class="addBtn shadow">
      <i class="fas fa-plus"></i>
    </span>

    <Modal v-if="showModal == true" @closeModal="showModal = $event" />
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";
import List from "./List.vue";

export default {
  name: "TodoContainer",
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    Modal,
    List,
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
