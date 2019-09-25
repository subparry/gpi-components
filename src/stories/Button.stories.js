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
  .add('with fullwidth', () => <Button fullWidth={true}>Full Width</Button>)
