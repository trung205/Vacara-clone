import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../screens/Home.vue";

const routes = [
    { path: "/", name: "HomePage", component: Home }
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
