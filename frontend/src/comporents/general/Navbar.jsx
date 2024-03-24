import React from 'react'
import { FaUser } from 'react-icons/fa'

const Navbar = ({onClick}) => {
  
  return (
    <div className='generalNavbar'>
       Nurullah
      <FaUser onClick={onClick} size={22} style={{margin: "0 7px"}} />
    </div>
  )
}

export default Navbar
