import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import List from "../views/List.vue";

const routes = [
  {
    path: "/",
    name: "About",
    component: Home,
  },
  {
    path: "/List",
    name: "Projects",
    component: List,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
});

export default router;
