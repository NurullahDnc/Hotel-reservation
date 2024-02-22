import React from 'react'
import Navbar from '../comporents/navbar/Navbar'
import Footer from '../comporents/footer/Footer'
import Demo from '../comporents/navbar/demo'



const MainLayout = ({ children }) => {
  return (
    <>
      <Demo />
      <Navbar />
      {children}
      <Footer />

    </>
  )
}

export default MainLayout
