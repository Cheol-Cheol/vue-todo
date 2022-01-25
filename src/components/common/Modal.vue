<template>
  <transition name="m">
    <div class="black-bg">
      <div class="white-bg">
        <h3 class="m-header">내용을 입력해주세요.</h3>
        <p class="m-body"></p>
        <button @click="closeModal" class="m-btn">닫기</button>
      </div>
    </div>
    <!-- <slot> -->
  </transition>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    closeModal() {
      this.$emit("closeModal", false);
    },
  },
};
</script>

<style scoped>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  right: 0;
  top: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.white-bg {
  background: white;
  width: 33%;
  border-radius: 8px;
  padding: 20px;
  color: black;
}
.m-header {
  margin-bottom: 20px;
}
.m-body {
  color: darkgray;
}
.m-btn {
  border: none;
  background-color: #584e8b;
  color: #eee;
  padding: 5px 20px;
  border-radius: 8px;
}
.m-enter-from {
  transform: translateY(-1000px);
}
.m-enter-active {
  transition: all 1s;
}
.m-enter-to {
  transform: translateY(0px);
}

.m-leave-from {
  transform: translateY(0px);
}
.m-leave-active {
  transition: all 1s;
}
.m-leave-to {
  transform: translateY(-1000px);
}
</style>
