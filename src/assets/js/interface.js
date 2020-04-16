import axios from 'axios';

export default class AxiosRequest {
  constructor(options = {}) {
    options.withCredentials = options.withCredentials || true;
    options.timeout = options.timeout || 6000;
    this.options = options;
  }

  request(opt) {
    const options = Object.assign(this.options, opt);
    return new Promise((resolve, reject) => {
      axios(options).then((res) => {
        if (res.status === 200) {
          if (res.data && res.data.code === 0) {
            resolve(res.data.data);
          } else {
            reject(res.data);
          }
        } else {
          // eslint-disable-next-line
          reject({
            errno: res.status,
            errmsg: res.statusText,
            data: {},
          });
        }
      }).catch((err) => {
        // eslint-disable-next-line
        reject({
          errno: -1111,
          errmsg: (err && err.message) ? err.message : 'unknow error',
          data: {},
        });
      });
    });
  }

  get(url, opt) {
    const options = Object.assign(this.options, opt, {
      url,
      method: 'get',
    });

    options.params = Object.assign({}, options.params, {
      token: this.token,
      _: new Date().getTime(),
    });
    return this.request(options);
  }

  post(url, opt) {
    const options = Object.assign({}, this.options, opt, {
      url,
      method: 'post',
    });
    // post请求把参数放到body中
    let { params } = options;
    let paramsStr = '';
    for (const i in params) {
      paramsStr += `${i}=${params[i]}&`;
    }
    const data = new URLSearchParams(paramsStr);
    data.append('_', new Date().getTime());
    options.data = data;
    delete options.params;

    return this.request(options);
  }
}
