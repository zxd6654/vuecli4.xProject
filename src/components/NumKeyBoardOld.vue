<template>
  <div id="abc-num-board">
    <div :class="[{ hide: !isShow }, 'key-container']">
      <div class="error-down" @click="hideBoard">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="input-area" id="input-area" disabled>
        <div class="row" v-for="(item, index) in numArr" :key="index">
          <p
            class="num-item"
            v-for="num in item"
            :key="num"
            @touchstart="getValue(num)"
          >
            {{ num }}
          </p>
        </div>
        <div class="row">
          <p
            class="num-item"
            v-if="!(hidePoint || dotIsShow)"
            @touchstart="getValue('.')"
          >
            .
          </p>
          <p class="num-item grey" v-if="hidePoint || dotIsShow"></p>
          <p class="num-item" @touchstart="getValue('0')">0</p>
          <div
            :class="[{ grey: hidePoint || dotIsShow }, 'num-item', 'delete']"
            id="corss"
            @touchstart="deleteElementLongClick"
            @touchend="emptyTime"
          >
            <img src="@/assets/delete.png" alt="del" />
          </div>
        </div>
        <div class="greyBar"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { clearTimeout, setTimeout } from "timers";
// import FastClick from 'fastclick';//如果全局有，这里就不用再加了
export default {
  props: {
    dotIsShow: Boolean,
  },
  data() {
    return {
      numArr: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      isShow: false,
      refObject: {},
      refObjectOld: {},
      hidePoint: false,
      loop: null,
      loop2: [],
      len: "",
      beforetime: "",
      aftertime: "",
    };
  },
  mounted() {
    this.$on("getInputVm", function(obj) {
      this.$outsideClick();
      this.refObject = obj;
      this.isShow = true;
      this.hidePoint = this.refObject.hidePoint;
    });
  },
  watch: {
    refObject() {
      if (Object.keys(this.refObjectOld).length === 0) {
        this.refObjectOld = this.refObject;
      } else {
        let _that = this;
        this.refObjectOld.clearCursorFlash();
        setTimeout(function() {
          _that.refObject.clearFlag = _that.refObjectOld.clearFlag;
          _that.refObject.clearFlag = _that.refObjectOld.clearDistance;
          _that.refObject.clearFlag = _that.refObject;
        }, 200);
      }
    },
    methods: {
      deleteElementClick() {
        this.refObject.deleteElement();
      },
      //长按延时删除
      deleteElementLongClick() {
        let _that = this;
        this.len = this.refObject.getInputStr().length;
        clearTimeout(this.loop);
        this.beforetime = new Date().getTime();
        for (let i = 0; i < this.loop2.length; i++) {
          clearTimeout(this.loop2[i]);
        }
        this.loop = setTimeout(
          function() {
            //延时删除
            for (let i = 0; i < _that.len; i++) {
              (function(i) {
                _that.loop2.push(
                  setTimeout(() => _that.refObject.deleteElement(), 80 * i)
                );
              })(i);
            }
          }.bind(this),
          500
        );
      },
      emptyTime() {
        this.aftertime = new Date().getTime();
        //短按抬起删除
        if (this.aftertime - this.beforetime < 500) {
          this.deleteElementClick();
        }
        for (let i = 0; i < this.len; i++) {
          clearTimeout(this.loop2[i]);
        }
        clearTimeout(this.loop);
        this.loop2 = [];
      },
      hideBoard() {
        let _that = this;
        this.isShow = false;
        if (document.getElementsByClassName("numInputNewDiv")[0]) {
          let numKeyBoard = document.getElementsByClassName(
            "numInputNewDiv"
          )[0];
          numKeyBoard.remove();
          window.scrollTo(0, document.documentElement.offsetHeight);
        }
        this.refObject.clearCursorFlash();
        this.refObjectOld();
        setTimeout(function() {
          _that.refObject = {};
        }, 200);
      },
      showKeyBoard() {
        let _that = this;
        setTimeout(function() {
          _that.isShow = true;
        }, 0);
      },
      getValue(val) {
        this.refObject.getValue(val);
      },
      outsideClick() {
        let _that = this;
        let tagBody = document.getElementsByTagName("body")[0];
        let length = document.getElementsByClassName("am-list-item");
        let listNumInput = document.getElementsByClassName("am-list-item")[0];
        let numKeyBoard = document.getElementById("abc-list-keyboard");

        if (document.getElementsByClassName("am-list-item")[1]) {
          let listNumInput2 = document.getElementsByClassName(
            "am-list-item"
          )[1];
          tagBody.addEventListener("click", function(evt) {
            if (_that.isShow === true) {
              if (
                !numKeyBoard.contains(evt.target) &&
                !listNumInput.contains(evt.target) &&
                !listNumInput2.contains(evt.target)
              ) {
                if (document.getElementsByClassName("numInputNewDiv")[0]) {
                  let numBoard = document.getElementsByClassName(
                    "numInputNewDiv"
                  )[0];
                  numBoard.remove();
                  window.scrollTo(0, document.documentElement.offsetHeight);
                }
                _that.isShow = false;
                _that.refObject.clearCursorFlash();
                _that.refObjectOld = {};
                setTimeout(function() {
                  _that.refObject = {};
                }, 200);
              }
            }
          });
        } else {
          tagBody.addEventListener("click", function(evt) {
            if (_that.isShow === true) {
              if (
                !numKeyBoard.contains(evt.target) &&
                !listNumInput.contains(evt.target)
              ) {
                if (document.getElementsByClassName("numInputNewDiv")[0]) {
                  let numBoard = document.getElementsByClassName(
                    "numInputNewDiv"
                  )[0];
                  numBoard.remove();
                  window.scrollTo(0, document.documentElement.offsetHeight);
                }
                _that.isShow = false;
                _that.refObject.clearCursorFlash();
                _that.refObjectOld = {};
                setTimeout(function() {
                  _that.refObject = {};
                }, 200);
              }
            }
          });
        }
      },
    },
  },
};
</script>

<style lang="less" scope>
@white: #ffffff;
@font-black: #333333;

* {
  user-select: none;
}
.num-item {
  touch-action: manipulation; //浏览器只允许进行滚动和持续缩放操作
}

#abc-num-keyboard{

  .key-container.hide{
    height: 0;
    border-top: 0;
  }
  .key-container{
    background-color: #d0d4dc;
    position: fixed;
    z-index:9998;
    bottom: 0;
    width: 100%;
    font-size: 0.5rem;
    color: @font-font-black;
    margin-left: -0.3px;
    margin-right: -0.3px;
    height: 5.7rem;
  }

}
</style>
