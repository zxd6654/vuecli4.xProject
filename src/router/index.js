import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/fastclick",
    name: "Fastclick",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "faseclick" */ "../views/Fastclick.vue"),
  },
  {
    path: "/cubeui",
    name: "Cubeui",
    component: () =>
      import(/* webpackChunkName: "cubeui" */ "@/views/cubeui/Cubeui.vue"),
  },
  {
    path: "/scroll",
    name: "Scroll",
    component: () =>
      import(/* webpackChunkName: "scroll" */ "@/views/cubeui/Scroll.vue"),
  },
  {
    path: "/Mintui",
    name: "mintui",
    component: () =>
      import(/* webpackChunkName: "mintui" */ "@/views/mintui/Mintui.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
