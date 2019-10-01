import React, { useState } from 'react'
import Range from './Range'
import './Slider.css'
// const Bar = styled.div`
//   width: 100%;
//   height: 4px;
//   border-radius: 10px;
//   background-color: ${defaultTheme.colors.black};
// `

const Slider = ({ double = false, min, max, step }) => (
  <div className="sliders-container">
    <Range min={min} max={max} step={step} />
    {double && <Range min={min} max={max} step={step} />}
  </div>
)

export default Slider
