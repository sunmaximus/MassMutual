import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Container,
} from 'semantic-ui-react'

import './search.scss'

class Search extends Component {
  static propTypes = {
    search: PropTypes.array,
    router: PropTypes.object
  }

  renderTable () {
    const { search } = this.props
    if (search) {
      if (search.length > 0) {
        return search.map((article, index) => (
          <div
            key={article._id}
            className='article-container'
            style={{ borderBottom: articleBorderBottom(index, search.length) }}
          >
            <img src={articleImage(article)} />
            <div className='content'>
              <h5>
                {article.headline.main}
              </h5>
              <div className='body'>
                {article.snippet}
              </div>
            </div>
          </div>
        ))
      }
    }
    return <div>Please search for something in the Search Box</div>
  }

  render () {
    console.log(this.props)
    const { router } = this.props
    return (
      <Container style={{ paddingLeft: '10%', paddingRight: '10%', marginBottom: '5%' }}>
        <div className='top-navigation-container'>
          <p onClick={() => router.goBack('/')} className='home'>Home</p>
          <p className='arrow'>></p>
          <p className='article'>Article</p>
        </div>

        {this.renderTable()}
      </Container>
    )
  }
}

const articleBorderBottom = (index, listLength) => {
  if (index === listLength - 1) return '1px solid rgb(236, 236, 236)'
  return null
}

const articleImage = ({ multimedia }) => {
  if (multimedia) {
    if (multimedia.length > 0) return `http://www.nytimes.com/${multimedia[0].url}`
  } return 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'
}

export default Search
