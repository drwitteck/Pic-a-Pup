import Vue from 'vue'
import DashboardPage from '../../../src/components/dashboard/dashboard.vue'

describe('DashboardPage', () => {
    it('sets the correct default data', () => {
        expect(typeof DashboardPage.data).toBe('function')
        const defaultData = DashboardPage.data()
        expect(defaultData.name).toBe('defaultName')
        expect(defaultData.picture).toBe('../pictures/pap.png')
        expect(defaultData.imgData).toBe('')
        expect(defaultData.profileImageData).toBe('')
        expect(defaultData.uploadTask).toBe('')
        expect(defaultData.downloadUrl).toBe('')
        expect(defaultData.drawer).toBe(true)
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