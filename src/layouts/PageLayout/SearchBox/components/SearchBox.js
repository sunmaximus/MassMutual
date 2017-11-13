import React, { Component } from 'react'
// import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import {
  Search,
} from 'semantic-ui-react'

class SearchBox extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired,
    // locationChange: PropTypes.func.isRequired,
  }

  searchHandler (event) {
    if (event.key === 'Enter' && event.target.value !== '') {
      console.log(event.target.value)
      this.props.search(event.target.value)
    }
  }
  render () {
    console.log(this.props)
    return (
      <Search
        showNoResults={false}
        onKeyUp={(event) => this.searchHandler(event)}
              />
    )
  }
}

export default SearchBox
