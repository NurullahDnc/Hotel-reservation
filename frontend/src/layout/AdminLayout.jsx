import React from 'react'
import Navbar from '../comporents/general/Navbar'
import Sidebar from '../comporents/general/Sidebar'
import { FaPlusCircle, FaUser } from "react-icons/fa";
import { FaCheckCircle } from 'react-icons/fa';
import { HiPencilSquare } from "react-icons/hi2";
import { FaBed } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { IoImages } from "react-icons/io5";
import { FaSwimmer } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { MdFeedback } from "react-icons/md";



const AdminLayout = ({ children }) => {

  const data = [
    { "name": "Dashboard", url: "/admin", icon: FaUser },
    { "name": "Rezervasyonlar", url: "/admin/Reservations", icon: HiPencilSquare },
    { "name": "Odalar", url: "/admin/room", icon: FaCheckCircle },
    { "name": "Müşteriler", url: "/admin/customers", icon: FaBed },
    { "name": "galeri", url: "/admin/gallery", icon: IoImages },
    { "name": "Aktiviteler", url: "/admin/activities", icon: FaSwimmer },
    { "name": "Restorant", url: "/admin/restaurant", icon: MdRestaurantMenu },
    { "name": "Yorumlar", url: "/admin/comment", icon: FaComment },
    { "name": "Geri Bildirimler", url: "/admin/feedback", icon: MdFeedback },

    { "name": "Siteye Git", url: "/", icon: FaPlusCircle },


  ]


  return (
    <>
      <Navbar user="admin" />
      <div className="profile-content">
        <Sidebar menuData={data} title="Admin Panel" adminLogout />
        <div className='profile-content-children'>

          {children}

        </div>
      </div>
    </>
  )
}

export default AdminLayout
