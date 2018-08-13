import Vue from 'vue'
import Vuex from 'vuex'
import {getters} from './getters'
import {mutations} from './mutations'
import actions from './actions'
import login from './modules/login'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    errMsg: '',
    mask: false,
    loading: false,
    msg: 'The demo of vue auto router'
  },
  getters,
  mutations,
  actions,
  modules: {
    login,
  },
  strict: debug
})
