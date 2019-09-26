import React from 'react'
import styled from 'styled-components'
import defaultTheme from '../../styles/defaultTheme'

const Bar = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 10px;
  background-color: ${defaultTheme.colors.black};
`

const Slider = () => <Bar />

export default Slider
