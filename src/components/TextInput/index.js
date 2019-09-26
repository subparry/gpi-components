import React from 'react'
import PropTypes from 'prop-types'
import './TextInput.css'

const TextInput = ({
  className,
  disabled = false,
  onChange,
  placeholder = '',
  value,
}) => (
  <input
    className={`input-gpi ${className}`}
    disabled={disabled}
    onChange={onChange}
    placeholder={placeholder}
    type="text"
    value={value}
  />
)

TextInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

export default TextInput
