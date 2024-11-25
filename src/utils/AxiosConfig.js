import axios from 'axios';
import { API_BASE_URL } from '../services/config';
import Cookies from 'js-cookie';
import AuthService from '../services/auth.service';
import { toast } from 'react-toastify';

const AxiosConfig = axios.create({
    baseURL: API_BASE_URL,
});

AxiosConfig.interceptors.request.use(
    (config) => {
        const accessToken = Cookies.get('accessToken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

let isRefreshing = false;
let refreshSubscribers = [];

const addSubscriber = (callback) => {
    refreshSubscribers.push(callback);
};

const onRefreshed = (newAccessToken) => {
    refreshSubscribers.forEach((callback) => callback(newAccessToken));
    refreshSubscribers = [];
};

AxiosConfig.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401) {
            const refreshToken = Cookies.get('refreshToken');

            if (!refreshToken || originalRequest.url === '/auth/refresh-token') {
                console.error('Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại.');
                Cookies.remove('accessToken');
                Cookies.remove('refreshToken');
                Cookies.remove('userData');
                window.location.href = '/sign-in';
                return Promise.reject(error);
            }

            if (isRefreshing) {
                return new Promise((resolve) => {
                    addSubscriber((newAccessToken) => {
                        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                        resolve(AxiosConfig(originalRequest));
                    });
                });
            }

            isRefreshing = true;

            return AuthService.refreshToken(refreshToken)
                .then((response) => {
                    const newAccessToken = response.tokens.access.token;
                    Cookies.set('accessToken', newAccessToken);
                    AxiosConfig.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                    onRefreshed(newAccessToken);

                    return AxiosConfig(originalRequest);
                })
                .catch((refreshError) => {
                    if (refreshError.response?.status === 401 || refreshError.response?.status === 403 || refreshError.response?.message === 'Refresh token is revoked') {
                        Cookies.remove('accessToken');
                        Cookies.remove('refreshToken');
                        Cookies.remove('userData');

                        toast.error('Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại.');
                        window.location.href = '/sign-in';
                    }
                    return Promise.reject(refreshError);
                })
                .finally(() => {
                    isRefreshing = false;
                });
        }

        return Promise.reject(error);
    },
);

export default AxiosConfig;
