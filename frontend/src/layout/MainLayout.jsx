import React, { useState } from 'react'
import Navbar from '../comporents/navbar/Navbar'
import Footer from '../comporents/footer/Footer'
import Demo from '../comporents/navbar/demo'



const MainLayout = ({ children }) => {

  const [demoVisible, setDemoVisible] = useState(true);

  const handleDemoClose = () => {
    setDemoVisible(false);
  };

  return (
    <>
      {demoVisible && <Demo onClose={handleDemoClose} />}
      <Navbar />
      {children}
      <Footer />

    </>
  )
}

export default MainLayout
