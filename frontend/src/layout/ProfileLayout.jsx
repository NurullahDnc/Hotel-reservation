import React from 'react';
import Navbar from '../comporents/general/Navbar';
import Sidebar from '../comporents/general/Sidebar';
import { useSelector } from 'react-redux';
import { FaPlusCircle, FaUser } from "react-icons/fa";
import { FaCheckCircle } from 'react-icons/fa';
import { HiPencilSquare } from "react-icons/hi2";
import { FaBed } from "react-icons/fa";

const ProfileLayout = ({ children }) => {

  const user = useSelector((state) => state.getUser.user);
  const userName = user && user.firstName

  const data = [
    { "name": "Profil", url: "/user/profil", icon: FaUser },
    { "name": "Rezervasyon Yap", url: "/user/reservationform", icon: HiPencilSquare },
    { "name": "Rezervasyonlarım", url: "/user/reservation", icon: FaCheckCircle },
    { "name": "Odalar", url: "/user/room", icon: FaBed },
    { "name": "Siteye Git", url: "/", icon: FaPlusCircle },

  ]


  console.log("userName", userName);
  return (
    <>
      <Navbar user={userName}  />
      <div className="profile-content">
        <Sidebar menuData={data} title="STAYEASE" userLogout />
        <div className='profile-content-children'>

          {children}
        </div>
      </div>
    </>
  );
}

export default ProfileLayout;
