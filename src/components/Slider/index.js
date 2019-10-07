import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Range from './Range'
import './Slider.css'

const Slider = ({ min = 1, max = 7, step = 1, double = false, setValues }) => {
  // firstHandlePosition refers to the value of the first handle of the slider. If the slider is double, it is assigned to the minimum value,
  // if the slider is simple, it is assigned to the middle value rounded down
  const [firstHandlePosition, setFirstHandlePosition] = useState(
    double ? min : min + Math.floor((max - min) / 2)
  )
  const [secondHandlePosition, setSecondHandlePosition] = useState(max)

  useEffect(() => {
    max >= 10 &&
      console.warn(
        'WARNING: This slider is considered to act properly with max values below 10. If you insist in displaying those numbers, you are going to experience visual issues with the labels'
      )
  }, [max])

  useEffect(() => {
    // call the provided callback (if defined) with different values if the slider is double whenever the slider changes its value
    if (setValues) {
      double
        ? setValues(firstHandlePosition, secondHandlePosition)
        : setValues(firstHandlePosition)
    }
  }, [firstHandlePosition, secondHandlePosition])

  if (step >= max - min) {
    throw new Error(
      'ERROR: Step prop cannot be greater or equal than the slider total length'
    )
  }

  // calculates the length of the red fill of the slider based on the position of the handle (or handles)
  const calcFillLength = () => {
    const currentLength = double
      ? Math.abs(firstHandlePosition - secondHandlePosition)
      : firstHandlePosition - min
    return (currentLength * 100) / (max - min)
  }

  // Calculates the red stripe distance from the left in case there's two handles
  const calcLeft = () =>
    ((Math.min(firstHandlePosition, secondHandlePosition) - min) * 100) /
    (max - min)

  // Uses calcFillLength and calcLeft to return a styles object that will be applied to the red stripe
  const calcStyles = () =>
    double
      ? { width: calcFillLength() + '%', left: calcLeft() + '%' }
      : { width: calcFillLength() + '%' }

  // Calculates and adjusts the position of the numbers representing the slider current value
  const calcSpanPosition = handle => {
    const currentLength = handle - min
    return {
      left: `calc(${(currentLength * 100) / (max - min)}% - 20px)`,
    }
  }

  // Callback function for the change event on the HTML5 input[type=range]
  const handleChange = (e, secondSlider = false) => {
    e.persist()
    return secondSlider
      ? setSecondHandlePosition(parseInt(e.target.value))
      : setFirstHandlePosition(parseInt(e.target.value))
  }

  // Function handles the adjustments for when one of the handles reaches the max value
  const handleMaxValue = (valueToCompare, fix, defaultValue) => {
    if (valueToCompare == max) {
      switch (fix) {
        // Adds a plus sign to the number displayed in the tooltip
        case 'spanMessage':
          return defaultValue + '+'
        default:
          return defaultValue
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
        onChange={handleChange}
      />
      {double && (
        <Range
          min={min}
          max={max}
          step={step}
          value={secondHandlePosition}
          onChange={e => handleChange(e, true)}
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
        <div className="active-track" style={calcStyles()}></div>
      </div>
    </div>
  )
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  double: PropTypes.bool,
  setValues: PropTypes.func.isRequired,
}

export default Slider
