import React, { Component } from 'react'
import {
    Container,
} from 'semantic-ui-react'
import moment from 'moment'

import PropTypes from 'prop-types'
import nyt from '../../../assets/nyt.png'

import './article.scss'

class Article extends Component {
  static propTypes = {
    router: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    newYorkTime: PropTypes.array,
  }
  render () {
    console.log('Sub ', this.props)
    const { params, newYorkTime } = this.props

    if (!newYorkTime) return <div>loading...</div>

    const { headline, byline, snippet, pub_date, web_url } = newYorkTime[params.id]

    return (
      <Container style={{ paddingLeft: '10%', paddingRight: '10%', marginBottom: '5%' }}>
        <div className='top-navigation-container'>
          <p onClick={() => this.props.router.goBack()} className='home'>Home</p>
          <p className='arrow'>></p>
          <p className='article'>Article</p>
        </div>
        <h1 className='custom-title'>{headline.main}</h1>
        <ByLine byline={byline} pub_date={pub_date} />
        <div className='custom-content'>
          <img src={checkIfPictureExist(newYorkTime[params.id])} className='image-item' />
          <p className='full-body-text'>{snippet}</p>
        </div>
        
        {'Not sure if this even look good'}
        <iframe src={web_url} style={{ width: '100%', height: '600px', marginTop: '50px' }} />
      </Container>
    )
  }
}

const ByLine = ({ byline, pub_date }) => !byline.original ? <div className='custom-byline' /> : (
  <div className='custom-byline'>
    <div className='bottom-byline'>
      <div className='author'>
        {shortenString(byline.original, 100)}
      </div>
      <div className='time'>
        {moment(pub_date).format('h:mm A')} ET
      </div>
    </div>
  </div>
)

ByLine.propTypes = {
  byline: PropTypes.any.isRequired,
  pub_date: PropTypes.any.isRequired
}

const checkIfPictureExist = (story) => {
  if (story) {
    const { multimedia } = story
    if (multimedia.length > 0) return `http://www.nytimes.com/${multimedia[1].url}`
  } return nyt
}

const shortenString = (string, length) => {
  if (!string) return 'loading...'
  if (string.length <= length) return string
  return `${string.slice(0, length - 3)}...`
}

export default Article
// 66 155 216
