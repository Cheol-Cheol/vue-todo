<template>
  <ul>
    <li
      v-for="(todoItem, index) in $store.state.todoItems"
      :key="index"
      :class="{ completed: todoItem.completed }"
      class="row shadow"
    >
      <span @click="$store.commit('toggleCompleteItem', index)" class="col-1"
        ><i class="check fas fa-check-square"></i
      ></span>
      <span class="col-9 li-text">{{ todoItem.item }}</span>
      <span @click="$store.commit('editTodoItem', index)" class="col-1"
        ><i class="fas fa-edit"></i
      ></span>
      <span @click="$store.commit('removeTodoItem', index)" class="col-1"
        ><i class="fas fa-trash-alt"></i
      ></span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
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
  background-color: #82b440;
}
</style>
