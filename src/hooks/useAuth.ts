import { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import { authService } from '../api/services/authService';

const useAuth = () => {
  const accessToken = useLocalStorage('token');

  const [authState, setAuthState] = useState({
    loading: false,
    error: null as string | null,
    isLogged: false,
  });

  const handleError = (err: any, defaultMessage: string) => {
    if (err.response) return err.response?.data?.message || defaultMessage;
    if (err.request) return 'Network error. Please try again.';
    return err.message || defaultMessage;
  };

  const login = async (email: string, password: string) => {
    setAuthState({ ...authState, loading: true, error: null });
    try {
      await authService.login(email, password);
      if (accessToken.get())
        setAuthState({ ...authState, isLogged: true, loading: false });
    } catch (err) {
      setAuthState({
        ...authState,
        error: handleError(err, 'Login failed.'),
        loading: false,
      });
    }
  };

  const logout = async () => {
    setAuthState({ ...authState, loading: true, error: null });
    try {
      await authService.logout();

      setAuthState({ ...authState, isLogged: false, loading: false });
    } catch (err) {
      setAuthState({
        ...authState,
        error: handleError(err, 'Logout failed.'),
        loading: false,
      });
    }
  };

  return {
    login,
    logout,
    isLogged: authState.isLogged,
    loading: authState.loading,
    error: authState.error,
    resetError: () => setAuthState({ ...authState, error: null }),
  };
};

export default useAuth;
