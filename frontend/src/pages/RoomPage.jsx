import React from 'react'
import PageContainers from '../containers/PageContainers'
import TitleSpace from '../comporents/general/TitleSpace'
import Room from '../comporents/room/Room'

const RoomPage = () => {
  return (
    <div >
      {/*sayfanın 80% lik kısmını kaplıyor ve ortalıyor */}
      <PageContainers >
        {/*sayfanın usten navbar boslugu veriyor */}
        <TitleSpace>
        <Room/>
        </TitleSpace>
      </PageContainers>
    </div>
  )
}

export default RoomPage
