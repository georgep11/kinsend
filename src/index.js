import {
  Elements
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import store from './redux/store'
import reportWebVitals from './reportWebVitals'
const root = ReactDOM.createRoot(document.getElementById('root'))
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

root.render(
  <Elements stripe={stripePromise} >
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </Elements>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
