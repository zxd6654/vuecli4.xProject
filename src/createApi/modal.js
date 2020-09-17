import Vue from "vue";
import CreateAPI from "vue-create-api";
import DirectiveDialog from "@/components/Dialog.vue";


Vue.use(CreateAPI);
Vue.createAPI(DirectiveDialog, true);

//js调用
// DirectiveDialog.$create({
//     $props: {
//       title: 'Hello',
//       content: 'I am from pure JS'
//     }
//   }).show()

//组件内部调用
// this.$createDirectiveDialog({
//   $props: {
//     title: "Hello",
//     content: "I am from a vue component",
//   },
// }).show();
