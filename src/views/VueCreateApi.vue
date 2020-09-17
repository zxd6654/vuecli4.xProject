<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    //组件内部调用
    this.$createDirectiveDialog({
      $props: {
        title: "Hello",
        content: "I am from a vue component",
      },
    }).show();
  },
};
</script>

<style></style>
