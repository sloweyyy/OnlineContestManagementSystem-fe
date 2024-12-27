import axios from 'axios';
import { API_BASE_URL } from './config';

const CONTACT_ENDPOINT = `${API_BASE_URL}/Contact`;

const submitContactForm = async (firstName, lastName, email, subject, message) => {
    try {
        const response = await axios.post(`${CONTACT_ENDPOINT}/submit`, {
            firstName,
            lastName,
            email,
            subject,
            message
        });
        return response;
    } catch (error) {
        throw error;
    }
}

const ContactService = {
    submitContactForm
}

export default ContactService;