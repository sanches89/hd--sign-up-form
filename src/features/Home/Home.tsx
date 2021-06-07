import React from 'react'

import {Button} from '@/components/Button'
import {Checkbox} from '@/components/Checkbox'
import {InputText} from '@/components/InputText'
import {Select, Option} from '@/components/Select'

import * as S from './Home.styles'
import {validateForm} from './utils/validateForm'

export type FormFields =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'organization'
  | 'euResident'
  | 'advances'
  | 'alerts'
  | 'other'

export function isFormField(x: unknown): x is FormFields {
  return (
    typeof x === 'string' &&
    [
      'firstName',
      'lastName',
      'email',
      'organization',
      'euResident',
      'advances',
      'alerts',
      'other',
    ].includes(x)
  )
}

export type FormErrorFields =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'euResident'
  | 'oneOf'

export function isFormErrorField(x: unknown): x is FormErrorFields {
  return (
    typeof x === 'string' &&
    ['firstName', 'lastName', 'email', 'euResident', 'oneOf'].includes(x)
  )
}

export type FormError = Partial<Record<FormErrorFields, string>>
export type SignUpData = Partial<Record<FormFields, string>>

function formDataToSignUpData(formData: FormData): SignUpData {
  const entries = Array.from(formData.entries())

  const data: SignUpData = {}
  for (const pair of entries) {
    if (!isFormField(pair[0]) || typeof pair[1] !== 'string') {
      // Make typescript happy 😁
      throw new Error(`Invalid key for FormFields object: ${pair}`)
    }

    data[pair[0]] = pair[1]
  }

  return data
}

const selectOptions: Option[] = [
  {value: 'yes', description: 'Yes'},
  {value: 'no', description: 'No'},
]

export function Home(): React.ReactElement {
  const formRef = React.useRef<HTMLFormElement | null>(null)

  const [hasError, setHasError] = React.useState(false)
  const [error, setError] = React.useState<FormError>({})
  const [touched, setTouched] = React.useState(false)

  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const formData = new FormData(event.currentTarget)
      const data = formDataToSignUpData(formData)

      const result = validateForm(data)

      if (!result.valid) {
        setTouched(true)
        setHasError(true)
        setError(result.error)
        return
      }
    },
    [],
  )

  const handleRunTimeFormValidation = React.useCallback(() => {
    if (!touched || formRef.current == null) {
      return
    }

    const formData = new FormData(formRef.current)
    const data = formDataToSignUpData(formData)

    const result = validateForm(data)

    if (!result.valid) {
      setHasError(true)
      setError(result.error)
      return
    }

    setError({})
  }, [touched])

  return (
    <S.Container>
      <S.Content>
        <S.Title>Sign up for email updates</S.Title>
        <S.Notes>* Indicates required fields</S.Notes>

        <S.Form ref={formRef} onSubmit={handleSubmit}>
          <S.Fieldset>
            <InputText
              label="First name"
              name="firstName"
              required
              error={!!error.firstName}
              errorMessage={error.firstName}
              onBlur={handleRunTimeFormValidation}
            />
            <InputText
              label="Last name"
              name="lastName"
              required
              error={!!error.lastName}
              errorMessage={error.lastName}
              onBlur={handleRunTimeFormValidation}
            />
            <InputText
              label="Email address"
              name="email"
              required
              error={!!error.email}
              errorMessage={error.email}
              onBlur={handleRunTimeFormValidation}
            />
            <InputText label="Organization" name="organization" />
            <Select
              label="EU Resident"
              options={selectOptions}
              name="euResident"
              required
              error={!!error.euResident}
              errorMessage={error.euResident}
              onBlur={handleRunTimeFormValidation}
            />
          </S.Fieldset>

          {error.oneOf && <S.FormError>{error.oneOf}</S.FormError>}

          <S.Fieldset>
            <Checkbox
              label="Advances"
              name="advances"
              error={!!error.oneOf}
              onChange={handleRunTimeFormValidation}
            />
            <Checkbox
              label="Alerts"
              name="alerts"
              error={!!error.oneOf}
              onChange={handleRunTimeFormValidation}
            />
            <Checkbox
              label="Other communications"
              name="other"
              error={!!error.oneOf}
              onChange={handleRunTimeFormValidation}
            />
          </S.Fieldset>

          <S.Actions>
            <Button
              type="submit"
              variant="secondary"
              disabled={touched && hasError}
            >
              Submit
            </Button>
            <Button type="reset" onClick={handleRunTimeFormValidation}>
              Reset
            </Button>
          </S.Actions>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}
