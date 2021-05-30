import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import AppNav from './components/AppNav'
import Dashboard from './pages/Dashboard'
import StyleGuide from './pages/StyleGuide'
import Transactions from './pages/Transactions'
import Reports from './pages/Reports'
import Accounts from './pages/Accounts'
import Categories from './pages/Categories'
import Settings from './pages/Settings'

export default function Routes() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={ Dashboard } />
        <Route path="/style-guide" component={ StyleGuide } />
        <Route path="/transactions" component={ Transactions } />
        <Route path="/reports" component={ Reports } />
        <Route path="/accounts" component={ Accounts } />
        <Route path="/categories" component={ Categories } />
        <Route path="/settings" component={ Settings } />
      </Switch>
      <AppNav />
    </BrowserRouter>
  )
}
