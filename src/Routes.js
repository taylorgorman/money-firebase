import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import AppNav from './components/AppNav'
import Home from './pages/Home'
import StyleGuide from './pages/StyleGuide'

export default function Routes() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/style-guide" component={ StyleGuide } />
      </Switch>
      <AppNav />
    </BrowserRouter>
  )
}
