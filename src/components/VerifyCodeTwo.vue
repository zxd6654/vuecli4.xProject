<template>
  <div class="codes">
    <input id="first" v-model="code[0]" type="text" />
    <input id="second" v-model="code[1]" type="text" />
    <input id="third" v-model="code[2]" type="text" />
    <input id="forth" v-model="code[3]" type="text" />
    <input id="fifth" v-model="code[4]" maxlength="1" type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      smsCode: "",
      code: new Array(5),
      codeId: ["first", "second", "third", "forth", "fifth"],
    };
  },
  watch: {
    code: function (newValue) {
      console.log("newValue.length" + newValue.length);
      let tempValue = "";
      for (let i = 0; i < newValue.length; i++) {
        if (i == 5) {
          console.log(i);
          break;
        }
        if (newValue[i]) {
          tempValue = tempValue + newValue[i];
        }
      }
      this.smsCode = tempValue;
      console.log("smsCode " + this.smsCode);
      let m = tempValue.split("");
      let location = 0;
      for (let i = 0; i < newValue.length; i++) {
        if (m[i] && i < 5) {
          location++;
          newValue[i] = m[i];
        } else {
          newValue[i] = "";
        }
      }
      // console.log(this.codeId[i])
      if (location < 1) {
        location = 1;
      } else if (location > 5) {
        location = 5;
      }
      document.getElementById(this.codeId[location - 1]).focus();
    },
  },
};
</script>

<style scoped lang="stylus">
.codes {
  margin-top: 50px;

  input {
    width: 100px;
    border: 1px solid #c6c6c6;
    border-right: none;
  }

  #first {
    border-radius: 12px 0 0 12px;
  }

  #fifth {
    border-radius: 0 12px 12px 0  ;
    border-right: 1px solid #c6c6c6;
  }
}
</style>
