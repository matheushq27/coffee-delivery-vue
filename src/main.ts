import { createApp } from "vue";
import store from "./store";
import { createRouter, createWebHashHistory } from "vue-router";
import Cart from "./views/Cart.vue";
import Home from "./views/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/cart",
    component: Cart,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import App from "./App.vue";

createApp(App).use(store).use(router).mount("#app");
