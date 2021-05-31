import { Spinner } from 'react-bootstrap'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AppHeader from './components/AppHeader'
import AppNav from './components/AppNav'
import Accounts from './pages/Accounts'
import Categories from './pages/Categories'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import SignIn from './pages/SignIn'
import StyleGuide from './pages/StyleGuide'
import Transactions from './pages/Transactions'
import PrivateRoute from './utilities/PrivateRoute'
import { useFirebase } from './utilities/FirebaseContext'

export default function Routes() {
  const { user, userLoading } = useFirebase()

  // Show loading while checking for user
  if ( userLoading )
    return <div className="center-center"><Spinner animation="border" /></div>
  
  // Routes
  else
    return (
      <BrowserRouter>
        <AppHeader />
        <AppNav />
        <Switch>
          <Route exact path="/" component={ user ? Dashboard : Home } />
          <Route path="/signin" component={ SignIn } />
          <PrivateRoute path="/style-guide" component={ StyleGuide } />
          <PrivateRoute path="/transactions" component={ Transactions } />
          <PrivateRoute path="/reports" component={ Reports } />
          <PrivateRoute path="/accounts" component={ Accounts } />
          <PrivateRoute path="/categories" component={ Categories } />
          <PrivateRoute path="/settings" component={ Settings } />
        </Switch>
      </BrowserRouter>
    )
}
