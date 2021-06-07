import styled, {css} from 'styled-components'

export const InputHidden = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`

export const Label = styled.span`
  ${({theme}) => css`
    display: flex;

    align-items: center;
    justify-content: space-between;

    margin-bottom: ${theme.spacing[1]}px;

    font-weight: ${theme.fontWeight[0]};

    text-transform: uppercase;
  `}
`

export const LabelDescription = styled.span``

export const ErrorMessage = styled.span`
  ${({theme}) => css`
    color: ${theme.colors.text.error};
    font-weight: ${theme.fontWeight[1]};
  `}
`

export const SelectWrapper = styled.div`
  ${({theme}) => css`
    position: relative;

    box-shadow: ${theme.colors.shadow};
  `}
`

export const Select = styled.div`
  ${({theme}) => css`
    display: flex;

    align-items: center;
    justify-content: space-between;

    width: 100%;

    border: ${theme.spacing[0]}px solid ${theme.colors.input.border};

    padding: ${theme.spacing[1]}px ${theme.spacing[2]}px;

    background-color: ${theme.colors.white};

    cursor: pointer;

    transition: border-color 250ms ease-in-out,
      background-color 250ms ease-in-out;

    &:hover {
      border-color: ${theme.colors.input.focus.border};
    }

    &:disabled {
      border-color: ${theme.colors.input.disabled.border};
      background-color: ${theme.colors.input.disabled.background};

      cursor: not-allowed;
    }

    &.error {
      border-color: ${theme.colors.input.error.border};
      background-color: ${theme.colors.input.error.background};
    }
  `}
`

export const Option = styled.div`
  ${({theme}) => css`
    display: flex;

    align-items: center;
    justify-content: space-between;

    width: 100%;

    border: ${theme.spacing[0]}px solid ${theme.colors.input.border};
    border-top-width: 1px;
    border-bottom-width: 1px;

    padding: ${theme.spacing[1]}px ${theme.spacing[2]}px;

    background-color: ${theme.colors.white};

    cursor: pointer;

    transition: border-color 250ms ease-in-out,
      background-color 250ms ease-in-out;

    &:hover {
      border-color: ${theme.colors.input.focus.border};
      background-color: ${theme.colors.selectOption.hover};
    }

    &.selected {
      font-weight: ${theme.fontWeight[1]};
    }
  `}
`

export const Options = styled.div`
  ${({theme}) => css`
    position: absolute;
    left: 0;
    right: 0;

    margin-top: -${theme.spacing[0] - 1}px;

    & > ${Option}:last-of-type {
      border-bottom-width: ${theme.spacing[0]}px;
    }

    z-index: 99999;

    transition: opacity 250ms ease-in-out;

    &.close {
      visibility: hidden;
      opacity: 0;
    }

    &.open {
      visibility: visible;
      opacity: 1;
    }
  `}
`

export const SelectDescription = styled.div``

export const SelectArrow = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  transition: transform 250ms ease-in-out;

  &.front {
    transform: rotate(0deg);
  }

  &.down {
    transform: rotate(90deg);
  }
`

export const Container = styled.div`
  ${({theme}) => css`
    width: 100%;

    text-transform: uppercase;

    & > ${InputHidden}:focus ~ ${SelectWrapper} > ${Select} {
      border-color: ${theme.colors.input.focus.border};
    }
  `}
`
