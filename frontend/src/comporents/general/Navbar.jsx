import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/UserSlice';

const Navbar = ({ onClick, user }) => {

  console.log("users", user);

  return (
    <div className='generalNavbar'>

      {
        <p> {user} </p> 
      }
      <FaUser onClick={onClick} size={22} style={{ margin: "0 7px" }} />
    </div>
  )
}

export default Navbar
