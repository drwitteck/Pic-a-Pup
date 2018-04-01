import Vue from 'vue'
// The path is relative to the project root.
import SignupPage from '../../../src/components/auth/signup.vue'

describe('SignupPage.vue', () => {
  it(`should have different text fields`, done => {
    // Extend the component to get the constructor, which we can then initialize directly.
    const Constructor = Vue.extend(SignupPage)

    const comp = new Constructor({

    }).$mount()
    // console.log(comp.$el.textContent);
    console.log(comp.email)
    expect(comp.email).to.equal('')
    expect(comp.password).to.equal('')
    comp.password = 'help'
    comp.email = 'hecks@me.com'

    /*
    console.log(comp.$el.textContent)
    Vue.nextTick(() => {
      expect(comp.textContent)
        .to.equal('poophecks@me.com')
    })
    console.log(comp.$el.textContent)
    //expect(wrapper.find('.password').text()).toEqual('help')
    done()
    */
    done()
  })
  it(`sign up button works`, done => {
    const Constructor = Vue.extend(SignupPage)

    const comp = new Constructor({
    }).$mount()
    done()
  })

  it(`account is created in firebase`, done => {
    const Constructor = Vue.extend(SignupPage)

    const comp = new Constructor({
    }).$mount()
    done()
  })
  it(`sign up succesful, goes to dashboard`, done => {
    const Constructor = Vue.extend(SignupPage)

    const comp = new Constructor({
    }).$mount()
    done()
  })
})
