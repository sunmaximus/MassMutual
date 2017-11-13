import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Search,
} from 'semantic-ui-react'

class SearchBox extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
  }

  searchHandler (event) {
    if (event.key === 'Enter' && event.target.value !== '') {
      this.props.search(event.target.value)
      this.props.router.push('/search')
    }
  }
  render () {
    return (
      <Search
        showNoResults={false}
        onKeyUp={(event) => this.searchHandler(event)}
        placeholder='Search...'
            />
    )
  }
}

export default SearchBox
