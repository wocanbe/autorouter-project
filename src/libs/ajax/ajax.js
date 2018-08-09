import axios from 'axios'
import isString from 'lodash/isString'
import isObject from 'lodash/isObject'

const instance = axios.create()
const prefetch = (url, params) => {
  // 在请求发出之前进行一些操作
  const hasURLRegex = /:(\w+)/
  let urlPat = url.match(hasURLRegex)
  while (urlPat !== null) {
    url = url.replace(urlPat[0], params[urlPat[1]])
    urlPat = url.match(hasURLRegex)
  }
  return url
}

const creat = function (apiConfg, extendConfig) {
  const {baseURL, publicParams} = extendConfig
  let isStrict = true
  if (typeof extendConfig.isStrict === 'boolean') isStrict = extendConfig.isStrict
  let config = null
  if (apiConfg) {
    config = apiConfg
    let useURL = '/api'
    if (isString(baseURL)) {
      if (process.env.NODE_ENV !== 'development') useURL = baseURL
    } else if (isObject(baseURL)) {
      if (process.env.NODE_ENV === 'development') {
        if (baseURL.dev) useURL = baseURL.dev
      } else {
        useURL = baseURL.prod || ''
      }
    }
    instance.defaults.baseURL = useURL
  } else {
    throw new Error('缺少api接口配置')
  }
  // const CancelToken = axios.CancelToken
  // console.log(CancelToken.source())
  // const cancelTokens = []

  const Ajax = (apiName, params) => new Promise((resolve, reject) => {
    let localConfig
    if (typeof apiName === 'string') {
      localConfig = config[apiName]
      if (!localConfig) {
        reject(new Error(`接口${apiName}未配置`))
        return
      }
    } else if (isStrict) {
      reject(new Error('接口参数类型错误'))
      return
    } else if (typeof apiName === 'object') {
      localConfig = apiName
    } else {
      reject(new Error('接口参数类型错误'))
      return
    }
    if (localConfig.url && localConfig.method) {
      const method = localConfig.method.toLocaleLowerCase()
      // const cancelToken = CancelToken.source()
      // cancelTokens.push(cancelToken.cancel)
      const reqConfig = {
        url: localConfig.url,
        // cancelToken: cancelToken.token,
        // cancelToken: new CancelToken(c => {
        //   cancelTokens.push(c)
        // }),
        method
      }
      if (localConfig.timeout) Object.assign(reqConfig, {timeout: localConfig.timeout})
      let useParams = params
      if (typeof params === 'object') {
        if (publicParams) useParams = Object.assign({}, publicParams(), params)
        reqConfig.url = prefetch(localConfig.url, useParams)
      }
      if (method === 'get') {
        Object.assign(reqConfig, {params: useParams})
      } else {
        Object.assign(reqConfig, {data: useParams})
      }
      instance.request(reqConfig).then((res) => {
        let status = res.status
        let data = res.data
        if (status === undefined) {
          status = res.response.status
          data = res.response.data
        }
        if (status === 200) {
          resolve(data)
        } else {
          reject(new Error('网路错误，状态码：' + status))
        }
      }).catch((err) => {
        reject(err)
      })
    } else {
      reject(new Error('api接口配置错误'))
    }
  })
  return Ajax
}
export {instance, creat}
