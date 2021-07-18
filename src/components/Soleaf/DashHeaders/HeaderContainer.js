import React from 'react'

import Time from './Time'
import Profile from './Profile'
import Weather from './Weather'

const HeaderContainer = (props) => {
  return (
    <div className="full-width header-row red-border">
      <Time />
      <Profile />
      <Weather />
    </div>
  )
}

export default HeaderContainer
