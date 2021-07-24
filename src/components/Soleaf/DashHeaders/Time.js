import React, { useState } from 'react'

// Testing Hooks Knowledge...Success!
const Time = (props) => {
  let currentTime = new Date().toLocaleTimeString()
  const [clock, setClock] = useState(currentTime)

  const updateClock = () => {
    currentTime = new Date().toLocaleTimeString()
    setClock(currentTime)
  }

  setInterval(updateClock, 1000)

  return (
    <div className='tab time'>
      <h5>Good [insert], [user]!</h5>
      {clock.split('').splice(0, 4).join('')}
    </div>
  )
}

export default Time
