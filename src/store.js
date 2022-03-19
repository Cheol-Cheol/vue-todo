import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      vuexTest: "success!",
    };
  },
});

export default store;
