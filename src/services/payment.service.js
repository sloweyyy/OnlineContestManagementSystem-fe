import AxiosConfig from '../utils/AxiosConfig';
import { API_BASE_URL } from './config';

const PAYMENT_ENDPOINT = `${API_BASE_URL}/Payment`;

const getPaymentStatus = async (contestId, userId) => {
    try {
        const response = await AxiosConfig.get(`${PAYMENT_ENDPOINT}/get-payment-status/${contestId}/${userId}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
}

const PaymentService = {
    getPaymentStatus
};

export default PaymentService;