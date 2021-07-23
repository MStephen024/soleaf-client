import React from 'react'
// import ContentArticle from './ContentArticle'
import NewsTab from '../RSSTabs/NewsTab'

// This component will hold all of the category components and display each based on
// conditions of which category it is. Therefore, should be class comp with a category state.
const MainContentSection = () => (
  <div className="content-width blk-border">
    <NewsTab />
  </div>
)

export default MainContentSection
