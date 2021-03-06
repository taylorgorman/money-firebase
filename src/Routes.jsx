import { Spinner } from 'react-bootstrap'
import { Switch, Route, Redirect } from 'react-router-dom'

import AppHeader from './components/AppHeader'
import AppNav from './components/AppNav'
import Accounts from './pages/Accounts'
import Budgets from './pages/Budgets'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import SignIn from './pages/SignIn'
import StyleGuide from './pages/StyleGuide'
import Transactions from './pages/Transactions'
import PrivateRoute from './utilities/PrivateRoute'
import { useFirebase } from './utilities/FirebaseContext'
import { useData } from './utilities/DataContext'

export default function Routes() {
  const { user, userLoading } = useFirebase()
  const { settingsLoading } = useData()

  // Show loading while checking for user
  if ( userLoading ) return <div className="center-center"><Spinner animation="border" /></div>

  // Routes
  return (
    <>
      <AppHeader />
      <AppNav />
      <Switch>
        <Route exact path="/" component={ user ? Dashboard : Home } />
        <Route path="/signin" component={ SignIn } />
        <Redirect path="/login" to="/signin" />
        <Redirect path="/access" to="/settings/access" />
        <Redirect path="/categories" to="/settings/categories" />
        <Redirect path="/labels" to="/settings/labels" />
        { ! settingsLoading && (
        <>
          <PrivateRoute path="/transactions" component={ Transactions } />
          <PrivateRoute path="/budgets" component={ Budgets } />
          <PrivateRoute path="/reports" component={ Reports } />
          <PrivateRoute path="/accounts" component={ Accounts } />
          <PrivateRoute path="/profile" component={ Profile } />
          <PrivateRoute path="/settings" component={ Settings } />
          <PrivateRoute path="/style-guide" component={ StyleGuide } />
        </>
        ) }
        <Route component={ NotFound } />
      </Switch>
    </>
  )
}
