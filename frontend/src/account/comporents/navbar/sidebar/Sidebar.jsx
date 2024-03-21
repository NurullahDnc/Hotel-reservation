import React, { useState } from 'react'
import MenuItem from './MenuItem'
import Title from './Title'
import { RxHamburgerMenu } from "react-icons/rx";


const Sidebar = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu=()=>{
    setOpenMenu(!openMenu);
    console.log("ada");
}

  return (
    <div className={`generalSidebar ${openMenu? "setOpenMenu": ""} `}>
        <Title />      
        <MenuItem />

        <div onClick={toggleMenu} className='generalSidebar-hamburgerMenu'>
          <RxHamburgerMenu size={28} />
      </div>
    </div>
  )
}

export default Sidebar
