import React from 'react'

import {Meta} from '@storybook/react'

import {InputText, InputTextProps} from './InputText'

export default {
  title: 'InputText',
  component: InputText,
  argTypes: {
    disabled: {control: 'boolean'},
  },
} as Meta

export const Default = (args: InputTextProps): React.ReactElement => (
  <InputText {...args} />
)

Default.args = {
  disabled: false,
}
