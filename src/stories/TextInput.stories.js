import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import TextInput from '../components/TextInput'

storiesOf('TextInput', module)
  .add('without parameters should be uncontrolled', () => <TextInput />)
  .add('with value and callback', () => (
    <TextInput onChange={action('change')} value="change" />
  ))
  .add('with only value', () => <TextInput value="change" />)
  .add('disabled', () => <TextInput disabled={true} value="disabled" />)
  .add('with placeholder', () => (
    <TextInput placeholder="This is a placeholder" />
  ))
