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
          <PageTitleImage iamge={"https://img.freepik.com/free-photo/desert-sand-dunes-panoramic-view_587448-8157.jpg?t=st=1709244386~exp=1709247986~hmac=350994ef7dcf770cf9dd7968817081b721ac48da1d3dd974897dd8dfb0ed33d4&w=1380"} title={"İletişim"} />

          <Contact />
        </TitleSpace>
      </PageContainers>
      <Maps />
    </div>

  )
}

export default ContactPage;
