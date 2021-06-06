import React from 'react'

import {Button} from '@/components/Button'
import {Checkbox} from '@/components/Checkbox'
import {InputText} from '@/components/InputText'
import {Select, Option} from '@/components/Select'

import * as S from './Home.styles'

const selectOptions: Option[] = [
  {value: 'yes', description: 'Yes'},
  {value: 'no', description: 'No'},
]

export function Home(): React.ReactElement {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Sign up for email updates</S.Title>
        <S.Notes>* Indicates required fields</S.Notes>
        <S.Form>
          <S.Fieldset>
            <InputText label="First name" required />
            <InputText label="Last name" required />
            <InputText label="Email address" type="email" required />
            <InputText label="Organization" />
            <Select label="EU Resident" options={selectOptions} required />
          </S.Fieldset>
          <S.Fieldset>
            <Checkbox label="Advances" />
            <Checkbox label="Alerts" />
            <Checkbox label="Other communications" />
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
