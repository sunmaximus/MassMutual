import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

const ByLine = ({ byline, pub_date }) => !byline.original ? <div className='custom-byline' /> : (
  <div className='custom-byline'>
    <div className='bottom-byline'>
      <div className='author'>
        {shortenString(byline.original, 100)}
      </div>
      <div className='time'>
        {moment(pub_date).format('h:mm A')} ET
        </div>
    </div>
  </div>
)

ByLine.propTypes = {
  byline: PropTypes.any.isRequired,
  pub_date: PropTypes.any.isRequired
}

const shortenString = (string, length) => {
  if (!string) return 'loading...'
  if (string.length <= length) return string
  return `${string.slice(0, length - 3)}...`
}
