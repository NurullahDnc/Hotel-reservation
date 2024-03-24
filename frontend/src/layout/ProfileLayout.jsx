import React from 'react';
import Navbar from '../comporents/general/Navbar';
import Sidebar from '../comporents/general/Sidebar';

const ProfileLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="profile-content">
        <Sidebar />
        <div className='profile-content-children'>
      
          {children}
        </div>
      </div>
    </>
  );
}

export default ProfileLayout;
