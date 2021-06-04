import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  background-image: url('/imgs/assets/texture.webp');
  background-repeat: repeat;
`

export const Title = styled.h1`
  color: ${p => p.theme.colors.primary};
`

export const Subtitle = styled.p`
  color: ${p => p.theme.colors.text};
`
