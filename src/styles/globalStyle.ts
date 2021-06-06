import {createGlobalStyle, css} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({theme}) => css`
    * {
      letter-spacing: 2px;

      box-sizing: border-box;
    }

    html,
    body {
      font-family: 'Open Sans', sans-serif;
      font-size: ${theme.fontSize[0]}px;

      color: ${theme.colors.text.primary};
    }
  `}
`
