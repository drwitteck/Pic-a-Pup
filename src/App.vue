<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import landingPage from './components/LandingPage'
import login from './components/Login'

export default {
  name: 'App',
  components: {
    landingPage, login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
