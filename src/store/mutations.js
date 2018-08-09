import * as types from './mutation-types'

const mutations = {
  [types.MASK] (state, mask) {
    state.mask = mask
  },

  [types.ERR_MSG] (state, errMsg) {
    state.errMsg = errMsg
  },

  [types.LOADING] (state, loading) {
    state.loading = loading
  },

  [types.CLEAN] (state) {
    state.loading = false
    state.errMsg = ''
    state.mask = false
  }
}

export {mutations}
