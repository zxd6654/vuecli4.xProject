<template>
  <div class="vCodes">
    <p>demo1</p>
    <sms-code v-model="smsCode"></sms-code>
    <p>demo2</p>
    <smsCodetwo v-model="smsCodeTwo"></smsCodetwo>
  </div>
</template>

<script>
import smsCode from "@/components/VerifyCode";
import smsCodetwo from "@/components/VerifyCodeTwo";
export default {
  components: {
    "sms-code": smsCode,
    smsCodetwo,
  },

  data() {
    return {
      smsCode: "",
      smsCodeTwo: "",
    };
  },
};
</script>
<style lang="stylus" scoped>
.vCodes p {
  font-size: 30px;
  margin: 20px;
  text-align left;
}
</style>
