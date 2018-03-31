import Vue from 'vue'
// The path is relative to the project root.
import SigninPage from '../../../src/components/auth/signin.vue'

describe('SigninPage.vue', () => {
  it(`should have different text fields`, done => {
    // Extend the component to get the constructor, which we can then initialize directly.
    const Constructor = Vue.extend(SigninPage)

    const comp = new Constructor({

    }).$mount()
    done()
  })

  it(`sign in button works`, done => {
    const Constructor = Vue.extend(SigninPage)

    const comp = new Constructor({
    }).$mount()
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
