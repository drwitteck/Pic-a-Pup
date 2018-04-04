import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'

import WelcomePage from './components/welcome/welcome.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import OverviewPage from './components/dashboard/overview.vue'
import SignupPage from './components/auth/signup.vue'
import SigninPage from './components/auth/signin.vue'
import BreedPage from './components/dashboard/features/breed.vue'
import ParkPage from './components/dashboard/features/park.vue'
import NotFound from './components/GeneralViews/NotFoundPage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/signup',
    component: SignupPage,
    beforeEnter (to, from, next) {
      if (store.state.idToken) {
        next('/dashboard')
        console.log('help signup')
      } else {
        console.log(store.state)
        next()
      }
    } },
  {
    path: '/signin',
    component: SigninPage,
    beforeEnter (to, from, next) {
      if (store.state.idToken) {
        next('/dashboard')
        console.log('help')
      } else {
        console.log(store.state)
        next()
      }
    }
  }, {
    path: '/dashboard',
    component: DashboardPage,
    beforeEnter (to, from, next) {
      if (store.state.idToken) {
        next()
        next('/overview')
      } else {
        next('/signin')
      }
    },
    children: [
      {
        path: '/breed',
        component: BreedPage
      },
      {
        path: '/overview',
        component: OverviewPage
      },
      {
        path: '/park',
        component: ParkPage
      }
    ]
  },
  { path: '*', component: NotFound }
]

export default new VueRouter({mode: 'history', routes})
