import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import useUserProfile from "../../hooks/useUserProfile";

const AccountHeader = () => {
  const token = localStorage.getItem("token");
  const { userProfile, loading, error } = useUserProfile({
    enabled: !!token,
  });

  const defaultContent = {
    image:
      "https://png.pngtree.com/png-clipart/20221130/ourmid/pngtree-cheerful-javanese-people-welcome-guests-png-image_6485612.png",
    name: "Guest",
    link: {
      text: "Login",
      href: "/login",
    },
  };

  // Only show loading/error states when logged in
  if (token) {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  }

  const userContent = token &&
    userProfile && {
      image: "https://vaneath.com/images/vaneath.png",
      name: `${userProfile.firstName} ${userProfile.lastName}`,
      email: userProfile.email,
      link: {
        text: "Edit profile",
        href: "/edit-profile",
      },
    };

  const content = userContent || defaultContent;

  return (
    <div className='flex justify-between items-center py-10 px-4'>
      <div className='flex items-center space-x-4'>
        <img
          src={content.image}
          className='size-20 rounded-full'
          alt='Profile'
        />
        <div className='flex flex-col space-y-2'>
          <div>
            <h3 className='font-bold text-xl'>{content.name}</h3>
            {content.email && (
              <p className='font-medium text-sm'>{content.email}</p>
            )}
          </div>

          <a
            href={content.link.href}
            className='font-medium text-sm text-blue-500'
          >
            {content.link.text}
          </a>
        </div>
      </div>
      <IoSettingsOutline className='size-5' />
    </div>
  );
};

export default AccountHeader;
