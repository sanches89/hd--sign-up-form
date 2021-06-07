import styled, {css} from 'styled-components'

import {ButtonProps} from './Button'

export const Container = styled.button<ButtonProps>`
  ${({theme, variant}) => css`
    padding: ${theme.spacing[2]}px ${theme.spacing[4]}px;

    border: none;
    border-radius: 9999px;

    box-shadow: ${theme.colors.button.shadow};

    background: none;
    background-color: ${variant === 'primary'
      ? theme.colors.secondary
      : theme.colors.primary};

    color: ${variant === 'primary'
      ? theme.colors.text.primary
      : theme.colors.text.secondary};

    font-weight: ${theme.fontWeight[1]};

    text-transform: uppercase;

    transition: box-shadow 250ms ease-in-out;

    &:hover {
      box-shadow: ${theme.colors.button.hover.shadow};
    }

    &:active {
      box-shadow: ${theme.colors.button.active.shadow};
    }

    &:disabled {
      background-color: ${theme.colors.button.disabled.background};
      color: ${theme.colors.button.disabled.color};
      box-shadow: ${theme.colors.button.disabled.shadow};
    }
  `}
`
