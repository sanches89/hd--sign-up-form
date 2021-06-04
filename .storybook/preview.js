import {ThemeProvider} from 'styled-components'

import {GlobalStyle} from '../src/styles/globalStyle'
import {theme} from '../src/styles/theme'

import 'modern-css-reset/dist/reset.css'

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
]
