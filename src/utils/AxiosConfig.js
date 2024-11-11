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

let refreshTokenPromise = null;

AxiosConfig.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401) {
            const refreshToken = Cookies.get('refreshToken');

            if (originalRequest.url === '/sign-in' || !refreshToken) {
                toast.error('Thông tin đăng nhập không chính xác');
                return Promise.reject(error);
            }

            if (!refreshTokenPromise) {
                refreshTokenPromise = AuthService.refreshToken(refreshToken)
                    .then((response) => {
                        const newAccessToken = response.tokens.access.token;
                        Cookies.set('accessToken', newAccessToken);
                        AxiosConfig.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
                        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                        return AxiosConfig(originalRequest);
                    })
                    .catch((error) => {
                        AuthService.signout(refreshToken).then(() => {
                            toast.error('Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại');
                            window.location.href = '/sign-in';
                        });
                    })
                    .finally(() => {
                        refreshTokenPromise = null;
                    });
            }

            return refreshTokenPromise;
        }

        if (error.response?.status !== 410) {
            toast.error(error.response?.data?.message || error?.message);
        }

        return Promise.reject(error);
    },
);

export default AxiosConfig;
