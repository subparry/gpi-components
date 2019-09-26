import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const admittedVariants = ['primary', 'secondary']

const getVariant = variant =>
  admittedVariants.includes(variant) ? `__${variant}` : '__primary'

const Button = ({
  children = '',
  className = '',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  variant = 'primary',
}) => (
  <button
    className={`gpi-btn${getVariant(variant)}${
      disabled ? `--disabled` : ''
    } ${className}`}
    disabled={disabled}
    fullWidth={fullWidth}
    onClick={onClick}
    type={type}
    variant={variant}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.string,
}

export default Button
