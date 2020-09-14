<template>
  <div>
    <sms-code v-model="smsCode"></sms-code>
    {{ smsCode }}
  </div>
</template>

<script>
import smsCode from "@/components/VerifyCode";
// import smsCode from "@/components/VerifyCodeTwo";
export default {
  components: {
    "sms-code": smsCode,
  },

  data() {
    return {
      smsCode: "",
    };
  },
};
</script>
