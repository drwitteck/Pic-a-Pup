<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    this.$store.dispatch("tryAutoLogin");
  }
};
</script>

<style>
body,
html {
  background: linear-gradient(45deg, #551053, #1e8196);
  background-size: cover;
  background-repeat: no-repeat;
}
.headline {
  background: linear-gradient(#d660d2, #1e8196);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}
</style>