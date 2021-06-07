import React from 'react'

import * as S from './Checkbox.styles'

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  error?: boolean
}

export function Checkbox(props: CheckboxProps): React.ReactElement {
  const {label, error = false, ...rest} = props

  return (
    <S.Container>
      <S.InputHidden type="checkbox" {...rest} />
      <S.CheckMark className={error ? 'error' : ''} />
      <S.Label>{label}</S.Label>
    </S.Container>
  )
}
