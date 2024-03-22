import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Topbar from './tobbar/Topbar'


const Navbar = () => {
  return (
    <div className='generalNavbar'> 
        <Sidebar />
        <Topbar />
      
    </div>
  )
}

export default Navbar
