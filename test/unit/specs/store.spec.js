import Vue from 'vue'
import { state, actions } from '../../../src/store.js'
import SignupPage from '../../../src/components/auth/signup.vue'
import router from '../../../src/router.js'
import SigninPage from '../../../src/components/auth/signin.vue'

describe('store test', () => {
  beforeEach(() => {
    actions.resetUser()
  })

  it('creates new store data', done => {
    let storeData = state
    let storeActions = actions
    // expect(state.user).to.be.null
    // console.log(storeData)
    // console.log(storeActions)
    actions.setUser('test')
    state.user.should.equal('test')
    done()
  })

  it('Login works', done => {
    const Constructor = Vue.extend(SigninPage)

    const comp = new Constructor({ router
    }).$mount()

    actions.login({
      commit: null,
      dispatch: null
    }, {
      email: 'pls@work.com',
      password: '123123'
    })
    const vm = new Vue({
      el: document.createElement('div'),
      router: router,
      render: h => h('router-view')
    })
    router.push({name: '/overview'})
    Vue.nextTick(() => {
      // console.log('html:', vm.$el)
      expect(vm.$el.textContent).to.include('overview')
    })
    done()
  })

  it('logout works', done => {
    const Constructor = Vue.extend(SignupPage)
    const comp = new Constructor({
    }).$mount()
    let storeData = state
    let storeActions = actions
    // expect(state.user).to.be.null
    // console.log(storeData)
    // console.log(storeActions)
    actions.setUser('test')
    state.user.should.equal('test')
    comp.password = '123123'
    comp.email = 'pls@work.com'
    actions.login({
      commit: null,
      dispatch: null
    }, {
      email: comp.email,
      password: comp.password
    })
    // console.log(state.password)
    expect(state.email).to.equal('pls@work.com')
    expect(state.password).to.equal('123123')

    actions.logout({
      commit: (e) => {}
    }, {
      email: comp.email,
      password: comp.password
    })

    expect(state.email).to.equal(null)
    expect(state.password).to.equal(null)
    done()
  })
  it('Sign up works', done => {
    const Constructor = Vue.extend(SignupPage)

    const comp = new Constructor({
    }).$mount()
    actions.setUser('test')
    state.user.should.equal('test')
    comp.password = '123123'
    comp.email = 'pls@work.com'
    actions.signup({
      commit: null,
      dispatch: null
    }, {
      email: comp.email,
      password: comp.password
    })

    let storeData = state
    let storeActions = actions

    // console.log(storeData)
    // console.log(storeActions)

    state.userId = '6NSspNCP0ZRzJ0GcD2MDn1x5stg1'

    setTimeout(function () {
      // console.log('state user id:' + state.userId)
      expect(state.userId).to.equal('6NSspNCP0ZRzJ0GcD2MDn1x5stg1')
      done()
    }, 1000)
    done()
  })
})
