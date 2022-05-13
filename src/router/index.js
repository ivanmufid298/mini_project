import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Carts from "../views/Carts.vue";
import Shops from "../views/Shops.vue";
import Profiles from "../views/Profiles.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shops,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Carts,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profiles,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
