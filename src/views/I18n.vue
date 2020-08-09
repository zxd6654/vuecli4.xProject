<template>
  <div>
    <span v-text="$t('music.music')"></span>
    <br />
    <span>{{ $t("music.music") }}</span>
    <br />
    <mt-button type="primary" @click.native="changeLangEvent"
      >中英文切换</mt-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return{
      lang: "zh-CN"
    }
  },
  methods: {
    changeLangEvent() {
      this.$createDialog({
        type: "confirm",
        icon: "cubeic-alert",
        title: "提示",
        content: "确定切换语言吗?",
        confirmBtn: {
          text: "确定",
          active: true,
          disabled: false,
          href: "javascript:;",
        },
        cancelBtn: {
          text: "取消",
          active: false,
          disabled: false,
          href: "javascript:;",
        },
        onConfirm: () => {
          if (this.lang === "zh-CN") {
            this.lang = "en-US";
            this.$i18n.locale = this.lang; //关键语句
          } else {
            this.lang = "zh-CN";
            this.$i18n.locale = this.lang; //关键语句
          }

          this.$createToast({
            type: "warn",
            time: 1000,
            txt: this.$i18n.locale,
          }).show();
        },
        onCancel: () => {
          this.$createToast({
            type: "warn",
            time: 1000,
            txt: "取消切换",
          }).show();
        },
      }).show();
    },
  },
};
</script>

<style scoped></style>
