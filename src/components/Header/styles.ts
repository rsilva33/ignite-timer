import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    /* Adiciona um expaco entre cada item dentro do container */
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      /* centralizar o icone no tam 48x48 */
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      /* Necessario para os icones ficar fixado */
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      /* Quando tiver com hover nesse botao adicione uma borda no bottom */
      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      /* Quando tiver com o botao clicado */
      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
