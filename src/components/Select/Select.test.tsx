import React from 'react'

import {render, screen} from '@/utils/test-utils'

import {Select} from './Select'

describe('Select', () => {
  it('renders without crashing', () => {
    render(<Select label="Test" options={[]} />)
    expect(screen.getByText(/Hello world!!!/)).toBeInTheDocument()
  })
})
