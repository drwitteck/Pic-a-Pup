import Vue from 'vue'
// The path is relative to the project root.
import SignupPage from '../../../src/components/auth/signup.vue'
import { state, actions } from '../../../src/store.js'
import router from '../../../src/router.js'

describe('SignupPage.vue', () => {
  it(`should have different text fields`, done => {
    // Extend the component to get the constructor, which we can then initialize directly.
    const Constructor = Vue.extend(SignupPage)

    const comp = new Constructor({

    }).$mount()
    // console.log(comp.$el.textContent);
    // comp.onSubmit()
    // console.log(comp.email)
    expect(comp.email).to.equal('')
    expect(comp.password).to.equal('')
    comp.password = 'help'
    comp.email = 'plshelp@me.com'
    expect(comp.$el.textContent).to.include('Create Your Account')
    expect(comp.$el.textContent).to.include('Continue')
    expect(comp.$el.textContent).to.include('password')

    done()
  })
  it(`sign up button works`, done => {
    const Constructor = Vue.extend(SignupPage)
    const comp = new Constructor({
    }).$mount()
    expect(comp.valid).to.equal(true)
    var button = comp.$el.querySelector('.btn__content')
    var buttonContent = button.innerHTML
    expect(buttonContent).to.include('Continue')

    let componentHTML = comp.$el.innerHTML
    // console.log(componentHTML)
    // console.log(store)

    // simulate click event
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    comp._watcher.run()

    componentHTML = comp.$el.innerHTML
    // console.log(componentHTML)
    // console.log(store)

    let storeData = state
    let storeActions = actions
    // expect(state.user).to.be.null
    // console.log(storeData)
    // console.log(storeActions)
    actions.setUser('test')
    state.user.should.equal('test')
    comp.password = '123123'
    comp.email = 'plshelp@me.com'
    actions.signup({
      commit: null,
      dispatch: null
    }, {
      email: comp.email,
      password: comp.password
    })
    // console.log(state.password)
    expect(state.email).to.equal('plshelp@me.com')
    expect(state.password).to.equal('123123')
    done()
  })

  it(`account is created in firebase`, done => {
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
  it(`sign up succesful, goes to dashboard`, done => {
    const Constructor = Vue.extend(SignupPage)

    const comp = new Constructor({
    }).$mount()
    actions.signup({
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
})
