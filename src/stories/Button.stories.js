import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Button from '../components/Button'

storiesOf('Button', module)
  .add('with default props', () => <Button>Empieza</Button>)
  .add('with variant', () => <Button variant="secondary">Empieza</Button>)
  .add('with wrong variant', () => <Button variant="qwerty">Empieza</Button>)
  .add('with element as child', () => (
    <Button>
      <h1>HOLA</h1>
    </Button>
  ))
  .add('with callback', () => (
    <Button onClick={action('clicked')}>Click me!</Button>
  ))
  .add('with type', () => <Button type="submit">Submit</Button>)
  .add('with disabled', () => <Button disabled={true}>Disabled</Button>)
  .add('with disabled and variant', () => (
    <Button disabled={true} variant="secondary">
      Secondary disabled
    </Button>
  ))
  .add('with fullwidth', () => <Button fullWidth={true}>Full Width</Button>)
  .add('with variant success', () => (
    <Button variant={'success'}>Success!</Button>
  ))
  .add('with variant success disabled', () => (
    <Button variant={'success'} disabled>
      disabled...
    </Button>
  ))
