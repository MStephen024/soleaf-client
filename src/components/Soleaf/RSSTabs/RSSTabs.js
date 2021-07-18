import React from 'react'
import Tab from './Tab'

const RSSTabs = (props) => {
  return (
    <div className="rss-width tab-grid blk-border">
      {/* create map variable with tab components for each subject instead of 10 individual tabs */}
      <Tab />
      <Tab />
      <Tab />
      <Tab />
      <Tab />
      <Tab />
      <Tab />
      <Tab />
      <Tab />
      <Tab />
      <Tab />
      <Tab />
    </div>
  )
}

export default RSSTabs
