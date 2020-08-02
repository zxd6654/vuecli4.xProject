<template>
  <div>
    <cube-button @click="showDialog">按钮</cube-button>

    <cube-checkbox-group
      v-model="checkList"
      :options="options"
    ></cube-checkbox-group>

    <cube-button :inline="true" @click="zhLang">zh</cube-button>
    <cube-button :inline="true" @click="enLang">en</cube-button>
  </div>
</template>

<script>
import { Locale } from "cube-ui";
import enUSmessages from "cube-ui/src/locale/lang/en-US";
export default {
  data() {
    return {
      checkList: ["1", "4"],
      options: [
        "1",
        "2",
        {
          label: "3",
          value: "3",
          disabled: true,
        },
        {
          label: "4",
          value: "4",
          disabled: true,
        },
      ],
    };
  },
  methods: {
    showDialog() {
      this.$createDialog({
        type: "alert",
        title: "Alert",
        content: "dialog content",
      }).show();
    },
    zhLang() {
      Locale.use("zh-CN");
    },
    enLang() {
      Locale.use("en-US", enUSmessages);
    },
  },
};
</script>

<style></style>
