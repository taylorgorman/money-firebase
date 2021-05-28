import Home from './pages/Home'
import StyleGuide from './pages/StyleGuide'
import RetirementCalculator from './components/RetirementCalculator'
import Header from './components/Header'
import Messages from './components/Messages'

const App = () => ( <>

  <Header />
  <main>
    <Home />
    <Messages />
    <RetirementCalculator />
    <StyleGuide />
  </main>

</> )
export default App
