import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import defaultTheme from '../../styles/defaultTheme'

const Input = styled.input`
  height: 50px;
  border-radius: 30px;
  border: 1px solid transparent;
  background-color: ${defaultTheme.colors.white};
  padding-left: 21px;
  padding-right: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
  outline: 0;
  font-size: ${defaultTheme.fonts.main.size};
  &:focus {
    border-color: ${defaultTheme.colors.gray};
  }
`

const TextInput = ({
  className,
  disabled = false,
  onChange,
  placeholder = '',
  value,
}) => (
  <Input
    className={className}
    disabled={disabled}
    onChange={onChange}
    placeholder={placeholder}
    type="text"
    value={value}
  />
)

TextInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

export default TextInput
