import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { FaCheckCircle } from 'react-icons/fa';


const Sidebar = () => {

  const data = [
    { "name": "Profil", url: "/user/profil", icon: FaUser },
    { "name": "Rezervasyonlarım", url: "/user/reservation", icon: FaAngleLeft },
    { "name": "Rezervasyon Yap", url: "", icon: FaCheckCircle },
    { "name": "Odalar", url: "", icon: RxHamburgerMenu },
    { "name": "Siteye Git", url: "", icon: FaPlusCircle },
    { "name": "Çıkış Yap", url: "", icon: CiLogout }

  ]

  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    console.log("ada");
  }

  return (
    <div className={`generalSidebar ${openMenu ? "setOpenMenu" : ""}`}>

      <div className='generalSidebar-title'>
        Admin Panel

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

    </div>
  )
}

export default Sidebar
