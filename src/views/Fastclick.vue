<template>
  <div class="content">
    <p>引入fastclick库：解决移动端300毫秒点击延迟</p>
    <p>把fastclick这个包安装到项目的依赖之中，--save表示开发与上线都需要</p>
    <p>
      然后在main.js里面添加上 import FastClick from 'fastclick'
      FastClick.attach(document.body);
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.content {
  padding: 0 20px;

  p {
  margin-bottom: 10px;
  font-size: 24px;
}
}
</style>
