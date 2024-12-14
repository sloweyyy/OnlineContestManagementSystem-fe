import axiosConfig from "../utils/AxiosConfig";
import { API_BASE_URL } from "./config";

const CONTEST_ENDPOINT = `${API_BASE_URL}/Contest`;

const createContest = async (contest) => {
    try {
        const response = await axiosConfig.post(`${CONTEST_ENDPOINT}`, contest);
        return response.status;
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
        return response;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const getContestByCreatorId = async (creatorId) => {
    try {
        const response = await axiosConfig.get(`${CONTEST_ENDPOINT}/creator/${creatorId}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const deleteContest = async (id) => {
    try {
        const response = await axiosConfig.delete(`${CONTEST_ENDPOINT}/${id}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const updateContest = async (id, contest) => {
    try {
        const response = await axiosConfig.put(`${CONTEST_ENDPOINT}/${id}`, contest);
        return response;
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
    getContestByCreatorId,
    deleteContest,
    updateContest,
};

export default ContestService;