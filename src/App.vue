<template>
  <div id="app">
    <div id="nav">
      <router-link
        v-for="item in $router.options.routes"
        :key="item.name"
        :to="item.path"
      >{{ item.name }} |</router-link>
    </div>
    <button @click="openToast">弹出Toast按钮</button>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    openToast() {
      this.$toast("ZhuXiaodong directive toast plugin", 2000);
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  font-size: 32px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
