<template>
  <nav class="d-flex justify-content-around">
    <span class="active">할 일 목록</span>
    <span>완료된 목록</span>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
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
