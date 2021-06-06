import React from 'react'

import {storiesOf} from '@storybook/react'

import {Checkbox} from './Checkbox'

storiesOf('Checkbox', module).add('default', () => {
  return <Checkbox>Hello Checkbox!!</Checkbox>
})
