import React from 'react'
import PageContainers from '../containers/PageContainers'
import TitleSpace from '../comporents/general/TitleSpace'
import Gallery from '../comporents/gallery/Gallery'

const GalleryPage = () => {
  return (
    <div >
    {/*sayfanın 80% lik kısmını kaplıyor ve ortalıyor */}
    <PageContainers >
      {/*sayfanın usten navbar boslugu veriyor */}
      <TitleSpace >

        <Gallery />
        
      </TitleSpace>
    </PageContainers>
  </div>
  )
}

export default GalleryPage
