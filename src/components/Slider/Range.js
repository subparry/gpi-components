import React from 'react'

const Range = ({ handleChange, min, max, step }) => {
  return (
    <input
      type="range"
      onChange={handleChange}
      min={min}
      max={max}
      step={step}
    />
  )
}

export default Range
