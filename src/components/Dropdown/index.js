import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Dropdown.css'

import Button from '../Button'

const validPositions = {
  TOP_LEFT: 'topleft',
  TOP_RIGHT: 'topright',
  BOTTOM_LEFT: 'bottomleft',
  BOTTOM_RIGHT: 'bottomright',
}

const Dropdown = ({
  defaultOption = 0,
  id,
  options,
  position = 'BOTTOM_LEFT',
  setValue,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [option, setOption] = useState(defaultOption)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setIsOpen(wasOpen => !wasOpen)
  }

  const selectOption = e => {
    e.stopPropagation()

    const { option, value } = e.target.dataset
    setOption(option)
    setValue(value)
    toggleDropdown()
  }

  const handleBlur = e => {
    const blurTrigger = e.relatedTarget
    if (!dropdownRef.current.contains(blurTrigger)) {
      setIsOpen(false)
    }
  }

  return (
    <div className="gpi-dropdown" ref={dropdownRef}>
      <Button onBlur={handleBlur} onClick={toggleDropdown} variant="neutral">
        {options[option].label}
      </Button>
      <div
        className={`gpi-dropdown__options--${validPositions[position]} ${
          isOpen ? 'gpi-dropdown__options--open' : ''
        }`}
      >
        {options.map(({ label, value, disabled = false }, i) => (
          <button
            className="gpi-dropdown__button"
            data-option={i}
            data-value={value}
            disabled={disabled}
            key={`option_${id}_${i}`}
            onClick={selectOption}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  defaultOption: PropTypes.number,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ),
  position: PropTypes.oneOf([
    'TOP_RIGHT',
    'TOP_LEFT',
    'BOTTOM_RIGHT',
    'BOTTOM_LEFT',
  ]),
  setValue: PropTypes.func.isRequired,
}

export default Dropdown
