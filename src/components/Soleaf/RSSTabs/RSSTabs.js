import React from 'react'
import { Link } from 'react-router-dom'
// import NewsTab from './NewsTab'

// Change to class comp with category state that changes onClick to each link.
// Pass that category down to MainContentSection?
const RSSTabs = () => (
  <header className="rss-width tab-grid blk-border">
    <div className='purp-border rss-tab'>
      <Link to='/news'>News</Link>
    </div>
    <div className='purp-border'>
      <Link to='/news'>Science(TBA)</Link>
    </div>
    <div className='purp-border'>
      <Link to='/news'>Politics(TBA)</Link>
    </div>
    <div className='purp-border'>
      <Link to='/news'>World News(TBA)</Link>
    </div>
    <div className='purp-border'>
      <Link to='/news'>Space(TBA)</Link>
    </div>
  </header>
)

export default RSSTabs
