import styled, {css} from 'styled-components'

export const Container = styled.label`
  width: 100%;
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

export const InputWrapper = styled.div`
  ${({theme}) => css`
    box-shadow: ${theme.colors.shadow};
  `}
`

export const Input = styled.input`
  ${({theme}) => css`
    width: 100%;

    border: ${theme.spacing[0]}px solid ${theme.colors.input.border};

    padding: ${theme.spacing[1]}px ${theme.spacing[2]}px;

    text-transform: uppercase;

    outline: none;

    transition: border-color 250ms ease-in-out,
      background-color 250ms ease-in-out;

    &:focus {
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
