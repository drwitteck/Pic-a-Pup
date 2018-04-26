import Vue from 'vue'
import ParkPage from '../../../src/components/dashboard/features/park.vue'
import router from '../../../src/router.js'
import * as VueGoogleMaps from 'vue2-google-maps'

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
    expect(buttonContent).to.include('Find Parks')

    let componentHTML = comp.$el.innerHTML
    // console.log(componentHTML)

    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    comp._watcher.run()

    done()
  })

  it(`Set place`, done => {
    const Constructor = Vue.extend(ParkPage)
    const comp = new Constructor({
      router
    }).$mount()
    expect(comp.place).to.be.null
    comp.setPlace('stuff')
    expect(comp.place).to.include('stuff')

    done()
  })
  it(`use place`, done => {
    const Constructor = Vue.extend(ParkPage)
    const comp = new Constructor({
      router
    }).$mount()

    var defaultPlace = {
      geometry: {
        location: {
          lat: function () {
            return 39.980116
          },
          lng: function () {
            return -75.158541
          }
        }
      },
      name: 'liacourse center'
    }

    expect(comp.center.lat).to.equal(39.9818)
    expect(comp.center.lng).to.equal(-75.1531)
    expect(comp.markers).to.eql([])
    comp.place = defaultPlace
    comp.usePlace()
    expect(comp.center.lat).to.equal(39.980116)
    expect(comp.center.lng).to.equal(-75.158541)
    /*
    expect(comp.markers[0]).to.eql({
      position: {
        lat: 39.980116,
        lng: -75.158541
      },
      infoText: 'liacourse center'
    })
    */
    done()
  })
  it(`toggle info window`, done => {
    const Constructor = Vue.extend(ParkPage)
    const comp = new Constructor({
      router
    }).$mount()
    var defaultPlace = {
      geometry: {
        location: {
          lat: function () {
            return 39.980116
          },
          lng: function () {
            return -75.158541
          }
        }
      },
      name: 'liacourse center'
    }
    expect(comp.center.lat).to.equal(39.9818)
    expect(comp.center.lng).to.equal(-75.1531)
    expect(comp.markers).to.eql([])
    comp.place = defaultPlace
    comp.usePlace()

    // expect(comp.center.lat).to.equal(39.980116)
    expect(comp.center.lng).to.equal(-75.158541)
    /* expect(comp.markers[0]).to.eql({
      position: {
        lat: 39.980116,
        lng: -75.158541
      },
      infoText: 'liacourse center'
    })
    */
    // comp.toggleInfoWindow(comp.markers[0], 0)

    Vue.nextTick(() => {
      // console.log('html:', comp.$el)
      const popup = comp.$el.querySelector('.card__title--primary')
      var popupContent = popup.innerText
      expect(popupContent).to.include('liacourse center')
    })
    done()
  })

  it(`searchforparks`, done => {
    Vue.use(VueGoogleMaps, {
      load: {
        key: 'AIzaSyDEMdUkBIXXSOoY2a-Sklz6TkgaREdtOo8',
        libraries: 'places'
      }
    })

    const Constructor = Vue.extend(ParkPage)

    const comp = new Constructor({
      router
    }).$mount()
    comp.place = {
      geometry: {
        location: {
          lat: function () {
            return 39.980116
          },
          lng: function () {
            return -75.158541
          }
        }
      },
      name: 'liacourse center'
    }
    expect(comp.markers).to.eql([])
    comp.usePlace(comp.place)
    //comp.searchForParks()
    expect(comp.markers).to.be.not.null
    done()
  })
})
