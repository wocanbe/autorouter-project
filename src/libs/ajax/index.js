import isFunction from 'lodash/isFunction'
import {instance, creat} from './ajax'
import {list, baseURL, interceptors} from '../../config/ajax'

if (isFunction(interceptors.request)) {
  instance.interceptors.request.use(interceptors.request)
}
if (isFunction(interceptors.response)) {
  instance.interceptors.response.use(interceptors.response)
}

const _ajax = creat(list, {baseURL, isStrict: true})
const ajax = function (apiName, params) {
  return _ajax(apiName, params)
}
export default ajax
