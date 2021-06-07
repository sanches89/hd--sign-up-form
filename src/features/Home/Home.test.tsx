import React from 'react'

import {render, screen} from '@/utils/test-utils'

import userEvent from '@testing-library/user-event'

import {Home} from './Home'

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />)
    expect(screen.getByRole('heading', {name: /sign up/i})).toBeInTheDocument()
  })

  it('success request', async () => {
    render(<Home />)

    userEvent.type(screen.getByRole('textbox', {name: /first name/i}), 'Ivan')
    userEvent.type(screen.getByRole('textbox', {name: /last name/i}), 'Sanches')
    userEvent.type(screen.getByRole('textbox', {name: /email/i}), 'sanches.ic.89@gmail.com') // prettier-ignore
    userEvent.type(screen.getByRole('textbox', {name: /organization/i}), 'ICS')

    userEvent.click(screen.getAllByText(/select one/i)[0])
    userEvent.click(screen.getByText(/yes/i))

    userEvent.click(screen.getByRole('checkbox', {name: /advances/i}))

    userEvent.click(screen.getByRole('button', {name: /submit/i}))

    expect(await screen.findByText(/thank you/i)).toBeInTheDocument()
  })

  it('error request', async () => {
    render(<Home />)

    userEvent.type(screen.getByRole('textbox', {name: /first name/i}), 'Ivan')
    userEvent.type(screen.getByRole('textbox', {name: /last name/i}), 'Sanches')
    userEvent.type(screen.getByRole('textbox', {name: /email/i}), 'sanches.ic.89@gmail.com') // prettier-ignore
    userEvent.type(screen.getByRole('textbox', {name: /organization/i}), 'ICS')

    userEvent.click(screen.getAllByText(/select one/i)[0])
    userEvent.click(screen.getByText(/yes/i))

    userEvent.click(screen.getByRole('checkbox', {name: /advances/i}))
    userEvent.click(screen.getByRole('checkbox', {name: /error/i}))

    userEvent.click(screen.getByRole('button', {name: /submit/i}))

    expect(await screen.findByText(/invalid/i)).toBeInTheDocument()
  })

  it('required fields', async () => {
    render(<Home />)

    userEvent.click(screen.getByRole('button', {name: /submit/i}))

    expect(screen.getAllByText(/required/i).length).toBe(5)
    expect(screen.getAllByText(/at least one/i).length).toBe(1)
    expect(screen.getByRole('button', {name: /submit/i})).toBeDisabled()
  })

  it('email fields', async () => {
    render(<Home />)

    userEvent.type(screen.getByRole('textbox', {name: /first name/i}), 'Ivan')
    userEvent.type(screen.getByRole('textbox', {name: /last name/i}), 'Sanches')
    userEvent.type(screen.getByRole('textbox', {name: /email/i}), 'wrong email') // prettier-ignore
    userEvent.type(screen.getByRole('textbox', {name: /organization/i}), 'ICS')

    userEvent.click(screen.getAllByText(/select one/i)[0])
    userEvent.click(screen.getByText(/yes/i))

    userEvent.click(screen.getByRole('checkbox', {name: /advances/i}))
    userEvent.click(screen.getByRole('checkbox', {name: /error/i}))

    userEvent.click(screen.getByRole('button', {name: /submit/i}))

    expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
  })
})
