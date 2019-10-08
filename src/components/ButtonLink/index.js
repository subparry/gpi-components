import React from 'react'
import PropTypes from 'prop-types'
import '../Button/Button.css'
import './ButtonLink.css'

const getVariant = variant => `__${variant}`

const ButtonLink = ({
  disabled = false,
  fullWidth = false,
  className = '',
  variant = 'primary',
  children = '',
  ...props
}) => {
  return (
    <a
      rel="noreferrer noopener"
      className={`gpi-btn${getVariant(variant)}${
        disabled ? `--disabled` : ''
      } ${
        fullWidth ? `gpi-btn--full-width` : 'gpi-btnlink--fixed-width'
      } gpi-btnlink ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </a>
  )
}

ButtonLink.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'neutral']),
}

export default ButtonLink
