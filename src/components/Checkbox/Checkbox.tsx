import React from 'react'

import * as S from './Checkbox.styles'

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
}

export function Checkbox(props: CheckboxProps): React.ReactElement {
  const {label, ...rest} = props

  return (
    <S.Container>
      <S.InputHidden type="checkbox" {...rest} />
      <S.CheckMark />
      <S.Label>{label}</S.Label>
    </S.Container>
  )
}
