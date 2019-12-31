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
}) => {
  const btnQty = max - min
  const btns = Array(btnQty + 1).fill(undefined)
  const [selected, setSelected] = useState(value)
  useEffect(() => {
    setSelected(value)
  }, [value])
  const handleClick = value => () => {
    if (!selected.min && selected.min !== 0 && !selected.max) {
      setSelected({ min: value, max: null })
      getValues({ min: value, max: null })
    } else if ((selected.min || selected.min === 0) && !selected.max) {
      if (value > selected.min) {
        setSelected(prev => {
          getValues({ ...prev, max: value })
          return { ...prev, max: value }
        })
      } else if (value < selected.min) {
        setSelected({ min: value, max: selected.min })
        getValues({ min: value, max: selected.min })
      } else {
        setSelected({ min: null, max: null })
        getValues({ min: null, max: null })
      }
    } else {
      if (value > selected.min && value < selected.max) {
        return
      } else if (value < selected.min) {
        setSelected(prev => {
          getValues({ ...prev, min: value })
          return { ...prev, min: value }
        })
      } else if (value > selected.max) {
        setSelected(prev => {
          getValues({ ...prev, max: value })
          return { ...prev, max: value }
        })
      } else if (value === selected.min) {
        setSelected({ min: selected.max, max: null })
        getValues({ min: selected.max, max: null })
      } else if (value === selected.max) {
        setSelected(prev => {
          getValues({ ...prev, max: null })
          return { ...prev, max: null }
        })
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
}

export default ButtonRange
