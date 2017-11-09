import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import {
  Container,
} from 'semantic-ui-react'

export const PageLayout = ({ children }) => (
  <Container>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/'>Home</IndexLink>
    {' · '}
    <Link to='/counter'>Counter</Link>
    {' . '}
    <Link to='/test'>test</Link>
    {children}
  </Container>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
