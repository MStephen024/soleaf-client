import React from 'react'

import HeaderContainer from './DashHeaders/HeaderContainer'
import RSSTabs from './RSSTabs/RSSTabs'
import MainContentSection from './MainContentSection/MainContentSection'
import RightColumn from './RightColumn'

const MainPage = () => (
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

export default MainPage
