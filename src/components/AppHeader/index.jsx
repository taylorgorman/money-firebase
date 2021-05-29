import { NavLink } from 'react-router-dom'
import { PaletteFill, GearFill } from 'react-bootstrap-icons'

import './styles.scss'

export default function AppHeader() {
  return (
    <header className="app-header">
      <h1>Sir Pigglesworth</h1>
      <nav className="app-header-nav">
        <NavLink to="/style-guide">
          <PaletteFill />
          <span className="sr-only">Style Guide</span>
        </NavLink>
        <NavLink to="/settings">
        <GearFill />
          <span className="sr-only">Settings</span>
        </NavLink>
      </nav>
    </header>
  )
}
