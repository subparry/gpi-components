import React from 'react'
import PropTypes from 'prop-types'

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

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.oneOf([
    '-',
    'alert',
    'arrowdown',
    'arrowleft',
    'arrowright',
    'arrowup',
    'bell',
    'calendar',
    'chat',
    'check',
    'circle',
    'cube',
    'down',
    'downdown',
    'download',
    'favorite',
    'folder',
    'heart',
    'home',
    'idea',
    'info',
    'left',
    'leftleft',
    'location',
    'mail',
    'menu',
    'menu02',
    'mesadetrabajo48',
    'mesadetrabajo50',
    'none',
    'pluss',
    'reload',
    'rewindright',
    'rrewind',
    'settings',
    'share',
    'signal',
    'star',
    'time',
    'triangleright',
    'up',
    'up01',
    'user',
    'volume-',
    'volume+',
    'wait',
    'x',
  ]),
}

export default Icon
