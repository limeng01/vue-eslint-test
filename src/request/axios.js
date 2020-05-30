/* eslint-disable prettier/prettier */
import axios from "axios";

const AJAX = axios.create({
    baseURL: 'http://172.16.0.208:8886',
    timeout: 30000,
    // withCredentials: env.credential,
});

// 添加请求拦截器
AJAX.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    let token;
    if (localStorage.token) {
        token = localStorage.token;
        config.headers.token = token;
    } else {
        console.log('没有 token')
    }

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
AJAX.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    const { code } = { ...response.data }
    switch (code) {
        case '500':
            console.log('服务器错误')
            break;
    }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 定义对外Get、Post、File请求
export default {
    get(url, param, headers = {}) {
        return AJAX.get(url, {
            params: {
                ...param,
            },
            headers,
        });
    },
    post(url, param, headers = {}) {
        return AJAX.post(
            url,
            {
                ...param,
            },
            {
                ...headers,
            }
        );
    },
    put(url, param = null, headers = {}) {
        return AJAX.put(url, param, {
            headers,
        });
    },
    file(url, param = null, headers = {}) {
        return AJAX.post(url, param, {
            headers: Object.assign(
                {
                    "Content-Type": "multipart/form-data",
                },
                headers
            ),
        });
    },
    delete(url, param = null, headers = {}) {
        return AJAX.delete(url, {
            param,
            headers: Object.assign(
                {
                    "Content-Type": "multipart/form-data",
                },
                headers
            ),
        });
    },
};
