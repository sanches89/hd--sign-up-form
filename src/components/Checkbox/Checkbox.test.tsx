import React from 'react'

import {render, screen} from '@/utils/test-utils'

import {Checkbox} from './Checkbox'

describe('Checkbox', () => {
  it('renders without crashing', () => {
    render(<Checkbox label="Test" />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })
})
