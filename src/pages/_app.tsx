import React from 'react'

import {AppProps} from 'next/app'
import Head from 'next/head'

import {ThemeProvider, createGlobalStyle} from 'styled-components'

import {theme} from '@/styles/theme'

/**
 * @see https://dev.to/hankchizljaw/a-modern-css-reset-6p3
 */
import 'modern-css-reset/dist/reset.css'

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Open Sans', sans-serif;
  }
`

const viewport = [
  'minimum-scale=1',
  'initial-scale=1',
  'width=device-width',
  'shrink-to-fit=no',
  'user-scalable=no',
  'viewport-fit=cover',
].join(', ')

function MyApp({Component, pageProps}: AppProps): React.ReactElement {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta name="viewport" content={viewport} />

        <meta name="description" content="Hero Digital | Form" />
        <meta name="keywords" content="Hero, Digital, Form" />

        {/* https://realfavicongenerator.net/ */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#878787" />
        <meta name="msapplication-TileColor" content="#f2f2f2" />
        <meta name="theme-color" content="#f2f2f2" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <title>Hero Digital | Form</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
