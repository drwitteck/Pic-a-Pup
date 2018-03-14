/* eslint-disable */
<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/header.vue'
export default {
  name: 'app',
  components: {
    'app-header': Header
  },
  created () {
    this.$store.dispatch('tryAutoLogin')
  }
}
</script>

<style>
  body, html {
    min-height: 100vh;
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: white;
    background: linear-gradient(45deg, #551053, #1e8196);
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
