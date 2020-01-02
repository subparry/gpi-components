import React from 'react'
import PropTypes from 'prop-types'

const icons = require.context('./icons/', false, /\.svg$/)

const Icon = ({ name, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={`icon icon-${name}`}
      {...props}
    >
      <use xlinkHref={icons(`./${name}.svg`) + '#Capa_1'}></use>
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
