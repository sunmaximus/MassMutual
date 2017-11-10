import React, { Component } from 'react'
import {
    Container,
    Header,
    Grid,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

import ListOfStories from './ListOfStories'
import TopStories from './TopStories'

import './styles.scss'

// window.onscroll = function (ev) {
//   // if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
//   //   // you're at the bottom of the page
//   //   console.log('Bottom of page')
//   // }
//   let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
//   let scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight
//   let clientHeight = document.documentElement.clientHeight || window.innerHeight
//   let scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight

//   console.log('dd', scrollHeight, clientHeight, scrollTop, scrolledToBottom)
// }

class Home extends Component {
  static propTypes = {
    newYorkTime: PropTypes.array.isRequired,
    initializeNewYorkTime: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired
  }
  componentWillMount () {
    this.props.initializeNewYorkTime()
    // window.removeEventListener('scroll', this.handleOnScroll)
    window.onscroll = () => this.handleOnScroll()
  }

  handleOnScroll () {
    // http://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom
    let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
    let scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight
    let clientHeight = document.documentElement.clientHeight || window.innerHeight
    let scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight

    console.log('dd', scrollHeight, clientHeight, scrollTop, scrolledToBottom)

    if (scrolledToBottom) {
      console.log('Bottom of page')
      this.props.initializeNewYorkTime()
    }
  }

  renderStories () {
    const { newYorkTime } = this.props
    return newYorkTime.map((story, index) => (
      <ListOfStories story={story} key={index} navigate={() => this.props.router.push(`article/${index}`)} />
    ))
  }
  render () {
    // console.log('Home: ', this.props)
    const { newYorkTime } = this.props
    return (
      <Grid style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <Grid.Row>
          <Container>
            <Header as='h1'>Top Stories</Header>

            <Grid>
              <TopStories
                firstStory={newYorkTime[0]}
                secondStory={newYorkTime[1]}
                thirdStory={newYorkTime[2]}
                navigateToArticleOne={() => this.props.router.push(`article/0`)}
                navigateToArticleTwo={() => this.props.router.push(`article/1`)}
                navigateToArticleThree={() => this.props.router.push(`article/2`)}
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
