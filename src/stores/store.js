import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slices/AuthSlice';
import UserSlice from './slices/UserSlice';

const store = configureStore({
    reducer: {
        auth: AuthSlice,
        user: UserSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
