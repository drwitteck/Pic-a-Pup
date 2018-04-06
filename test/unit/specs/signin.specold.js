import Vue from 'vue'
import store from '../../../src/store.js'

// The path is relative to the project root.
import SigninPage from '../../../src/components/auth/signin.vue'

describe('SigninPage.vue', () => {
  it(`login button works`, done => {
    // const comp = new Vue(SigninPage).$mount()
    const Constructor = Vue.extend(SigninPage)
    const comp = new Constructor({store
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

    expect(store.state.user).to.be.null
    store.actions.setUser('test')
    store.state.user.should.equal('test')
    comp.password = '123123'
    comp.email = 'pls@work.com'
    store.actions.login({
      commit: null,
      dispatch: null
    }, {
      email: comp.email,
      password: comp.password
    })
    console.log(store.state.password)
    expect(store.state.email).to.equal('pls@work.com')
    expect(store.state.password).to.equal('123123')
    done()
  })
})
