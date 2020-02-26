import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const admittedVariants = [
  'primary',
  'secondary',
  'neutral',
  'success',
  'black',
  'club',
]

const admittedSizes = ['lg', 'md', 'sm']

const getVariant = variant =>
  admittedVariants.includes(variant) ? `__${variant}` : '__primary'

const getSize = size => (admittedSizes.includes(size) ? `__${size}` : '__lg')

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
      size = 'lg',
    },
    ref
  ) => (
    <button
      className={`gpi-btn${getVariant(variant)}${
        disabled ? `--disabled` : ''
      } ${fullWidth ? `gpi-btn--full-width` : ''} gpi-btn${getSize(
        size
      )} ${className}`}
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
  size: PropTypes.string,
}

export default Button
