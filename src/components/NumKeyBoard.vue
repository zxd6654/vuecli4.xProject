<!--密码键盘，只能输入6位数字-->
<template lang="pug">
.keyboard(:class="{ isIos: isIOS }", v-show="isShowChild")
  .safe
    .tip 安全验证
    .password {{ sercet }}
  .operator
    .btn.sure(@click="clickSure", :class="{ sure_canClick: isCanClick }") 确定
    .btn.cancel(@click="clickCancel") 取消
  .num_board
    .row
      button(@click="clickNum('1')") 1
      button.center(@click="clickNum('2')") 2
      button(@click="clickNum('3')") 3
    .row
      button(@click="clickNum('4')") 4
      button.center(@click="clickNum('5')") 5
      button(@click="clickNum('6')") 6
    .row
      button(@click="clickNum('7')") 7
      button.center(@click="clickNum('8')") 8
      button(@click="clickNum('9')") 9
    .row
      button.num_null
      button.center(@click="clickNum('0')") 0
      button.num_delete(@click="clickNum('X')")
        img.icon(src="../assets/delete.png")
</template>

<script>
export default {
  props: {
    // 接受调用处传进来的值
    isShowKeyBoard: {
      // 是否显示键盘
      required: true,
      default() {
        return false; // 默认不显示
      },
    },
  },
  data() {
    return {
      isIOS: false, // 判断当前页面是否跑在ios平台，因为ios平台兼容性问题，要特殊处理
      isCanClick: false, // 如果不可点击'确定'的按钮样式更改
      password: "", //(真正的密码)
      sercet: "", // 密文密码(******)

      // 因为父组件传递进来的属性不支持进行双向绑定，需要创建一个副本isShowChild来进行双向绑定操作。
      isShowChild: this.isShowKeyBoard,
    };
  },
  created() {
    // 在html渲染前先拿isIOS的值
    let u = navigator.userAgent;
    this.isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

    this.clickNum("X"); // 清空数据，恢复默认值
  },
  watch: {
    // 动态监听父布局是否有改动了传进来的这个值
    isShowKeyBoard: {
      handler(newValue) {
        this.isShowChild = newValue; // 有改动则重新赋值给副本
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    clickCancel() {
      // 因为子组件直接改了副本后  第二次父组件再改  子组件的watch监听不到了，所以这里直接改父控件调用处的原变量，让那边去触发watch，这样第二次还能触发。
      this.$emit("onShowChange", false);
      this.clickNum("X"); // 清空密码
    },
    clickSure() {
      if (this.password.length === 6) {
        // 密码长度对了，返回密码，这里也可以调用服务进行验证，最后返回验证的值。
        console.log(this.password);
        this.$emit("onCheckPassword", this.password);
      } else {
        this.$toast("请输入6位数密码"); // 请输入6位数密码
      }
    },
    clickNum(num) {
      console.log(num);
      if (num != "X") {
        if (this.sercet === "请输入交易密码") {
          this.password = "";
          this.password += num;
          this.sercet = "";
          this.sercet += "*";
        } else if (this.password.length === 6) {
          this.$toast("已经输入6位数了");
        } else {
          this.password += num;
          this.sercet += "*";
          if (this.password.length === 6) {
            this.isCanClick = true;
          }
        }
      } else {
        // 清空密码和相关属性恢复
        this.isCanClick = false;
        this.password = "";
        this.sercet = "请输入交易密码";
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.keyboard {
  background: white;
  width: 100%;
  height: 355px;
  border-radius: 8px 8px 0px 0px;
  position: fixed;
  left: 0;
  bottom: 0;

  &.isIos {
    bottom: 48px;
  }

  .safe {
    height: 52px;
    background: #E5EBF7;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    margin: 20px 10px 12px;
    padding: 16px 14px;

    .tip {
      font-size: 14px;
      line-height: 20px;
      text-align: left;
      color: #333333;
    }

    .password {
      color: #999999;
      font-size: 14px;
      line-height: 20px;
      text-align: right;
      opacity: 1;
    }
  }

  .operator {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 20px;

    .btn {
      width: 80px;
      height: 32px;
      font-size: 14px;
      line-height: 32px;
      display: flex;
      justify-content: center;

      &.cancel {
        border-radius: 4px;
        border: 1px solid rgba(68, 114, 197, 1);
        color: #4472C5;
      }

      &.sure {
        background: rgba(144, 171, 220, 1);
        border-radius: 4px;
        color: #D2DDF1;
        margin-right: 10px;
        margin-left: 20px;

        &.sure_canClick {
          background: #4472C5;
          color: white;
        }
      }
    }
  }

  .num_board {
    background: #D2D5DB;
    height: 100%;
    padding: 6px;

    .row {
      margin-bottom: 7px;
      display: flex;
      flex-direction: row;

      button {
        width: 117px;
        height: 46px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0 0px 0px rgba(132, 134, 136, 1);
        border-radius: 5px;
        text-align: center;
        font-size: 25px;
        color: #000000;
        display: flex;
        justify-content: center;
        line-height: 46px;

        &.center {
          margin: 0 6px;
        }
      }

      .num_null {
        width: 117px;
        height: 46px;
        float: right;
        margin: 0;
        padding: 0;
        background-color: #D2D5DB;
        border: none;
        outline: none;
      }

      .num_delete {
        width: 117px;
        height: 46px;
        background: #D2D5DB;
        position: relative;

        .icon {
          position: absolute;
          width: 23px;
          height: 18px;
          top: 30%;
          right: 40%;
        }
      }
    }
  }
}
</style>