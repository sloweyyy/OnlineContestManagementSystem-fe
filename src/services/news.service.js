import axiosConfig from '../utils/AxiosConfig';
import { API_BASE_URL } from './config';

const NEWS_ENDPOINT = `${API_BASE_URL}/News`;

const createNews = async (news) => {
  try {
    const response = await axiosConfig.post(`${NEWS_ENDPOINT}`, news);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return error.message;
  }
};

const getNewsById = async (id) => {
  try {
    const response = await axiosConfig.get(`${NEWS_ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return error.message;
  }
};

const getAllNews = async () => {
  try {
    const response = await axiosConfig.get(`${NEWS_ENDPOINT}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return error.message;
  }
};

const updateNews = async (id, news) => {
  try {
    const response = await axiosConfig.put(`${NEWS_ENDPOINT}/${id}`, news, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return error.message;
  }
};

const deleteNews = async (id) => {
  try {
    const response = await axiosConfig.delete(`${NEWS_ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return error.message;
  }
};

const NewsService = {
  createNews,
  getNewsById,
  getAllNews,
  updateNews,
  deleteNews,
};

export default NewsService;
