import React, { Component } from 'react'
import {
    Container,
    Header,
    Grid,
    Button
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

import ListOfStories from './ListOfStories'
import TopStories from './TopStories'

import { Link } from 'react-router'

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
    // console.log('Home: ', this.props)
    const { newYorkTime, route } = this.props
    return (
      <Grid style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <Grid.Row>
          <Container>
            <Link to={`${route.path}/1`}> terefrf </Link>
            <Button onClick={() => this.props.router.push(`${route.path}/1`)}>Test</Button>
            <Header as='h1'>Top Stories</Header>
            
            <Grid>
              <TopStories
                firstStory={newYorkTime[0]}
                secondStory={newYorkTime[1]}
                thirdStory={newYorkTime[2]}
              />
              {this.renderStories()}
            </Grid>
          </Container>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Home
