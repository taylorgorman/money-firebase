import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppNav from './components/AppNav'
import Home from './pages/Home'
import StyleGuide from './pages/StyleGuide'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/style-guide" component={ StyleGuide } />
      </Switch>
      <AppNav />
    </BrowserRouter>
  )
}
