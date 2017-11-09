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

      <div style={{ height: '52px', width: '100%', 
         boxShadow : '0 1px 2px 0 rgba(34,36,38,.15)',
        border: '1px solid rgba(34,36,38,.15)', marginBottom: '60px' }}>
        <IndexLink to='/'>Home</IndexLink>
        {' * '}
        <Link to='/counter'>Counter</Link>
        {' * '}
        <Link to='/test'>test</Link>
      </div>
    </Container>

    {children}
  </Container>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
