import { TrilogyProvider } from '@trilogy-ds/react/context/provider/provider'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Router } from './router'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <TrilogyProvider>
      <HashRouter>
        <Router />
      </HashRouter>
    </TrilogyProvider>
  </React.StrictMode>,
)
