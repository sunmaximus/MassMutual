import React, { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

import nyt from '../assets/nyt.png'

class TopStories extends Component {
  static propTypes = {
    firstStory: PropTypes.object,
    secondStory: PropTypes.object,
    thirdStory: PropTypes.object,
    navigateToArticleOne: PropTypes.func,
    navigateToArticleTwo: PropTypes.func,
    navigateToArticleThree: PropTypes.func,
  }
  render () {
    const {
      firstStory,
      secondStory,
      thirdStory,
      navigateToArticleOne,
      navigateToArticleTwo,
      navigateToArticleThree
    } = this.props
    let isLoading = true
    if (firstStory && secondStory && thirdStory) isLoading = false

    return (
      <div className='custom-top-stories-container' style={{ paddingLeft: '0px', paddingRight: '0px' }}>
        {/* **Left Top Story** */}
        <div className='left' onClick={navigateToArticleOne}>
          <div className='top'>
            <div className='right'>
              <h2>{!isLoading ? shortenString(firstStory.headline.main, 60) : 'loading..'}</h2>
              <p>{!isLoading ? firstStory.byline.original : 'loading..'}</p>
            </div>
            <div className='left'>
              <img
                style={{ height: '100%', width: '100%' }}
                src={!isLoading ? nyt : checkIfPictureExist(firstStory)}
              />
            </div>
          </div>
          <div className='bottom'>
            {!isLoading ? shortenString(firstStory.snippet, 380) : 'loading..'}
          </div>
        </div>

        {/* **Right Two Stories** */}
        <div className='right'>
          <div className='custom-right-container'>
            <div className='top' onClick={navigateToArticleTwo}>
              <h2>{!isLoading ? shortenString(secondStory.headline.main, 56) : 'loading..'}</h2>
              {isLoading ? <div />
              : <div className='bottom-byline'>
                <div className='author'>
                  {shortenString(secondStory.byline.original, 20)}
                </div>
                <div className='time'>
                  {moment(secondStory.pub_date).format('h:mm A')} ET
                </div>
              </div>}
            </div>
            <div className='bottom-third' onClick={navigateToArticleThree}>
              <h2>{!isLoading ? shortenString(thirdStory.headline.main, 56) : 'loading..'}</h2>
              {isLoading ? <div />
                : <div className='bottom-byline'>
                  <div className='author'>
                    {shortenString(thirdStory.byline.original, 20)}
                  </div>
                  <div className='time'>
                    {moment(thirdStory.pub_date).format('h:mm A')} ET
                    </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const shortenString = (string, length) => {
  if (!string) return 'loading...'
  if (string.length <= length) return string
  return `${string.slice(0, length - 3)}...`
}

const checkIfPictureExist = (story) => {
  if (story) {
    const { multimedia } = story
    if (multimedia.length > 0) return `http://www.nytimes.com/${multimedia[1].url}`
  } return nyt
}

export default TopStories
