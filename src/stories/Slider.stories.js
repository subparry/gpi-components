import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Slider from '../components/Slider'

storiesOf('Slider', module).add('with default props', () => <Slider />)
