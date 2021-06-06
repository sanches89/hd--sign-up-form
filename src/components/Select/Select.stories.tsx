import React from 'react'

import {storiesOf} from '@storybook/react'

import {Select} from './Select'

storiesOf('Select', module).add('default', () => {
  return <Select>Hello Select!!</Select>
})
