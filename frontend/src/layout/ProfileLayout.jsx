import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
 


const ProfileLayout = ({ children }) => {

    const router = useNavigate()

  return (
    <>
        <div onClick={()=> router("/") }>
            navbar/anasayfa don
        </div>
      {children}

    </>
  )
}

export default ProfileLayout

