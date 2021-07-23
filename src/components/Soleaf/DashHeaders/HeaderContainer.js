import React from 'react'

import Time from './Time'
import Profile from './Profile'
import Weather from './Weather'

const HeaderContainer = () => (
  <div className="full-width header-row red-border">
    <Profile />
    <Time />
    <Weather />
  </div>
)

export default HeaderContainer
