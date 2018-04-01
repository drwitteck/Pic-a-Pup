import Vue from 'vue'
import store from '../../../src/store.js'
// The path is relative to the project root.
import SigninPage from '../../../src/components/auth/signin.vue'

describe('SigninPage.vue', () => {
  it(`should have different text fields`, done => {
    // Extend the component to get the constructor, which we can then initialize directly.
    const Constructor = Vue.extend(SigninPage)

    const comp = new Constructor({ store
    }).$mount()
    // comp.password = '123123'
    // comp.email = 'pls@work.com'
    comp.onSubmit()
    expect(comp.password).to.equal('')
    expect(comp.email).to.equal('')
    // try to compare what is in the local store in the store.js to the user id in firebase
    done()
  })
  it(`sign in button works`, done => {
    const vm = new Vue(SigninPage).$mount()
    expect(vm.valid).to.equal(true)
    done()
  })
  it(`logs in succesfully, is redirected to dashboard`, done => {
    const Constructor = Vue.extend(SigninPage)

    const comp = new Constructor({
    }).$mount()
    done()
  })
  it(`logs in unsuccesful, pop up appears`, done => {
    const Constructor = Vue.extend(SigninPage)

    const comp = new Constructor({
    }).$mount()
    done()
  })
})
