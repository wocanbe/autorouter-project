const list = {
  demo1: {
    method: 'GET',
    url: '/mock1'
  },
  //  使用请求超时
  demo2: {
    method: 'post',
    url: '/mock2',
    timeout: 1000
  },
  // 使用URL参数（:path）
  demo3: {
    method: 'post',
    url: '/:id/mock3'
  },
  loginin: {
    url: '/loginin',
    method: 'post'
  }
}
const baseURL = {
  dev: '/mock',
  prod: 'http://localhost:8888/mock'
}
const interceptors = {
  request (request) {
    const userid = sessionStorage.getItem('userid')
    const token = sessionStorage.getItem('token')

    if (request.method === 'get') {
      request.params = Object.assign({userid, token}, request.params)
    } else {
      request.data = Object.assign({userid, token}, request.data)
    }
    return request
  }
}
export {list, baseURL, interceptors}
