import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      {/* Outlet - espaco para ser inserido um conteudo especifico de cada pagina */}
      <Outlet />
    </div>
  )
}
