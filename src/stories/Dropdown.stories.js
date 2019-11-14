import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Dropdown from '../components/Dropdown'

const options = new Map([
  [0, { label: 'Seleccione una opción', disabled: true }],
  [1, { label: 'Casas y departamentos' }],
  [2, { label: 'Oficina' }],
])
const id = 'test'
const setValue = () => action('`setValue` callback was called')

storiesOf('Dropdown', module)
  .add('With default values', () => (
    <Dropdown id={id} options={options} setValue={setValue} value={0} />
  ))
  .add('With position', () => (
    <Dropdown
      id={id}
      options={options}
      value={0}
      setValue={setValue}
      position="BOTTOM_RIGHT"
    />
  ))
  .add('With wrong position', () => (
    <Dropdown
      id={id}
      options={options}
      value={0}
      setValue={setValue}
      position="bottomright"
    />
  ))
  .add('With fixedWidth=false', () => (
    <Dropdown
      id={id}
      options={options}
      setValue={setValue}
      value={2}
      fixedWidth={false}
    />
  ))
  .add('With onOpen callback', () => (
    <Dropdown
      id={id}
      options={options}
      setValue={setValue}
      value={2}
      onOpen={() => console.log('onOpen callback called')}
    />
  ))
  .add('With onClose callback', () => (
    <Dropdown
      id={id}
      options={options}
      setValue={setValue}
      value={2}
      onClose={() => console.log('onClose callback called')}
    />
  ))
