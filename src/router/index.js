import Vue from 'vue'
import Router from 'vue-router'
import landingPage from '@/components/LandingPage'
import login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: landingPage
    },
    {
      path: '/',
      name: 'Login',
      component: login
    }
  ]
})
