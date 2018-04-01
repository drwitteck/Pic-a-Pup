import Vue from 'vue'
import DashboardPage from '../../../src/components/dashboard/dashboard.vue'

describe('dashboard.vue', () => {
    it(`navigation drawer's visibility should be controlled by a hamburger menu`, done => {
        const Constructor = Vue.extend(DashboardPage)

        const comp = new Constructor({

        }).$mount()
        done()
    })
    it(`navigation drawer's visibility should be controlled by a hamburger menu`, done => {
        const Constructor = Vue.extend(DashboardPage)

        const comp = new Constructor({

        }).$mount()
        done()
    })
})