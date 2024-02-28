import React from 'react'
import PageContainers from '../containers/PageContainers'
import TitleSpace from '../comporents/general/TitleSpace'

const ContactPage = () => {
  return (
    <div >
    {/*sayfanın 80% lik kısmını kaplıyor ve ortalıyor */}
    <PageContainers >
      {/*sayfanın usten navbar boslugu veriyor */}
      <TitleSpace >

        iletisim
      </TitleSpace>
    </PageContainers>
  </div>
   
  )
}

export default ContactPage;
 