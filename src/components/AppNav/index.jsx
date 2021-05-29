import { ClipboardData, ListCheck, PiggyBank, Speedometer2, Tags } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

import './styles.scss'

export default function AppNav() {
  const AppNavLink = ({ to, Icon, text }) => (
    <NavLink exact to={ to }><span className="inner">
      <Icon />
      <span className="d-none d-md-inline">{ text }</span>
    </span></NavLink>
  )
  return (
    <nav className="app-nav">
      <AppNavLink to="/" text="Dashboard" Icon={ Speedometer2 } />
      <AppNavLink to="/transactions" text="Transactions" Icon={ ListCheck } />
      <AppNavLink to="/reports" text="Reports" Icon={ ClipboardData } />
      <hr />
      <AppNavLink to="/accounts" text="Accounts" Icon={ PiggyBank } />
      <AppNavLink to="/categories" text="Categories" Icon={ Tags } />
    </nav>
  )
}
