import React from 'react'
import PageContainers from '../containers/PageContainers'
import UserProfile from '../comporents/account/profil'
import TitleSpace from '../comporents/general/TitleSpace'

const Account = () => {
  return (
    <PageContainers>

      <TitleSpace >

        <UserProfile />
        
      </TitleSpace>

    </PageContainers>
  )
}

export default Account
