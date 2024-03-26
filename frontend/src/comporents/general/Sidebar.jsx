import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { FaCheckCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/UserSlice';


const Sidebar = () => {

  const data = [
    { "name": "Profil", url: "/user/profil", icon: FaUser },
    { "name": "Rezervasyonlarım", url: "/user/reservation", icon: FaAngleLeft },
    { "name": "Rezervasyon Yap", url: "/user/reservationform", icon: FaCheckCircle },
    { "name": "Odalar", url: "/user/room", icon: RxHamburgerMenu },
    { "name": "Siteye Git", url: "/", icon: FaPlusCircle },

  ]

  const [openMenu, setOpenMenu] = useState(false)
  const dispatch = useDispatch();
  const router = useNavigate()


  // Menu aç/kap func.
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
   }

  //logout Func.
  const handleLogout = () => {
    dispatch(logout())
    router("/")
  }



  return (
    <div className={`generalSidebar ${openMenu ? "setOpenMenu" : ""}`}>

      <div className='generalSidebar-title'>

        STAYEASE

        <div onClick={toggleMenu} className='generalSidebar-title-hamburgerMenu'>
          <RxHamburgerMenu size={25} />
        </div>
      </div>

      {
        data.map((item, i) => (
          <div key={i} className='generalSidebar-items'>

            <Link to={item.url} >
              <ul className='generalSidebar-items-item'>
                <li className='generalSidebar-items-item-icon'> {item.icon && <item.icon size={19} style={{ margin: "0 5px" }} />} </li>
                <li> {
                  item.name
                }</li>
              </ul>
            </Link>

          </div>
        ))
      }

      {/*logout item */}
      <ul onClick={handleLogout} className='generalSidebar-items-item'>
        <li className='generalSidebar-items-item-icon'> <CiLogout /> </li>
        <li> Cıkıs Yap </li>
      </ul>

    </div>
  )
}

export default Sidebar
