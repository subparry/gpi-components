import React from 'react'
import './RadioButton.css'

const RadioButton = ({ id, ...props }) => {
  return (
    <div className="gpi-radio-button">
      <label htmlFor={id} className="gpi-radio-button__label">
        <div
          className={`gpi-radio-button__custom-input ${
            props.checked ? 'gpi-radio-button__custom-input--checked' : ''
          }`}
        />
      </label>
      <input
        type="radio"
        {...props}
        id={id}
        className="gpi-radio-button__input"
      />
    </div>
  )
}
export default RadioButton
