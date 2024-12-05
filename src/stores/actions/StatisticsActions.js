import { createAsyncThunk } from '@reduxjs/toolkit';
import DashboardService from '../../services/dashboard.service';

export const fetchContestStatistics = createAsyncThunk(
    'Dashboard/contest-statistics',
    async (_, { rejectWithValue }) => {
        try {
            const response = await DashboardService.getContestStatistics();
            return JSON.parse(localStorage.getItem('contestStatistics'));
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const fetchRegistrationStatistics = createAsyncThunk(
    'Dashboard/registration-statistics',
    async (_, { rejectWithValue }) => {
        try {
            const response = await DashboardService.getRegistrationStatistics();
            return JSON.parse(localStorage.getItem('registrationStatistics'));
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const fetchWebsiteRevenue = createAsyncThunk(
    'Dashboard/website-revenue',
    async (_, { rejectWithValue }) => {
        try {
            const response = await DashboardService.getWebsiteRevenue();
            return JSON.parse(localStorage.getItem('websiteRevenue'));
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);
