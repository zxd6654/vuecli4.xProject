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
    path: "/mintui",
    name: "Mintui",
    component: () =>
      import(/* webpackChunkName: "mintui" */ "@/views/mintui/Mintui.vue"),
  },
  {
    path: "/i18n",
    name: "I18n",
    component: () => import(/* webpackChunkName: "i18n" */ "@/views//I18n.vue"),
  },
  {
    path: "/verifycode",
    name: "VerifyCode",
    component: () =>
      import(
        /* webpackChunkName: "verifycode" */ "@/views/VerifyCode.vue"
      ),
  },
  {
    path: "/vuepdf",
    name: "VuePdf",
    component: () =>
      import(/* webpackChunkName: "vuepdf" */ "@/views/VuePdf.vue"),
  },
  {
    path: "/vuecreateapi",
    name: "VueCreateApi",
    component: () =>
      import(/* webpackChunkName: "vuecreateapi" */ "@/views/VueCreateApi.vue"),
  },
  {
    path: "/numkeyboard",
    name: "NumKeyBoard",
    component: () =>
      import(/* webpackChunkName: "numkeyboard" */ "@/views/NumKeyBoard.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
