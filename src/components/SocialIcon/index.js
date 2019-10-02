import React from 'react'
import PropTypes from 'prop-types'

import facebook from '../../stories/assets/facebook.svg'
import instagram from '../../stories/assets/IG.svg'
import linkedin from '../../stories/assets/IN.svg'
import twitter from '../../stories/assets/twtr.svg'
import youtube from '../../stories/assets/YT.svg'

const icons = {
  facebook,
  instagram,
  linkedin,
  twitter,
  youtube,
}

const SocialIcon = ({ variant }) => {
  const currentIcon = icons[variant]
  return <img src={currentIcon} alt="" />
}

SocialIcon.propTypes = {
  variant: PropTypes.oneOf([
    'facebook',
    'instagram',
    'linkedin',
    'twitter',
    'youtube',
  ]),
}

export default SocialIcon
