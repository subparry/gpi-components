import React from 'react'
import PropTypes from 'prop-types'
import './Checkbox.css'

const Checkbox = ({ id, checked = false, size = 'md', ...props }) => {
  return (
    <label
      htmlFor={id}
      className={`gpi-check__container gpi-check__container--${size} ${
        checked ? 'checked' : ''
      }`}
    >
      <label htmlFor={id} id="custom-checkbox">
        <div></div>
      </label>
      <input type="checkbox" id={id} checked={checked} {...props} />
    </label>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  size: PropTypes.oneOf(['md', 'sm']),
}

export default Checkbox
