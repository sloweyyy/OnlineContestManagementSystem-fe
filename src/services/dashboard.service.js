import axiosConfig from "../utils/AxiosConfig";
import { API_BASE_URL } from "./config";

const DASHBOARD_ENDPOINT = `${API_BASE_URL}/Dashboard`;

const getContestStatistic = async () => {
    try {
        const response = await axiosConfig.get(`${DASHBOARD_ENDPOINT}/contest-statistic`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const getRegistrationStatistic = async () => {
    try {
        const response = await axiosConfig.get(`${DASHBOARD_ENDPOINT}/registration-statistic`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const DashboardService = {
    getContestStatistic,
    getRegistrationStatistic
}

export default DashboardService;