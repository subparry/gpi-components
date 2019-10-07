import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Dropdown from '../components/Dropdown'

const options = [
  { label: 'Seleccione una opción', value: '0', disabled: true },
  { label: 'Casas y departamentos', value: '1' },
  { label: 'Oficina', value: '2' },
]
const id = 'test'
const setValue = () => action('`setValue` callback was called')

storiesOf('Dropdown', module)
  .add('With default values', () => (
    <Dropdown id={id} options={options} setValue={setValue} />
  ))
  .add('With position', () => (
    <Dropdown
      id={id}
      options={options}
      setValue={setValue}
      position="BOTTOM_RIGHT"
    />
  ))
  .add('With wrong position', () => (
    <Dropdown
      id={id}
      options={options}
      setValue={setValue}
      position="bottomright"
    />
  ))
  .add('With `defaultoption` option', () => (
    <Dropdown defaultOption={2} id={id} options={options} setValue={setValue} />
  ))
  .add('With fixedWidth=false', () => (
    <Dropdown
      id={id}
      options={options}
      setValue={setValue}
      fixedWidth={false}
    />
  ))
