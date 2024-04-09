import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { CiLogout } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/UserSlice';
import { toast } from 'react-toastify';


const Sidebar = ({ menuData, userLogout, title, adminLogout }) => {


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
    toast.success("Çıkış İslemi Başarılı")
    router("/")
    //sayfayı yneile 
    window.location.reload();

  }


  return (
    <div className={`generalSidebar ${openMenu ? "setOpenMenu" : ""}`}>

      <div className='generalSidebar-title'>

        {title}

        <div onClick={toggleMenu} className='generalSidebar-title-hamburgerMenu'>
          <RxHamburgerMenu size={25} />
        </div>
      </div>

      {
        menuData && menuData.map((item, i) => (
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

      {/*user logout item */}
      {
        userLogout && <ul onClick={handleLogout} className='generalSidebar-items-item'>
          <li className='generalSidebar-items-item-icon'> <CiLogout /> </li>
          <li> Cıkıs Yap </li>
        </ul> 
      }

        {/*admin logout item */}
        {
        adminLogout && <ul onClick={()=> toast.success("admin")} className='generalSidebar-items-item'>
          <li className='generalSidebar-items-item-icon'> <CiLogout /> </li>
          <li> Cıkıs Yap </li>
        </ul> 
      }

    </div>
  )
}

export default Sidebar
