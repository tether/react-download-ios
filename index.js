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
  return (
    <a href={'https://itunes.apple.com/app/' + props.id}>
      <img src="https://tether.github.io/react-download-ios/badge.png" title={props.title || 'Download iOS application'}></img>
    </a>
  )
}
