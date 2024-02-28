import React from 'react'
import PageContainers from '../containers/PageContainers'
import TitleSpace from '../comporents/general/TitleSpace'

const RoomPage = () => {
  return (
    <div >
      {/*sayfanın 80% lik kısmını kaplıyor ve ortalıyor */}
      <PageContainers >
        {/*sayfanın usten navbar boslugu veriyor */}
        <TitleSpace>

            odalar
        </TitleSpace>
      </PageContainers>
    </div>
  )
}

export default RoomPage
