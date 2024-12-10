
import axiosConfig from "../utils/AxiosConfig";
import { API_BASE_URL } from "./config";

const DASHBOARD_ENDPOINT = `${API_BASE_URL}/Dashboard`;

const getContestStatistics = async () => {
    try {
        const response = await axiosConfig.get(`${DASHBOARD_ENDPOINT}/contest-statistics`);

        localStorage.setItem('contestStatistics', JSON.stringify(response.data));
        return response.status;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const getRegistrationStatistics = async () => {
    try {
        const response = await axiosConfig.get(`${DASHBOARD_ENDPOINT}/registration-statistics`);

        localStorage.setItem('registrationStatistics', JSON.stringify(response.data));
        return response.status;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const getMonthlyRevenue = async () => {
    try {
        const response = await axiosConfig.get(`${DASHBOARD_ENDPOINT}/monthly-revenue`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const getFeaturedContests = async () => {
    try {
        const response = await axiosConfig.get(`${DASHBOARD_ENDPOINT}/featured-contests`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const getWebsiteRevenue = async () => {
    try {
        const response = await axiosConfig.get(`${DASHBOARD_ENDPOINT}/website-revenue`);

        localStorage.setItem('websiteRevenue', JSON.stringify(response.data));
        return response.status;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const getQuarterlyContestCounts = async () => {
    try {
        const response = await axiosConfig.get(`${DASHBOARD_ENDPOINT}/quarterly-contest-counts`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const getComingSoonContests = async () => {
    try {
        const response = await axiosConfig.get(`${DASHBOARD_ENDPOINT}/comingsoon-contests`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const getOnboardingContests = async () => {
    try {
        const response = await axiosConfig.get(`${DASHBOARD_ENDPOINT}/onboarding-contests`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const getTotalParticipants = async () => {
    try {
        const response = await axiosConfig.get(`${DASHBOARD_ENDPOINT}/total-participants`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const DashboardService = {
    getContestStatistics,
    getRegistrationStatistics,
    getMonthlyRevenue,
    getFeaturedContests,
    getWebsiteRevenue,
    getQuarterlyContestCounts,
    getComingSoonContests,
    getOnboardingContests,
    getTotalParticipants
}

export default DashboardService;