import React from 'react'
import PageContainers from '../containers/PageContainers'
import TitleSpace from '../comporents/general/TitleSpace'
import Contact from '../comporents/contact/Contact'
import Maps from '../comporents/contact/Maps'
import PageTitleImage from '../comporents/general/PageTitleImage'

const ContactPage = () => {
  return (
    <div >
      {/*sayfanın 80% lik kısmını kaplıyor ve ortalıyor */}
      <PageContainers >
        {/*sayfanın usten navbar boslugu veriyor */}
        <TitleSpace >
        <PageTitleImage image={"https://images.pexels.com/photos/17154931/pexels-photo-17154931/free-photo-of-deniz-doga-tatil-mavi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}  title={"İletişim"} />

          <Contact />
        </TitleSpace>
      </PageContainers>
      <Maps />
    </div>

  )
}

export default ContactPage;
