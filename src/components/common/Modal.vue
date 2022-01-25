<template>
  <transition name="modal">
    <div v-if="showModal == true">
      <div class="black-bg">1</div>
      <!-- <slot> -->
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    showModal: Boolean,
  },
};
</script>

<style scoped>
/* .black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.modal-btn {
  padding: 10px 30px;
  color: white;
  background: darkslateblue;
  border: none;
  border-radius: 5px;
} */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-enter-from {
  transform: translateY(-1000px);
}
.modal-enter-active {
  transition: all 1s;
}
.modal-enter-to {
  transform: translateY(0px);
}

.modal-leave-from {
  transform: translateY(0px);
}
.modal-leave-active {
  transition: all 1s;
}
.modal-leave-to {
  transform: translateY(-1000px);
}
</style>
