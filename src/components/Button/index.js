import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import defaultTheme from '../../styles/defaultTheme'

const {
  fonts: {
    main: { family, size },
  },
  buttons,
} = defaultTheme

const getStylesByStatus = variant => status => {
  const currentButton = buttons[variant] || buttons.primary
  const { bg, border, color } = currentButton[status] || currentButton.base
  return `
    background-color: ${bg};
    border: ${border};
    color: ${color};
  `
}

const StyledButton = styled.button`
  min-width: 180px;
  min-height: 50px;
  border-radius: 30px;
  font-weight: bold;
  font-family: ${family};
  font-size: ${size};
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  outline: 0;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  ${({ variant, disabled }) => {
    const buttonStyles = getStylesByStatus(variant)
    return disabled
      ? `
      ${buttonStyles('disabled')}
      cursor: not-allowed;
    `
      : `
      ${buttonStyles('base')}
      &:focus {
        ${buttonStyles('focus')}
      }
      &:hover {
        ${buttonStyles('hover')}
      }
      &:active {
        border-top-width: 2px;
        border-bottom-width: 0px;
      }
    `
  }}
`

const Button = ({
  children = '',
  className,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  variant = 'primary',
}) => (
  <StyledButton
    className={className}
    disabled={disabled}
    fullWidth={fullWidth}
    onClick={onClick}
    type={type}
    variant={variant}
  >
    {children}
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.string,
}

export default Button
