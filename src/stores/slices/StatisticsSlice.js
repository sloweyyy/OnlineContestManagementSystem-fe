import { createSlice } from '@reduxjs/toolkit';
import { fetchContestStatistics, fetchRegistrationStatistics, fetchWebsiteRevenue } from '../actions/StatisticsActions';

const initialState = {
    contestStatistics: null,
    registrationStatistics: null,
    websiteRevenue: null,
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
            state.websiteRevenue = null;
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
            })

            .addCase(fetchWebsiteRevenue.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWebsiteRevenue.fulfilled, (state, action) => {
                state.loading = false;
                state.websiteRevenue = action.payload;
            })
            .addCase(fetchWebsiteRevenue.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearStatistics } = StatisticsSlice.actions;
export default StatisticsSlice.reducer;
