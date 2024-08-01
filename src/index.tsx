import './index.css'
import React from 'react'
import ReactDOMClient from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// import store from './services/store';
import App from './app/app'

const container = document.getElementById('root') as HTMLElement
const root = ReactDOMClient.createRoot(container!)

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
)