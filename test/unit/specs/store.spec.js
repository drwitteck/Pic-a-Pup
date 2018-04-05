import Vue from 'vue'
import { state, actions } from '../../../src/store.js'

describe('store test', () => {
  beforeEach(() => {
    actions.setUser(null)
  })

  it('works', () => {
    let storeData = state
    let storeActions = actions
    expect(state.user).to.be.null
    console.log(storeData)
    console.log(storeActions)
    actions.setUser('test')
    state.user.should.equal('test')
  })
})
