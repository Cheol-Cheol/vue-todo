<template>
  <ul>
    <li v-for="(todoItem, index) in todoItems" :key="index" class="row shadow">
      <span
        @click="toggleComplete(todoItem, index)"
        :class="{ completed: todoItem.completed }"
        class="col-1"
        ><i class="check fas fa-check-square"></i
      ></span>
      <span class="col-9 li-text">{{ todoItem.item }}</span>
      <span @click="editTodo(todoItem.item, index)" class="col-1"
        ><i class="fas fa-edit"></i
      ></span>
      <span @click="removeTodo(todoItem.item, index)" class="col-1"
        ><i class="fas fa-trash-alt"></i
      ></span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    todoItems: Array,
  },
  methods: {
    editTodo(data, index) {
      const editedTodo = prompt("변경할 내용을 입력하시오.", data);
      if (editedTodo !== "") {
        localStorage.removeItem(data);
        this.$emit("editOneTodo", { editedTodo, index });
      } else {
        alert("내용은 입력하세요");
        this.editTodo(data, index);
      }
    },
    removeTodo(data, index) {
      localStorage.removeItem(data);
      this.$emit("removeOneTodo", { data, index });
    },
    toggleComplete(data, index) {
      const completedTodo = JSON.parse(localStorage.getItem(data.item));
      completedTodo.completed = !completedTodo.completed;
      localStorage.setItem(completedTodo.item, JSON.stringify(completedTodo));
      this.$emit("toggleCompleted", { data, index });
    },
  },
};
</script>

<style scoped>
ul {
  overflow: auto;
  height: 420px;
}
ul::-webkit-scrollbar {
  background-color: #584e8b;
  width: 2px;
}
ul::-webkit-scrollbar-thumb {
  background-color: #82b440;
}
li {
  list-style: none;
  width: 90%;
  margin: 15px;
  font-size: 20px;
  padding: 5px 0;
  border-radius: 8px;
  background-color: grey;
}
.li-text {
  padding-left: 50px;
}
.fa-edit:hover {
  color: #584e8b;
}
.fa-trash-alt:hover {
  color: rgb(237, 108, 108);
}
.completed {
  color: dodgerblue;
}
</style>
