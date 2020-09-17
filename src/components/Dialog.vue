<template>
  <div v-show="visible" class="mask">
    <div class="dialog">
      <h1 class="title">{{title}}</h1>
      <div class="content">{{content}}</div>
      <div @click="hide" class="btn">confirm</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'z-dialog',
    props: {
      content: {
        type: String,
        default: 'I am content'
      },
      title: {
        type: String,
        default: 'I am title'
      }
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      show() {
        this.visible = true
      },
      hide() {
        this.visible = false
      }
    }
  }
</script>
<style>
  .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.6);
  }
  .dialog {
    position: relative;
    top: 50%;
    left: 50%;
    z-index: 200;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 240px;
    text-align: center;
    padding: 40px;
    background: white;
  }
  .title {
    line-height: 40px;
    font-size: 32px;
  }
  .content {
    line-height: 36px;
    font-size: 28px;
    margin-bottom: 40px;
  }
  .btn {
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #fc8919;
    text-align: center;
    font-size: 32px;
  }
</style>