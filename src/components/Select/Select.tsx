import React from 'react'

import Image from 'next/image'

import * as S from './Select.styles'

export interface Option {
  value: string
  description: string
}

export interface SelectProps {
  label: string
  options: Option[]
  required?: boolean
}

export function Select(props: SelectProps): React.ReactElement {
  const {label, options, required = false} = props

  const inputRef = React.useRef<HTMLInputElement | null>(null)

  const [open, setOpen] = React.useState(false)
  const [optionSelected, setOptionSelected] =
    React.useState<Option | undefined>()

  const handleInputHidden = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      event.target.value = ''
    },
    [],
  )

  const handleSelectClick = React.useCallback(() => setOpen(s => !s), [])
  const handleOptionClick = React.useCallback((option: Option | undefined) => {
    if (!inputRef.current) {
      return
    }

    setOpen(false)
    inputRef.current.value = option?.value ?? ''
    setOptionSelected(option)
  }, [])

  return (
    <S.Container>
      <S.Label>
        {label}
        {required ? '*' : ''}
      </S.Label>
      <S.InputHidden ref={inputRef} onChange={handleInputHidden} />
      <S.SelectWrapper>
        <S.Select onClick={handleSelectClick}>
          <S.SelectDescription>
            {optionSelected?.description ?? '- Select one -'}
          </S.SelectDescription>
          <S.SelectArrow className={open ? 'down' : 'front'}>
            <Image src="/assets/text-expand-arrow.svg" height={20} width={20} />
          </S.SelectArrow>
        </S.Select>
        <S.Options className={open ? 'open' : 'close'}>
          <S.Option
            className={optionSelected === undefined ? 'selected' : ''}
            onClick={() => handleOptionClick(undefined)}
          >
            - Select one -
          </S.Option>
          {options.map(option => (
            <S.Option
              key={option.value}
              className={
                optionSelected?.value === option.value ? 'selected' : ''
              }
              onClick={() => handleOptionClick(option)}
            >
              {option.description}
            </S.Option>
          ))}
        </S.Options>
      </S.SelectWrapper>
    </S.Container>
  )
}
