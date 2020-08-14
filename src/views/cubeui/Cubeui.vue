<template>
  <div>
    <cube-button @click="showDialog">Dialog-alert</cube-button>
    <cube-button @click="showBtn">Dialog-btn</cube-button>

    <cube-button :inline="true" @click="zhLang">zh(切换中文)</cube-button>&nbsp;
    <cube-button :inline="true" @click="enLang">en(切换英文)</cube-button>

    <cube-button @click="showToastTime">Toast - time 1s</cube-button>
  </div>
</template>

<script>
import { Locale } from "cube-ui";
import enUSmessages from "cube-ui/src/locale/lang/en-US";
export default {
  methods: {
    showDialog() {
      this.$createDialog({
        type: "alert",
        title: "Alert",
        content: "dialog content",
      }).show();
    },
    showBtn() {
      this.$createDialog({
        type: "confirm",
        icon: "cubeic-alert",
        title: "我是标题",
        content: "我是内容",
        confirmBtn: {
          text: "确定按钮",
          active: true,
          disabled: false,
          href: "javascript:;",
        },
        cancelBtn: {
          text: "取消按钮",
          active: false,
          disabled: false,
          href: "javascript:;",
        },
        onConfirm: () => {
          this.$createToast({
            type: "warn",
            time: 1000,
            txt: "点击确认按钮",
          }).show();
        },
        onCancel: () => {
          this.$createToast({
            type: "warn",
            time: 1000,
            txt: "点击取消按钮",
          }).show();
        },
      }).show();
    },
    zhLang() {
      Locale.use("zh-CN");
    },
    enLang() {
      Locale.use("en-US", enUSmessages);
    },
    showToastTime() {
      const toast = this.$createToast({
        time: 1000,
        txt: "Toast time 1s",
        mask: true,
      });
      toast.show();
    },
  },
};
</script>

<style lang="stylus" scoped>
.cube-btn{
 margin:10px 0;
}
</style>
