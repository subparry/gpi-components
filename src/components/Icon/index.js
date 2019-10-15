import React from 'react'

const icons = require.context('./icons/', false, /\.svg$/)

const Icon = ({ name, color = '#444242' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={`icon icon-${name}`}
    >
      <use
        xlinkHref={icons(`./${name}.svg`) + '#Capa_1'}
        style={{ fill: color }}
      ></use>
    </svg>
  )
}

export default Icon
