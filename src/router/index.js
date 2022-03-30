import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../screens/Home.vue";
import ProductDetail from "../screens/ProductDetail.vue";
import ProductCart from "../screens/ProductCart.vue";
const routes = [
  { path: "/", name: "HomePage", component: Home },
  { path: "/product", name: "ProductDetail", component: ProductDetail },
  { path: "/product-cart", name: "ProductCart", component: ProductCart },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
