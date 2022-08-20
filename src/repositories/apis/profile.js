import axios from './axios';
import { API_URLS } from '../apiUrl';
export const profile = {
    saveProfile: async function saveprofile(payload) {
        const response = await axios.put(`${API_URLS.SAVE_PROFILE}?userId=${payload}`);
        return response.data;
      }
}

axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);