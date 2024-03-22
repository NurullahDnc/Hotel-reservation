import React from 'react';
import Navbar from '../account/comporents/navbar/Navbar';

const ProfileLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="profile-content">
        {children}
      </div>
    </>
  );
}

export default ProfileLayout;
