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

const RegisterService = {
    registerContest
};

export default RegisterService;