import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Accounts from './pages/Accounts'
import AppHeader from './components/AppHeader'
import AppNav from './components/AppNav'
import Categories from './pages/Categories'
import Dashboard from './pages/Dashboard'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import SignIn from './pages/SignIn'
import StyleGuide from './pages/StyleGuide'
import Transactions from './pages/Transactions'
import PrivateRoute from './utilities/PrivateRoute'

export default function Routes() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={ Dashboard } />
        <Route path="/signin" component={ SignIn } />
        <PrivateRoute path="/style-guide" component={ StyleGuide } />
        <PrivateRoute path="/transactions" component={ Transactions } />
        <PrivateRoute path="/reports" component={ Reports } />
        <PrivateRoute path="/accounts" component={ Accounts } />
        <PrivateRoute path="/categories" component={ Categories } />
        <PrivateRoute path="/settings" component={ Settings } />
      </Switch>
      <AppNav />
    </BrowserRouter>
  )
}
