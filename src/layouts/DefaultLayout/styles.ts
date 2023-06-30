import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  /* vh - Viewport  height - altura da janela de visualização*/
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  /* direção flexível de coluna */
  display: flex;
  flex-direction: column;
`
