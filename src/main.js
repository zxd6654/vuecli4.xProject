import Vue from "vue";
import "./cube-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//快速点击 清除300毫秒延迟
import FastClick from "fastclick";
FastClick.attach(document.body);

import Mint from "mint-ui";
Vue.use(Mint);
import "mint-ui/lib/style.css";

//rem布局
import "lib-flexible";
// import RemConfig from "./config/rem";
// RemConfig()

//移动端调试日志
import Vconsole from "vconsole";
let vConsole = new Vconsole();
Vue.use(vConsole);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
