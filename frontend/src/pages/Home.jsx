import React from 'react'
import Header from '../comporents/home/Header'
import ActivityCart from '../comporents/general/ActivityCart'
import PageContainerS from '../containers/PageContainers'
import HolidayCart from '../comporents/home/HolidayCart'
import Services from '../comporents/home/Services'
import Category from '../comporents/home/Category'
import NavbarBottom from '../comporents/navbar/navbarBottom'

import Activity from '../comporents/home/Activity'
import CompanyProfile from '../comporents/home/CompanyProfile'


const Home = () => {
  return (
    <div>
      <Header />
      <NavbarBottom />
      <PageContainerS>
        <HolidayCart />

        <Category/>
        <Activity />
        <Services />
        <Comment />
      </PageContainerS>
        <CompanyProfile />
    </div>
  )
}

export default Home
