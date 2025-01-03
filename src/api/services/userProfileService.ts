import { UserProfileModel } from '../../model/user-profile/user-profile.model';
import api from '../core/apiClient';

const USER_PROFILE_ENDPOINT = '/auth/profile';

export const getUserProfile = async (): Promise<UserProfileModel | null> => {
  try {
    const response = await api.get(USER_PROFILE_ENDPOINT);
    if (response) {
      return new UserProfileModel(response.data);
    } else {
      console.error('Unexpected response structure:', response);
      return null;
    }
  } catch (error: any) {
    console.error(
      'Error fetching user profile:',
      error.response?.data?.message || error.message,
    );
    throw new Error('Failed to fetch user profile');
  }
};
