import React from 'react'
import Activities from '../comporents/activities/Activities'
import PageContainers from '../containers/PageContainers'
import TitleSpace from '../comporents/general/TitleSpace'

const ActivitiesPage = () => {
  return (
    <div>
      <PageContainers>
        <TitleSpace >

          <Activities />
        </TitleSpace>

      </PageContainers>
    </div>
  )
}

export default ActivitiesPage
