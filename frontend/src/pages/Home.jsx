import React from 'react'
import Header from '../comporents/home/Header'
import ActivityCart from '../comporents/general/ActivityCart'
import PageContainers from '../containers/PageContainers'
import HolidayCart from '../comporents/home/HolidayCart'
import Services from '../comporents/home/Services'
import Category from '../comporents/home/Category'
import NavbarBottom from '../comporents/navbar/navbarBottom'
import Comment from '../comporents/home/Comment'
import Activity from '../comporents/home/Activity'
import CompanyProfile from '../comporents/home/CompanyProfile'


const Home = () => {
  return (
    <div>
      <Header />
      <NavbarBottom />
      <PageContainers>

        <HolidayCart />
        <Category/>
        <Activity />
        <Services />
        <Comment />
        
       </PageContainers>
        <CompanyProfile />
    </div>
  )
}

export default Home
