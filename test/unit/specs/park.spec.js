import Vue from 'vue'
import ParkPage from '../../../src/components/dashboard/features/park.vue'
import router from '../../../src/router.js'

describe('Park.vue', () => {
  it('sets the correct default data', () => {
    const Constructor = Vue.extend(ParkPage)
    const comp = new Constructor({}).$mount()
    expect(typeof ParkPage.data).to.equal('function')
    const defaultData = ParkPage.data()
    expect(defaultData.center.lat).to.equal(39.9818)
    expect(defaultData.center.lng).to.equal(-75.1531)
    expect(defaultData.markers).to.eql([])
    expect(defaultData.map).to.equal('')
    expect(defaultData.place).to.equal(null)
    expect(defaultData.currentPlaceLat).to.equal('')
    expect(defaultData.currentPlaceLng).to.equal('')
    expect(defaultData.country).to.eql([{ text: 'US' }, { text: 'Hi' }, { text: 'Hi' }, { text: 'HI' }])
  })

  it(`Find button is working`, done => {
    const Constructor = Vue.extend(ParkPage)
    const comp = new Constructor({
      router
    }).$mount()
    expect(comp).to.not.equal(null)

    const button = comp.$el.querySelector('.btn__content')
    var buttonContent = button.innerHTML
    expect(buttonContent).to.include('Find')

    let componentHTML = comp.$el.innerHTML
    console.log(componentHTML)

    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    comp._watcher.run()

    done()
  })

  it(`parks button is working`, done => {
    const Constructor = Vue.extend(ParkPage)
    const comp = new Constructor({
      router
    }).$mount()
    expect(comp).to.not.equal(null)

    const buttons = comp.$el.querySelectorAll('.btn__content')
    const parkButton = buttons[1]
    var buttonContent = parkButton.innerText
    expect(buttonContent).to.include('Parks')

    let componentHTML = comp.$el.innerHTML
    console.log(componentHTML)

    const clickEvent = new window.Event('click')
    parkButton.dispatchEvent(clickEvent)
    comp._watcher.run()

    done()
  })
  it(`Set place`, done => {
    const Constructor = Vue.extend(ParkPage)
    const comp = new Constructor({
      router
    }).$mount()
    done()
  })
  it(`use place`, done => {
    const Constructor = Vue.extend(ParkPage)
    const comp = new Constructor({
      router
    }).$mount()
    done()
  })

  it(`searchforparks`, done => {
    const Constructor = Vue.extend(ParkPage)
    const comp = new Constructor({
      router
    }).$mount()
    done()
  })
})
