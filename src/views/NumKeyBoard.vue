<template lang="pug">
.keyBoardWrap
  button(@click="showKeyBoard") 键盘
  Keyboard(
    :isShowKeyBoard="isShowKeyBoard",
    @onShowChange="showKeyBoard",
    @onCheckPassword="onCheckPassword"
  )
</template>

<script>
import Keyboard from "@/components/NumKeyBoard";

export default {
  components: {
    Keyboard,
  },
  data() {
    return {
      isShowKeyBoard: false, // 是否展示数字键盘
    };
  },

  methods: {
    // 显示或关闭按钮
    showKeyBoard() {
      this.isShowKeyBoard = !this.isShowKeyBoard;
    },
    // 点击确定的回调
    onCheckPassword(password) {
      this.submitData(password);
    },
  },
};
</script>