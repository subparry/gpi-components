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
  fixedWidth = true,
  id,
  options,
  position = 'BOTTOM_LEFT',
  setValue,
  value,
  onOpen,
  onClose,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    if (isOpen && onClose) onClose()
    if (!isOpen && onOpen) onOpen()
    setIsOpen(wasOpen => !wasOpen)
  }

  const selectOption = e => {
    e.stopPropagation()

    const { value } = e.target.dataset
    setValue(value)
    toggleDropdown()
  }

  const handleBlur = e => {
    const blurTrigger = e.relatedTarget
    if (!dropdownRef.current.contains(blurTrigger)) {
      onClose && onClose()
      setIsOpen(false)
    }
  }

  const label = options.get(value) ? options.get(value).label : 'Seleccione'

  useEffect(() => {
    isOpen && dropdownRef.current.focus()
  }, [isOpen])

  return (
    <div
      className="gpi-dropdown"
      onBlur={handleBlur}
      id={id}
      ref={dropdownRef}
      tabIndex="0"
    >
      <Button
        onClick={!disabled && toggleDropdown}
        variant="neutral"
        className={`gpi-dropdown__main-button${
          fixedWidth ? `--fixed-width` : ``
        } ${disabled ? `gpi-dropdown__main-button--disabled` : ``}`}
        disabled={disabled}
      >
        {label}

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
        {Array.from(
          options,
          ([optionValue, { label, disabled = false }], i) => (
            <button
              className={`gpi-dropdown__button ${
                optionValue === value ? 'gpi-dropdown__button--selected' : ''
              }`}
              data-value={optionValue}
              disabled={disabled}
              key={`option_${id}_${i}`}
              onClick={selectOption}
              type="button"
            >
              {label}
            </button>
          )
        )}
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(Map).isRequired,
  position: PropTypes.oneOf([
    'TOP_RIGHT',
    'TOP_LEFT',
    'BOTTOM_RIGHT',
    'BOTTOM_LEFT',
  ]),
  setValue: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  disabled: PropTypes.bool,
}

export default Dropdown
