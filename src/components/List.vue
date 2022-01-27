<template>
  <ul>
    <li v-for="(todoItem, index) in todoItems" :key="index" class="row shadow">
      <span class="col-1"><i class="check fas fa-check-square"></i></span>
      <span class="col-9 li-text">{{ todoItem.item }}</span>
      <span @click="editTodo(todoItem.item, index)" class="col-1"
        ><i class="fas fa-edit"></i
      ></span>
      <span class="col-1"><i class="fas fa-trash-alt"></i></span>
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
      // console.log(data, index);
      localStorage.removeItem(data);
      const editedTodo = prompt("변경할 내용을 입력하시오.", data);
      this.$emit("editOneTodo", { editedTodo, index });
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
</style>
