import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import * as type from '../store/mutation-types'
import autorouter from './view.autorouter'

console.log(autorouter)

Vue.use(Router)

const router = new Router({
  // moautorouter: 'history',
  // base: '/luck7/',
  // linkActiveClass: 'on',
  routes: [
    autorouter
  ]
})

router.beforeEach((to, from, next) => {
  // 进入新页面，清除上个页面的页面状态(error,loading等)
  store.commit(type.CLEAN)
  if (to.fullPath === '/login') {
    next(true)
  } else {
    // 判断是不是已经登陆
    const noLogin = window.sessionStorage.getItem('userid') === null
    const nextRoute = noLogin ? {path: '/login'} : true
    next(nextRoute)
  }
})

export default router
