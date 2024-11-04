import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../services/auth.service';
import { setUser } from '../slices/UserSlice';

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