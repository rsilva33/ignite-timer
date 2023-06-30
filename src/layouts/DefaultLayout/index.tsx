import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      {/* Outlet - espaco para ser inserido um conteudo especifico de cada pagina */}
      <Outlet />
    </LayoutContainer>
  )
}
