<template>
  <ul>
    <li class="row shadow">
      <span class="col-1"><i class="check fas fa-check-square"></i></span>
      <span class="col-9">공부하기</span>
      <span class="col-1"><i class="fas fa-edit"></i></span>
      <span class="col-1"><i class="fas fa-trash-alt"></i></span>
    </li>
    <li class="row shadow">
      <span class="col-1"><i class="check fas fa-check-square"></i></span>
      <span class="col-9">공부하기</span>
      <span class="col-1"><i class="fas fa-edit"></i></span>
      <span class="col-1"><i class="fas fa-trash-alt"></i></span>
    </li>
    <li class="row shadow">
      <span class="col-1"><i class="check fas fa-check-square"></i></span>
      <span class="col-9">공부하기</span>
      <span class="col-1"><i class="fas fa-edit"></i></span>
      <span class="col-1"><i class="fas fa-trash-alt"></i></span>
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
  height: 400px;
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
</style>
