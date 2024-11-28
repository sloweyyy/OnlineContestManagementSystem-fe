import { createSlice } from '@reduxjs/toolkit';
import { fetchContestStatistics, fetchRegistrationStatistics } from '../actions/StatisticsActions';

const initialState = {
    contestStatistics: null,
    registrationStatistics: null,
    loading: false,
    error: null,
};

const StatisticsSlice = createSlice({
    name: 'statistics',
    initialState,
    reducers: {
        clearStatistics: (state) => {
            state.contestStatistics = null;
            state.registrationStatistics = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContestStatistics.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchContestStatistics.fulfilled, (state, action) => {
                state.loading = false;
                state.contestStatistics = action.payload;
            })
            .addCase(fetchContestStatistics.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchRegistrationStatistics.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRegistrationStatistics.fulfilled, (state, action) => {
                state.loading = false;
                state.registrationStatistics = action.payload;
            })
            .addCase(fetchRegistrationStatistics.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearStatistics } = StatisticsSlice.actions;
export default StatisticsSlice.reducer;
