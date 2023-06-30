import { Timer, Scroll } from 'phosphor-react'
import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Historic">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
