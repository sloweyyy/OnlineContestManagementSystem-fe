import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../services/auth.service';
import { setUser } from '../slices/UserSlice';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export const userLogin = createAsyncThunk('Auth/signin', async ({ email, password }, thunkAPI) => {
    try {
        const response = await AuthService.signin(email, password);
        thunkAPI.dispatch(setUser(response.user));
        return {
            user: response.data.user,
            accessToken: response.data.accessToken,
        };
    } catch (status) {
        return thunkAPI.rejectWithValue(status);
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