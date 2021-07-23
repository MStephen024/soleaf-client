import React from 'react'
import { Link } from 'react-router-dom'

const ContentArticle = ({ title, pubDate, contentSnippet, link }) => {
  return (
    <div className="yellow-border">
      <div className='cat-date'>
        <p className='category'>News</p>
        <p className='pub-date'>{pubDate}</p>
      </div>
      <h5 className='title'>
        {<Link to={`${link}`}>{title}</Link>}
      </h5>
      <p className='description'>{contentSnippet + '..'}</p>
    </div>
  )
}

export default ContentArticle
