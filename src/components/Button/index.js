import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const admittedVariants = ['primary', 'secondary', 'neutral']

const getVariant = variant =>
  admittedVariants.includes(variant) ? `__${variant}` : '__primary'

const Button = forwardRef(
  (
    {
      children = '',
      className = '',
      disabled = false,
      fullWidth = false,
      onBlur,
      onClick,
      type = 'button',
      variant = 'primary',
    },
    ref
  ) => (
    <button
      className={`gpi-btn${getVariant(variant)}${
        disabled ? `--disabled` : ''
      } ${fullWidth ? `gpi-btn--full-width` : ''} ${className}`}
      disabled={disabled}
      onBlur={onBlur}
      onClick={onClick}
      ref={ref}
      type={type}
      variant={variant}
    >
      {children}
    </button>
  )
)

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.string,
}

export default Button
