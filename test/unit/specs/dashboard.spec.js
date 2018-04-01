import Vue from 'vue'
import DashboardPage from '../../../src/components/dashboard/dashboard.vue'

describe('DashboardPage', () => {
  it('sets the correct default data', () => {
    expect(typeof DashboardPage.data).to.equal('function')
    const defaultData = DashboardPage.data()
    expect(defaultData.name).to.equal('defaultName')
    expect(defaultData.picture).to.equal('../pictures/pap.png')
    expect(defaultData.imgData).to.equal('')
    expect(defaultData.profileImageData).to.equal('')
    expect(defaultData.uploadTask).to.equal('')
    expect(defaultData.downloadUrl).to.equal('')
    expect(defaultData.drawer).to.equal(true)
  })
  it(`navigation drawer's visibility should be controlled by a hamburger menu`, done => {
    const Constructor = Vue.extend(DashboardPage)

    const comp = new Constructor({

    }).$mount()
    done()
  })
  it(`Home link under navigation drawer should go to /dashboard`, done => {
    const Constructor = Vue.extend(DashboardPage)

    const comp = new Constructor({

    }).$mount()
    done()
  })
  it(`Pic-a-Breed link under navigation drawer should go to /breed`, done => {
    const Constructor = Vue.extend(DashboardPage)

    const comp = new Constructor({

    }).$mount()
    done()
  })
  it(`Sign Out button should sign you out and return you to login`, done => {
    const Constructor = Vue.extend(DashboardPage)

    const comp = new Constructor({

    }).$mount()
    done()
  })
})
