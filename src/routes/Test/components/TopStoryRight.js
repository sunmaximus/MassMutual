import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Segment,
    Grid,
    Image,
} from 'semantic-ui-react'

import nyt from '../assets/nyt.png'

class TopStoryRight extends Component {
  render () {
    const { firstStory } = this.props
    let isLoading = false
    if (!firstStory) {
      isLoading = true
      return <div>loading...</div>
    } else if (firstStory === {}) isLoading = true
    return (
      <Grid.Column width={10} style={{ paddingLeft: '0px' }}>
        <Segment.Group style={{ height: '437px' }}>
          <Segment style={{ height: '50%', backgroundColor: 'rgb(194, 201, 212)' }}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={9}>
                  <div><h3>{isLoading ? 'loading...' : shortenTitle(firstStory.headline.main)}</h3></div>
                  <div
                    style={{ color: 'white' }}
                    className='credit-top-story-space'
                  >
                    {isLoading ? 'loading...' : firstStory.byline.original}
                  </div>
                </Grid.Column>
                <Grid.Column width={7}>
                  {isLoading ? 'loading...' : <Picture multimedia={firstStory.multimedia} />}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment style={{ height: '50%' }}>
            {isLoading ? 'loading...'
              : <p style={{ fontSize: '16px' }}>{isLoading ? 'loading...' : shortenSnippet(firstStory.snippet)}</p>}
          </Segment>
        </Segment.Group>
      </Grid.Column>
    )
  }
}

TopStoryRight.propTypes = {
  firstStory: PropTypes.object
}

class Picture extends Component {
  static propTypes = {
    multimedia: PropTypes.array
  }
  render () {
    const { multimedia } = this.props
    return (
      multimedia.length === 0 ? <Image style={{ width: '100%', height: '100%', backgroundColor: 'white' }} src={nyt} />
      : <Image style={{ width: '100%', height: '100%' }} src={`http://www.nytimes.com/${multimedia[1].url}`} />
    )
  }
}

const shortenTitle = (string) => {
  if (string.length <= 90) return string
  return `${string.slice(0, 87)}...`
}

const shortenSnippet = (string) => {
  if (string.length <= 400) return string
  return `${string.slice(0, 400)}...`
}

export default TopStoryRight
