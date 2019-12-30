import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import ButtonRange from '../components/ButtonRange'

storiesOf('ButtonRange', module)
  .add('with min=1 and max=5', () => (
    <ButtonRange min={1} max={5} getValues={values => console.log(values)} />
  ))
  .add('with min=0 and max=5', () => (
    <ButtonRange min={0} max={5} getValues={values => console.log(values)} />
  ))
