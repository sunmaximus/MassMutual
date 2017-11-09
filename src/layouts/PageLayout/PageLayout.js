import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import {
  Container,
} from 'semantic-ui-react'

import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <Container>
    <Container>
      <div className='black-box-container-top'>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'white',
        }}><h1>THE TIMES</h1></div>
      </div>

      <div
        className='custom-navigation-container'
        >
        <IndexLink to='/' className='custom-item'>Home</IndexLink>
        <Link to='/counter' className='custom-item'>Counter</Link>
        <Link to='/test' className='custom-item'>test</Link>
      </div>
    </Container>

    {children}
  </Container>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
