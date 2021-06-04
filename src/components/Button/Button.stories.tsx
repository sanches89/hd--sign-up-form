import React from 'react'

import {Meta} from '@storybook/react'

import {Button, ButtonProps} from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {control: 'text'},
    variant: {
      options: ['primary', 'secondary'],
    },
  },
} as Meta

export const Default = (args: ButtonProps): React.ReactElement => (
  <Button {...args} />
)

Default.args = {
  children: 'Hello Word',
  variant: 'primary',
}
