import Vue from 'vue'
import { state, actions } from '../../../src/store.js'
import router from '../../../src/router.js'

// The path is relative to the project root.
import SigninPage from '../../../src/components/auth/signin.vue'

describe('SigninPage.vue', () => {

  it(`should have different text fields`, done => {
    // Extend the component to get the constructor, which we can then initialize directly.
    const Constructor = Vue.extend(SigninPage)
    const store = Vue.extend({
    })

    const comp = new Constructor({ store
    }).$mount()
    // comp.password = '123123'
    // comp.email = 'pls@work.com'
    comp.onSubmit()
    expect(comp.password).to.equal('')
    expect(comp.email).to.equal('')
    console.log(comp.$el.textContent)
    // try to compare what is in the local store in the store.js to the user id in firebase
    expect(comp.$el.textContent).to.include('contact_mail')
    expect(comp.$el.textContent).to.include('Login')
    expect(comp.$el.textContent).to.include('Password')
    done()
  })
  it(`login button works`, done => {
    // const comp = new Vue(SigninPage).$mount()
    const Constructor = Vue.extend(SigninPage)
    const comp = new Constructor({
    }).$mount()
    expect(comp.valid).to.equal(true)
    var button = comp.$el.querySelector('.btn__content')
    var buttonContent = button.innerHTML
    expect(buttonContent).to.include('Login')
    expect(buttonContent).to.include('icon material-icons">send')

    let componentHTML = comp.$el.innerHTML
    console.log(componentHTML)
    // console.log(store)

    // simulate click event
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    comp._watcher.run()

    componentHTML = comp.$el.innerHTML
    console.log(componentHTML)
    // console.log(store)

    let storeData = state
    let storeActions = actions
    expect(state.user).to.be.null
    console.log(storeData)
    console.log(storeActions)
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
    console.log(state.password)
    expect(state.email).to.equal('pls@work.com')
    expect(state.password).to.equal('123123')
    done()
  })
  it(`logs in successfully, is redirected to dashboard`, done => {
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
      console.log('html:', vm.$el)
      expect(vm.$el.textContent).to.include('overview')
    })
    done()
  })
  it(`logs in unsuccessful, pop up appears`, done => {
    const Constructor = Vue.extend(SigninPage)

    const comp = new Constructor({
    }).$mount()

    let storeData = state
    let storeActions = actions

    console.log(storeData)
    console.log(storeActions)

    comp.password = 'wrongpassword'
    comp.email = 'pls@work.com'

    actions.login({
      commit: null,
      dispatch: null
    }, {
      email: comp.email,
      password: comp.password
    })
    state.error = true
    console.log(state.password)
    expect(state.error).to.equal(true)

    done()
  })
  it(`Authentication was successful`, done => {
    const Constructor = Vue.extend(SigninPage)
    const comp = new Constructor({
    }).$mount()

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

    let storeData = state
    let storeActions = actions

    console.log(storeData)
    console.log(storeActions)

    state.userId = '6NSspNCP0ZRzJ0GcD2MDn1x5stg1'

    setTimeout(function () {
      console.log('state user id:' + state.userId)
      expect(state.userId).to.equal('6NSspNCP0ZRzJ0GcD2MDn1x5stg1')
      done()
    }, 1000)
  })
})
