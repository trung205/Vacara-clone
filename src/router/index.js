import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../screens/Home.vue";
import ProductDetail from "../screens/ProductDetail.vue";
import ProductCart from "../screens/ProductCart.vue";
import ProductFilter from "../screens/ProductFilter.vue";
import Authen from "../screens/authen.vue";
const routes = [
  { path: "/", name: "HomePage", component: Home },
  { path: "/product/:id", name: "ProductDetail", component: ProductDetail },
  { path: "/product-cart", name: "ProductCart", component: ProductCart },
  { path: "/:query", name: "ProductFilter", component: ProductFilter },
  { path: "/authen/:type", name: "Authen", component: Authen },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
