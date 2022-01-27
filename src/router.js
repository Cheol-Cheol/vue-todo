import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import CompletedList from "./components/CompletedList.vue";

const routes = [
  // 여기만 건드리면 된다.
  {
    path: "/",
    component: List,
  },
  {
    path: "/completed",
    component: CompletedList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
