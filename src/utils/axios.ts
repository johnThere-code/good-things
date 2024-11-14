// src/utils/axios.ts
import axios, { AxiosRequestConfig } from 'axios';

// 创建 axios 实例
const instance = axios.create({
  baseURL: 'http://manghe.honghukeji.net:6789', // 设置你的基础 URL
  timeout: 5000, // 设置请求超时时间
});
// 请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 强制转换为 InternalAxiosRequestConfig
    const configInternal = config as any; // 或者 config as InternalAxiosRequestConfig<any>;

    // 在请求发起之前，可以加上 token 或者修改请求头等
    const token = localStorage.getItem('token'); // 从本地存储中获取 token
    if (token) {
      configInternal.headers['Token'] = `${token}`; // 添加 Authorization 头部
    }

    return configInternal; // 返回更新后的 config
  },
  (error) => {
    // 请求错误的处理
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response; // 返回响应数据
  },
  (error) => {
    return Promise.reject(error); // 返回错误
  }
);

// 导出 axios 实例
export default instance;
