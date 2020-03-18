import axios from 'axios';
import cookie from 'js-cookie';
// import utils from 'src/util/index';
// 根据环境区分接口访问地址
const API_BASE_URL = process.env.NODE_ENV === 'development' ? 'http://47.110.145.3:8010' : 'http://47.110.145.3:8011'
// const CancelToken = axios.CancelToken;
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 超时时间
  responseType: 'json', // default
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: status => status === 200,
});
// 取消请求
// const pendingList = [];
// const removePending = (config, cancel) => {
//   const flagUrl = `${config.url}&${config.method}`;
//   if (pendingList.includes(flagUrl)) {
//     if (cancel) {
//       if (config.ignoreSelfConcurrent) {
//         cancel(); // 执行取消操作
//       }
//     } else {
//       pendingList.splice(pendingList.indexOf(flagUrl), 1);// 把这条记录从数组中移除
//     }
//   } else if (cancel) {
//     pendingList.push(flagUrl);
//   }
// };
const domain = `.${document.domain.split('.').slice(-2).join('.')}`;
api.interceptors.request.use(
  config => {
    const token = cookie.get('token', { domain: domain });
    if (token) {
      config.headers.token = token;
    }
    // config.cancelToken = new CancelToken((cancel) => {
    //   removePending(config, cancel);
    // });
    return config;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  res => {
    // removePending(res.config);
    if (res.headers['content-type'] && res.headers['content-type'].indexOf('application/x-download') !== -1) {
      return res;
    }
    if (res.config && res.config.responseType === 'arraybuffer') {
      return res;
    }
    return false;
  },
  () => {
    console.error('网络出错，请稍后再试~');
    return Promise.reject();
  }
);

export default api;
