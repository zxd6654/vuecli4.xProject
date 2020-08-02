import Vue from "vue";
import "./cube-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import FastClick from "fastclick";
FastClick.attach(document.body);

import Mint from "mint-ui";
Vue.use(Mint);
import "mint-ui/lib/style.css";

import "lib-flexible";

import Vconsole from "vconsole";
let vConsole = new Vconsole();
Vue.use(vConsole);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
