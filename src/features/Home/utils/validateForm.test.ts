import {SignUpFormData} from '../Home'
import {validateForm} from './validateForm'

describe('Home > utils > validateForm', () => {
  it('validateForm should return valid', () => {
    const data: SignUpFormData = {
      firstName: 'Ivan',
      lastName: 'Sanches',
      email: 'sanches.ic.89@gmail.com',
      organization: 'ICS',
      euResident: 'no',
      advances: 'on',
      alerts: 'on',
    }

    const result = validateForm(data)

    expect(result.valid).toBeTruthy()
  })

  it('validateForm should return invalid', () => {
    const data = {}

    const result = validateForm(data)

    expect(result.valid).toBeFalsy()

    if (result.valid === true) {
      return
    }

    expect(result.error.firstName).toMatch(/required/i)
    expect(result.error.lastName).toMatch(/required/i)
    expect(result.error.email).toMatch(/required/i)
    expect(result.error.euResident).toMatch(/required/i)
    expect(result.error.oneOf).toMatch(/at least one/i)
  })

  it('validateForm should return invalide mail', () => {
    const data: SignUpFormData = {
      firstName: 'Ivan',
      lastName: 'Sanches',
      email: 'wrong email format',
      organization: 'ICS',
      euResident: 'no',
      advances: 'on',
      alerts: 'on',
    }

    const result = validateForm(data)

    expect(result.valid).toBeFalsy()

    if (result.valid === true) {
      return
    }

    expect(result.error.email).toMatch(/invalid/i)
  })
})
