import * as types from '../mutation-types'
import ajax from '../../libs/ajax/'

const state = {
  loginData: {
    rem: false,
    autoVal: false
  }
}
const getters = {}

const actions = {
  loginin (context, params) {
    return new Promise((resolve, reject) => {
      ajax('loginin', params).then((res) => {
        context.commit(types.LOGIN_DATA, res)
        resolve()
      }).catch(err => {
        context.commit(types.ERR_MSG, '登录失败，错误详情：' + err.message)
        reject(err)
      })
    })
  }
}

const mutations = {
  [types.LOGIN_DATA] (state, loginData) {
    state.loginData = loginData
    window.sessionStorage.setItem('userid', loginData.id)
    window.sessionStorage.setItem('token', loginData.token)
    window.sessionStorage.setItem('role', loginData.role)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
