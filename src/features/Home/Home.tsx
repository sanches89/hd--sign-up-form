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
export type SignUpFormData = Partial<Record<FormFields, string>>

const selectOptions: Option[] = [
  {value: 'yes', description: 'Yes'},
  {value: 'no', description: 'No'},
]

export function Home(): React.ReactElement {
  const [error, setError] = React.useState<FormError>({})

  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const formData = new FormData(event.currentTarget)
      const entries = Array.from(formData.entries())

      const data: SignUpFormData = {}
      for (const pair of entries) {
        if (!isFormField(pair[0]) || typeof pair[1] !== 'string') {
          // Make typescript happy 😁
          throw new Error(`Invalid key for FormFields object: ${pair}`)
        }

        data[pair[0]] = pair[1]
      }

      const result = validateForm(data)

      if (!result.valid) {
        setError(result.error)
        return
      }
    },
    [],
  )

  return (
    <S.Container>
      <S.Content>
        <S.Title>Sign up for email updates</S.Title>
        <S.Notes>* Indicates required fields</S.Notes>

        <S.Form onSubmit={handleSubmit}>
          <S.Fieldset>
            <InputText
              label="First name"
              name="firstName"
              required
              error={!!error.firstName}
              errorMessage={error.firstName}
            />
            <InputText
              label="Last name"
              name="lastName"
              required
              error={!!error.lastName}
              errorMessage={error.lastName}
            />
            <InputText
              label="Email address"
              name="email"
              required
              error={!!error.email}
              errorMessage={error.email}
            />
            <InputText label="Organization" name="organization" />
            <Select
              label="EU Resident"
              options={selectOptions}
              name="euResident"
              required
              error={!!error.euResident}
              errorMessage={error.euResident}
            />
          </S.Fieldset>

          {error.oneOf && <S.FormError>{error.oneOf}</S.FormError>}

          <S.Fieldset>
            <Checkbox label="Advances" name="advances" error={!!error.oneOf} />
            <Checkbox label="Alerts" name="alerts" error={!!error.oneOf} />
            <Checkbox
              label="Other communications"
              name="other"
              error={!!error.oneOf}
            />
          </S.Fieldset>
          <S.Actions>
            <Button type="submit" variant="secondary">
              Submit
            </Button>
            <Button type="reset">Reset</Button>
          </S.Actions>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}
