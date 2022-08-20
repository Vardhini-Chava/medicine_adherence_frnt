import defaultAxios from 'axios';
import { API_URL } from '../var';

const axios = defaultAxios.create({
  baseURL: `${API_URL}`,
  headers: {'Content-Type': 'application/json'},
});

defaultAxios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
