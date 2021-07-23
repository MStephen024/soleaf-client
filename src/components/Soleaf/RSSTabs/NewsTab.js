import React, { Component } from 'react'
import ContentArticle from '../MainContentSection/ContentArticle'
// import MainContentSection from '../MainContentSection/MainContentSection'
import { newsFeed } from '../../../api/rss/news'

class NewsTab extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null,
      category: null
    }
  }

  async componentDidMount () {
    await newsFeed()
      .then(data1 => {
        // console.log(data1.data)
        this.setState({ data: data1.data })
      })
      // .then(response => this.setState({ data: response.data }))
  }

  render () {
    // const { data } = this.state
    const newsContentJSX =
      this.state.data
        ? this.state.data.map(article => (
          <ContentArticle
            key={article.title}
            title={article.title}
            pubDate={article.pubDate}
            contentSnippet={article.contentSnippet}
            link={article.link}
          />
        ))
        : 'Loading'
    return (
      <div>{newsContentJSX}{console.log(this.state.data)}</div>
    )
  }
}

export default NewsTab

// <div className="blue-border">
//   This might be useless...
//   <ContentArticle />
// </div>
// <MainContentSection
//   newsTitle={data[0].title}
// />
