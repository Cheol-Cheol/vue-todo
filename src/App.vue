<template>
  <div class="fixed">{{ date() }}일</div>
  <div class="container">
    <TodoHeader />
    <TodoContainer />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoContainer from "./components/TodoContainer.vue";

export default {
  name: "App",
  methods: {
    date() {
      const now = new Date();
      return now.getDate();
    },
  },
  created() {
    // 렌더링 시 로컬 스토리지의 데이터 가져오기
    this.$store.commit("getLocalStorageData");
  },
  components: {
    TodoHeader,
    TodoContainer,
  },
};
</script>

<style>
body {
  background-color: #333333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #eee;
}
.container {
  text-align: center;
  /* background-color: white; */
}
.fixed {
  position: fixed;
  right: 15px;
  top: 10px;
  font-size: 20px;
}
</style>
