import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../services/auth.service';
import UserService from '../../services/user.service';
import { setUser } from '../slices/UserSlice';
import Cookies from 'js-cookie';

export const userLogin = createAsyncThunk('Auth/signin', async ({ email, password }, thunkAPI) => {
    try {
        const response = await AuthService.signin(email, password);
        const user = await UserService.getUserById(response.data.user.id);

        thunkAPI.dispatch(setUser(user));

        return {
            user,
            accessToken: response.data.accessToken,
        };
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});

export const userLogout = createAsyncThunk('Auth/revoke-token', async (_, thunkAPI) => {
    const refreshToken = Cookies.get('refreshToken');

    if (!refreshToken) {
        return thunkAPI.rejectWithValue('No refresh token found');
    }

    try {
        await AuthService.signout(refreshToken);
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        thunkAPI.dispatch(setUser({ user: null }));
        return true;
    } catch (status) {
        return thunkAPI.rejectWithValue(status);
    }
});