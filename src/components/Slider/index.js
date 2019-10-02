import React, { useState, useEffect } from 'react'
import Range from './Range'
import './Slider.css'

const Slider = ({ min = 1, max = 7, step = 1, double = false }) => {
  const [firstHandlePosition, setFirstHandlePosition] = useState(
    double ? min : min + Math.floor(max / 2)
  )
  const [secondHandlePosition, setSecondHandlePosition] = useState(max)

  useEffect(() => {
    max >= 10 &&
      console.warn(
        'WARNING: This slider is considered to act properly with max values below 10. If you insist in displaying those numbers, you are going to experience visual issues with the labels'
      )
  }, [max])

  if (step >= max - min) {
    throw new Error(
      'ERROR: Step prop cannot be greater or equal than the slider total length'
    )
  }

  const calcFillLength = () => {
    const currentLength = double
      ? Math.abs(firstHandlePosition - secondHandlePosition)
      : firstHandlePosition - min
    return (currentLength * 100) / (max - min)
  }

  const calcLeft = () =>
    ((Math.min(firstHandlePosition, secondHandlePosition) - min) * 100) /
    (max - min)

  const calcStyles = () =>
    double
      ? { width: calcFillLength() + '%', left: calcLeft() + '%' }
      : { width: calcFillLength() + '%' }

  const calcSpanPosition = handle => {
    const currentLength = handle - min
    return {
      left: `calc(${(currentLength * 100) / (max - min)}% - ${handleMaxValue(
        handle,
        'messagePosition',
        5
      )}px)`,
    }
  }

  const handleInput = (e, secondSlider = false) =>
    secondSlider
      ? setSecondHandlePosition(e.target.value)
      : setFirstHandlePosition(e.target.value)

  const handleMaxValue = (valueToCompare, fix, defaultValue) => {
    if (valueToCompare == max) {
      switch (fix) {
        case 'spanMessage':
          return valueToCompare + '+'
        case 'messagePosition':
          return 10
        default:
          return valueToCompare
      }
    } else {
      return defaultValue
    }
  }

  return (
    <div className="sliders-container">
      <Range
        min={min}
        max={max}
        step={step}
        value={firstHandlePosition}
        onInput={handleInput}
      />
      {double && (
        <Range
          min={min}
          max={max}
          step={step}
          value={secondHandlePosition}
          onInput={e => handleInput(e, true)}
        />
      )}
      <div className="tracks-container">
        <span style={calcSpanPosition(firstHandlePosition)}>
          {handleMaxValue(
            firstHandlePosition,
            'spanMessage',
            firstHandlePosition
          )}
        </span>
        {double && (
          <span style={calcSpanPosition(secondHandlePosition)}>
            {handleMaxValue(
              secondHandlePosition,
              'spanMessage',
              secondHandlePosition
            )}
          </span>
        )}
        {console.log(calcStyles())}
        <div className="active-track" style={calcStyles()}></div>
      </div>
    </div>
  )
}

export default Slider
