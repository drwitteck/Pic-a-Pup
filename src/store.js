/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'

import router from './router'

Vue.use(Vuex)

export const state = {
  idToken: null,
  userId: null,
  user: null
}

export const actions = {
  setLogoutTimer: ({commit}, expirationTime) => {
    setTimeout(() => {
      commit('clearAuthData')
    }, expirationTime * 1000)
  },
  signup: ({commit, dispatch}, authData) => {
    axios.post('/signupNewUser?key=AIzaSyDFULdMLBvglLWLD6m2sjyJ43g_rfjcBj4', {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then(res => {
        console.log(res)
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
        })
        authData.uuid = res.data.localId
        const now = new Date()
        const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
        localStorage.setItem('token', res.data.idToken)
        localStorage.setItem('userId', res.data.localId)
        localStorage.setItem('expirationDate', expirationDate)
        //dispatch('storeUser', authData)
        dispatch('setLogoutTimer', res.data.expiresIn)
        router.push('/dashboard')

      })
      .catch(error => console.log(error))
  },
  login: ({commit, dispatch}, authData) => {
    console.log(authData)
    axios.post('/verifyPassword?key=AIzaSyDFULdMLBvglLWLD6m2sjyJ43g_rfjcBj4', {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then(res => {
        console.log(res)
        const now = new Date()
        const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
        localStorage.setItem('token', res.data.idToken)
        localStorage.setItem('userId', res.data.localId)
        localStorage.setItem('expirationDate', expirationDate)
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
        })
        dispatch('setLogoutTimer', res.data.expiresIn)
        router.push('/dashboard')

      })
      .catch(error => {//Please style below xiao :D
        console.log(error)
        console.log('login unsuccesful womp womp')
        alert('Password or username was incorrect, please try again')
      })
  },
  tryAutoLogin ({commit}) {
    const token = localStorage.getItem('token')
    if (!token) {
      return
    }
    const expirationDate = localStorage.getItem('expirationDate')
    const now = new Date()
    if (now >= expirationDate) {
      return
    }
    const userId = localStorage.getItem('userId')
    commit('authUser', {
      token: token,
      userId: userId
    })
  },
  logout: ({commit}) => {
    commit('clearAuthData')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    router.replace('/signin')
  },
  /** storeUser ({commit, state}, userData) {
      if (!state.idToken) {
        return
      }
      globalAxios.put('/users/' + userData.uuid + '/.json' + '?auth=' + state.idToken, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
   fetchUser ({commit, state}) {
      if (!state.idToken) {
        return
      }
      globalAxios.get('/users/'+state.userId+'/.json' + '?auth=' + state.idToken)
        .then(res => {
          commit('storeUser', res.data)
        })
        .catch(error => console.log(error))
    }**/
  setUser: (newUser) => {
    state.user = newUser
  }
}

export const getters = {
  user: (state) => {
    return state.user
  },
  isAuthenticated: (state) => {
    return state.idToken !== null
  }
}

export const mutations ={
  authUser: (state, userData) => {
    state.idToken = userData.token
    state.userId = userData.userId
  },
  clearAuthData: (state) => {
    state.idToken = null
    state.userId = null
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
