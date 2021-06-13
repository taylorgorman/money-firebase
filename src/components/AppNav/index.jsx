import {
  ClipboardData, ListCheck, PieChart, PiggyBank, Speedometer2,
} from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'
import { useFirebase } from '../../utilities/FirebaseContext'

import './styles.scss'

export default function AppNav() {
  const { user } = useFirebase()

  const AppNavLink = ( { to, Icon, text } ) => (
    <NavLink exact to={ to }>
      <span className="inner">
        <Icon />
        <span className="d-none d-md-inline">{ text }</span>
      </span>
    </NavLink>
  )

  if ( user ) {
    return (
      <nav className="app-nav">
        <AppNavLink to="/" text="Dashboard" Icon={ Speedometer2 } />
        <AppNavLink to="/transactions" text="Transactions" Icon={ ListCheck } />
        <AppNavLink to="/budgets" text="Budgets" Icon={ PieChart } />
        <AppNavLink to="/reports" text="Reports" Icon={ ClipboardData } />
        <hr />
        <AppNavLink to="/accounts" text="Accounts" Icon={ PiggyBank } />
      </nav>
    )
  }
  return (
    <></>
  )
}
