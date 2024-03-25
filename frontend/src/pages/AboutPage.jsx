import React from 'react'
import PageContainers from '../containers/PageContainers'
import TitleSpace from '../comporents/general/TitleSpace'
import About from '../comporents/about/About'

const AboutPage = () => {
  return (
    <div >
      {/*sayfanın 80% lik kısmını kaplıyor ve ortalıyor */}
      <PageContainers >
        {/*sayfanın usten navbar boslugu veriyor */}
        <TitleSpace >
          <About />
        </TitleSpace>
      </PageContainers>
    </div>
  )
}

export default AboutPage 