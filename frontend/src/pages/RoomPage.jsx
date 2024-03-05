import React from 'react'
import PageContainers from '../containers/PageContainers'
import TitleSpace from '../comporents/general/TitleSpace'
import { useParams } from 'react-router-dom'

const RoomPage = () => {

  const {id} = useParams();
  console.log(id);
  
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
