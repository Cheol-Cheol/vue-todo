<template>
  <ul>
    <li
      v-for="(todoItem, index) in completedItems"
      :key="index"
      :class="{ completed: todoItem.completed }"
      class="row shadow"
    >
      <span class="col-9 li-text">{{ todoItem.item }}</span>

      <span @click="removeTodo(todoItem.item, index)" class="col-1"
        ><i class="fas fa-trash-alt"></i
      ></span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CompletedList",
  props: {
    completedItems: Array,
  },
  methods: {
    removeTodo(data, index) {
      if (confirm("해당 todo를 삭제하시겠습니까?")) {
        localStorage.removeItem(data);
        this.$emit("removeOneTodo", { data, index });
      }
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
  background-color: #82b440;
}
</style>
