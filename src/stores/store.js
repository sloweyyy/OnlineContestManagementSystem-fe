import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slices/AuthSlice';
import UserSlice from './slices/UserSlice';
import StatisticsSlice from './slices/StatisticsSlice';

const store = configureStore({
    reducer: {
        auth: AuthSlice,
        user: UserSlice,
        statistics: StatisticsSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
