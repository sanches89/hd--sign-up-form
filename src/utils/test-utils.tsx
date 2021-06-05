import React from 'react'

import {ThemeProvider} from 'styled-components'

import {render, RenderOptions, RenderResult} from '@testing-library/react'

import {GlobalStyle} from '@/styles/globalStyle'
import {theme} from '@/styles/theme'

const AllProviders: React.FC = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

function customRender(
  ui: React.ReactElement,
  options: Omit<RenderOptions, 'queries'> = {},
): RenderResult {
  return render(ui, {wrapper: AllProviders, ...options})
}

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}
