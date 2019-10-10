import React from 'react'
import PropTypes from 'prop-types'
import './TextInput.css'

const TextInput = ({ className = '', disabled = false, ...props }) => (
  <input
    className={`input-gpi ${className}`}
    disabled={disabled}
    type="text"
    {...props}
  />
)

TextInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
}

export default TextInput
