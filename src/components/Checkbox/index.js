import React from 'react'
import PropTypes from 'prop-types'
import './Checkbox.css'

const Checkbox = ({ id, checked = false, ...props }) => {
  return (
    <label
      htmlFor={id}
      className={`gpi-check__container ${checked ? 'checked' : ''}`}
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
}

export default Checkbox
