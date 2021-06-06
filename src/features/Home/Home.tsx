import React from 'react'

import {Button} from '@/components/Button'
import {InputText} from '@/components/InputText'

import * as S from './Home.styles'

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
            <InputText label="EU Resident" required />
          </S.Fieldset>
          <S.Fieldset>
            <InputText label="Advances" />
            <InputText label="Alerts" />
            <InputText label="Other communications" />
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
