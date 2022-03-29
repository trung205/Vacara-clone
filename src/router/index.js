import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../screens/Home.vue";
import ProductDetail from "../screens/ProductDetail.vue";
const routes = [
  { path: "/", name: "HomePage", component: Home },
  { path: "/product", name: "ProductDetail", component: ProductDetail },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
