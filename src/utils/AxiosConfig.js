import axios from 'axios';
import { API_BASE_URL } from '../services/config';
import Cookies from 'js-cookie';
import AuthService from '../services/auth.service';

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
        if (error.response?.status === 401) {
            const refreshToken = Cookies.get('refreshToken');
            await AuthService.signout(refreshToken).then(() => {
                window.location.href = '/sign-in';
            });
        }

        const originalRequest = error.config;
        if (error.response && error.response.status === 401 && originalRequest) {
            if (!refreshTokenPromise) {
                const refreshToken = Cookies.get('refreshToken');

                refreshTokenPromise = await AuthService.refreshToken(refreshToken)
                    .then((response) => {
                        const newAccessToken = response.accessToken;
                        Cookies.set('accessToken', newAccessToken);
                        AxiosConfig.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
                        return AxiosConfig(originalRequest);
                    })
                    .catch((error) => {
                        AuthService.signout(refreshToken).then(() => {
                            window.location.href = '/sign-in';
                        });
                    })
                    .finally(() => {
                        refreshTokenPromise = null;
                    });
            }

            return refreshTokenPromise.then(() => AxiosConfig(originalRequest));
        }

        return Promise.reject(error);
    },
);

export default AxiosConfig;