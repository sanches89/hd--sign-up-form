import React from 'react'

import {render, screen} from '@/utils/test-utils'

import {InputText} from './InputText'

describe('InputText', () => {
  it('renders without crashing', () => {
    render(<InputText label="Test" />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
