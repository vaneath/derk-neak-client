import axios from 'axios';
import useLocalStorage from '../../hooks/useLocalStorage';

const accessToken = useLocalStorage('token');

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    if (accessToken.get()) {
      config.headers.Authorization = `Bearer ${accessToken.get()}`;
    }
    console.log('Request: ', config);
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

export default api;
