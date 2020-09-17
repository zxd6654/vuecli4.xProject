import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//在这个文件中已经全局引入
import "./cube-ui";

import Mint from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(Mint);

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Element);

//快速点击 清除300毫秒延迟
import FastClick from "fastclick";
FastClick.attach(document.body);

//rem布局
// import "lib-flexible";
import RemConfig from "./config/rem";
RemConfig();

//移动端调试日志
import Vconsole from "vconsole";
//写法一
// let vConsole = new Vconsole();
// Vue.use(vConsole);

//写法二
new Vconsole();

//国际化
import VueI18n from "vue-i18n";
import zh from "./lang/zn";
import en from "./lang/en";
Vue.use(VueI18n);
let i18n = new VueI18n({
  locale: "zh-CN", //语言识别
  messages: {
    "zh-CN": zh,
    "en-US": en,
  },
});

//vue-create-api
import "@/createApi/modal";


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
