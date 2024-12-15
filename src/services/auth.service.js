import axios from 'axios';
import Cookies from 'js-cookie';
import { API_BASE_URL } from './config';

const AUTH_ENDPOINT = `${API_BASE_URL}/Auth`;

const signin = async (email, password) => {
  const response = await axios.post(`${AUTH_ENDPOINT}/signin`, {
    email,
    password,
  });

  localStorage.setItem('userData', JSON.stringify(response.data.user));
  Cookies.set('accessToken', response.data.accessToken);
  Cookies.set('refreshToken', response.data.refreshToken);

  return response;
};


const register = async (email, password, confirmPassword, fullName) => {
  try {
    const response = await axios.post(`${AUTH_ENDPOINT}/register`, {
      email,
      password,
      confirmPassword,
      fullName,
      role: 'User',
    });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response);
      throw error.response.data.message || 'Tạo tài khoản thất bại';
    }
    console.error('Error:', error);
    throw new Error('Đã xảy ra lỗi khi đăng ký.');
  }
};

const refreshToken = async (refreshToken) => {
  return await axios.post(`${AUTH_ENDPOINT}/refresh-token`, {
    refreshToken,
  });
};

const signout = async (refreshToken) => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
  localStorage.removeItem('userData');

  return await axios.post(`${AUTH_ENDPOINT}/revoke-token`, {
    refreshToken,
  });
};

const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${AUTH_ENDPOINT}/forgot-password`, {
      email,
    });

    return response;
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response);
      throw error.response.data.message || 'Gửi email thất bại';
    }
    console.error('Error:', error);
    throw new Error('Đã xảy ra lỗi khi gửi email.');
  }
};

const resetPassword = async (resetToken, newPassword) => {
  try {
    const response = await axios.post(`${AUTH_ENDPOINT}/reset-password`, {
      resetToken,
      newPassword,
    });

    return response;
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response);
      throw error.response.data.message || 'Đổi mật khẩu thất bại';
    }
    console.error('Error:', error);
    throw new Error('Đã xảy ra lỗi khi đổi mật khẩu.');
  }
}

const AuthServices = {
  signin,
  register,
  refreshToken,
  signout,
  forgotPassword,
  resetPassword,
};

export default AuthServices;
