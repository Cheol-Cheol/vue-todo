<template>
  <span class="shadow">
    <i class="fas fa-plus"></i>
  </span>
</template>

<script>
export default {
  name: "TodoFooter",
};
</script>

<style scoped>
span {
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
i {
  font-size: 26px;
  vertical-align: middle;
  color: wheat;
}
</style>
