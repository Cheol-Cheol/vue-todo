<template>
  <header>todo</header>
  <span class="todoItem-count">총 {{ $store.state.todoItems.length }}개</span>
</template>

<script>
export default {
  name: "TodoHeader",
};
</script>

<style scoped>
header {
  color: #82b440;
  font-size: 80px;
  font-weight: 800;
}
.todoItem-count {
  font-size: 20px;
  font-weight: 600;
}
</style>
