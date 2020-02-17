import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import TextLink from '../components/TextLink'

storiesOf('TextLink', module)
  .add('with default props', () => <TextLink>Este es un link</TextLink>)
  .add('disabled', () => (
    <TextLink disabled={true}>Este es un link deshabilitado</TextLink>
  ))
  .add('with href and onNewTab', () => (
    <TextLink href="http://google.cl" onNewTab={true}>
      Este es un link a google
    </TextLink>
  ))
  .add('with href, onNewTab and disabled', () => (
    <TextLink href="http://google.cl" onNewTab={true} disabled={true}>
      Este es un link a google
    </TextLink>
  ))
