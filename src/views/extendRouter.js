import store from 'source/store'
import * as type from 'source/store/mutation-types'
function getFilter (path) {
  if (path === '') { // 首页
    return {
      // redirect: './info/'
    }
  } else {
    return {
      beforeEnter: (to, from, next) => {
        // store.commit(type.LOADING, true)
        // store.commit(type.MASK, true)
        // store.commit(type.ERR_MSG, '你尚未登录')
        next()
      }
    }
  }
}
export default getFilter
