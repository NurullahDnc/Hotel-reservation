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
        <PageTitleImage image={"https://img.freepik.com/free-photo/north-beach-nazare-portugal-with-foaming-waves_1268-15932.jpg?t=st=1710068523~exp=1710072123~hmac=befec33b17b924f0ae853f7eddfe41313d447395ff7e8622d930d61d9deb6f38&w=1060"} title={"İletişim"} />

          <Contact />
        </TitleSpace>
      </PageContainers>
      <Maps />
    </div>

  )
}

export default ContactPage;
