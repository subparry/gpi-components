import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Icon from '../components/Icon'

storiesOf('Icon', module)
  .add('default dash', () => <Icon name="-" />)
  .add('default alert', () => <Icon name="alert" />)
  .add('red alert', () => <Icon name="alert" color="red" />)
  .add('pink star', () => <Icon name="star" color="pink" />)
