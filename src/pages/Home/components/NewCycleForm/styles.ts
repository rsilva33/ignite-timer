import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  /* quando a tela for menor os campos sao quebrados em varias linhas de acordo */
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  /* input nao herda o fontsize do container */
  /* inherit - herda o fontsize do container ou qualquer outra propriedade dentro do container */
  font-size: inherit;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    /* retirando a borda que fica por volta do componente */
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  /* aumenta ate couber no espaco */
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
