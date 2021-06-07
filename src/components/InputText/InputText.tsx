import React from 'react'

import * as S from './InputText.styles'

export interface InputTextProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  error?: boolean
  errorMessage?: string
}

export function InputText(props: InputTextProps): React.ReactElement {
  const {
    label,
    error = false,
    errorMessage = '',
    required = false,
    ...rest
  } = props

  const showErrorMessage = error && errorMessage

  return (
    <S.Container>
      <S.Label>
        {label}
        {required ? '*' : ''}
      </S.Label>
      <S.InputWrapper>
        <S.Input className={error ? 'error' : undefined} {...rest} />
        {showErrorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </S.InputWrapper>
    </S.Container>
  )
}
