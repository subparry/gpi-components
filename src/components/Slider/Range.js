import React from 'react'

const Range = ({ min, max, step, value, onChange }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
    />
  )
}

export default Range
