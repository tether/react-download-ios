/**
 * Dependencies.
 */

import React from 'react'


/**
 * This is a simple description.
 *
 * @param {Object} props
 * @api public
 */

export default (props) => {
  //itms-apps
  const title = props.title || 'Download iOS application'
  return (
    <a href={'https://itunes.apple.com/app/' + props.id} aria-label={title}>
      <img src="https://tether.github.io/react-download-ios/badge.png" title={title}></img>
    </a>
  )
}
