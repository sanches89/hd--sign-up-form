import React from 'react'

import * as S from './Button.styles'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button(props: ButtonProps): React.ReactElement {
  const {variant = 'primary', children} = props

  return <S.Container variant={variant}>{children}</S.Container>
}
