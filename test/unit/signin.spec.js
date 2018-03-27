import Vue from 'vue';
// The path is relative to the project root.
import SignupPage from '../../src/components/auth/signup.vue';

describe('SignupPage.vue', () => {
  it(`should render a div`, () => {
    // Extend the component to get the constructor, which we can then initialize directly.
    const Constructor = Vue.extend(SignupPage);

    const comp = new Constructor({

    }).$mount();

    expect(comp.$el.textContent)
      .to.equal('Test Text');
  });
});
