import axiosConfig from "../utils/AxiosConfig";
import { API_BASE_URL } from "./config";

const CONTEST_ENDPOINT = `${API_BASE_URL}/contests`;

const registerContest = async (contestId, participantInformation) => {
    try {
        const response = await axiosConfig.post(`${CONTEST_ENDPOINT}/${contestId}`, participantInformation);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const getRetristeredContestsByUserId = async (userId) => {
    try {
        const response = await axiosConfig.get(`${CONTEST_ENDPOINT}/registration/user/${userId}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const getParticipantsByContestId = async (contestId) => {
    try {
        const response = await axiosConfig.get(`${CONTEST_ENDPOINT}/${contestId}/registrations`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const withdrawContest = async (contestId, userId) => {
    try {
        const response = await axiosConfig.post(`${CONTEST_ENDPOINT}/withdraw`, { contestId, userId });
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const RegistrationService = {
    registerContest,
    getRetristeredContestsByUserId,
    getParticipantsByContestId,
    withdrawContest
};

export default RegistrationService;