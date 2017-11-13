import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import {
  Container,
  // Search,
} from 'semantic-ui-react'

import SearchBox from './SearchBox/containers/SearchBoxContainer'

import './PageLayout.scss'

export const PageLayout = ({ children, router }) => (
  <Container>
    <Container>
      <div className='black-box-container-top'>
        <h1 className='center'>THE TIMES</h1>
        <div className='right'>
          <SearchBox router={router} />
        </div>
      </div>

      <div
        className='custom-navigation-container'
        >
        <IndexLink to='/' className='custom-item'>Home</IndexLink>
        <Link to='/counter' className='custom-item'>Counter</Link>
        {/* <Link to='/test' className='custom-item'>test</Link> */}
      </div>
    </Container>
    {children}
  </Container>
)
PageLayout.propTypes = {
  children: PropTypes.node,
  router: PropTypes.object
}

export default PageLayout
