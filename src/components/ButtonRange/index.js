import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './ButtonRange.css'

const handleClassName = (selectedValues, btnValue) => {
  const classNameArray = []
  if ((selectedValues.min || selectedValues.min === 0) && selectedValues.max) {
    if (btnValue > selectedValues.min && btnValue < selectedValues.max) {
      classNameArray.push('gpi-buttonrange__button--active')
    }
  }
  if (btnValue === selectedValues.min || btnValue === selectedValues.max) {
    classNameArray.push('gpi-buttonrange__button--limit')
  }
  return classNameArray.join(' ')
}

const ButtonRange = ({
  min,
  max,
  getValues,
  value = { min: null, max: null },
  isControlled = false,
  keyName = 'gpi-buttonRange',
}) => {
  const btnQty = max - min
  const btns = Array(btnQty + 1).fill(undefined)
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    isControlled && setSelected(value)
  }, [value])

  const handleClick = value => () => {
    if (!selected.min && selected.min !== 0 && !selected.max) {
      !isControlled && setSelected({ min: value, max: null })
      getValues({ min: value, max: null })
    } else if ((selected.min || selected.min === 0) && !selected.max) {
      if (value > selected.min) {
        getValues({ min: selected.min, max: value })
        !isControlled && setSelected(prev => ({ ...prev, max: value }))
      } else if (value < selected.min) {
        !isControlled && setSelected({ min: value, max: selected.min })
        getValues({ min: value, max: selected.min })
      } else {
        !isControlled && setSelected({ min: null, max: null })
        getValues({ min: null, max: null })
      }
    } else {
      if (value > selected.min && value < selected.max) {
        return
      } else if (value < selected.min) {
        getValues({ max: selected.max, min: value })
        !isControlled && setSelected(prev => ({ ...prev, min: value }))
      } else if (value > selected.max) {
        getValues({ min: selected.min, max: value })
        !isControlled && setSelected(prev => ({ ...prev, max: value }))
      } else if (value === selected.min) {
        !isControlled && setSelected({ min: selected.max, max: null })
        getValues({ min: selected.max, max: null })
      } else if (value === selected.max) {
        getValues({ min: selected.min, max: null })
        !isControlled && setSelected(prev => ({ ...prev, max: null }))
      }
    }
  }

  return (
    <div className="gpi-buttonrange__container">
      {btns.map((v, i) => {
        return (
          <button
            className={handleClassName(selected, min + i)}
            onClick={handleClick(min + i)}
            key={`${keyName}-${i}`}
          >
            {min + i}
          </button>
        )
      })}
    </div>
  )
}

ButtonRange.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  getValues: PropTypes.func.isRequired,
  value: PropTypes.object,
  keyName: PropTypes.string,
}

export default ButtonRange
