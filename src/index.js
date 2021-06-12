import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.scss'
import Routes from './Routes'
import { FirebaseProvider } from './utilities/FirebaseContext'
import { DataProvider } from './utilities/DataContext'
import reportWebVitals from './reportWebVitals'

const ReactApp = () => (
  <BrowserRouter>
    <FirebaseProvider>
      <DataProvider>
        <Routes />
      </DataProvider>
    </FirebaseProvider>
  </BrowserRouter>
)
ReactDOM.render( <ReactApp />, document.getElementById( 'root' ) )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
