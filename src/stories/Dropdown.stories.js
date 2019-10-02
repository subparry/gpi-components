import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Dropdown from '../components/Dropdown'

const options = [
  { label: 'Seleccione una opción', value: '0', disabled: true },
  { label: 'Casas y departamentos', value: '1' },
  { label: 'Oficina', value: '2' },
]

storiesOf('Dropdown', module).add('With default values', () => (
  <Dropdown
    id="test"
    options={options}
    setValue={action('set value was called')}
  />
))
