import {
  css,
  CSSObject,
  SimpleInterpolation,
  FlattenSimpleInterpolation,
} from 'styled-components'

export const mediaGreaterThan =
  (breakpoint: number) =>
  (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: SimpleInterpolation[]
  ): FlattenSimpleInterpolation =>
    css`
      @media (min-width: ${breakpoint}px) {
        ${css(first, ...interpolations)}
      }
    `
