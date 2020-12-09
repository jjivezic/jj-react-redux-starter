import axios from 'axios';
import { localStorageService } from './localStorage.service';
import { url } from '../environment';

axios.interceptors.response.use((response) => {
    // Returns response body
    return response.data
}, async (error) => {
    // Handle response error
    _handleError(error)
    return Promise.reject(error)
    // }
})
// const refreshToken = async (err) => {
//     let response = await apiRequest('get', 'user/token/refreshToken');
//     if (response) {
//         sessionService.updateUser(response);
//         let cutUrl = getRoute(err.config.url, '/', 3);
//         let url = err.config.url.slice(cutUrl + 1);
//         let data = (err.config.data ? JSON.parse(err.config.data) : null)
//         return await apiRequest(err.config.method, url, data);
//     } else {
//         _handleError(err);
//     }
// }

// const getRoute = (string, subString, index) => {
//     return string.split(subString, index).join(subString).length;
// }
const apiRequest = async (method, apiUrl, body, headers) => {
    try {
        const apiToken = localStorageService.getSessionToken()
        const refreshToken = localStorageService.getSessionRefreshToken()
        const requestHeaders = (!headers) ? {} : headers
        if (apiToken) requestHeaders['x-access-token'] = apiToken;
        if (refreshToken) requestHeaders['x-refresh-access-token'] = refreshToken;
        if (method === 'get' || method === 'delete') return axios[method](url + apiUrl, { headers: requestHeaders })
        else if (method === 'post' || method === 'put' || method === 'patch') return axios[method](url + apiUrl, body, { headers: requestHeaders })
    } catch (err) {
        _handleError(err)
    }
}

const outsideRequest = async (method, url, body, headers) => {
    try {
        const requestHeaders = (!headers) ? {} : headers
        if (method === 'get' || method === 'delete') return axios[method](url, { headers: requestHeaders })
        else if (method === 'post' || method === 'put') return axios[method](url, body, { headers })
    } catch (err) {
        _handleError(err)
    }
}

const _handleError = async (err) => {
    if (err && err.response) {
        if (err.response.status === 403) {
            localStorage.destroy();
            window.location.replace('/');
        }
        let errorText;
        if (err.response.data && err.response.data.error && err.response.data.error.message) {
            errorText = err.response.data.error.message
        } else {
            errorText = err.response.statusText
        }
        // ToastService.show('error', errorText)
    }

    return err;
}

export default {
    apiRequest,
    outsideRequest
}