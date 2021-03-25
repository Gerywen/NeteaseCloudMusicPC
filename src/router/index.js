import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/home/Home.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    redirect: Home,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
