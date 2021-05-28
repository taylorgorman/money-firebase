import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import './index.scss'
import App from './App'
import { FirebaseProvider } from './utilities/FirebaseContext'

const ReactApp = () => (
  <React.StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </React.StrictMode>
)
ReactDOM.render( <ReactApp />, document.getElementById( 'root' ) )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
