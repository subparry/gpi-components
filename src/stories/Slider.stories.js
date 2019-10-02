import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Slider from '../components/Slider'

storiesOf('Slider', module)
  .add('with default props', () => <Slider />)
  .add('with invalid max prop (greater than 9)', () => <Slider max="10" />)
  .add('with double prop and rest of props default', () => <Slider double />)
  .add('with invalid step prop', () => <Slider step="1000" />)
  .add('single with callback', () => <Slider setValues={action()} />)
  .add('double with callback', () => <Slider setValues={action()} double />)
