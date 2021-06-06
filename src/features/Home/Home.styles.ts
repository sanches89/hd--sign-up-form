import styled, {css} from 'styled-components'

import {mediaGreaterThan} from '@/styles/media'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;

  background-image: url('/imgs/texture.webp');
  background-repeat: repeat;
`

export const Content = styled.main`
  ${({theme}) => css`
    width: 100%;
    max-width: 1024px;

    margin: auto;

    padding: ${theme.spacing[2]}px;
  `}
`

export const Title = styled.h1`
  ${({theme}) => css`
    color: ${theme.colors.black};
  `}
`

export const Notes = styled.p`
  ${({theme}) => css`
    margin: ${theme.spacing[3]}px 0;
  `}
`

export const Form = styled.form`
  ${({theme}) => css`
    ${Fieldset} + ${Fieldset} {
      margin-top: ${theme.spacing[3]}px;
    }
  `}
`

export const Fieldset = styled.section`
  ${({theme}) => css`
    display: grid;

    grid-template-columns: 1fr;
    grid-gap: ${theme.spacing[3]}px;

    margin: 0;

    border: none;

    padding: 0;

    ${mediaGreaterThan(theme.breakpoints[0])`
      grid-template-columns: 1fr 1fr;
    `}
  `}
`

export const Actions = styled.div`
  ${({theme}) => css`
    display: flex;

    flex-direction: column;

    align-items: center;

    padding: ${theme.spacing[3]}px 0;

    * + * {
      margin-top: ${theme.spacing[3]}px;
    }

    & > * {
      width: 100%;
    }

    ${mediaGreaterThan(theme.breakpoints[0])`
      flex-direction: row;

      * + * {
        margin-top: 0;
        margin-left: ${theme.spacing[3]}px;
      }

      & > * {
        width: unset;
      }
    `}
  `}
`
