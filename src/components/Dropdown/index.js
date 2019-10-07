import React, { useEffect, useRef, useState } from 'react'
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
  fixedWidth = true,
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

  useEffect(() => {
    isOpen && dropdownRef.current.focus()
  }, [isOpen])

  return (
    <div
      className="gpi-dropdown"
      onBlur={handleBlur}
      ref={dropdownRef}
      tabIndex="0"
    >
      <Button
        onClick={toggleDropdown}
        variant="neutral"
        className={`gpi-dropdown__main-button${
          fixedWidth ? `--fixed-width` : ``
        }`}
      >
        {options[option].label}

        <svg
          id="Capa_1"
          data-name="Capa 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className={`gpi-dropdown__arrow${isOpen ? `--open` : ``}`}
        >
          <title>20x20 arrow down</title>
          <path
            className="gpi-dropdown__chevron"
            d="M10.49,15.8a2.47,2.47,0,0,0,1.27-.66l6.82-6.8a2.46,2.46,0,0,0-3.47-3.48L10,10,4.86,4.86a2.44,2.44,0,0,0-3.45,0A2.4,2.4,0,0,0,.7,6.6a2.45,2.45,0,0,0,.71,1.74l6.83,6.8a2,2,0,0,0,.85.53A2.24,2.24,0,0,0,10.49,15.8Z"
          />
        </svg>
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
            type="button"
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
