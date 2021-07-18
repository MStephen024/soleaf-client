import React from 'react'

import HeaderContainer from './DashHeaders/HeaderContainer'
import RSSTabs from './RSSTabs/RSSTabs'
import MainContentSection from './MainContentSection'
import RightColumn from './RightColumn'

const MainPage = (props) => {
  return (
    <div>
      <div className='header-height'>
        <HeaderContainer />
      </div>
      <div className='content-height'>
        <RSSTabs />
        <MainContentSection />
        <RightColumn />
      </div>
    </div>
  )
}

export default MainPage
