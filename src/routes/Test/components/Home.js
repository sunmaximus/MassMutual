import React, { Component } from 'react'
import {
    Container,
    Header,
    Grid,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

import TopStoryLeft from './TopStoryLeft'
import TopTwoStoriesRight from './TopTwoStoriesRight'
import ListOfStories from './ListOfStories'

import nyt from '../assets/nyt.png'

import './styles.scss'

class Home extends Component {
  static propTypes = {
    newYorkTime: PropTypes.array.isRequired,
    initializeNewYorkTime: PropTypes.func.isRequired
  }
  componentWillMount () {
    this.props.initializeNewYorkTime()
  }

  renderStories () {
    const { newYorkTime } = this.props
    return newYorkTime.map((story, index) => (
      <ListOfStories story={story} key={index} />
    ))
  }
  render () {
    console.log(this.props)
    const { newYorkTime } = this.props
    return (
      <Grid style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <Grid.Row>
          <Container>
            <Header as='h1'>Top Stories</Header>

            <Grid>
              <div className='custom-top-stories-container' style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <div className='left'>
                  <div className='top'>
                    <div className='right'>
                      <h2>Title</h2>
                      <p>by: ss</p>
                    </div>
                    <div className='left'>
                      <img style={{ height: '100%', width: '100%' }} src={nyt} />
                    </div>
                  </div>
                  <div className='bottom'>
                        dwedwe
                    </div>
                </div>

                <div className='right'>
                  <div className='custom-right-container'>
                    <div className='top'>
                        wdwedwe
                    </div>
                    <div className='bottom'>
                        dwedew
                    </div>
                  </div>

                </div>
              </div>

              {this.renderStories()}
            </Grid>
          </Container>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Home
