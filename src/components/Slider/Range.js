import React from 'react'

const Range = ({ min, max, step, value, onInput }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onInput={onInput}
    />
  )
}

export default Range
