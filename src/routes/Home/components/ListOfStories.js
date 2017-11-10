import React, { Component } from 'react'
import {
    Segment,
    Image
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

import nyt from '../assets/nyt.png'

class ListOfStories extends Component {
  static propTypes = {
    story: PropTypes.object,
    navigate: PropTypes.func
  }

  render () {
    const { story, navigate } = this.props
    if (story === undefined) return <div>loading..</div>

    return (
      <Segment
        style={{ width: '100%', borderRadius: '0px', height: '208px' }}
        className='custom-list-container'
        onClick={navigate}
      >
        <div className='custom-list'>
          <div className='custom-list-left-picture'>
            <Image src={story.multimedia.length === 0 ? nyt : `http://www.nytimes.com/${story.multimedia[1].url}`} />
          </div>
          <div className='custom-list-right'>
            <div className='custom-list-right-content'>
              <h2>{title(story.headline.main)}</h2>
              <p>{snippet(story.snippet)}</p>
              <p className='content-bottom'>{story.byline.original}</p>
            </div>
          </div>
        </div>
      </Segment>
    )
  }
}

const title = (string) => {
  if (string.length <= 71) return string
  return `${string.slice(0, 68)}...`
}

const snippet = (string) => {
  if (string.length <= 245) return string
  return `${string.slice(0, 240)}...`
}

export default ListOfStories
