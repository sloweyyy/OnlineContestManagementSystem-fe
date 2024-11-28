import AxiosConfig from '../utils/AxiosConfig';
import { API_BASE_URL } from './config';

const USER_ENDPOINT = `${API_BASE_URL}/User`;

const getUserById = async (userId) => {
    try {
        const response = await AxiosConfig.get(`${USER_ENDPOINT}/${userId}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const UserService = {
    getUserById
}

export default UserService;