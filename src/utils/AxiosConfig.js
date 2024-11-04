import axios from 'axios';
import { API_BASE_URL } from '../services/config';
import Cookies from 'js-cookie';
import AuthService from '../services/auth.service';
import { toast } from 'react-toastify';

const axiosConfig = axios.create({
    baseURL: API_BASE_URL,
});

axiosConfig.interceptors.request.use(
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

axiosConfig.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response?.status === 401) {
            const refreshToken = Cookies.get('refreshToken');
            await AuthService.logout(refreshToken).then(() => {
                window.location.href = '/sign-in';
            });
        }

        if (error.response?.status !== 410) {
            toast.error(error.response?.data?.message || error?.message);
        }

        const originalRequest = error.config;
        if (error.response && error.response.status === 401 && originalRequest) {
            if (!refreshTokenPromise) {
                const refreshToken = Cookies.get('refreshToken');

                refreshTokenPromise = await AuthService.refreshAccessToken(refreshToken)
                    .then((response) => {
                        const newAccessToken = response.tokens.access.token;
                        Cookies.set('accessToken', newAccessToken);
                        axiosConfig.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
                        return axiosConfig(originalRequest);
                    })
                    .catch((error) => {
                        AuthService.logout(refreshToken).then(() => {
                            window.location.href = '/sign-in';
                        });
                    })
                    .finally(() => {
                        refreshTokenPromise = null;
                    });
            }

            return refreshTokenPromise.then(() => axiosConfig(originalRequest));
        }

        return Promise.reject(error);
    },
);

export default axiosConfig;
