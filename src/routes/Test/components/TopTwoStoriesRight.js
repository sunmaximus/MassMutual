import React, { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

import {
    Segment,
    Grid,
} from 'semantic-ui-react'

class TopTwoStoriesRight extends Component {
  static propTypes = {
    secondStory: PropTypes.object,
    thirdStory: PropTypes.object,
  }

  render () {
    let isLoading = false
    const { secondStory, thirdStory } = this.props
    if (!secondStory || !thirdStory) {
      isLoading = true
    }
    return (
      <Grid.Column width={6} style={{ paddingRight: '0px', width: '354px', float: 'right' }}>
        <Segment className='custom-right-top-article'>
          <div className='custom-right-top-item'>
            {isLoading ? <div /> : <h3>{shortenTitle(secondStory.headline.main)}</h3>}
          </div>
          <div className='custom-right-bottom-item'>
            {isLoading ? <div />
              : <div style={{ display: 'inline-block' }}>
                <div style={{ color: 'rgb(176, 178, 178)', float: 'left', marginRight: '15px' }}>
                  {secondStory.byline.original}
                </div>
                <div style={{ color: 'rgb(13, 48, 104)', float: 'right' }}>
                  {moment(secondStory.pub_date).format('h:mm A')} ET
                </div>
              </div>}
          </div>
        </Segment>

        <Segment className='custom-right-top-article'>
          <div className='custom-right-top-item'>
            {isLoading ? <div /> : <h3>{shortenTitle(thirdStory.headline.main)}</h3>}
          </div>
          <div className='custom-right-bottom-item'>
            {isLoading ? <div />
              : <div style={{ display: 'inline-block' }}>
                <div style={{ color: 'rgb(176, 178, 178)', float: 'left', marginRight: '15px' }}>
                  {thirdStory.byline.original}
                </div>
                <div style={{ color: 'rgb(13, 48, 104)', float: 'right' }}>
                  {moment(thirdStory.pub_date).format('h:mm A')} ET
                </div>
              </div>}
          </div>
        </Segment>
      </Grid.Column>
    )
  }
}

const shortenTitle = (string) => string.length <= 100 ? string : `${string.slice(0, 97)}...`

export default TopTwoStoriesRight
