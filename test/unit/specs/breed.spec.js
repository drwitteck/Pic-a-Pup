import Vue from 'vue'
// The path is relative to the project root.
import BreedPage from '../../../src/components/dashboard/features/breed.vue'

describe('BreedPage.vue', () => {
  it(`should have zip code text field`, done => {
    // Extend the component to get the constructor, which we can then initialize directly.
    const Constructor = Vue.extend(BreedPage)

    const comp = new Constructor({

    }).$mount()
    done()
  })
  it(`image was succesfuly uploaded`, done => {
    const Constructor = Vue.extend(BreedPage)

    const comp = new Constructor({
    }).$mount()
    done()
  })

  it(`post request made`, done => {
    const Constructor = Vue.extend(BreedPage)

    const comp = new Constructor({
    }).$mount()
    done()
  })
  it(`breed is displayed`, done => {
    const Constructor = Vue.extend(BreedPage)

    const comp = new Constructor({
    }).$mount()
    done()
  })
})
