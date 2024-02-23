import React from 'react'
import Navbar from '../comporents/navbar/Navbar'
import Footer from '../comporents/footer/Footer'
import Demo from '../comporents/navbar/demo'
import Navbar2 from '../comporents/navbar/navbar2'



const MainLayout = ({ children }) => {
  return (
    <>
      <Demo />
      <Navbar />
      <Navbar2 />
      {children}
      <Footer />

    </>
  )
}

export default MainLayout
