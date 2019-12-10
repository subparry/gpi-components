import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import RadioButton from '../components/RadioButton'

const Container = () => {
  const [checked, setChecked] = useState(null)
  return (
    <>
      <RadioButton
        id="custom-radio"
        checked={checked === 1}
        name="ddsa"
        onChange={() => setChecked(1)}
      />{' '}
      <br />
      <RadioButton
        id="custom-radio2"
        checked={checked === 2}
        name="ddsa"
        onChange={() => setChecked(2)}
      />
    </>
  )
}

storiesOf('Radio button', module).add('Functional', () => <Container />)
