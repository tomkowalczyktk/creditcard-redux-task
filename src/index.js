import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'
import CreditCard from './features/CreditCard'

import './api/server'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App >
        <CreditCard />
        </App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
