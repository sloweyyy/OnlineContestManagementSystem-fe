import AxiosConfig from '../utils/AxiosConfig';
import { API_BASE_URL } from './config';

const ADMIN_ENDPOINT = `${API_BASE_URL}/Admin`;

const approveContest = async (contestId) => {
    try {
        const response = await AxiosConfig.put(`${ADMIN_ENDPOINT}/${contestId}/approve`);
        return response;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
};

const rejectContest = async (contestId) => {
    try {
        const response = await AxiosConfig.put(`${ADMIN_ENDPOINT}/${contestId}/reject`);
        return response;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const AdminService = {
    approveContest,
    rejectContest
}

export default AdminService;