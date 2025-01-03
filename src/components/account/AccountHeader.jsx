import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import useUserProfile from '../../hooks/useUserProfile';
import useLocalStorage from '../../hooks/useLocalStorage';

const AccountHeader = () => {
  const accessToken = useLocalStorage('token');
  const token = accessToken.get();

  const defaultContent = {
    image:
      'https://png.pngtree.com/png-clipart/20221130/ourmid/pngtree-cheerful-javanese-people-welcome-guests-png-image_6485612.png',
    name: 'Guest',
    email: 'guest@example.com',
    link: {
      text: 'Login',
      href: '/login',
    },
  };

  const { userProfile, loading, error } = useUserProfile(token);

  if (!token) {
    return (
      <div className="flex justify-between items-center py-10 px-4">
        <div className="flex items-center space-x-4">
          <img
            src={defaultContent.image}
            className="size-20 rounded-full"
            alt="Profile Placeholder"
          />
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-xl">{defaultContent.name}</h3>
            <p className="font-medium text-sm">{defaultContent.email}</p>
            <a
              href={defaultContent.link.href}
              className="font-medium text-sm text-blue-500"
            >
              {defaultContent.link.text}
            </a>
          </div>
        </div>
        <IoSettingsOutline className="size-5" />
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const userContent = {
    image:
      userProfile.profileImageUrl || 'https://vaneath.com/images/vaneath.png',
    name: `${userProfile.firstName} ${userProfile.lastName}`,
    email: userProfile.email,
    link: {
      text: 'Edit profile',
      href: '/edit-profile',
    },
  };

  return (
    <div className="flex justify-between items-center py-10 px-4">
      <div className="flex items-center space-x-4">
        <img
          src={userContent.image}
          className="size-20 rounded-full"
          alt="Profile"
        />
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold text-xl">{userContent.name}</h3>
          <p className="font-medium text-sm">{userContent.email}</p>
          <a
            href={userContent.link.href}
            className="font-medium text-sm text-blue-500"
          >
            {userContent.link.text}
          </a>
        </div>
      </div>
      <IoSettingsOutline className="size-5" />
    </div>
  );
};

export default AccountHeader;
