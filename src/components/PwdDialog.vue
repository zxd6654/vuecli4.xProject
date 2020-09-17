<template>
  <div class="bg" @click="preventNum()">
    <div class="bg_content" v-if="!isIos">
      <div id="div_pwd_title">请输入您的账户密码</div>
      <img src="@/assets/logo.png" alt="" @click="imgHandle" />
      <div id="div_pwd_input">
        <input
          type="password"
          class="input_grid"
          v-for="(val, index) in textArr"
          :value="val"
          readonly
          :key="index"
        />
        <input type="hidden" :id='pwdInputId' readonly>
        <p id="btn_cancel" @click="cancel">取消</p>
      </div>
    </div>
    <div class="bg_content-ios" v-if="isIos">
       <div id="div_pwd_title-ios">请输入您的账户密码</div>
      <img src="@/assets/logo.png" alt="" @click="imgHandle" />
      <div id="div_pwd_input-ios">
        <input
          type="password"
          class="input_grid-ios"
          v-for="(val, index) in textArr"
          :value="val"
          readonly
          :key="index"
        />
        <input type="hidden" :id='pwdInputId' readonly>
        <p id="btn_cancel-ios" @click="cancel">取消</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PwdDialog",
  props: ["cfcRandom"],
  data() {
    return {
      textArr: ["", "", "", "", "", ""],
      pointer: 0,
      isIos: false,
      pwdInputId:'pwdInputId',
      sr:'',
      pwdKbReady: false,
      pwdKB: null,
      encryptedInputValue: "---",
      encryptedClientRandom: "---",
    };
  },
  created() {
    let agent = navigator.userAgent.toLowerCase();
    let android = agent.indexOf("android");
    let iphone = agent.indexOf("iphone");
    if(iphone>-1){
        this.isIos=true
    }else{
        this.isIos=false
    }
    this.$nextTick(()=>{
        this.getSRCallback();
    })
  },
 methods:{
     preventNum(){
       this.prevent="";
     },
     plus(){
       if(this.opinter<6){
         this.textArr.splice(this.pointer,1,"*");
         this.pointer==5?this.pointer:this.pointer++;
       }
     },
     minus(){
       if(this.pointer>=0){
        this.pointer==0?this.pointer:this.pointer--;
        this.textArr.splice(this.pointer,1,"");
       }
     },
     getSRCallback(){
       this.serverRandom=this.cfcRandom;
       this.pwdKB=this.obtainkeyboard(this.pwdInputId);
       this.setProperty();
       this.pwdKbReady=true;
       this.showKeyboardWithoutInput(
         this.pwdInputId,
         this.serverRandom,
         this.pwdKB
       )
     },
     obtainkeyboard(inputId){
       let keyboard=new CFCAKeyboard(0);
       keyboard.bindInputBox(inputId);
       keyboard.setRandomType();
       keyboard.hideKeyboard();
       return keyboard;
     },
     showKeyboardWithoutInput(inputId,serverRandom,keyboard){
       if(CFCA_OK!==keyboard.setServerRandom(serverRandom,inputId)){
         console.log('error');
       }
       keyboard.showKeyboard();
     },
     setProperty(){
       this.pwdKB.setInputChangeCallback(this.inputChangeCallback);
       this.pwdKB.setDoneCallback(this.inputPwdDoneCallback);
       this.pwdKB.setMinLength(6,this.pwdInputId);
       this.pwdKB.setMaxLength(6,this.pwdInputId);
     },
     inputPwdDoneCallback(callback){
       this.finish();
     },
     inputChangeCallback(sipBoxId,type,length){
       if(type=='1'){
         this.plus();
       }
       if(type=='2'){
         this.minus();
       }
       if(length==6){
         this.finish();
       }
     },
     encrypt(){
       this.encryptedInputValue=this.pwdKB.getEncryptedInputValue(
         this.pwdInputId
       );
       this.encryptedClientRandom=this.pwdKB.getEncryptedClientRandom(
         this.pwdInputId
       );
     },
     finish(){
       this.pwdKB.hideKeyboard();
       this.encrypt();
       let encryptData={
         encryptedInputValue:this.encryptedInputValue,
         encryptedClientRandom:this.encryptedClientRandom
       };
       this.$emit("pwdInputFinish",encryptData)
     },
     cancel(){
       this.pwdKB.hideKeyboard();
       this.$emit("cancelPwdInput",{
         msg:"UserCancel"
       });
     },
     imgHandle(){
       this.pwdKB.hideKeyboard();
       this.$emit('imgHandle');
     }

 }
};
</script>

<style scoped lang='stylus'>
.bg {
  background:rgba(0,0,0,.3);
  width 100%
  height 100%
  position fixed
  left 0
  top 0
}

.bg .bg_content {
  width 686px
  height 308px
  background #ffffff
  position absolute
  left 32px
  top 360px
  border-radius 5px

  img {
    width 48px
    height 48px
    position absolute
    top 50px
    left 20
  }
}

.bg .bg_content-ios {
  width 686px
  height 308px
  background #ffffff
  position absolute
  left 32px
  top 360px
  border-radius 10px

  img {
   width 48px
    height 48px
    position absolute
    top 50px
    left 20
  }
}

#div_pwd_title {
  padding-top:56px;
  font-size:36px;
  text-align center;
 font-size 36px
 color #333333
}

#div_pwd_input {
  padding-top 20px
  text-align center
}

#div_pwd_input-ios {
  padding-top 40px
  text-align center
  position relative
}

.input_grid {
  border 1px solid gray;
  border-radius 0
  height 60px
  width 60px
  margin-left 20px
  margin-right 20px
  text-align center
  font-size 30px
}

.input_grid-ios {
  border 1px solid #8a8a8a;
  border-radius 0
  border-left none
  height 88px
  width 103px
  margin-left 0px
  margin-right 0px
  text-align center
  vertical-align center
  font-size 30px
  -webkit-appearance none 
}

.input_grid-ios:first-child {
  border-left: 1px solid #8a8a8a
}

#pwd_input {
  width 50px
  height 50px
  font-size 30px
  left 0
  position absolute
  color:#ffffff
  border 1px solid chartreuse
}

 #btn_cancel {
    font-size 37px
    border 1px solid #fff
    background #ffffff
    color #feac00
    margin-top 40px
  }


 #btn_cancel-ios {
    font-size 32px
    border 1px solid #8a8a8a
    border-radius 10px
    margin-left:143px
    background #ffffff
    color #feac00
    margin-top 26px
    width 212px
    height 60px
    line-height 60px
  }
</style>
