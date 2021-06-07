import styled, {css} from 'styled-components'

export const InputHidden = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`

export const CheckMark = styled.span`
  ${({theme}) => css`
    position: relative;

    display: block;

    height: 40px;
    width: 40px;

    margin-right: ${theme.spacing[2]}px;

    border: ${theme.spacing[0]}px solid ${theme.colors.input.border};

    padding: ${theme.spacing[1]}px ${theme.spacing[2]}px;

    box-shadow: ${theme.colors.shadow};

    background-color: ${theme.colors.white};

    transition: border-color 250ms ease-in-out,
      background-color 250ms ease-in-out, box-shadow 250ms ease-in-out;

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

export const Label = styled.span`
  text-transform: uppercase;
`

export const Container = styled.label`
  ${({theme}) => css`
    display: flex;

    align-items: center;

    cursor: pointer;

    &:hover ${CheckMark}, & input:focus ~ ${CheckMark} {
      border-color: ${theme.colors.input.focus.border};
    }

    & input:checked ~ ${CheckMark} {
      border: none;

      background-color: ${theme.colors.primary};

      box-shadow: none;
    }

    & input ~ ${CheckMark}::after {
      content: url('/assets/check.svg');

      display: none;

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      background-color: transparent;

      color: ${theme.colors.white};

      transform: scale(0.7);
    }

    & input:checked ~ ${CheckMark}::after {
      display: unset;
    }
  `}
`
