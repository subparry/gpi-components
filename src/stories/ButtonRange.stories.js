import React, { useState, useRef } from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import ButtonRange from '../components/ButtonRange'

const Container = () => {
  const [val, setVal] = useState({ min: 1, max: 3 })
  return (
    <>
      <ButtonRange
        min={1}
        max={5}
        getValues={values => setVal(values)}
        value={val}
        isControlled={true}
      />
      <button onClick={() => setVal({ min: 3, max: 5 })}>change values</button>
    </>
  )
}

storiesOf('ButtonRange', module)
  .add('with min=1 and max=5', () => (
    <ButtonRange min={1} max={5} getValues={values => console.log(values)} />
  ))
  .add('with min=0 and max=5', () => (
    <ButtonRange min={0} max={5} getValues={values => console.log(values)} />
  ))
  .add('with starting value', () => (
    <ButtonRange
      min={0}
      max={5}
      getValues={values => console.log(values)}
      value={{ min: 2, max: 4 }}
    />
  ))
  .add('with dynamic value', () => <Container />)
