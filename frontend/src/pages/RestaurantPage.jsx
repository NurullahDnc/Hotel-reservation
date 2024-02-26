import React from 'react'
import Restaurant from '../comporents/restaurant/Restaurant'
import PageContainers from '../containers/PageContainers'
import TitleSpace from '../comporents/general/TitleSpace'

const RestaurantPage = () => {
  return (
    <div >
      {/*sayfanın 80% lik kısmını kaplıyor ve ortalıyor */}
      <PageContainers >
        {/*sayfanın usten navbar boslugu veriyor */}
        <TitleSpace >

          <Restaurant />

        </TitleSpace>
      </PageContainers>
    </div>
  )
}

export default RestaurantPage
