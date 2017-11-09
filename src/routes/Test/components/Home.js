import React, { Component } from 'react'
import {
    Container,
    Header,
    Grid,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

import TopStoryRight from './TopStoryRight'
import TopTwoStoriesRight from './TopTwoStoriesRight'
import ListOfStories from './ListOfStories'

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
      <Grid.Row>
        <Container style={{
          padding: '5% 5%'
        }}>
          <Header as='h1'>Top Stories</Header>

          <Grid columns={2} divided>
            <Grid.Row stretched>
              <TopStoryRight
                firstStory={newYorkTime[0]}
              />

              <TopTwoStoriesRight
                secondStory={newYorkTime[1]}
                thirdStory={newYorkTime[2]}
                  />
            </Grid.Row>
            {this.renderStories()}
          </Grid>
        </Container>
      </Grid.Row>
    )
  }
}

export default Home
