import React from 'react'
import Navbar from '../comporents/navbar/Navbar'
import Footer from '../comporents/footer/Footer'
import Demo from '../comporents/navbar/demo'
import NavbarBottom from '../comporents/navbar/navbarBottom'



const MainLayout = ({ children }) => {
  return (
    <>
      <Demo />
      <Navbar />
      <NavbarBottom />
      {children}
      <Footer />

    </>
  )
}

export default MainLayout
