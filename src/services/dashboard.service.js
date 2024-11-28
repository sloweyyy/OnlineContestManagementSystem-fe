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

const DashboardService = {
    getContestStatistics,
    getRegistrationStatistics
}

export default DashboardService;