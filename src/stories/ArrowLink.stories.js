import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import ArrowLink from '../components/ArrowLink'

storiesOf('ArrowLink', module)
  .add('with default props', () => <ArrowLink>Este es un link</ArrowLink>)
  .add('disabled', () => (
    <ArrowLink disabled={true}>Este es un link deshabilitado</ArrowLink>
  ))
  .add('with href and onNewTab', () => (
    <ArrowLink href="http://google.cl" onNewTab={true}>
      Este es un link a google
    </ArrowLink>
  ))
  .add('with href, onNewTab and disabled', () => (
    <ArrowLink href="http://google.cl" onNewTab={true} disabled={true}>
      Este es un link a google
    </ArrowLink>
  ))
