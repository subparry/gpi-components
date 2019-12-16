import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Checkbox from '../components/Checkbox'

const Container = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Checkbox
      id="custom-check1"
      checked={checked}
      onChange={() => setChecked(prev => !prev)}
    />
  )
}
const CheckedContainer = ({ ...props }) => {
  const [checked, setChecked] = useState(true)
  return (
    <Checkbox
      id="custom-check2"
      checked={checked}
      onChange={() => setChecked(prev => !prev)}
      {...props}
    />
  )
}

storiesOf('Checkbox', module)
  .add('Not functional. Unchecked', () => (
    <Checkbox id="test-check1" checked={false} />
  ))
  .add('Not functional. Checked', () => (
    <Checkbox id="test-check2" checked={true} />
  ))
  .add('Functional. Unchecked', () => <Container />)
  .add('Functional. Checked', () => <CheckedContainer />)
  .add('Functional. Checked, size sm', () => <CheckedContainer size="sm" />)
