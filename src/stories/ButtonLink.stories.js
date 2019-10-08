import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import Appstore from './assets/AppStore.svg'

import ButtonLink from '../components/ButtonLink'

storiesOf('ButtonLink', module)
  .add('with default props', () => (
    <ButtonLink href="http://google.com" target="_blank">
      This is a link
    </ButtonLink>
  ))
  .add('with image as child and fixed-width', () => (
    <ButtonLink href="http://google.com" target="_blank">
      <img src={Appstore} />
    </ButtonLink>
  ))
  .add('with image as child without fixed-width', () => (
    <ButtonLink href="http://google.com" target="_blank" fullWidth={true}>
      <img src={Appstore} />
    </ButtonLink>
  ))
  .add('with variant', () => (
    <ButtonLink variant="secondary" href="http://google.com" target="_blank">
      Empieza
    </ButtonLink>
  ))
  .add('with wrong variant', () => (
    <ButtonLink variant="qwerty" href="http://google.com" target="_blank">
      Empieza
    </ButtonLink>
  ))
  .add('with element as child', () => (
    <ButtonLink href="http://google.com" target="_blank">
      <h1>HOLA</h1>
    </ButtonLink>
  ))
  .add('with callback', () => (
    <ButtonLink
      href="http://google.com"
      target="_blank"
      onClick={action('clicked')}
    >
      Click me!
    </ButtonLink>
  ))
  .add('with type', () => (
    <ButtonLink href="http://google.com" target="_blank" type="submit">
      Submit
    </ButtonLink>
  ))
  .add('with disabled', () => (
    <ButtonLink href="http://google.com" target="_blank" disabled>
      Submit
    </ButtonLink>
  ))
  .add('with fullwidth', () => (
    <ButtonLink href="http://google.com" target="_blank" fullWidth={true}>
      Full Width
    </ButtonLink>
  ))
