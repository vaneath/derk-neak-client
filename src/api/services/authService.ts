import useLocalStorage from '../../hooks/useLocalStorage';
import api from '../core/apiClient';

const LOGIN_ENDPOINT = '/auth/login';
const LOGOUT_ENDPOINT = '/auth/logout';

const accessToken = useLocalStorage('token');

export const authService = {
  login: async (email: string, password: string) => {
    try {
      const { data } = await api.post(LOGIN_ENDPOINT, { email, password });

      if (!data.accessToken) throw new Error('Missing access token');
      accessToken.set(data.accessToken);
    } catch (err) {
      console.error('Login failed:', err);
      throw err;
    }
  },

  logout: async () => {
    try {
      await api.post(LOGOUT_ENDPOINT);
      accessToken.remove();
    } catch (err) {
      console.error('Logout failed:', err);
      throw err;
    }
  },
};
