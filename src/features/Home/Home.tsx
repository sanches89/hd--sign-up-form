import React from 'react'

import {Button} from '@/components/Button'
import {Checkbox} from '@/components/Checkbox'
import {InputText} from '@/components/InputText'
import {Select, Option} from '@/components/Select'

import * as S from './Home.styles'

type FormFields =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'organization'
  | 'euResident'
  | 'advances'
  | 'alerts'
  | 'other'

type FormErrorFields =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'euResident'
  | 'oneOf'

type FormError = Partial<Record<FormErrorFields, string>>

function isFormField(x: unknown): x is FormFields {
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

function isFormErrorField(x: unknown): x is FormErrorFields {
  return (
    typeof x === 'string' &&
    ['firstName', 'lastName', 'email', 'euResident', 'oneOf'].includes(x)
  )
}

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

      const data: Partial<Record<FormFields, string>> = {}
      for (const pair of entries) {
        if (!isFormField(pair[0]) || typeof pair[1] !== 'string') {
          // Make typescript happy 😁
          throw new Error(`Invalid key for FormFields object: ${pair}`)
        }

        data[pair[0]] = pair[1]
      }

      let hasError = false
      const newError: FormError = {}

      /**
       * Start - Validate required fields
       */
      const requiredFields: FormFields[] = [
        'firstName',
        'lastName',
        'email',
        'euResident',
      ]

      requiredFields.forEach(key => {
        if (data[key]) {
          return
        }

        if (!isFormErrorField(key)) {
          // Make typescript happy 😁
          throw new Error('Invalid key for FormErrorFields object')
        }

        hasError = true

        if (key === 'firstName') {
          newError[key] = 'FIRST NAME is required'
        }

        if (key === 'lastName') {
          newError[key] = 'LAST NAME is required'
        }

        if (key === 'email') {
          newError[key] = 'EMAIL is required'
        }

        if (key === 'euResident') {
          newError[key] = 'EU RESIDENT is required'
        }
      })
      /**
       * End - Validate required fields
       */

      /**
       * Start - Validate email format
       */
      if (data.email) {
        /**
         * @see https://stackoverflow.com/a/46181
         */
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!re.test(data.email.toLowerCase())) {
          newError.email = 'Invalid email'
          hasError = true
        }
      }
      /**
       * End - Validate email format
       */

      /**
       * Start - Validate required one of the checkboxes
       */
      const requiredOneOfFields: FormFields[] = ['advances', 'alerts', 'other']

      const oneOf = requiredOneOfFields.findIndex(key => !!data[key])

      if (oneOf === -1) {
        newError.oneOf =
          'You need to check at least one of the options: "ADVANCES", "ALERTS", "OTHER COMMUNICATIONS"'
        hasError = true
      }
      /**
       * End - Validate required one of the checkboxes
       */

      if (hasError) {
        setError(newError)
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
        {Object.keys(error).map(key => {
          if (!error[key as keyof FormError]) {
            return
          }

          return (
            <S.FormError key={key}>{error[key as keyof FormError]}</S.FormError>
          )
        })}
        <S.Form onSubmit={handleSubmit}>
          <S.Fieldset>
            <InputText
              label="First name"
              name="firstName"
              required
              error={!!error.firstName}
            />
            <InputText
              label="Last name"
              name="lastName"
              required
              error={!!error.lastName}
            />
            <InputText
              label="Email address"
              name="email"
              required
              error={!!error.email}
            />
            <InputText label="Organization" name="organization" />
            <Select
              label="EU Resident"
              options={selectOptions}
              name="euResident"
              required
              error={!!error.euResident}
            />
          </S.Fieldset>
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
