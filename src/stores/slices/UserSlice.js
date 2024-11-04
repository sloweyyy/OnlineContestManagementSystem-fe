import { createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('userData'));

const initialState = {
    user,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            localStorage.setItem('userData', JSON.stringify(action.payload));
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
