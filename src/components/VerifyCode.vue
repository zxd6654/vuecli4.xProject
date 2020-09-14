<template>
  <div class="sms-code" @click="$refs.inputEl.focus()">
    <div class="code-input-main" ref="mainBox">
      <input
        ref="inputEl"
        class="code-input"
        type="tel"
        :maxlength="maxLength"
        @input="inputChange"
      />
      <div
        class="code-input-main-item"
        v-for="(v, index) in maxLength"
        :key="v"
        :style="itemStyle"
      >
        {{ code.split("")[index] }}
      </div>
    </div>
  </div>
</template>
<script>
// 注意给HTML加禁止缩放
// <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0">
export default {
  name: "sms-code",
  model: {
    prop: "smsCode",
    event: "input"
  },
  props: {
    maxLength: {
      type: Number,
      default: 4
    },
    smsCode: {
      type: String,
      default: ""
    }
  },
  data() {
    return { code: "", itemStyle: {} };
  },
  mounted() {
    this.$nextTick(() => {
      this.getStyle();
    });
  },
  methods: {
    getStyle() {
      let clientWidth = this.$refs.mainBox.clientWidth;
      this.defaultVal = clientWidth;
      let mLeft = (clientWidth - 34 * this.maxLength) / (this.maxLength + 1);
      this.itemStyle = {
        textAlign: "center",
        marginLeft: mLeft + "px"
      };
    },
    inputChange(e) {
      this.code = e.srcElement.value;
      this.$emit("input", e.srcElement.value);
    }
  }
};
</script>

<style lang="scss" scoped>
// @font-face {
//   font-family: "time-font-myself";
//   src: url("");
// }
$height: 44px;
$fontSize: 34px;
$borderBottom: 1px;
$borderColor: #000;

.sms-code {
  width: 100%;
  overflow: hidden;
  .code-input-main {
    position: relative;
    width: 100%;
    height: $height + $borderBottom;
    .code-input {
      position: absolute;
      top: 0;
      left: -500%;
      width: 100%;
      height: 5px;
      font-size: 12px;
      color: transparent;
      border: none;
      outline: none;
      text-shadow: 0 0 0 transparent;
    }
    .code-input-main-item {
      width: $fontSize;
      font-size: $fontSize;
      height: $height;
      line-height: $height;
      color: $borderColor;
      border-bottom: solid $borderColor $borderBottom;
      float: left;
    }
  }
}
</style>