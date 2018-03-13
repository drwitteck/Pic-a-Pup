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

}
</style>
