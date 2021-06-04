import {createGlobalStyle, css} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({theme}) => css`
    * {
      letter-spacing: 2px;
    }

    html,
    body {
      font-family: 'Open Sans', sans-serif;
      font-size: ${theme.fontSize[0]}px;

      color: ${theme.colors.text.primary};
    }
  `}
`
