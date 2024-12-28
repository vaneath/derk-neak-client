import { useState } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });
      const { data } = response;
      localStorage.setItem('token', data.access_token);
      setLoading(false);
      return data;
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
      setLoading(false);
      throw err;
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:3000/auth/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem('token');
      setLoading(false);
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
      setLoading(false);
      throw err;
    }
  };

  return { login, logout, loading, error };
};

export default useAuth;
