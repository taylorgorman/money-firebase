import { NavLink } from 'react-router-dom'

import './styles.scss'

export default function AppNav() {

  return (
    <nav className="app-nav">
      <NavLink exact to="/"><span>Dashboard</span></NavLink>
      <NavLink to="/style-guide"><span>Style Guide</span></NavLink>
    </nav>
  )

}
