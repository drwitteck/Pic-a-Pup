import Vue from 'vue'
import DashboardPage from '../../../src/components/dashboard/dashboard.vue'
import router from '../../../src/router.js'

describe('DashboardPage.vue', () => {
  it('sets the correct default data', done => {

    const Constructor = Vue.extend(DashboardPage)
    const comp = new Constructor({
    }).$mount()
    expect(typeof DashboardPage.data).to.equal('function')
    const defaultData = DashboardPage.data()
    expect(defaultData.name).to.equal('defaultName')
    expect(defaultData.picture).to.equal('../pictures/pap.png')
    expect(defaultData.imgData).to.equal('')
    expect(defaultData.profileImageData).to.equal('')
    expect(defaultData.uploadTask).to.equal('')
    expect(defaultData.downloadUrl).to.equal('')
    expect(defaultData.drawer).to.equal(true)

    done()
  })
  it(`Home link under navigation drawer should go to /dashboard`, done => {
    const Constructor = Vue.extend(DashboardPage)
    const comp = new Constructor({ router
    }).$mount()
    expect(comp).to.not.equal(null)
    const button = comp.$el.querySelector('.btn__content')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    comp._watcher.run()

    const vm = new Vue({
      el: document.createElement('div'),
      router: router,
      render: h => h('router-view')
    })

    router.push({name: '/dashboard'})

    Vue.nextTick(() => {
      console.log('html:', vm.$el)
      expect(vm.$el.textContent).to.include('dashboard')
    })
    done()
  })

  it(`Pic-a-Breed link under navigation drawer should go to /breed`, done => {
    const Constructor = Vue.extend(DashboardPage)

    const comp = new Constructor({ router
    }).$mount()
    expect(comp).to.not.equal(null)
    const button = comp.$el.querySelector('.btn__content')

    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent);
    comp._watcher.run()

    const vm = new Vue({
      el: document.createElement('div'),
      router: router,
      render: h => h('router-view')
    })

    router.push({name: '/breed'})

    Vue.nextTick(() => {
      console.log('html:', vm.$el)
      expect(vm.$el.textContent).to.include('breed')
    })
    done()
  })

  it(`Sign Out button should sign you out and return you to /login`, done => {
    const Constructor = Vue.extend(DashboardPage)

    const comp = new Constructor({ router
    }).$mount()
    expect(comp).to.not.equal(null)
    const button = comp.$el.querySelector('.btn__content')

    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent);
    comp._watcher.run()

    const vm = new Vue({
      el: document.createElement('div'),
      router: router,
      render: h => h('router-view')
    })

    router.push({name: '/signin'})

    Vue.nextTick(() => {
      console.log('html:', vm.$el)
      expect(vm.$el.textContent).to.include('Login')
    })
    done()
  })
})
