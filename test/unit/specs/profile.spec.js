import Vue from 'vue'
import ProfilePageinfo from '../../../src/components/profile/profileinfo.vue'

describe('DashboardPage.vue', () => {
  it('sets the correct default data', () => {
    const Constructor = Vue.extend(ProfilePageinfo)
    const comp = new Constructor({}).$mount()
    expect(typeof ProfilePageinfo.data).to.equal('function')
    const defaultData = ProfilePageinfo.data()
    expect(defaultData.name).to.equal('')
    expect(defaultData.profilepicture).to.equal('')
    expect(defaultData.zipcode).to.equal('')
    expect(defaultData.email).to.equal('')
    expect(defaultData.phoneNumber).to.equal('')
    expect(defaultData.country).to.equal('')
    expect(defaultData.state).to.equal('')
    expect(defaultData.city).to.equal('')
    expect(defaultData.userProvideServices).to.equal('')
    expect(defaultData.provideServices.walker).to.equal(false)
    expect(defaultData.provideServices.trainer).to.equal(false)
    expect(defaultData.provideServices.sitter).to.equal(false)
    expect(defaultData.userWantServices).to.equal('')
    expect(defaultData.wantServices.walker).to.equal(false)
    expect(defaultData.wantServices.trainer).to.equal(false)
    expect(defaultData.wantServices.sitter).to.equal(false)
  })
})
