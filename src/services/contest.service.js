import axiosConfig from "../utils/AxiosConfig";
import { API_BASE_URL } from "./config";

const CONTEST_ENDPOINT = `${API_BASE_URL}/Contest`;

const createContest = async (contest) => {
    try {
        const response = await axiosConfig.post(`${CONTEST_ENDPOINT}`, contest);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const getContests = async () => {
    try {
        const response = await axiosConfig.get(`${CONTEST_ENDPOINT}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const getContestById = async (id) => {
    try {
        const response = await axiosConfig.get(`${CONTEST_ENDPOINT}/${id}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const ContestService = {
    createContest,
    getContests,
    getContestById,
};

export default ContestService;