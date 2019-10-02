import React from 'react'
import PropTypes from 'prop-types'
import '../Button/Button.css'
// import './ButtonLink.css'

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
    <a {...props} rel="noreferrer noopener">
      <button
        className={`gpi-btn${getVariant(variant)}${
          disabled ? `--disabled` : ''
        } ${fullWidth ? `gpi-btn--full-width` : ''} ${className}`}
        disabled={disabled}
      >
        {children}
      </button>
    </a>
  )
}

ButtonLink.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'neutral']),
}

export default ButtonLink
