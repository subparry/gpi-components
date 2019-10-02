import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '../components/Button'
import SocialIcon from '../components/SocialIcon'

storiesOf('SocialIcon', module)
  .add('With valid facebook variant', () => (
    <Button>
      <SocialIcon variant="facebook" />
    </Button>
  ))
  .add('With invalid variant', () => (
    <Button>
      <SocialIcon variant="asdf" />
    </Button>
  ))
