import { useEffect, useState } from 'react';
import api from '../api/core/apiClient';
import { UserProfileModel } from '../model/user-profile/user-profile.model';
import { getUserProfile } from '../api/services/userProfileService';

const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState<UserProfileModel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await getUserProfile();
        setUserProfile(profile);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching the profile');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return { userProfile, loading, error };
};

export default useUserProfile;
